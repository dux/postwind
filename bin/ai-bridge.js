#!/usr/bin/env node

import http from 'http'
import url from 'url'
import { WebSocketServer } from 'ws'

const PORT = 8999
const clients = new Set()

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname
  const query = parsedUrl.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`PostWind Bridge Server

Usage:
  GET /              - This help message
  GET /client        - Browser client script (include as <script src="http://localhost:8999/client">)
  GET /ask?js=CODE   - Execute JavaScript CODE in connected browsers

Examples:
  http://localhost:8999/ask?js=document.title
  http://localhost:8999/ask?js=window.location.href
  http://localhost:8999/ask?js=document.querySelectorAll('div').length

Connected clients: ${clients.size}
`)
    return
  }

  if (pathname === '/client') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' })
    res.end(`
(function() {
  const ws = new WebSocket('ws://localhost:${PORT}')

  ws.onopen = function() {
    console.log('PostWind Bridge: Connected to server')
  }

  ws.onmessage = function(event) {
    try {
      const data = JSON.parse(event.data)
      if (data.type === 'execute') {
        let result
        try {
          const code = data.code
          if (typeof code === 'function') {
            result = code()
          } else if (code.startsWith('function') || code.includes('=>')) {
            result = eval('(' + code + ')()')
          } else {
            result = eval(code)
          }
          if (result instanceof Promise) {
            result.then(res => {
              ws.send(JSON.stringify({
                type: 'result',
                id: data.id,
                result: res,
                error: null
              }))
            }).catch(err => {
              ws.send(JSON.stringify({
                type: 'result',
                id: data.id,
                result: null,
                error: err.message
              }))
            })
          } else {
            ws.send(JSON.stringify({
              type: 'result',
              id: data.id,
              result: result,
              error: null
            }))
          }
        } catch (err) {
          ws.send(JSON.stringify({
            type: 'result',
            id: data.id,
            result: null,
            error: err.message
          }))
        }
      }
    } catch (err) {
      console.error('PostWind Bridge: Error processing message:', err)
    }
  }

  ws.onclose = function() {
    console.log('PostWind Bridge: Disconnected from server')
  }

  ws.onerror = function(error) {
    console.error('PostWind Bridge: WebSocket error:', error)
  }
})()
`)
    return
  }

  if (pathname === '/ask' && query.js) {
    const jsCode = decodeURIComponent(query.js)
    const requestId = Date.now().toString()

    console.log(`[ASK] ${jsCode}`)

    if (clients.size === 0) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'No clients connected' }))
      return
    }

    let responded = false
    const timeout = setTimeout(() => {
      if (!responded) {
        responded = true
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Request timeout' }))
      }
    }, 5000)

    const resultHandler = (ws) => (message) => {
      try {
        const data = JSON.parse(message)
        if (data.type === 'result' && data.id === requestId && !responded) {
          clearTimeout(timeout)
          responded = true
          ws.off('message', resultHandler(ws))

          res.writeHead(200, { 'Content-Type': 'application/json' })
          if (data.error) {
            res.end(JSON.stringify({ error: data.error }))
          } else {
            res.end(JSON.stringify({ result: data.result }))
          }
        }
      } catch (err) {
        console.error('Error parsing result:', err)
      }
    }

    clients.forEach(ws => {
      ws.on('message', resultHandler(ws))
      ws.send(JSON.stringify({
        type: 'execute',
        id: requestId,
        code: jsCode
      }))
    })

    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not found')
})

const wss = new WebSocketServer({ server })

wss.on('connection', (ws) => {
  clients.add(ws)
  console.log(`Client connected. Total clients: ${clients.size}`)

  ws.on('close', () => {
    clients.delete(ws)
    console.log(`Client disconnected. Total clients: ${clients.size}`)
  })

  ws.on('error', (error) => {
    console.error('WebSocket error:', error)
    clients.delete(ws)
  })
})

server.listen(PORT, () => {
  console.log(`PostWind Bridge Server running on http://localhost:${PORT}`)
  console.log(`Add to your HTML: <script src="http://localhost:${PORT}/client"></script>`)
  console.log(`Test with: http://localhost:${PORT}/ask?js=document.title`)
})
