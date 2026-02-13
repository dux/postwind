#!/bin/bash
set -e

echo "Building..."
bun run build

echo "Testing..."
bun test --timeout 30000 src/

VERSION=$(node -p "require('./package.json').version")

echo "Publishing..."
npm publish

echo "Published postwind@$VERSION"
exit 0
