(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  function __accessProp(key) {
    return this[key];
  }
  var __toCommonJS = (from) => {
    var entry = (__moduleCache ??= new WeakMap).get(from), desc;
    if (entry)
      return entry;
    entry = __defProp({}, "__esModule", { value: true });
    if (from && typeof from === "object" || typeof from === "function") {
      for (var key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(entry, key))
          __defProp(entry, key, {
            get: __accessProp.bind(from, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
    }
    __moduleCache.set(from, entry);
    return entry;
  };
  var __moduleCache;
  var __returnValue = (v) => v;
  function __exportSetter(name, newValue) {
    this[name] = __returnValue.bind(null, newValue);
  }
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: __exportSetter.bind(all, name)
      });
  };

  // src/postwind.js
  var exports_postwind = {};
  __export(exports_postwind, {
    default: () => postwind_default
  });

  // node_modules/tailwindcss/dist/chunk-DCG7AFIE.mjs
  var o = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 none)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 none)", 100: "oklch(97% 0 none)", 200: "oklch(92.2% 0 none)", 300: "oklch(87% 0 none)", 400: "oklch(70.8% 0 none)", 500: "oklch(55.6% 0 none)", 600: "oklch(43.9% 0 none)", 700: "oklch(37.1% 0 none)", 800: "oklch(26.9% 0 none)", 900: "oklch(20.5% 0 none)", 950: "oklch(14.5% 0 none)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, mauve: { 50: "oklch(98.5% 0 none)", 100: "oklch(96% 0.003 325.6)", 200: "oklch(92.2% 0.005 325.62)", 300: "oklch(86.5% 0.012 325.68)", 400: "oklch(71.1% 0.019 323.02)", 500: "oklch(54.2% 0.034 322.5)", 600: "oklch(43.5% 0.029 321.78)", 700: "oklch(36.4% 0.029 323.89)", 800: "oklch(26.3% 0.024 320.12)", 900: "oklch(21.2% 0.019 322.12)", 950: "oklch(14.5% 0.008 326)" }, olive: { 50: "oklch(98.8% 0.003 106.5)", 100: "oklch(96.6% 0.005 106.5)", 200: "oklch(93% 0.007 106.5)", 300: "oklch(88% 0.011 106.6)", 400: "oklch(73.7% 0.021 106.9)", 500: "oklch(58% 0.031 107.3)", 600: "oklch(46.6% 0.025 107.3)", 700: "oklch(39.4% 0.023 107.4)", 800: "oklch(28.6% 0.016 107.4)", 900: "oklch(22.8% 0.013 107.4)", 950: "oklch(15.3% 0.006 107.1)" }, mist: { 50: "oklch(98.7% 0.002 197.1)", 100: "oklch(96.3% 0.002 197.1)", 200: "oklch(92.5% 0.005 214.3)", 300: "oklch(87.2% 0.007 219.6)", 400: "oklch(72.3% 0.014 214.4)", 500: "oklch(56% 0.021 213.5)", 600: "oklch(45% 0.017 213.2)", 700: "oklch(37.8% 0.015 216)", 800: "oklch(27.5% 0.011 216.9)", 900: "oklch(21.8% 0.008 223.9)", 950: "oklch(14.8% 0.004 228.8)" }, taupe: { 50: "oklch(98.6% 0.002 67.8)", 100: "oklch(96% 0.002 17.2)", 200: "oklch(92.2% 0.005 34.3)", 300: "oklch(86.8% 0.007 39.5)", 400: "oklch(71.4% 0.014 41.2)", 500: "oklch(54.7% 0.021 43.1)", 600: "oklch(43.8% 0.017 39.3)", 700: "oklch(36.7% 0.016 35.7)", 800: "oklch(26.8% 0.011 36.5)", 900: "oklch(21.4% 0.009 43.1)", 950: "oklch(14.7% 0.004 49.3)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };

  // node_modules/tailwindcss/dist/chunk-C2OYBFIH.mjs
  var S = new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]);
  var U = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix|--alpha)\(/i;
  function N(e) {
    return e.charCodeAt(0) === 35 || U.test(e) || S.has(e.toLowerCase());
  }
  function oe(e) {
    return S.has(e.toLowerCase());
  }
  var A = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
  function b(e) {
    return e.indexOf("(") !== -1 && A.some((t) => e.includes(`${t}(`));
  }
  function ae(e) {
    if (!A.some((n) => e.includes(n)))
      return e;
    let t = "", r = [], s = null, m = null;
    for (let n = 0;n < e.length; n++) {
      let a = e.charCodeAt(n);
      if (a >= 48 && a <= 57 || s !== null && (a === 37 || a >= 97 && a <= 122 || a >= 65 && a <= 90) ? s = n : (m = s, s = null), a === 40) {
        t += e[n];
        let i = n;
        for (let p = n - 1;p >= 0; p--) {
          let c = e.charCodeAt(p);
          if (c >= 48 && c <= 57)
            i = p;
          else if (c >= 97 && c <= 122)
            i = p;
          else
            break;
        }
        let o = e.slice(i, n);
        if (A.includes(o)) {
          r.unshift(true);
          continue;
        } else if (r[0] && o === "") {
          r.unshift(true);
          continue;
        }
        r.unshift(false);
        continue;
      } else if (a === 41)
        t += e[n], r.shift();
      else if (a === 44 && r[0]) {
        t += ", ";
        continue;
      } else {
        if (a === 32 && r[0] && t.charCodeAt(t.length - 1) === 32)
          continue;
        if ((a === 43 || a === 42 || a === 47 || a === 45) && r[0]) {
          let i = t.trimEnd(), o = i.charCodeAt(i.length - 1), p = i.charCodeAt(i.length - 2), c = e.charCodeAt(n + 1);
          if ((o === 101 || o === 69) && p >= 48 && p <= 57) {
            t += e[n];
            continue;
          } else if (o === 43 || o === 42 || o === 47 || o === 45) {
            t += e[n];
            continue;
          } else if (o === 40 || o === 44) {
            t += e[n];
            continue;
          } else
            e.charCodeAt(n - 1) === 32 ? t += `${e[n]} ` : o >= 48 && o <= 57 || c >= 48 && c <= 57 || o === 41 || c === 40 || c === 43 || c === 42 || c === 47 || c === 45 || m !== null && m === n - 1 ? t += ` ${e[n]} ` : t += e[n];
        } else
          t += e[n];
      }
    }
    return t;
  }
  var E = new Uint8Array(256);
  function d(e, t) {
    let r = 0, s = [], m = 0, n = e.length, a = t.charCodeAt(0);
    for (let i = 0;i < n; i++) {
      let o = e.charCodeAt(i);
      if (r === 0 && o === a) {
        s.push(e.slice(m, i)), m = i + 1;
        continue;
      }
      switch (o) {
        case 92:
          i += 1;
          break;
        case 39:
        case 34:
          for (;++i < n; ) {
            let p = e.charCodeAt(i);
            if (p === 92) {
              i += 1;
              continue;
            }
            if (p === o)
              break;
          }
          break;
        case 40:
          E[r] = 41, r++;
          break;
        case 91:
          E[r] = 93, r++;
          break;
        case 123:
          E[r] = 125, r++;
          break;
        case 93:
        case 125:
        case 41:
          r > 0 && o === E[r - 1] && r--;
          break;
      }
    }
    return s.push(e.slice(m)), s;
  }
  var P = { color: N, length: y, percentage: C, ratio: G, number: v, integer: u, url: R, position: Y, "bg-size": Q, "line-width": T, image: F, "family-name": M, "generic-name": H, "absolute-size": $, "relative-size": B, angle: ee, vector: re };
  function ge(e, t) {
    if (e.startsWith("var("))
      return null;
    for (let r of t)
      if (P[r]?.(e))
        return r;
    return null;
  }
  var z = /^url\(.*\)$/;
  function R(e) {
    return z.test(e);
  }
  function T(e) {
    return d(e, " ").every((t) => y(t) || v(t) || t === "thin" || t === "medium" || t === "thick");
  }
  var I = /^(?:element|image|cross-fade|image-set)\(/;
  var D = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  function F(e) {
    let t = 0;
    for (let r of d(e, ","))
      if (!r.startsWith("var(")) {
        if (R(r)) {
          t += 1;
          continue;
        }
        if (D.test(r)) {
          t += 1;
          continue;
        }
        if (I.test(r)) {
          t += 1;
          continue;
        }
        return false;
      }
    return t > 0;
  }
  function H(e) {
    return e === "serif" || e === "sans-serif" || e === "monospace" || e === "cursive" || e === "fantasy" || e === "system-ui" || e === "ui-serif" || e === "ui-sans-serif" || e === "ui-monospace" || e === "ui-rounded" || e === "math" || e === "emoji" || e === "fangsong";
  }
  function M(e) {
    let t = 0;
    for (let r of d(e, ",")) {
      let s = r.charCodeAt(0);
      if (s >= 48 && s <= 57)
        return false;
      r.startsWith("var(") || (t += 1);
    }
    return t > 0;
  }
  function $(e) {
    return e === "xx-small" || e === "x-small" || e === "small" || e === "medium" || e === "large" || e === "x-large" || e === "xx-large" || e === "xxx-large";
  }
  function B(e) {
    return e === "larger" || e === "smaller";
  }
  var x = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/;
  var W = new RegExp(`^${x.source}$`);
  function v(e) {
    return W.test(e) || b(e);
  }
  var q = new RegExp(`^${x.source}%$`);
  function C(e) {
    return q.test(e) || b(e);
  }
  var V = new RegExp(`^${x.source}\\s*/\\s*${x.source}$`);
  function G(e) {
    return V.test(e) || b(e);
  }
  var Z = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
  var j = new RegExp(`^${x.source}(${Z.join("|")})$`);
  var K = /^(--spacing)\(/i;
  function y(e) {
    return j.test(e) || K.test(e) || b(e);
  }
  function Y(e) {
    let t = 0;
    for (let r of d(e, " ")) {
      if (r === "center" || r === "top" || r === "right" || r === "bottom" || r === "left") {
        t += 1;
        continue;
      }
      if (!r.startsWith("var(")) {
        if (y(r) || C(r)) {
          t += 1;
          continue;
        }
        return false;
      }
    }
    return t > 0;
  }
  function Q(e) {
    let t = 0;
    for (let r of d(e, ",")) {
      if (r === "cover" || r === "contain") {
        t += 1;
        continue;
      }
      let s = d(r, " ");
      if (s.length !== 1 && s.length !== 2)
        return false;
      if (s.every((m) => m === "auto" || y(m) || C(m))) {
        t += 1;
        continue;
      }
    }
    return t > 0;
  }
  var J = ["deg", "rad", "grad", "turn"];
  var X = new RegExp(`^${x.source}(${J.join("|")})$`);
  function ee(e) {
    return X.test(e);
  }
  var te = new RegExp(`^${x.source} +${x.source} +${x.source}$`);
  function re(e) {
    return te.test(e);
  }
  function u(e) {
    let t = Number(e);
    return Number.isInteger(t) && t >= 0 && String(t) === String(e);
  }
  function ue(e) {
    let t = Number(e);
    return Number.isInteger(t) && t > 0 && String(t) === String(e);
  }
  function de(e) {
    return O(e, 0.25);
  }
  function xe(e) {
    return O(e, 0.25);
  }
  function O(e, t) {
    let r = Number(e);
    return r >= 0 && r % t === 0 && String(r) === String(e);
  }
  function h(e) {
    return { __BARE_VALUE__: e };
  }
  var g = h((e) => {
    if (u(e.value))
      return e.value;
  });
  var l = h((e) => {
    if (u(e.value))
      return `${e.value}%`;
  });
  var f = h((e) => {
    if (u(e.value))
      return `${e.value}px`;
  });
  var L = h((e) => {
    if (u(e.value))
      return `${e.value}ms`;
  });
  var w = h((e) => {
    if (u(e.value))
      return `${e.value}deg`;
  });
  var ne = h((e) => {
    if (e.fraction === null)
      return;
    let [t, r] = d(e.fraction, "/");
    if (!(!u(t) || !u(r)))
      return e.fraction;
  });
  var _ = h((e) => {
    if (u(Number(e.value)))
      return `repeat(${e.value}, minmax(0, 1fr))`;
  });
  var ye = { accentColor: ({ theme: e }) => e("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...ne }, backdropBlur: ({ theme: e }) => e("blur"), backdropBrightness: ({ theme: e }) => ({ ...e("brightness"), ...l }), backdropContrast: ({ theme: e }) => ({ ...e("contrast"), ...l }), backdropGrayscale: ({ theme: e }) => ({ ...e("grayscale"), ...l }), backdropHueRotate: ({ theme: e }) => ({ ...e("hueRotate"), ...w }), backdropInvert: ({ theme: e }) => ({ ...e("invert"), ...l }), backdropOpacity: ({ theme: e }) => ({ ...e("opacity"), ...l }), backdropSaturate: ({ theme: e }) => ({ ...e("saturate"), ...l }), backdropSepia: ({ theme: e }) => ({ ...e("sepia"), ...l }), backgroundColor: ({ theme: e }) => e("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e }) => e("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), borderOpacity: ({ theme: e }) => e("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e }) => e("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ...f }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e }) => e("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...l }, caretColor: ({ theme: e }) => e("colors"), colors: () => ({ ...o }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...g }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...l }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e }) => e("borderColor"), divideOpacity: ({ theme: e }) => e("borderOpacity"), divideWidth: ({ theme: e }) => ({ ...e("borderWidth"), ...f }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e }) => e("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...g }, flexShrink: { 0: "0", DEFAULT: "1", ...g }, fontFamily: { sans: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', '"Noto Sans"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e }) => e("spacing"), gradientColorStops: ({ theme: e }) => e("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...l }, grayscale: { 0: "0", DEFAULT: "100%", ...l }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ..._ }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ..._ }, height: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...w }, inset: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...l }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...g }, maxHeight: ({ theme: e }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), maxWidth: ({ theme: e }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e("spacing") }), minHeight: ({ theme: e }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), minWidth: ({ theme: e }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...l }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...g }, outlineColor: ({ theme: e }) => e("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, padding: ({ theme: e }) => e("spacing"), placeholderColor: ({ theme: e }) => e("colors"), placeholderOpacity: ({ theme: e }) => e("opacity"), ringColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), ringOffsetColor: ({ theme: e }) => e("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, ringOpacity: ({ theme: e }) => ({ DEFAULT: "0.5", ...e("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...w }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...l }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...l }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e }) => e("spacing"), scrollPadding: ({ theme: e }) => e("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...l }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...w }, space: ({ theme: e }) => e("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e }) => ({ none: "none", ...e("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...g }, supports: {}, data: {}, textColor: ({ theme: e }) => e("colors"), textDecorationColor: ({ theme: e }) => e("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, textIndent: ({ theme: e }) => e("spacing"), textOpacity: ({ theme: e }) => e("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1000: "1000ms", ...L }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1000: "1000ms", ...L }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), size: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), width: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...g } };

  // node_modules/tailwindcss/dist/chunk-5JIJA4QV.mjs
  function h2(n) {
    if (arguments.length === 0)
      throw new TypeError("`CSS.escape` requires an argument.");
    let e = String(n), i = e.length, r = -1, t, s = "", l = e.charCodeAt(0);
    if (i === 1 && l === 45)
      return "\\" + e;
    for (;++r < i; ) {
      if (t = e.charCodeAt(r), t === 0) {
        s += "�";
        continue;
      }
      if (t >= 1 && t <= 31 || t === 127 || r === 0 && t >= 48 && t <= 57 || r === 1 && t >= 48 && t <= 57 && l === 45) {
        s += "\\" + t.toString(16) + " ";
        continue;
      }
      if (t >= 128 || t === 45 || t === 95 || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122) {
        s += e.charAt(r);
        continue;
      }
      s += "\\" + e.charAt(r);
    }
    return s;
  }
  function a(n) {
    return n.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e) => {
      if (e.length <= 2)
        return e[1];
      let i = Number.parseInt(e.slice(1).trim(), 16);
      return i === 0 || i > 1114111 || i >= 55296 && i <= 57343 ? "�" : String.fromCodePoint(i);
    });
  }
  var c = new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
  function g2(n, e) {
    return (c.get(e) ?? []).some((i) => n === i || n.startsWith(`${i}-`));
  }
  var p = class {
    constructor(e = new Map, i = new Set([])) {
      this.values = e;
      this.keyframes = i;
    }
    values;
    keyframes;
    prefix = null;
    get size() {
      return this.values.size;
    }
    add(e, i, r = 0, t) {
      if (e.endsWith("-*")) {
        if (i !== "initial")
          throw new Error(`Invalid theme value \`${i}\` for namespace \`${e}\``);
        e === "--*" ? this.values.clear() : this.clearNamespace(e.slice(0, -2), 0);
      }
      if (r & 4) {
        let s = this.values.get(e);
        if (s && !(s.options & 4))
          return;
      }
      i === "initial" ? this.values.delete(e) : this.values.set(e, { value: i, options: r, src: t });
    }
    keysInNamespaces(e) {
      let i = [];
      for (let r of e) {
        let t = `${r}-`;
        for (let s of this.values.keys())
          s.startsWith(t) && s.indexOf("--", 2) === -1 && (g2(s, r) || i.push(s.slice(t.length)));
      }
      return i;
    }
    get(e) {
      for (let i of e) {
        let r = this.values.get(i);
        if (r)
          return r.value;
      }
      return null;
    }
    hasDefault(e) {
      return (this.getOptions(e) & 4) === 4;
    }
    getOptions(e) {
      return e = a(this.#i(e)), this.values.get(e)?.options ?? 0;
    }
    entries() {
      return this.prefix ? Array.from(this.values, (e) => (e[0] = this.prefixKey(e[0]), e)) : this.values.entries();
    }
    prefixKey(e) {
      return this.prefix ? `--${this.prefix}-${e.slice(2)}` : e;
    }
    #i(e) {
      return this.prefix ? `--${e.slice(3 + this.prefix.length)}` : e;
    }
    clearNamespace(e, i) {
      let r = c.get(e) ?? [];
      e:
        for (let t of this.values.keys())
          if (t.startsWith(e)) {
            if (i !== 0 && (this.getOptions(t) & i) !== i)
              continue;
            for (let s of r)
              if (t.startsWith(s))
                continue e;
            this.values.delete(t);
          }
    }
    #e(e, i) {
      for (let r of i) {
        let t = e !== null ? `${r}-${e}` : r;
        if (!this.values.has(t))
          if (e !== null && e.includes(".")) {
            if (t = `${r}-${e.replaceAll(".", "_")}`, !this.values.has(t))
              continue;
          } else
            continue;
        if (!g2(t, r))
          return t;
      }
      return null;
    }
    #t(e) {
      let i = this.values.get(e);
      if (!i)
        return null;
      let r = null;
      return i.options & 2 && (r = i.value), `var(${h2(this.prefixKey(e))}${r ? `, ${r}` : ""})`;
    }
    markUsedVariable(e) {
      let i = a(this.#i(e)), r = this.values.get(i);
      if (!r)
        return false;
      let t = r.options & 16;
      return r.options |= 16, !t;
    }
    resolve(e, i, r = 0) {
      let t = this.#e(e, i);
      if (!t)
        return null;
      let s = this.values.get(t);
      return (r | s.options) & 1 ? s.value : this.#t(t);
    }
    resolveValue(e, i) {
      let r = this.#e(e, i);
      return r ? this.values.get(r).value : null;
    }
    resolveWith(e, i, r = []) {
      let t = this.#e(e, i);
      if (!t)
        return null;
      let s = {};
      for (let u of r) {
        let f = `${t}${u}`, o = this.values.get(f);
        o && (o.options & 1 ? s[u] = o.value : s[u] = this.#t(f));
      }
      let l = this.values.get(t);
      return l.options & 1 ? [l.value, s] : [this.#t(t), s];
    }
    namespace(e) {
      let i = new Map, r = `${e}-`;
      for (let [t, s] of this.values)
        t === e ? i.set(null, s.value) : t.startsWith(`${r}-`) ? i.set(t.slice(e.length), s.value) : t.startsWith(r) && i.set(t.slice(r.length), s.value);
      return i;
    }
    addKeyframes(e) {
      this.keyframes.add(e);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  };

  // node_modules/tailwindcss/dist/lib.mjs
  var yr = "4.3.3";
  function mn(e) {
    return { kind: "combinator", value: e };
  }
  function It(e) {
    return { kind: "complex", nodes: e };
  }
  function xr(e) {
    return { kind: "compound", nodes: e };
  }
  function gn(e, i) {
    return { kind: "function", value: e, nodes: i };
  }
  function hn(e) {
    return { kind: "list", nodes: e };
  }
  function be(e) {
    return { kind: "selector", value: e };
  }
  function Ar(e) {
    return { kind: "value", value: e };
  }
  function qe(e) {
    return e.kind === "selector" && e.value.charCodeAt(0) === jt;
  }
  function ut(e) {
    if (e.kind !== "selector")
      return false;
    switch (e.value.charCodeAt(0)) {
      case jt:
      case Or:
      case Rr:
      case Pr:
      case Lt:
      case zt:
        return false;
      default:
        return true;
    }
  }
  function oe2(e, i = false) {
    let r = "";
    for (let t of e)
      switch (t.kind) {
        case "selector":
        case "value": {
          r += t.value;
          break;
        }
        case "combinator": {
          i || t.value === " " ? r += t.value : r += ` ${t.value} `;
          break;
        }
        case "function": {
          r += `${t.value}(${oe2(t.nodes, i)})`;
          break;
        }
        case "complex":
        case "compound": {
          r += oe2(t.nodes, i);
          break;
        }
        case "list": {
          r += t.nodes.map((n) => oe2([n], i)).join(i ? "," : ", ");
          break;
        }
      }
    return r;
  }
  var Cr = 92;
  var vn = 93;
  var Sr = 41;
  var Lt = 58;
  var Vr = 44;
  var wn = 34;
  var Rr = 46;
  var $r = 62;
  var Dt = 10;
  var Pr = 35;
  var zt = 91;
  var Tr = 40;
  var Nr = 43;
  var kn = 39;
  var Kt = 32;
  var Ut = 9;
  var Er = 126;
  var Or = 38;
  var jt = 42;
  function fe(e) {
    e = e.replaceAll(`\r
`, `
`);
    let i = [], r = i, t = false, n = [], s = null, l = "", d;
    function f(p = r) {
      return p.length === 1 ? p[0] : t ? It(p) : xr(p);
    }
    function c(p) {
      let m = r[r.length - 1];
      m?.kind === "compound" ? m.nodes.push(p) : m && m.kind !== "list" && m.kind !== "combinator" ? r[r.length - 1] = xr([m, p]) : r.push(p);
    }
    for (let p = 0;p < e.length; p++) {
      let m = e.charCodeAt(p);
      switch (m) {
        case Vr: {
          for (l.length > 0 && (c(be(l)), l = "");p + 1 < e.length && (d = e.charCodeAt(p + 1), !(d !== Dt && d !== Kt && d !== Ut)); p++)
            ;
          if (s)
            s.nodes.push(f()), r = [], t = false;
          else {
            let u = r.splice(0), v = f(u), h = hn([v]);
            r.push(h), s = h, r = [], t = false;
          }
          break;
        }
        case $r:
        case Dt:
        case Kt:
        case Nr:
        case Ut:
        case Er: {
          l.length > 0 && (c(be(l)), l = "");
          let u = p, v = p + 1;
          for (;v < e.length && (d = e.charCodeAt(v), !(d !== $r && d !== Dt && d !== Kt && d !== Nr && d !== Ut && d !== Er)); v++)
            ;
          p = v - 1;
          let h = e.slice(u, v).trim();
          if (h === "" && (r.length === 0 || v >= e.length || e.charCodeAt(v) === Vr))
            break;
          r.push(mn(h === "" ? " " : h)), t = true;
          break;
        }
        case Tr: {
          let u = gn(l, []);
          if (l = "", u.value !== ":not" && u.value !== ":where" && u.value !== ":has" && u.value !== ":is") {
            let v = p + 1, h = 0;
            for (let S = p + 1;S < e.length; S++) {
              if (d = e.charCodeAt(S), d === Tr) {
                h++;
                continue;
              }
              if (d === Sr) {
                if (h === 0) {
                  p = S;
                  break;
                }
                h--;
              }
            }
            let k = p, y = e.slice(v, k);
            if (u.value === ":nth-child" || u.value === ":nth-last-child") {
              let S = y.indexOf("of ");
              if (S !== -1) {
                u.nodes.push(Ar(y.slice(0, S + 3)), ...fe(y.slice(S + 3))), l = "", p = k, c(u);
                break;
              }
            }
            u.nodes.push(Ar(y)), l = "", p = k, c(u);
            break;
          }
          c(u), n.push({ target: r, currentList: s, containsCombinator: t }), r = u.nodes, t = false, s = null;
          break;
        }
        case Sr: {
          l.length > 0 && (c(be(l)), l = ""), s ? s.nodes.push(f()) : t && r.splice(0, r.length, It(r.splice(0)));
          let u = n.pop();
          r = u?.target ?? i, s = u?.currentList ?? null, t = u?.containsCombinator ?? false;
          break;
        }
        case Rr:
        case Lt:
        case Pr: {
          if (m === Lt && l === ":") {
            l += e[p];
            break;
          }
          l.length > 0 && c(be(l)), l = e[p];
          break;
        }
        case zt: {
          l.length > 0 && (c(be(l)), l = "");
          let u = p, v = 0;
          for (let h = p + 1;h < e.length; h++) {
            if (d = e.charCodeAt(h), d === zt) {
              v++;
              continue;
            }
            if (d === vn) {
              if (v === 0) {
                p = h;
                break;
              }
              v--;
            }
          }
          c(be(e.slice(u, p + 1)));
          break;
        }
        case kn:
        case wn: {
          let u = p;
          for (let v = p + 1;v < e.length; v++)
            if (d = e.charCodeAt(v), d === Cr)
              v += 1;
            else if (d === m) {
              p = v;
              break;
            }
          l += e.slice(u, p + 1);
          break;
        }
        case Or:
        case jt: {
          l.length > 0 && (c(be(l)), l = ""), c(be(e[p]));
          break;
        }
        case Cr: {
          l += e[p] + e[p + 1], p += 1;
          break;
        }
        default:
          l += e[p];
      }
    }
    return l.length > 0 && c(be(l)), s ? s.nodes.push(f()) : t && r.splice(0, r.length, It(r.splice(0))), i;
  }
  function ft(e) {
    let i = [0];
    for (let n = 0;n < e.length; n++)
      e.charCodeAt(n) === 10 && i.push(n + 1);
    function r(n) {
      let s = 0, l = i.length;
      for (;l > 0; ) {
        let f = (l | 0) >> 1, c = s + f;
        i[c] <= n ? (s = c + 1, l = l - f - 1) : l = f;
      }
      s -= 1;
      let d = n - i[s];
      return { line: s + 1, column: d };
    }
    function t({ line: n, column: s }) {
      n -= 1, n = Math.min(Math.max(n, 0), i.length - 1);
      let l = i[n], d = i[n + 1] ?? l;
      return Math.min(Math.max(l + s, 0), d);
    }
    return { find: r, findOffset: t };
  }
  var He = 92;
  var ct = 47;
  var pt = 42;
  var _r = 34;
  var Ir = 39;
  var bn = 58;
  var dt = 59;
  var me = 10;
  var mt = 13;
  var Ze = 32;
  var Je = 9;
  var Dr = 123;
  var Ft = 125;
  var Yt = 40;
  var Kr = 41;
  var yn = 91;
  var xn = 93;
  var Ur = 45;
  var Wt = 64;
  var An = 33;
  var ge2 = class e extends Error {
    loc;
    constructor(i, r) {
      if (r) {
        let t = r[0], n = ft(t.code).find(r[1]);
        i = `${t.file}:${n.line}:${n.column + 1}: ${i}`;
      }
      super(i), this.name = "CssSyntaxError", this.loc = r, Error.captureStackTrace && Error.captureStackTrace(this, e);
    }
  };
  function Te(e, i) {
    let r = i?.from ? { file: i.from, code: e } : null;
    e[0] === "\uFEFF" && (e = " " + e.slice(1));
    let t = [], n = [], s = [], l = null, d = null, f = "", c = "", p = 0, m;
    for (let u = 0;u < e.length; u++) {
      let v = e.charCodeAt(u);
      if (!(v === mt && (m = e.charCodeAt(u + 1), m === me)))
        if (v === He)
          f === "" && (p = u), f += e.slice(u, u + 2), u += 1;
        else if (v === ct && e.charCodeAt(u + 1) === pt) {
          let h = u;
          for (let y = u + 2;y < e.length; y++)
            if (m = e.charCodeAt(y), m === He)
              y += 1;
            else if (m === pt && e.charCodeAt(y + 1) === ct) {
              u = y + 1;
              break;
            }
          let k = e.slice(h, u + 1);
          if (k.charCodeAt(2) === An) {
            let y = gt(k.slice(2, -2));
            n.push(y), r && (y.src = [r, h, u + 1], y.dst = [r, h, u + 1]);
          }
        } else if (v === Ir || v === _r) {
          let h = Lr(e, u, v, r);
          f += e.slice(u, h + 1), u = h;
        } else {
          if ((v === Ze || v === me || v === Je) && (m = e.charCodeAt(u + 1)) && (m === Ze || m === me || m === Je || m === mt && (m = e.charCodeAt(u + 2)) && m == me))
            continue;
          if (v === me) {
            if (f.length === 0)
              continue;
            m = f.charCodeAt(f.length - 1), m !== Ze && m !== me && m !== Je && (f += " ");
          } else if (v === Ur && e.charCodeAt(u + 1) === Ur && f.length === 0) {
            let h = "", k = u, y = -1;
            for (let x = u + 2;x < e.length; x++)
              if (m = e.charCodeAt(x), m === He)
                x += 1;
              else if (m === Ir || m === _r)
                x = Lr(e, x, m, r);
              else if (m === ct && e.charCodeAt(x + 1) === pt) {
                for (let b = x + 2;b < e.length; b++)
                  if (m = e.charCodeAt(b), m === He)
                    b += 1;
                  else if (m === pt && e.charCodeAt(b + 1) === ct) {
                    x = b + 1;
                    break;
                  }
              } else if (y === -1 && m === bn)
                y = f.length + x - k;
              else if (m === dt && h.length === 0) {
                f += e.slice(k, x), u = x;
                break;
              } else if (m === Yt)
                h += ")";
              else if (m === yn)
                h += "]";
              else if (m === Dr)
                h += "}";
              else if ((m === Ft || e.length - 1 === x) && h.length === 0) {
                u = x - 1, f += e.slice(k, x);
                break;
              } else
                (m === Kr || m === xn || m === Ft) && h.length > 0 && e[x] === h[h.length - 1] && (h = h.slice(0, -1));
            let S = Bt(f, y);
            if (!S)
              throw new ge2("Invalid custom property, expected a value", r ? [r, k, u] : null);
            r && (S.src = [r, k, u], S.dst = [r, k, u]), l ? l.nodes.push(S) : t.push(S), f = "";
          } else if (v === dt && f.charCodeAt(0) === Wt)
            d = Qe(f), r && (d.src = [r, p, u], d.dst = [r, p, u]), l ? l.nodes.push(d) : t.push(d), f = "", d = null;
          else if (v === dt && c[c.length - 1] !== ")") {
            let h = Bt(f);
            if (!h) {
              if (f.length === 0)
                continue;
              throw new ge2(`Invalid declaration: \`${f.trim()}\``, r ? [r, p, u] : null);
            }
            r && (h.src = [r, p, u], h.dst = [r, p, u]), l ? l.nodes.push(h) : t.push(h), f = "";
          } else if (v === Dr && c[c.length - 1] !== ")")
            c += "}", d = Z2(f.trim()), r && (d.src = [r, p, u], d.dst = [r, p, u]), l && l.nodes.push(d), s.push(l), l = d, f = "", d = null;
          else if (v === Ft && c[c.length - 1] !== ")") {
            if (c === "")
              throw new ge2("Missing opening {", r ? [r, u, u] : null);
            if (c = c.slice(0, -1), f.length > 0)
              if (f.charCodeAt(0) === Wt)
                d = Qe(f), r && (d.src = [r, p, u], d.dst = [r, p, u]), l ? l.nodes.push(d) : t.push(d), f = "", d = null;
              else {
                let k = f.indexOf(":");
                if (l) {
                  let y = Bt(f, k);
                  if (!y)
                    throw new ge2(`Invalid declaration: \`${f.trim()}\``, r ? [r, p, u] : null);
                  r && (y.src = [r, p, u], y.dst = [r, p, u]), l.nodes.push(y);
                }
              }
            let h = s.pop() ?? null;
            h === null && l && t.push(l), l = h, f = "", d = null;
          } else if (v === Yt)
            c += ")", f += "(";
          else if (v === Kr) {
            if (c[c.length - 1] !== ")")
              throw new ge2("Missing opening (", r ? [r, u, u] : null);
            c = c.slice(0, -1), f += ")";
          } else {
            if (f.length === 0 && (v === Ze || v === me || v === Je))
              continue;
            f === "" && (p = u), f += String.fromCharCode(v);
          }
        }
    }
    if (f.charCodeAt(0) === Wt) {
      let u = Qe(f);
      r && (u.src = [r, p, e.length], u.dst = [r, p, e.length]), t.push(u);
    }
    if (c.length > 0 && l) {
      if (l.kind === "rule")
        throw new ge2(`Missing closing } at ${l.selector}`, l.src ? [l.src[0], l.src[1], l.src[1]] : null);
      if (l.kind === "at-rule")
        throw new ge2(`Missing closing } at ${l.name} ${l.params}`, l.src ? [l.src[0], l.src[1], l.src[1]] : null);
    }
    return n.length > 0 ? n.concat(t) : t;
  }
  function Qe(e, i = []) {
    let r = e, t = "";
    for (let n = 5;n < e.length; n++) {
      let s = e.charCodeAt(n);
      if (s === Ze || s === Je || s === Yt) {
        r = e.slice(0, n), t = e.slice(n);
        break;
      }
    }
    return B2(r.trim(), t.trim(), i);
  }
  function Bt(e, i = e.indexOf(":")) {
    if (i === -1)
      return null;
    let r = e.indexOf("!important", i + 1);
    return a2(e.slice(0, i).trim(), e.slice(i + 1, r === -1 ? e.length : r).trim(), r !== -1);
  }
  function Lr(e, i, r, t = null) {
    let n;
    for (let s = i + 1;s < e.length; s++)
      if (n = e.charCodeAt(s), n === He)
        s += 1;
      else {
        if (n === r)
          return s;
        if (n === dt && (e.charCodeAt(s + 1) === me || e.charCodeAt(s + 1) === mt && e.charCodeAt(s + 2) === me))
          throw new ge2(`Unterminated string: ${e.slice(i, s + 1) + String.fromCharCode(r)}`, t ? [t, i, s + 1] : null);
        if (n === me || n === mt && e.charCodeAt(s + 1) === me)
          throw new ge2(`Unterminated string: ${e.slice(i, s) + String.fromCharCode(r)}`, t ? [t, i, s + 1] : null);
      }
    return i;
  }
  var U2 = class extends Map {
    constructor(r) {
      super();
      this.factory = r;
    }
    factory;
    get(r) {
      let t = super.get(r);
      return t === undefined && (t = this.factory(r, this), this.set(r, t)), t;
    }
  };
  function ne2(e) {
    return { kind: "word", value: e };
  }
  function Cn(e, i) {
    return { kind: "function", value: e, nodes: i };
  }
  function Sn(e) {
    return { kind: "separator", value: e };
  }
  function F2(e) {
    let i = "";
    for (let r of e)
      switch (r.kind) {
        case "word":
        case "separator": {
          i += r.value;
          break;
        }
        case "function":
          i += r.value + "(" + F2(r.nodes) + ")";
      }
    return i;
  }
  var zr = 92;
  var Vn = 41;
  var jr = 58;
  var Mr = 44;
  var $n = 34;
  var Fr = 61;
  var Wr = 62;
  var Br = 60;
  var Yr = 10;
  var Tn = 40;
  var Nn = 39;
  var En = 47;
  var Gr = 32;
  var qr = 9;
  function M2(e) {
    e = e.replaceAll(`\r
`, `
`);
    let i = [], r = [], t = null, n = "", s;
    for (let l = 0;l < e.length; l++) {
      let d = e.charCodeAt(l);
      switch (d) {
        case zr: {
          n += e[l] + e[l + 1], l++;
          break;
        }
        case En: {
          if (n.length > 0) {
            let c = ne2(n);
            t ? t.nodes.push(c) : i.push(c), n = "";
          }
          let f = ne2(e[l]);
          t ? t.nodes.push(f) : i.push(f);
          break;
        }
        case jr:
        case Mr:
        case Fr:
        case Wr:
        case Br:
        case Yr:
        case Gr:
        case qr: {
          if (n.length > 0) {
            let m = ne2(n);
            t ? t.nodes.push(m) : i.push(m), n = "";
          }
          let f = l, c = l + 1;
          for (;c < e.length && (s = e.charCodeAt(c), !(s !== jr && s !== Mr && s !== Fr && s !== Wr && s !== Br && s !== Yr && s !== Gr && s !== qr)); c++)
            ;
          l = c - 1;
          let p = Sn(e.slice(f, c));
          t ? t.nodes.push(p) : i.push(p);
          break;
        }
        case Nn:
        case $n: {
          let f = l;
          for (let c = l + 1;c < e.length; c++)
            if (s = e.charCodeAt(c), s === zr)
              c += 1;
            else if (s === d) {
              l = c;
              break;
            }
          n += e.slice(f, l + 1);
          break;
        }
        case Tn: {
          let f = Cn(n, []);
          n = "", t ? t.nodes.push(f) : i.push(f), r.push(f), t = f;
          break;
        }
        case Vn: {
          let f = r.pop();
          if (n.length > 0) {
            let c = ne2(n);
            f?.nodes.push(c), n = "";
          }
          r.length > 0 ? t = r[r.length - 1] : t = null;
          break;
        }
        default:
          n += String.fromCharCode(d);
      }
    }
    return n.length > 0 && i.push(ne2(n)), i;
  }
  var qt = ((l) => (l[l.Continue = 0] = "Continue", l[l.Skip = 1] = "Skip", l[l.Stop = 2] = "Stop", l[l.Replace = 3] = "Replace", l[l.ReplaceSkip = 4] = "ReplaceSkip", l[l.ReplaceStop = 5] = "ReplaceStop", l))(qt || {});
  var V2 = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e) => ({ kind: 3, nodes: Array.isArray(e) ? e : [e] }), ReplaceSkip: (e) => ({ kind: 4, nodes: Array.isArray(e) ? e : [e] }), ReplaceStop: (e) => ({ kind: 5, nodes: Array.isArray(e) ? e : [e] }) };
  function P2(e, i) {
    typeof i == "function" ? Hr(e, i) : Hr(e, i.enter, i.exit);
  }
  function Hr(e, i = () => V2.Continue, r = () => V2.Continue) {
    let t = { value: [e, 0, null], prev: null }, n = { parent: null, depth: 0, index: 0, siblings: e, path() {
      let s = [], l = t;
      for (;l; ) {
        let d = l.value[2];
        d && s.push(d), l = l.prev;
      }
      return s.reverse(), s;
    } };
    for (;t !== null; ) {
      let s = t.value, l = s[0], d = s[1], f = s[2];
      if (d >= l.length) {
        t = t.prev, n.depth -= 1;
        continue;
      }
      if (n.parent = f, n.siblings = l, d >= 0) {
        n.index = d;
        let u = l[d], v = i(u, n) ?? V2.Continue;
        switch (v.kind) {
          case 0: {
            u.nodes && u.nodes.length > 0 && (n.depth += 1, t = { value: [u.nodes, 0, u], prev: t }), s[1] = ~d;
            continue;
          }
          case 2:
            return;
          case 1: {
            s[1] = ~d;
            continue;
          }
          case 3: {
            l.splice(d, 1, ...v.nodes);
            continue;
          }
          case 5: {
            l.splice(d, 1, ...v.nodes);
            return;
          }
          case 4: {
            l.splice(d, 1, ...v.nodes), s[1] += v.nodes.length;
            continue;
          }
          default:
            throw new Error(`Invalid \`WalkAction.${qt[v.kind] ?? `Unknown(${v.kind})`}\` in enter.`);
        }
      }
      let c = ~d;
      n.index = c;
      let p = l[c], m = r(p, n) ?? V2.Continue;
      switch (m.kind) {
        case 0:
          s[1] = c + 1;
          continue;
        case 2:
          return;
        case 3: {
          l.splice(c, 1, ...m.nodes), s[1] = c + m.nodes.length;
          continue;
        }
        case 5: {
          l.splice(c, 1, ...m.nodes);
          return;
        }
        case 4: {
          l.splice(c, 1, ...m.nodes), s[1] = c + m.nodes.length;
          continue;
        }
        default:
          throw new Error(`Invalid \`WalkAction.${qt[m.kind] ?? `Unknown(${m.kind})`}\` in exit.`);
      }
    }
  }
  var Rn = new U2((e) => {
    let i = [];
    return P2(M2(e), (r) => {
      if (!(r.kind !== "function" || r.value !== "var"))
        return P2(r.nodes, (t) => {
          t.kind !== "word" || t.value[0] !== "-" || t.value[1] !== "-" || i.push(t.value);
        }), V2.Skip;
    }), i;
  });
  function ht(e) {
    return Rn.get(e);
  }
  var Pn = 64;
  var On = 124;
  function H2(e, i = []) {
    return { kind: "rule", selector: e, nodes: i };
  }
  function B2(e, i = "", r = []) {
    return { kind: "at-rule", name: e, params: i, nodes: r };
  }
  function Z2(e, i = []) {
    return e.charCodeAt(0) === Pn ? Qe(e, i) : H2(e, i);
  }
  function a2(e, i, r = false) {
    return { kind: "declaration", property: e, value: i, important: r };
  }
  function gt(e) {
    return { kind: "comment", value: e };
  }
  function ve(e, i) {
    return { kind: "context", context: e, nodes: i };
  }
  function Y2(e) {
    return { kind: "at-root", nodes: e };
  }
  function re2(e) {
    switch (e.kind) {
      case "rule":
        return { kind: e.kind, selector: e.selector, nodes: e.nodes.map(re2), src: e.src, dst: e.dst };
      case "at-rule":
        return { kind: e.kind, name: e.name, params: e.params, nodes: e.nodes.map(re2), src: e.src, dst: e.dst };
      case "at-root":
        return { kind: e.kind, nodes: e.nodes.map(re2), src: e.src, dst: e.dst };
      case "context":
        return { kind: e.kind, context: { ...e.context }, nodes: e.nodes.map(re2), src: e.src, dst: e.dst };
      case "declaration":
        return { kind: e.kind, property: e.property, value: e.value, important: e.important, src: e.src, dst: e.dst };
      case "comment":
        return { kind: e.kind, value: e.value, src: e.src, dst: e.dst };
      default:
        throw new Error(`Unknown node kind: ${e.kind}`);
    }
  }
  function et(e) {
    return { depth: e.depth, index: e.index, siblings: e.siblings, get context() {
      let i = {};
      for (let r of e.path())
        r.kind === "context" && Object.assign(i, r.context);
      return Object.defineProperty(this, "context", { value: i }), i;
    }, get parent() {
      let i = this.path().pop() ?? null;
      return Object.defineProperty(this, "parent", { value: i }), i;
    }, path() {
      return e.path().filter((i) => i.kind !== "context");
    } };
  }
  function Ne(e, i, r = 3) {
    let t = [], n = new Set, s = new U2(() => new Set), l = new U2(() => new Set), d = new Set, f = new Set, c = [], p = [], m = new U2(() => new Set);
    function u(h, k, y = {}, S = 0) {
      if (h.kind === "declaration") {
        if (h.property === "--tw-sort" || h.value === undefined || h.value === null)
          return;
        if (y.theme && h.property[0] === "-" && h.property[1] === "-") {
          if (h.value === "initial") {
            h.value = undefined;
            return;
          }
          y.keyframes || s.get(k).add(h);
        }
        if (h.value.includes("var("))
          if (y.theme && h.property[0] === "-" && h.property[1] === "-")
            for (let x of ht(h.value))
              m.get(x).add(h.property);
          else
            i.trackUsedVariables(h.value);
        if (h.property === "animation")
          for (let x of Zr(h.value))
            f.add(x);
        r & 2 && !y.supportsColorMix && !y.keyframes && h.value.includes("color-mix(") && l.get(k).add(h), k.push(h);
      } else if (h.kind === "rule") {
        let x = [];
        for (let b of h.nodes)
          u(b, x, y, S + 1);
        x.length > 0 && k.push({ ...h, nodes: x });
      } else if (h.kind === "at-rule" && h.name === "@property" && S === 0) {
        if (n.has(h.params))
          return;
        if (r & 1) {
          let b = h.params, I = null, D = false;
          for (let L of h.nodes)
            L.kind === "declaration" && (L.property === "initial-value" ? I = L.value : L.property === "inherits" && (D = L.value === "true"));
          let O = a2(b, I ?? "initial");
          O.src = h.src, D ? c.push(O) : p.push(O);
        }
        n.add(h.params);
        let x = { ...h, nodes: [] };
        for (let b of h.nodes)
          u(b, x.nodes, y, S + 1);
        k.push(x);
      } else if (h.kind === "at-rule") {
        h.name === "@keyframes" ? y = { ...y, keyframes: true } : h.name === "@supports" && h.params.includes("color-mix(") && (y = { ...y, supportsColorMix: true });
        let x = { ...h, nodes: [] };
        for (let b of h.nodes)
          u(b, x.nodes, y, S + 1);
        h.name === "@keyframes" && y.theme && d.add(x), (x.nodes.length > 0 || x.name === "@layer" || x.name === "@charset" || x.name === "@custom-media" || x.name === "@namespace" || x.name === "@import" || x.name === "@apply") && k.push(x);
      } else if (h.kind === "at-root")
        for (let x of h.nodes) {
          let b = [];
          u(x, b, y, 0);
          for (let I of b)
            t.push(I);
        }
      else if (h.kind === "context") {
        if (h.context.reference)
          return;
        for (let x of h.nodes)
          u(x, k, { ...y, ...h.context }, S);
      } else
        h.kind === "comment" && k.push(h);
    }
    let v = [];
    for (let h of e)
      u(h, v, {}, 0);
    e:
      for (let [h, k] of s)
        for (let y of k) {
          if (Jr(y.property, i.theme, m)) {
            if (y.property.startsWith(i.theme.prefixKey("--animate-")))
              for (let b of Zr(y.value))
                f.add(b);
            continue;
          }
          let x = h.indexOf(y);
          if (h.splice(x, 1), h.length === 0) {
            let b = Kn(v, (I) => I.kind === "rule" && I.nodes === h);
            if (!b || b.length === 0)
              continue e;
            b.unshift({ kind: "at-root", nodes: v });
            do {
              let I = b.pop();
              if (!I)
                break;
              let D = b[b.length - 1];
              if (!D || D.kind !== "at-root" && D.kind !== "at-rule")
                break;
              let O = D.nodes.indexOf(I);
              if (O === -1)
                break;
              D.nodes.splice(O, 1);
            } while (true);
            continue e;
          }
        }
    for (let h of d)
      if (!f.has(h.params)) {
        let k = t.indexOf(h);
        t.splice(k, 1);
      }
    if (v = v.concat(t), r & 2)
      for (let [h, k] of l)
        for (let y of k) {
          let S = h.indexOf(y);
          if (S === -1 || y.value == null)
            continue;
          let x = M2(y.value), b = false;
          if (P2(x, (O) => {
            if (O.kind !== "function" || O.value !== "color-mix")
              return;
            let L = false, E = false;
            if (P2(O.nodes, (j) => {
              if (j.kind == "word" && j.value.toLowerCase() === "currentcolor") {
                E = true, b = true;
                return;
              }
              let q = j, G = null, ee = new Set;
              do {
                if (q.kind !== "function" || q.value !== "var")
                  return;
                let ie = q.nodes[0];
                if (!ie || ie.kind !== "word")
                  return;
                let o = ie.value;
                if (ee.has(o)) {
                  L = true;
                  return;
                }
                if (ee.add(o), b = true, G = i.theme.resolveValue(null, [ie.value]), !G) {
                  L = true;
                  return;
                }
                if (G.toLowerCase() === "currentcolor") {
                  E = true;
                  return;
                }
                G.startsWith("var(") ? q = M2(G)[0] : q = null;
              } while (q);
              return V2.Replace({ kind: "word", value: G });
            }), L || E) {
              let j = O.nodes.findIndex((G) => G.kind === "separator" && G.value.trim().includes(","));
              if (j === -1)
                return;
              let q = O.nodes.length > j ? O.nodes[j + 1] : null;
              return q ? V2.Replace(q) : undefined;
            } else if (b) {
              let j = O.nodes[2];
              j.kind === "word" && (j.value === "oklab" || j.value === "oklch" || j.value === "lab" || j.value === "lch") && (j.value = "srgb");
            }
          }), !b)
            continue;
          let I = { ...y, value: F2(x) }, D = Z2("@supports (color: color-mix(in lab, red, red))", [y]);
          D.src = y.src, h.splice(S, 1, I, D);
        }
    if (r & 1) {
      let h = [];
      if (c.length > 0) {
        let k = Z2(":root, :host", c);
        k.src = c[0].src, h.push(k);
      }
      if (p.length > 0) {
        let k = Z2("*, ::before, ::after, ::backdrop", p);
        k.src = p[0].src, h.push(k);
      }
      if (h.length > 0) {
        let k = v.findIndex((x) => !(x.kind === "comment" || x.kind === "at-rule" && (x.name === "@charset" || x.name === "@import"))), y = B2("@layer", "properties", []);
        y.src = h[0].src, v.splice(k < 0 ? v.length : k, 0, y);
        let S = Z2("@layer properties", [B2("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", h)]);
        S.src = h[0].src, S.nodes[0].src = h[0].src, v.push(S);
      }
    }
    return _n(v);
  }
  function _n(e) {
    let i = new U2(fe), r = [], t = [], n = null, s = new Set, l = new Set, d2 = [], f = new Set;
    P2(e, { enter(p) {
      switch (p.kind) {
        case "rule": {
          if (n = null, r.length === 0)
            if (p.selector.includes("&")) {
              let m = fe(p.selector), u = false;
              P2(m, (v) => {
                v.kind === "selector" && v.value === "&" && (u = true, v.value = ":scope");
              }), u ? r.push([oe2(m), p.src, p.dst]) : r.push([p.selector, p.src, p.dst]);
            } else
              r.push([p.selector, p.src, p.dst]);
          else {
            if (p.selector === "&") {
              f.add(p);
              return;
            }
            let m = r[r.length - 1][0], u = d(p.selector, ",").map((v) => {
              if (!v.includes("&")) {
                let h = i.get(m);
                return `${h.length === 1 && h[0].kind === "list" ? `:is(${m})` : m} ${v}`;
              }
              {
                let h = fe(v), k = false;
                if (P2(h, { enter(S, x) {
                  if (S.kind !== "selector" || S.value !== "&" || (k = true, S.value = `:is(${m})`, x.parent === null))
                    return;
                  let b = i.get(m);
                  if (!(b.length === 1 && b[0].kind === "list")) {
                    if (x.parent.kind === "complex")
                      if (x.index === 0) {
                        S.value = m;
                        return;
                      } else if (x.index === x.siblings.length - 1) {
                        if (b[0].kind === "complex")
                          return;
                        S.value = m;
                        return;
                      } else {
                        if (b[0].kind === "complex")
                          return;
                        S.value = m;
                        return;
                      }
                    else if (x.parent.kind === "compound") {
                      if (b[0].kind === "complex") {
                        let I = x.path(), D = I[I.length - 2];
                        if (D && D.kind === "complex" && D.nodes[0] !== x.parent)
                          return;
                      }
                      if (x.siblings.slice(x.index + 1).some((I) => qe(I) || ut(I)))
                        return;
                      if (x.index === 0) {
                        S.value = m;
                        return;
                      } else if (x.index === x.siblings.length - 1) {
                        if (b[0].kind === "complex" || qe(b[0]) || ut(b[0]))
                          return;
                        S.value = m;
                        return;
                      } else {
                        if (b[0].kind === "complex" || qe(b[0]) || ut(b[0]))
                          return;
                        S.value = m;
                        return;
                      }
                    } else if (x.parent.kind === "function") {
                      S.value = m;
                      return;
                    }
                  }
                }, exit(S, x) {
                  if (x.index === 0 && x.siblings.length > 1 && x.parent?.kind === "compound" && qe(S)) {
                    let b = x.siblings[1];
                    return b.kind === "selector" && b.value.charCodeAt(0) === On ? undefined : V2.ReplaceSkip([]);
                  }
                } }), k)
                  return oe2(h);
                let y = i.get(m);
                return `${y.length === 1 && y[0].kind === "list" ? `:is(${m})` : m} ${v}`;
              }
            }).join(", ");
            r.push([u, p.src, p.dst]);
          }
          if (p.nodes.some((m) => m.kind === "declaration")) {
            for (let m of p.nodes)
              c(m);
            return V2.Skip;
          }
          break;
        }
        case "at-rule": {
          if (n = null, p.nodes.length === 0 && !Dn.has(p.name))
            return c(p), f.add(p), V2.Skip;
          if (In.has(p.name))
            t.push([p.name, p.params, p.src, p.dst]);
          else
            return c(p), f.add(p), V2.Skip;
          break;
        }
        case "declaration":
        case "comment": {
          c(p);
          break;
        }
        case "context":
        case "at-root":
          break;
        default:
          break;
      }
    }, exit(p) {
      if (!f.delete(p))
        switch (p.kind) {
          case "rule": {
            n = null, r.pop();
            break;
          }
          case "at-rule": {
            n = null, t.pop();
            break;
          }
          case "declaration":
          case "comment":
          case "context":
          case "at-root":
            break;
          default:
            break;
        }
    } });
    for (let p of l) {
      let m = new Set;
      for (let u = p.length - 1;u >= 0; --u) {
        let v = p[u];
        if (v.kind !== "declaration")
          continue;
        let h = `${v.property}\x00${v.value}\x00${v.important}`;
        m.has(h) ? p.splice(u, 1) : m.add(h);
      }
    }
    return d2;
    function c(p) {
      if (n) {
        p.kind === "declaration" && (s.has(p.property) ? l.add(n) : s.add(p.property)), n.push(p);
        return;
      }
      {
        if (r.length === 0 && t.length === 0) {
          let h = d2, k = h[h.length - 1];
          if (k && k.kind === "at-rule" && p.kind === "at-rule" && k.nodes.length === 0 && p.nodes.length === 0 && k.name === p.name && k.params === p.params)
            return;
          d2.push(p);
          return;
        }
        n = [p], s.clear(), p.kind === "declaration" && s.add(p.property);
        let m = null, u = d2, v = 0;
        {
          let h = u[u.length - 1];
          if (h && h.kind === "at-rule")
            for (let k = 0;k < t.length; k++) {
              let y = t[k];
              if (!h || h.kind !== "at-rule" || h.name !== y[0] || h.params !== y[1])
                break;
              v++, u = h.nodes, h = h.nodes[h.nodes.length - 1];
            }
        }
        if (r.length > 0) {
          let [h, k, y] = r[r.length - 1];
          if (t.length - v <= 0) {
            let S = u[u.length - 1];
            if (S && S.kind === "rule" && S.selector === h) {
              S.nodes.push(...n), n = S.nodes, l.add(n);
              return;
            }
          }
          m = Z2(h, n), (k || y) && Object.assign(m, { src: k, dst: y });
        }
        for (let h = t.length - 1;h >= v; --h) {
          let [k, y, S, x] = t[h];
          m = B2(k, y, m ? [m] : n), (S || x) && Object.assign(m, { src: S, dst: x });
        }
        m ? u.push(m) : u.push(...n);
      }
    }
  }
  var In = new Set(["@container", "@layer", "@media", "@page", "@starting-style", "@supports", "@view-transition"]);
  var Dn = new Set(["@container", "@media", "@page", "@starting-style", "@supports", "@view-transition"]);
  function se(e, i) {
    let r = 0, t = { file: null, code: "" };
    function n(l, d = 0) {
      let f = "", c = "  ".repeat(d);
      if (l.kind === "declaration") {
        if (f += `${c}${l.property}: ${l.value}${l.important ? " !important" : ""};
`, i) {
          r += c.length;
          let p = r;
          r += l.property.length, r += 2, r += l.value?.length ?? 0, l.important && (r += 11);
          let m = r;
          r += 2, l.dst = [t, p, m];
        }
      } else if (l.kind === "rule") {
        if (f += `${c}${l.selector} {
`, i) {
          r += c.length;
          let p = r;
          r += l.selector.length, r += 1;
          let m = r;
          l.dst = [t, p, m], r += 2;
        }
        for (let p of l.nodes)
          f += n(p, d + 1);
        f += `${c}}
`, i && (r += c.length, r += 2);
      } else if (l.kind === "at-rule") {
        if (l.nodes.length === 0) {
          let p = `${c}${l.name} ${l.params};
`;
          if (i) {
            r += c.length;
            let m = r;
            r += l.name.length, r += 1, r += l.params.length;
            let u = r;
            r += 2, l.dst = [t, m, u];
          }
          return p;
        }
        if (f += `${c}${l.name}${l.params ? ` ${l.params} ` : " "}{
`, i) {
          r += c.length;
          let p = r;
          r += l.name.length, l.params && (r += 1, r += l.params.length), r += 1;
          let m = r;
          l.dst = [t, p, m], r += 2;
        }
        for (let p of l.nodes)
          f += n(p, d + 1);
        f += `${c}}
`, i && (r += c.length, r += 2);
      } else if (l.kind === "comment") {
        if (f += `${c}/*${l.value}*/
`, i) {
          r += c.length;
          let p = r;
          r += 2 + l.value.length + 2;
          let m = r;
          l.dst = [t, p, m], r += 1;
        }
      } else if (l.kind === "context" || l.kind === "at-root")
        return "";
      return f;
    }
    let s = "";
    for (let l of e)
      s += n(l, 0);
    return t.code = s, s;
  }
  function Kn(e, i) {
    let r = [];
    return P2(e, (t, n) => {
      if (i(t))
        return r = n.path(), r.push(t), V2.Stop;
    }), r;
  }
  function Jr(e, i, r, t = new Set) {
    if (t.has(e) || (t.add(e), i.getOptions(e) & 24))
      return true;
    {
      let s = r.get(e) ?? [];
      for (let l of s)
        if (Jr(l, i, r, t))
          return true;
    }
    return false;
  }
  function Zr(e) {
    return e.split(/[\s,]+/);
  }
  function Ce(e) {
    if (e.indexOf("(") === -1)
      return De(e);
    let i = M2(e);
    return Zt(i), e = F2(i), e = ae(e), e;
  }
  function De(e, i = false) {
    let r = "";
    for (let t = 0;t < e.length; t++) {
      let n = e[t];
      n === "\\" && e[t + 1] === "_" ? (r += "_", t += 1) : n === "_" && !i ? r += " " : r += n;
    }
    return r;
  }
  function Zt(e) {
    for (let i of e)
      switch (i.kind) {
        case "function": {
          if (i.value === "url" || i.value.endsWith("_url")) {
            i.value = De(i.value);
            break;
          }
          if (i.value === "var" || i.value.endsWith("_var") || i.value === "theme" || i.value.endsWith("_theme")) {
            i.value = De(i.value);
            for (let r = 0;r < i.nodes.length; r++) {
              if (r == 0 && i.nodes[r].kind === "word") {
                i.nodes[r].value = De(i.nodes[r].value, true);
                continue;
              }
              Zt([i.nodes[r]]);
            }
            break;
          }
          i.value = De(i.value), Zt(i.nodes);
          break;
        }
        case "separator":
        case "word": {
          i.value = De(i.value);
          break;
        }
        default:
          Un(i);
      }
  }
  function Un(e) {
    throw new Error(`Unexpected value: ${e}`);
  }
  var Jt = new Uint8Array(256);
  function ye2(e) {
    let i = 0, r = e.length;
    for (let t = 0;t < r; t++) {
      let n = e.charCodeAt(t);
      switch (n) {
        case 92:
          t += 1;
          break;
        case 39:
        case 34:
          for (;++t < r; ) {
            let s = e.charCodeAt(t);
            if (s === 92) {
              t += 1;
              continue;
            }
            if (s === n)
              break;
          }
          break;
        case 40:
          Jt[i] = 41, i++;
          break;
        case 91:
          Jt[i] = 93, i++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (i === 0)
            return false;
          i > 0 && n === Jt[i - 1] && i--;
          break;
        case 59:
          if (i === 0)
            return false;
          break;
      }
    }
    return true;
  }
  var Ln = 58;
  var Qr = 45;
  var Xr = 97;
  var ei = 122;
  var er = /^[a-zA-Z0-9_.%-]+$/;
  function Ue(e) {
    switch (e.kind) {
      case "arbitrary":
        return { kind: e.kind, property: e.property, value: e.value, modifier: e.modifier ? { kind: e.modifier.kind, value: e.modifier.value } : null, variants: e.variants.map(Ke), important: e.important, raw: e.raw };
      case "static":
        return { kind: e.kind, root: e.root, variants: e.variants.map(Ke), important: e.important, raw: e.raw };
      case "functional":
        return { kind: e.kind, root: e.root, value: e.value ? e.value.kind === "arbitrary" ? { kind: e.value.kind, dataType: e.value.dataType, value: e.value.value } : { kind: e.value.kind, value: e.value.value, fraction: e.value.fraction } : null, modifier: e.modifier ? { kind: e.modifier.kind, value: e.modifier.value } : null, variants: e.variants.map(Ke), important: e.important, raw: e.raw };
      default:
        throw new Error("Unknown candidate kind");
    }
  }
  function Ke(e) {
    switch (e.kind) {
      case "arbitrary":
        return { kind: e.kind, selector: e.selector, relative: e.relative };
      case "static":
        return { kind: e.kind, root: e.root };
      case "functional":
        return { kind: e.kind, root: e.root, value: e.value ? { kind: e.value.kind, value: e.value.value } : null, modifier: e.modifier ? { kind: e.modifier.kind, value: e.modifier.value } : null };
      case "compound":
        return { kind: e.kind, root: e.root, variant: Ke(e.variant), modifier: e.modifier ? { kind: e.modifier.kind, value: e.modifier.value } : null };
      default:
        throw new Error("Unknown variant kind");
    }
  }
  function* ti(e, i) {
    let r = d(e, ":");
    if (i.theme.prefix) {
      if (r.length === 1 || r[0] !== i.theme.prefix)
        return null;
      r.shift();
    }
    let t = r.pop(), n = [];
    for (let m = r.length - 1;m >= 0; --m) {
      let u = i.parseVariant(r[m]);
      if (u === null)
        return;
      n.push(u);
    }
    let s = false;
    t[t.length - 1] === "!" ? (s = true, t = t.slice(0, -1)) : t[0] === "!" && (s = true, t = t.slice(1)), i.utilities.has(t, "static") && !t.includes("[") && (yield { kind: "static", root: t, variants: n, important: s, raw: e });
    let [l, d2 = null, f] = d(t, "/");
    if (f)
      return;
    let c = d2 === null ? null : Qt(d2);
    if (d2 !== null && c === null)
      return;
    if (l[0] === "[") {
      if (l[l.length - 1] !== "]")
        return;
      let m = l.charCodeAt(1);
      if (m !== Qr && !(m >= Xr && m <= ei))
        return;
      l = l.slice(1, -1);
      let u = l.indexOf(":");
      if (u === -1 || u === 0 || u === l.length - 1)
        return;
      let v = l.slice(0, u), h = Ce(l.slice(u + 1));
      if (!ye2(h))
        return;
      yield { kind: "arbitrary", property: v, value: h, modifier: c, variants: n, important: s, raw: e };
      return;
    }
    let p;
    if (l[l.length - 1] === "]") {
      let m = l.indexOf("-[");
      if (m === -1)
        return;
      let u = l.slice(0, m);
      if (!i.utilities.has(u, "functional"))
        return;
      let v = l.slice(m + 1);
      p = [[u, v]];
    } else if (l[l.length - 1] === ")") {
      let m = l.indexOf("-(");
      if (m === -1)
        return;
      let u = l.slice(0, m);
      if (!i.utilities.has(u, "functional"))
        return;
      let v = l.slice(m + 2, -1), h = d(v, ":"), k = null;
      if (h.length === 2 && (k = h[0], v = h[1]), v[0] !== "-" || v[1] !== "-" || !ye2(v))
        return;
      p = [[u, k === null ? `[var(${v})]` : `[${k}:var(${v})]`]];
    } else
      p = ii(l, (m) => i.utilities.has(m, "functional"));
    for (let [m, u] of p) {
      let v = { kind: "functional", root: m, modifier: c, value: null, variants: n, important: s, raw: e };
      if (u === null) {
        yield v;
        continue;
      }
      {
        let h = u.indexOf("[");
        if (h !== -1) {
          if (u[u.length - 1] !== "]")
            return;
          let y = Ce(u.slice(h + 1, -1));
          if (!ye2(y))
            continue;
          let S = null;
          for (let x = 0;x < y.length; x++) {
            let b = y.charCodeAt(x);
            if (b === Ln) {
              S = y.slice(0, x), y = y.slice(x + 1);
              break;
            }
            if (!(b === Qr || b >= Xr && b <= ei))
              break;
          }
          if (y.length === 0 || y.trim().length === 0 || S === "")
            continue;
          v.value = { kind: "arbitrary", dataType: S || null, value: y };
        } else {
          let y = d2 === null || v.modifier?.kind === "arbitrary" ? null : `${u}/${d2}`;
          if (!er.test(u))
            continue;
          v.value = { kind: "named", value: u, fraction: y };
        }
      }
      yield v;
    }
  }
  function Qt(e) {
    if (e[0] === "[" && e[e.length - 1] === "]") {
      let i = Ce(e.slice(1, -1));
      return !ye2(i) || i.length === 0 || i.trim().length === 0 ? null : { kind: "arbitrary", value: i };
    }
    return e[0] === "(" && e[e.length - 1] === ")" ? (e = e.slice(1, -1), e[0] !== "-" || e[1] !== "-" || !ye2(e) ? null : (e = `var(${e})`, { kind: "arbitrary", value: Ce(e) })) : er.test(e) ? { kind: "named", value: e } : null;
  }
  function ri(e, i) {
    if (e[0] === "[" && e[e.length - 1] === "]") {
      if (e[1] === "@" && e.includes("&"))
        return null;
      let r = Ce(e.slice(1, -1));
      if (!ye2(r) || r.length === 0 || r.trim().length === 0)
        return null;
      let t = r[0] === ">" || r[0] === "+" || r[0] === "~";
      return !t && r[0] !== "@" && !r.includes("&") && (r = `&:is(${r})`), { kind: "arbitrary", selector: r, relative: t };
    }
    {
      let [r, t = null, n] = d(e, "/");
      if (n)
        return null;
      let s = ii(r, (l) => i.variants.has(l));
      for (let [l, d] of s)
        switch (i.variants.kind(l)) {
          case "static":
            return d !== null || t !== null ? null : { kind: "static", root: l };
          case "functional": {
            let f = t === null ? null : Qt(t);
            if (t !== null && f === null)
              return null;
            if (d === null)
              return { kind: "functional", root: l, modifier: f, value: null };
            if (d[d.length - 1] === "]") {
              if (d[0] !== "[")
                continue;
              let c = Ce(d.slice(1, -1));
              return !ye2(c) || c.length === 0 || c.trim().length === 0 ? null : { kind: "functional", root: l, modifier: f, value: { kind: "arbitrary", value: c } };
            }
            if (d[d.length - 1] === ")") {
              if (d[0] !== "(")
                continue;
              let c = Ce(d.slice(1, -1));
              return !ye2(c) || c.length === 0 || c.trim().length === 0 || c[0] !== "-" || c[1] !== "-" ? null : { kind: "functional", root: l, modifier: f, value: { kind: "arbitrary", value: `var(${c})` } };
            }
            if (!er.test(d))
              continue;
            return { kind: "functional", root: l, modifier: f, value: { kind: "named", value: d } };
          }
          case "compound": {
            if (d === null)
              return null;
            t && (l === "not" || l === "has" || l === "in") && (d = `${d}/${t}`, t = null);
            let f = i.parseVariant(d);
            if (f === null || !i.variants.compoundsWith(l, f))
              return null;
            let c = t === null ? null : Qt(t);
            return t !== null && c === null ? null : { kind: "compound", root: l, modifier: c, variant: f };
          }
        }
    }
    return null;
  }
  function* ii(e, i) {
    i(e) && (yield [e, null]);
    let r = e.lastIndexOf("-");
    for (;r > 0; ) {
      let t = e.slice(0, r);
      if (i(t)) {
        let n = [t, e.slice(r + 1)];
        if (n[1] === "" || n[0] === "@" && i("@") && e[r] === "-")
          break;
        yield n;
      }
      r = e.lastIndexOf("-", r - 1);
    }
    e[0] === "@" && i("@") && (yield ["@", e.slice(1)]);
  }
  function ni(e, i) {
    let r = [];
    for (let n of i.variants)
      r.unshift(vt(n));
    e.theme.prefix && r.unshift(e.theme.prefix);
    let t = "";
    if (i.kind === "static" && (t += i.root), i.kind === "functional" && (t += i.root, i.value))
      if (i.value.kind === "arbitrary") {
        if (i.value !== null) {
          let n = tr(i.value.value), s = n ? i.value.value.slice(4, -1) : i.value.value, [l, d] = n ? ["(", ")"] : ["[", "]"];
          i.value.dataType ? t += `-${l}${i.value.dataType}:${Se(s)}${d}` : t += `-${l}${Se(s)}${d}`;
        }
      } else
        i.value.kind === "named" && (t += `-${i.value.value}`);
    return i.kind === "arbitrary" && (t += `[${i.property}:${Se(i.value)}]`), (i.kind === "arbitrary" || i.kind === "functional") && (t += rt(i.modifier)), i.important && (t += "!"), r.push(t), r.join(":");
  }
  function rt(e) {
    if (e === null)
      return "";
    let i = tr(e.value), r = i ? e.value.slice(4, -1) : e.value, [t, n] = i ? ["(", ")"] : ["[", "]"];
    return e.kind === "arbitrary" ? `/${t}${Se(r)}${n}` : e.kind === "named" ? `/${e.value}` : "";
  }
  function vt(e) {
    if (e.kind === "static")
      return e.root;
    if (e.kind === "arbitrary")
      return `[${Se(Mn(e.selector))}]`;
    let i = "";
    if (e.kind === "functional") {
      i += e.root;
      let r = e.root !== "@";
      if (e.value)
        if (e.value.kind === "arbitrary") {
          let t = tr(e.value.value), n = t ? e.value.value.slice(4, -1) : e.value.value, [s, l] = t ? ["(", ")"] : ["[", "]"];
          i += `${r ? "-" : ""}${s}${Se(n)}${l}`;
        } else
          e.value.kind === "named" && (i += `${r ? "-" : ""}${e.value.value}`);
    }
    return e.kind === "compound" && (i += e.root, i += "-", i += vt(e.variant)), (e.kind === "functional" || e.kind === "compound") && (i += rt(e.modifier)), i;
  }
  var zn = new U2((e) => {
    let i = M2(e), r = new Set, t = new Set(["~", ">", "+", "-", "*", "/"]);
    return P2(i, (n, s) => {
      if (n.kind === "word" && t.has(n.value)) {
        let l = s.index;
        if (l === -1)
          return;
        let d = s.siblings[l - 1];
        if (d?.kind !== "separator" || d.value !== " ")
          return;
        let f = s.siblings[l + 1];
        if (f?.kind !== "separator" || f.value !== " ")
          return;
        let c = s.siblings[l - 2];
        if (c && t.has(c.value))
          return;
        let p = s.siblings[l + 2];
        if (p && t.has(p.value))
          return;
        r.add(d), r.add(f);
      } else if (n.kind === "separator" && n.value.length > 0 && n.value.trim() === "")
        (s.siblings[0] === n || s.siblings[s.siblings.length - 1] === n) && r.add(n);
      else if (n.kind === "separator" && n.value.trim() === ",")
        n.value = ",";
      else if (n.kind === "function" && n.value.startsWith("--")) {
        let l = s.index;
        if (l <= 0)
          return;
        let d = s.siblings[l - 1];
        if (d?.kind === "separator" && d.value === ",")
          return;
        let f = s.siblings[l - 2];
        return f && !t.has(f.value) ? undefined : V2.ReplaceSkip({ kind: "function", value: "", nodes: [n] });
      }
    }), r.size > 0 && P2(i, (n) => {
      if (r.has(n))
        return r.delete(n), V2.ReplaceSkip([]);
    }), Xt(i), F2(i);
  });
  function Se(e) {
    return zn.get(e);
  }
  var jn = new U2((e) => {
    let i = M2(e);
    return i.length === 3 && i[0].kind === "word" && i[0].value === "&" && i[1].kind === "separator" && i[1].value === ":" && i[2].kind === "function" && i[2].value === "is" ? F2(i[2].nodes) : e;
  });
  function Mn(e) {
    return jn.get(e);
  }
  function Xt(e) {
    for (let i of e)
      switch (i.kind) {
        case "function": {
          if (i.value === "url" || i.value.endsWith("_url")) {
            i.value = tt(i.value);
            break;
          }
          if (i.value === "var" || i.value.endsWith("_var") || i.value === "theme" || i.value.endsWith("_theme")) {
            i.value = tt(i.value);
            for (let r = 0;r < i.nodes.length; r++)
              Xt([i.nodes[r]]);
            break;
          }
          i.value = tt(i.value), Xt(i.nodes);
          break;
        }
        case "separator":
          i.value = tt(i.value);
          break;
        case "word": {
          (i.value[0] !== "-" || i.value[1] !== "-") && (i.value = tt(i.value));
          break;
        }
        default:
          Wn(i);
      }
  }
  var Fn = new U2((e) => {
    let i = M2(e);
    return i.length === 1 && i[0].kind === "function" && i[0].value === "var";
  });
  function tr(e) {
    return Fn.get(e);
  }
  function Wn(e) {
    throw new Error(`Unexpected value: ${e}`);
  }
  function tt(e) {
    return e.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
  }
  function Ee(e, i, r) {
    if (e === i)
      return 0;
    let t = e.indexOf("("), n = i.indexOf("("), s = t === -1 ? e.replace(/[\d.]+/g, "") : e.slice(0, t), l = n === -1 ? i.replace(/[\d.]+/g, "") : i.slice(0, n), d = (s === l ? 0 : s < l ? -1 : 1) || (r === "asc" ? parseInt(e) - parseInt(i) : parseInt(i) - parseInt(e));
    return Number.isNaN(d) ? e < i ? -1 : 1 : d;
  }
  var Bn = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i;
  var le = new U2((e) => {
    let i = Bn.exec(e);
    if (!i)
      return null;
    let r = i.groups?.value;
    if (r === undefined)
      return null;
    let t = Number(r);
    if (Number.isNaN(t))
      return null;
    let n = i.groups?.unit;
    return n === undefined ? [t, null] : [t, n];
  });
  var Yn = new Set(["inset", "inherit", "initial", "revert", "unset"]);
  var Gn = new Set(["calc", "clamp", "max", "min", "--spacing"]);
  var qn = new Set(["color", "color-mix", "contrast-color", "device-cmyk", "hsl", "hsla", "hwb", "lab", "lch", "light-dark", "oklab", "oklch", "rgb", "rgba", "--alpha"]);
  var Hn = /^-?(\d+|\.\d+)(.*?)$/;
  function it(e, i) {
    function r(n) {
      let s = F2([n]), l = i(s);
      return M2(l);
    }
    return d(e, ",").map((n) => {
      n = n.trim();
      let s = M2(n), l = null, d = 0, f = 0, c = false;
      return P2(s, (p) => {
        switch (p.kind) {
          case "word": {
            if (Yn.has(p.value.toLowerCase()))
              return V2.Continue;
            if (Hn.test(p.value.toLowerCase()))
              return f++, V2.Continue;
            if (p.value[0] === "#" || oe(p.value))
              return c = true, V2.ReplaceStop(r(p));
            l = p, d++;
            break;
          }
          case "function":
            return qn.has(p.value.toLowerCase()) ? (c = true, V2.ReplaceStop(r(p))) : Gn.has(p.value.toLowerCase()) ? (f++, V2.Skip) : (l = p, d++, V2.Skip);
          case "separator":
            return V2.Continue;
          default:
        }
      }), c ? F2(s) : f < 2 ? n : d === 0 ? `${n} ${i("currentcolor")}` : (d === 1 && P2(s, (p) => p === l ? (c = true, V2.ReplaceStop(r(p))) : V2.Skip), c ? F2(s) : n);
    }).join(", ");
  }
  var yt = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"];
  var rr = class {
    utilities = new U2(() => []);
    completions = new Map;
    static(i, r) {
      this.utilities.get(i).push({ kind: "static", compileFn: r });
    }
    functional(i, r, t) {
      this.utilities.get(i).push({ kind: "functional", compileFn: r, options: t });
    }
    has(i, r) {
      return this.utilities.has(i) && this.utilities.get(i).some((t) => t.kind === r);
    }
    get(i) {
      return this.utilities.has(i) ? this.utilities.get(i) : [];
    }
    getCompletions(i) {
      return this.has(i, "static") ? this.completions.get(i)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(i)?.() ?? [];
    }
    suggest(i, r) {
      let t = this.completions.get(i);
      t ? this.completions.set(i, () => [...t?.(), ...r?.()]) : this.completions.set(i, r);
    }
    keys(i) {
      let r = [];
      for (let [t, n] of this.utilities.entries())
        for (let s of n)
          if (s.kind === i) {
            r.push(t);
            break;
          }
      return r;
    }
  };
  function $2(e, i, r) {
    return B2("@property", e, [a2("syntax", r ? `"${r}"` : '"*"'), a2("inherits", "false"), ...i ? [a2("initial-value", i)] : []]);
  }
  function X2(e, i) {
    if (i === null)
      return e;
    let r = Number(i);
    return Number.isNaN(r) || (i = `${r * 100}%`), i === "100%" ? e : `color-mix(in oklab, ${e} ${i}, transparent)`;
  }
  function ai(e, i) {
    let r = Number(i);
    return Number.isNaN(r) || (i = `${r * 100}%`), `oklab(from ${e} l a b / ${i})`;
  }
  function te2(e, i, r) {
    if (!i)
      return e;
    if (i.kind === "arbitrary")
      return X2(e, i.value);
    let t = r.resolve(i.value, ["--opacity"]);
    return t ? X2(e, t) : xe(i.value) ? X2(e, `${i.value}%`) : null;
  }
  function ae2(e, i, r) {
    let t = null;
    switch (e.value.value) {
      case "inherit": {
        t = "inherit";
        break;
      }
      case "transparent": {
        t = "transparent";
        break;
      }
      case "current": {
        t = "currentcolor";
        break;
      }
      default: {
        t = i.resolve(e.value.value, r);
        break;
      }
    }
    return t ? te2(t, e.modifier, i) : null;
  }
  var oi = /(\d+)_(\d+)/g;
  function si(e) {
    let i = new rr;
    function r(o, g) {
      function* w(A) {
        for (let T of e.keysInNamespaces(A))
          yield T.replace(oi, (K, N, R) => `${N}.${R}`);
      }
      let C = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
      i.suggest(o, () => {
        let A = [];
        for (let T of g()) {
          if (typeof T == "string") {
            A.push({ values: [T], modifiers: [] });
            continue;
          }
          let K = [...T.values ?? [], ...w(T.valueThemeKeys ?? [])], N = [...T.modifiers ?? [], ...w(T.modifierThemeKeys ?? [])];
          T.supportsFractions && K.push(...C), T.hasDefaultValue && K.unshift(null), A.push({ supportsNegative: T.supportsNegative, values: K, modifiers: N });
        }
        return A;
      });
    }
    function t(o, g) {
      i.static(o, () => g.map((w) => typeof w == "function" ? w() : a2(w[0], w[1])));
    }
    function n(o, g) {
      g.staticValues && (g.staticValues = Object.assign(Object.create(null), g.staticValues));
      function w({ negative: C }) {
        return (A) => {
          let T = null, K = null;
          if (A.value)
            if (A.value.kind === "arbitrary") {
              if (A.modifier)
                return;
              T = A.value.value, K = A.value.dataType;
            } else {
              if (T = e.resolve(A.value.fraction ?? A.value.value, g.themeKeys ?? []), T === null && g.supportsFractions && A.value.fraction) {
                let [N, R] = d(A.value.fraction, "/");
                if (!u(N) || !u(R))
                  return;
                T = `calc(${N} / ${R} * 100%)`;
              }
              if (T === null && C && g.handleNegativeBareValue) {
                if (T = g.handleNegativeBareValue(A.value), !T?.includes("/") && A.modifier)
                  return;
                if (T !== null)
                  return g.handle(T, null);
              }
              if (T === null && g.handleBareValue && (T = g.handleBareValue(A.value), !T?.includes("/") && A.modifier))
                return;
              if (T === null && !C && g.staticValues && !A.modifier) {
                let N = g.staticValues[A.value.value];
                if (N)
                  return N.map(re2);
              }
            }
          else {
            if (A.modifier)
              return;
            T = g.defaultValue !== undefined ? g.defaultValue : e.resolve(null, g.themeKeys ?? []);
          }
          if (T !== null)
            return g.handle(C ? ae(`calc(${T} * -1)`) : T, K);
        };
      }
      if (g.supportsNegative && i.functional(`-${o}`, w({ negative: true })), i.functional(o, w({ negative: false })), r(o, () => [{ supportsNegative: g.supportsNegative, valueThemeKeys: g.themeKeys ?? [], hasDefaultValue: g.defaultValue !== undefined && g.defaultValue !== null, supportsFractions: g.supportsFractions }]), g.staticValues && Object.keys(g.staticValues).length > 0) {
        let C = Object.keys(g.staticValues);
        r(o, () => [{ values: C }]);
      }
    }
    function s(o, g) {
      i.functional(o, (w) => {
        if (!w.value)
          return;
        let C = null;
        if (w.value.kind === "arbitrary" ? (C = w.value.value, C = te2(C, w.modifier, e)) : C = ae2(w, e, g.themeKeys), C !== null)
          return g.handle(C);
      }), r(o, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: g.themeKeys, modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`) }]);
    }
    function l(o, g, w, { supportsNegative: C = false, supportsFractions: A = false, staticValues: T } = {}) {
      C && i.static(`-${o}-px`, () => w("-1px")), i.static(`${o}-px`, () => w("1px")), n(o, { themeKeys: g, supportsFractions: A, supportsNegative: C, defaultValue: null, handleBareValue: ({ value: K }) => !e.resolve(null, ["--spacing"]) || !de(K) ? null : `--spacing(${K})`, handleNegativeBareValue: ({ value: K }) => !e.resolve(null, ["--spacing"]) || !de(K) ? null : `--spacing(-${K})`, handle: w, staticValues: T }), r(o, () => [{ values: e.get(["--spacing"]) ? yt : [], supportsNegative: C, supportsFractions: A, valueThemeKeys: g }]);
    }
    t("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), t("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), t("pointer-events-none", [["pointer-events", "none"]]), t("pointer-events-auto", [["pointer-events", "auto"]]), t("visible", [["visibility", "visible"]]), t("invisible", [["visibility", "hidden"]]), t("collapse", [["visibility", "collapse"]]), t("static", [["position", "static"]]), t("fixed", [["position", "fixed"]]), t("absolute", [["position", "absolute"]]), t("relative", [["position", "relative"]]), t("sticky", [["position", "sticky"]]);
    for (let [o, g] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["inset-s", "inset-inline-start"], ["inset-e", "inset-inline-end"], ["inset-bs", "inset-block-start"], ["inset-be", "inset-block-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]])
      t(`${o}-auto`, [[g, "auto"]]), t(`${o}-full`, [[g, "100%"]]), t(`-${o}-full`, [[g, "-100%"]]), l(o, ["--inset", "--spacing"], (w) => [a2(g, w)], { supportsNegative: true, supportsFractions: true });
    t("isolate", [["isolation", "isolate"]]), t("isolation-auto", [["isolation", "auto"]]), n("z", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--z-index"], handle: (o) => [a2("z-index", o)], staticValues: { auto: [a2("z-index", "auto")] } }), r("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), n("order", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--order"], handle: (o) => [a2("order", o)], staticValues: { first: [a2("order", "-9999")], last: [a2("order", "9999")] } }), r("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--order"] }]), n("col", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-column"], handle: (o) => [a2("grid-column", o)], staticValues: { auto: [a2("grid-column", "auto")] } }), n("col-span", { handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("grid-column", `span ${o} / span ${o}`)], staticValues: { full: [a2("grid-column", "1 / -1")] } }), n("col-start", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-column-start"], handle: (o) => [a2("grid-column-start", o)], staticValues: { auto: [a2("grid-column-start", "auto")] } }), n("col-end", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-column-end"], handle: (o) => [a2("grid-column-end", o)], staticValues: { auto: [a2("grid-column-end", "auto")] } }), r("col-span", () => [{ values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: [] }]), r("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-column-start"] }]), r("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-column-end"] }]), n("row", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-row"], handle: (o) => [a2("grid-row", o)], staticValues: { auto: [a2("grid-row", "auto")] } }), n("row-span", { themeKeys: [], handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("grid-row", `span ${o} / span ${o}`)], staticValues: { full: [a2("grid-row", "1 / -1")] } }), n("row-start", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-row-start"], handle: (o) => [a2("grid-row-start", o)], staticValues: { auto: [a2("grid-row-start", "auto")] } }), n("row-end", { supportsNegative: true, handleBareValue: ({ value: o }) => u(o) ? o : null, themeKeys: ["--grid-row-end"], handle: (o) => [a2("grid-row-end", o)], staticValues: { auto: [a2("grid-row-end", "auto")] } }), r("row-span", () => [{ values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: [] }]), r("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-row-start"] }]), r("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-row-end"] }]), t("float-start", [["float", "inline-start"]]), t("float-end", [["float", "inline-end"]]), t("float-right", [["float", "right"]]), t("float-left", [["float", "left"]]), t("float-none", [["float", "none"]]), t("clear-start", [["clear", "inline-start"]]), t("clear-end", [["clear", "inline-end"]]), t("clear-right", [["clear", "right"]]), t("clear-left", [["clear", "left"]]), t("clear-both", [["clear", "both"]]), t("clear-none", [["clear", "none"]]);
    for (let [o, g] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mbs", "margin-block-start"], ["mbe", "margin-block-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]])
      t(`${o}-auto`, [[g, "auto"]]), l(o, ["--margin", "--spacing"], (w) => [a2(g, w)], { supportsNegative: true });
    t("box-border", [["box-sizing", "border-box"]]), t("box-content", [["box-sizing", "content-box"]]), n("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("overflow", "hidden"), a2("display", "-webkit-box"), a2("-webkit-box-orient", "vertical"), a2("-webkit-line-clamp", o)], staticValues: { none: [a2("overflow", "visible"), a2("display", "block"), a2("-webkit-box-orient", "horizontal"), a2("-webkit-line-clamp", "unset")] } }), r("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), t("block", [["display", "block"]]), t("inline-block", [["display", "inline-block"]]), t("inline", [["display", "inline"]]), t("hidden", [["display", "none"]]), t("inline-flex", [["display", "inline-flex"]]), t("table", [["display", "table"]]), t("inline-table", [["display", "inline-table"]]), t("table-caption", [["display", "table-caption"]]), t("table-cell", [["display", "table-cell"]]), t("table-column", [["display", "table-column"]]), t("table-column-group", [["display", "table-column-group"]]), t("table-footer-group", [["display", "table-footer-group"]]), t("table-header-group", [["display", "table-header-group"]]), t("table-row-group", [["display", "table-row-group"]]), t("table-row", [["display", "table-row"]]), t("flow-root", [["display", "flow-root"]]), t("flex", [["display", "flex"]]), t("grid", [["display", "grid"]]), t("inline-grid", [["display", "inline-grid"]]), t("contents", [["display", "contents"]]), t("list-item", [["display", "list-item"]]), t("field-sizing-content", [["field-sizing", "content"]]), t("field-sizing-fixed", [["field-sizing", "fixed"]]), n("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: o }) => {
      if (o === null)
        return null;
      let [g, w] = d(o, "/");
      return !de(g) || !de(w) ? null : o;
    }, handle: (o) => [a2("aspect-ratio", o)], staticValues: { auto: [a2("aspect-ratio", "auto")], square: [a2("aspect-ratio", "1 / 1")] } });
    for (let [o, g] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]])
      t(`size-${o}`, [["--tw-sort", "size"], ["width", g], ["height", g]]), t(`w-${o}`, [["width", g]]), t(`h-${o}`, [["height", g]]), t(`min-w-${o}`, [["min-width", g]]), t(`min-h-${o}`, [["min-height", g]]), t(`max-w-${o}`, [["max-width", g]]), t(`max-h-${o}`, [["max-height", g]]);
    t("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), t("w-auto", [["width", "auto"]]), t("h-auto", [["height", "auto"]]), t("min-w-auto", [["min-width", "auto"]]), t("min-h-auto", [["min-height", "auto"]]), t("h-lh", [["height", "1lh"]]), t("min-h-lh", [["min-height", "1lh"]]), t("max-h-lh", [["max-height", "1lh"]]), t("w-screen", [["width", "100vw"]]), t("min-w-screen", [["min-width", "100vw"]]), t("max-w-screen", [["max-width", "100vw"]]), t("h-screen", [["height", "100vh"]]), t("min-h-screen", [["min-height", "100vh"]]), t("max-h-screen", [["max-height", "100vh"]]), t("max-w-none", [["max-width", "none"]]), t("max-h-none", [["max-height", "none"]]), l("size", ["--size", "--spacing"], (o) => [a2("--tw-sort", "size"), a2("width", o), a2("height", o)], { supportsFractions: true });
    for (let [o, g, w] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]])
      l(o, g, (C) => [a2(w, C)], { supportsFractions: true });
    for (let [o, g] of [["full", "100%"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]])
      t(`inline-${o}`, [["inline-size", g]]), t(`block-${o}`, [["block-size", g]]), t(`min-inline-${o}`, [["min-inline-size", g]]), t(`min-block-${o}`, [["min-block-size", g]]), t(`max-inline-${o}`, [["max-inline-size", g]]), t(`max-block-${o}`, [["max-block-size", g]]);
    for (let [o, g] of [["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"]])
      t(`inline-${o}`, [["inline-size", g]]), t(`min-inline-${o}`, [["min-inline-size", g]]), t(`max-inline-${o}`, [["max-inline-size", g]]);
    for (let [o, g] of [["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"]])
      t(`block-${o}`, [["block-size", g]]), t(`min-block-${o}`, [["min-block-size", g]]), t(`max-block-${o}`, [["max-block-size", g]]);
    t("inline-auto", [["inline-size", "auto"]]), t("block-auto", [["block-size", "auto"]]), t("min-inline-auto", [["min-inline-size", "auto"]]), t("min-block-auto", [["min-block-size", "auto"]]), t("block-lh", [["block-size", "1lh"]]), t("min-block-lh", [["min-block-size", "1lh"]]), t("max-block-lh", [["max-block-size", "1lh"]]), t("inline-screen", [["inline-size", "100vw"]]), t("min-inline-screen", [["min-inline-size", "100vw"]]), t("max-inline-screen", [["max-inline-size", "100vw"]]), t("block-screen", [["block-size", "100vh"]]), t("min-block-screen", [["min-block-size", "100vh"]]), t("max-block-screen", [["max-block-size", "100vh"]]), t("max-inline-none", [["max-inline-size", "none"]]), t("max-block-none", [["max-block-size", "none"]]);
    for (let [o, g, w] of [["inline", ["--spacing", "--container"], "inline-size"], ["min-inline", ["--spacing", "--container"], "min-inline-size"], ["max-inline", ["--spacing", "--container"], "max-inline-size"], ["block", ["--spacing"], "block-size"], ["min-block", ["--spacing"], "min-block-size"], ["max-block", ["--spacing"], "max-block-size"]])
      l(o, g, (C) => [a2(w, C)], { supportsFractions: true });
    i.static("container", () => {
      let o = [...e.namespace("--breakpoint").values()];
      o.sort((w, C) => Ee(w, C, "asc"));
      let g = [a2("--tw-sort", "--tw-container-component"), a2("width", "100%")];
      for (let w of o)
        g.push(B2("@media", `(width >= ${w})`, [a2("max-width", w)]));
      return g;
    }), t("flex-auto", [["flex", "auto"]]), t("flex-initial", [["flex", "0 auto"]]), t("flex-none", [["flex", "none"]]), i.functional("flex", (o) => {
      if (o.value) {
        if (o.value.kind === "arbitrary")
          return o.modifier ? undefined : [a2("flex", o.value.value)];
        if (o.value.fraction) {
          let [g, w] = d(o.value.fraction, "/");
          return !u(g) || !u(w) ? undefined : [a2("flex", `calc(${o.value.fraction} * 100%)`)];
        }
        if (u(o.value.value))
          return o.modifier ? undefined : [a2("flex", o.value.value)];
      }
    }), r("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (o, g) => `${g + 1}`) }]), n("shrink", { defaultValue: "1", handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("flex-shrink", o)] }), n("grow", { defaultValue: "1", handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("flex-grow", o)] }), r("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), r("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), t("basis-auto", [["flex-basis", "auto"]]), t("basis-full", [["flex-basis", "100%"]]), l("basis", ["--flex-basis", "--spacing", "--container"], (o) => [a2("flex-basis", o)], { supportsFractions: true }), t("table-auto", [["table-layout", "auto"]]), t("table-fixed", [["table-layout", "fixed"]]), t("caption-top", [["caption-side", "top"]]), t("caption-bottom", [["caption-side", "bottom"]]), t("border-collapse", [["border-collapse", "collapse"]]), t("border-separate", [["border-collapse", "separate"]]);
    let d2 = () => Y2([$2("--tw-border-spacing-x", "0", "<length>"), $2("--tw-border-spacing-y", "0", "<length>")]);
    l("border-spacing", ["--border-spacing", "--spacing"], (o) => [d2(), a2("--tw-border-spacing-x", o), a2("--tw-border-spacing-y", o), a2("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l("border-spacing-x", ["--border-spacing", "--spacing"], (o) => [d2(), a2("--tw-border-spacing-x", o), a2("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), l("border-spacing-y", ["--border-spacing", "--spacing"], (o) => [d2(), a2("--tw-border-spacing-y", o), a2("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), n("origin", { themeKeys: ["--transform-origin"], handle: (o) => [a2("transform-origin", o)], staticValues: { center: [a2("transform-origin", "center")], top: [a2("transform-origin", "top")], "top-right": [a2("transform-origin", "100% 0")], right: [a2("transform-origin", "100%")], "bottom-right": [a2("transform-origin", "100% 100%")], bottom: [a2("transform-origin", "bottom")], "bottom-left": [a2("transform-origin", "0 100%")], left: [a2("transform-origin", "0")], "top-left": [a2("transform-origin", "0 0")] } }), n("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (o) => [a2("perspective-origin", o)], staticValues: { center: [a2("perspective-origin", "center")], top: [a2("perspective-origin", "top")], "top-right": [a2("perspective-origin", "100% 0")], right: [a2("perspective-origin", "100%")], "bottom-right": [a2("perspective-origin", "100% 100%")], bottom: [a2("perspective-origin", "bottom")], "bottom-left": [a2("perspective-origin", "0 100%")], left: [a2("perspective-origin", "0")], "top-left": [a2("perspective-origin", "0 0")] } }), n("perspective", { themeKeys: ["--perspective"], handle: (o) => [a2("perspective", o)], staticValues: { none: [a2("perspective", "none")] } });
    let f = () => Y2([$2("--tw-translate-x", "0"), $2("--tw-translate-y", "0"), $2("--tw-translate-z", "0")]);
    t("translate-none", [["translate", "none"]]), t("-translate-full", [f, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t("translate-full", [f, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l("translate", ["--translate", "--spacing"], (o) => [f(), a2("--tw-translate-x", o), a2("--tw-translate-y", o), a2("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    for (let o of ["x", "y"])
      t(`-translate-${o}-full`, [f, [`--tw-translate-${o}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), t(`translate-${o}-full`, [f, [`--tw-translate-${o}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), l(`translate-${o}`, ["--translate", "--spacing"], (g) => [f(), a2(`--tw-translate-${o}`, g), a2("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    l("translate-z", ["--translate", "--spacing"], (o) => [f(), a2("--tw-translate-z", o), a2("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), t("translate-3d", [f, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
    let c = () => Y2([$2("--tw-scale-x", "1"), $2("--tw-scale-y", "1"), $2("--tw-scale-z", "1")]);
    t("scale-none", [["scale", "none"]]);
    function p({ negative: o }) {
      return (g) => {
        if (!g.value || g.modifier)
          return;
        let w;
        return g.value.kind === "arbitrary" ? (w = g.value.value, w = o ? `calc(${w} * -1)` : w, [a2("scale", w)]) : (w = e.resolve(g.value.value, ["--scale"]), !w && u(g.value.value) && (w = `${g.value.value}%`), w ? (w = o ? `calc(${w} * -1)` : w, [c(), a2("--tw-scale-x", w), a2("--tw-scale-y", w), a2("--tw-scale-z", w), a2("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : undefined);
      };
    }
    i.functional("-scale", p({ negative: true })), i.functional("scale", p({ negative: false })), r("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    for (let o of ["x", "y", "z"])
      n(`scale-${o}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: g }) => u(g) ? `${g}%` : null, handle: (g) => [c(), a2(`--tw-scale-${o}`, g), a2("scale", `var(--tw-scale-x) var(--tw-scale-y)${o === "z" ? " var(--tw-scale-z)" : ""}`)] }), r(`scale-${o}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    t("scale-3d", [c, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), t("rotate-none", [["rotate", "none"]]);
    function m({ negative: o }) {
      return (g) => {
        if (!g.value || g.modifier)
          return;
        let w;
        if (g.value.kind === "arbitrary") {
          w = g.value.value;
          let C = g.value.dataType ?? ge(w, ["angle", "vector"]);
          if (C === "vector")
            return [a2("rotate", `${w} var(--tw-rotate)`)];
          if (C !== "angle")
            return [a2("rotate", o ? `calc(${w} * -1)` : w)];
        } else if (w = e.resolve(g.value.value, ["--rotate"]), !w && u(g.value.value) && (w = `${g.value.value}deg`), !w)
          return;
        return [a2("rotate", o ? `calc(${w} * -1)` : w)];
      };
    }
    i.functional("-rotate", m({ negative: true })), i.functional("rotate", m({ negative: false })), r("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
    {
      let o = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), g = () => Y2([$2("--tw-rotate-x"), $2("--tw-rotate-y"), $2("--tw-rotate-z"), $2("--tw-skew-x"), $2("--tw-skew-y")]);
      for (let w of ["x", "y", "z"])
        n(`rotate-${w}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: C }) => u(C) ? `${C}deg` : null, handle: (C) => [g(), a2(`--tw-rotate-${w}`, `rotate${w.toUpperCase()}(${C})`), a2("transform", o)] }), r(`rotate-${w}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      n("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w }) => u(w) ? `${w}deg` : null, handle: (w) => [g(), a2("--tw-skew-x", `skewX(${w})`), a2("--tw-skew-y", `skewY(${w})`), a2("transform", o)] }), n("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w }) => u(w) ? `${w}deg` : null, handle: (w) => [g(), a2("--tw-skew-x", `skewX(${w})`), a2("transform", o)] }), n("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: w }) => u(w) ? `${w}deg` : null, handle: (w) => [g(), a2("--tw-skew-y", `skewY(${w})`), a2("transform", o)] }), r("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), i.functional("transform", (w) => {
        if (w.modifier)
          return;
        let C = null;
        if (w.value ? w.value.kind === "arbitrary" && (C = w.value.value) : C = o, C !== null)
          return [g(), a2("transform", C)];
      }), r("transform", () => [{ hasDefaultValue: true }]), t("transform-cpu", [["transform", o]]), t("transform-gpu", [["transform", `translateZ(0) ${o}`]]), t("transform-none", [["transform", "none"]]);
    }
    n("zoom", { handleBareValue: ({ value: o }) => u(o) ? `${o}%` : null, handle: (o) => [a2("zoom", o)] }), r("zoom", () => [{ values: ["50", "75", "90", "95", "100", "105", "110", "125", "150", "200"] }]), t("transform-flat", [["transform-style", "flat"]]), t("transform-3d", [["transform-style", "preserve-3d"]]), t("transform-content", [["transform-box", "content-box"]]), t("transform-border", [["transform-box", "border-box"]]), t("transform-fill", [["transform-box", "fill-box"]]), t("transform-stroke", [["transform-box", "stroke-box"]]), t("transform-view", [["transform-box", "view-box"]]), t("backface-visible", [["backface-visibility", "visible"]]), t("backface-hidden", [["backface-visibility", "hidden"]]);
    for (let o of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"])
      t(`cursor-${o}`, [["cursor", o]]);
    n("cursor", { themeKeys: ["--cursor"], handle: (o) => [a2("cursor", o)] });
    for (let o of ["auto", "none", "manipulation"])
      t(`touch-${o}`, [["touch-action", o]]);
    let u2 = () => Y2([$2("--tw-pan-x"), $2("--tw-pan-y"), $2("--tw-pinch-zoom")]);
    for (let o of ["x", "left", "right"])
      t(`touch-pan-${o}`, [u2, ["--tw-pan-x", `pan-${o}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let o of ["y", "up", "down"])
      t(`touch-pan-${o}`, [u2, ["--tw-pan-y", `pan-${o}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    t("touch-pinch-zoom", [u2, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let o of ["none", "text", "all", "auto"])
      t(`select-${o}`, [["-webkit-user-select", o], ["user-select", o]]);
    t("resize-none", [["resize", "none"]]), t("resize-x", [["resize", "horizontal"]]), t("resize-y", [["resize", "vertical"]]), t("resize", [["resize", "both"]]), t("snap-none", [["scroll-snap-type", "none"]]);
    let v = () => Y2([$2("--tw-scroll-snap-strictness", "proximity", "*")]);
    for (let o of ["x", "y", "both"])
      t(`snap-${o}`, [v, ["scroll-snap-type", `${o} var(--tw-scroll-snap-strictness)`]]);
    t("snap-mandatory", [v, ["--tw-scroll-snap-strictness", "mandatory"]]), t("snap-proximity", [v, ["--tw-scroll-snap-strictness", "proximity"]]), t("snap-align-none", [["scroll-snap-align", "none"]]), t("snap-start", [["scroll-snap-align", "start"]]), t("snap-end", [["scroll-snap-align", "end"]]), t("snap-center", [["scroll-snap-align", "center"]]), t("snap-normal", [["scroll-snap-stop", "normal"]]), t("snap-always", [["scroll-snap-stop", "always"]]);
    for (let [o, g] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mbs", "scroll-margin-block-start"], ["scroll-mbe", "scroll-margin-block-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]])
      l(o, ["--scroll-margin", "--spacing"], (w) => [a2(g, w)], { supportsNegative: true });
    for (let [o, g] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pbs", "scroll-padding-block-start"], ["scroll-pbe", "scroll-padding-block-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]])
      l(o, ["--scroll-padding", "--spacing"], (w) => [a2(g, w)]);
    t("list-inside", [["list-style-position", "inside"]]), t("list-outside", [["list-style-position", "outside"]]), n("list", { themeKeys: ["--list-style-type"], handle: (o) => [a2("list-style-type", o)], staticValues: { none: [a2("list-style-type", "none")], disc: [a2("list-style-type", "disc")], decimal: [a2("list-style-type", "decimal")] } }), n("list-image", { themeKeys: ["--list-style-image"], handle: (o) => [a2("list-style-image", o)], staticValues: { none: [a2("list-style-image", "none")] } }), t("appearance-none", [["appearance", "none"]]), t("appearance-auto", [["appearance", "auto"]]), t("scheme-normal", [["color-scheme", "normal"]]), t("scheme-dark", [["color-scheme", "dark"]]), t("scheme-light", [["color-scheme", "light"]]), t("scheme-light-dark", [["color-scheme", "light dark"]]), t("scheme-only-dark", [["color-scheme", "only dark"]]), t("scheme-only-light", [["color-scheme", "only light"]]), n("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("columns", o)], staticValues: { auto: [a2("columns", "auto")] } }), r("columns", () => [{ values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
    for (let o of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
      t(`break-before-${o}`, [["break-before", o]]);
    for (let o of ["auto", "avoid", "avoid-page", "avoid-column"])
      t(`break-inside-${o}`, [["break-inside", o]]);
    for (let o of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"])
      t(`break-after-${o}`, [["break-after", o]]);
    t("grid-flow-row", [["grid-auto-flow", "row"]]), t("grid-flow-col", [["grid-auto-flow", "column"]]), t("grid-flow-dense", [["grid-auto-flow", "dense"]]), t("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), t("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), n("auto-cols", { themeKeys: ["--grid-auto-columns"], handleBareValue: ({ value: o }) => !e.resolve(null, ["--spacing"]) || !de(o) ? null : `--spacing(${o})`, handle: (o) => [a2("grid-auto-columns", o)], staticValues: { auto: [a2("grid-auto-columns", "auto")], min: [a2("grid-auto-columns", "min-content")], max: [a2("grid-auto-columns", "max-content")], fr: [a2("grid-auto-columns", "minmax(0, 1fr)")] } }), n("auto-rows", { themeKeys: ["--grid-auto-rows"], handleBareValue: ({ value: o }) => !e.resolve(null, ["--spacing"]) || !de(o) ? null : `--spacing(${o})`, handle: (o) => [a2("grid-auto-rows", o)], staticValues: { auto: [a2("grid-auto-rows", "auto")], min: [a2("grid-auto-rows", "min-content")], max: [a2("grid-auto-rows", "max-content")], fr: [a2("grid-auto-rows", "minmax(0, 1fr)")] } }), n("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: o }) => ue(o) ? `repeat(${o}, minmax(0, 1fr))` : null, handle: (o) => [a2("grid-template-columns", o)], staticValues: { none: [a2("grid-template-columns", "none")], subgrid: [a2("grid-template-columns", "subgrid")] } }), n("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: o }) => ue(o) ? `repeat(${o}, minmax(0, 1fr))` : null, handle: (o) => [a2("grid-template-rows", o)], staticValues: { none: [a2("grid-template-rows", "none")], subgrid: [a2("grid-template-rows", "subgrid")] } }), r("grid-cols", () => [{ values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), r("grid-rows", () => [{ values: Array.from({ length: 12 }, (o, g) => `${g + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), t("flex-row", [["flex-direction", "row"]]), t("flex-row-reverse", [["flex-direction", "row-reverse"]]), t("flex-col", [["flex-direction", "column"]]), t("flex-col-reverse", [["flex-direction", "column-reverse"]]), t("flex-wrap", [["flex-wrap", "wrap"]]), t("flex-nowrap", [["flex-wrap", "nowrap"]]), t("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), t("place-content-center", [["place-content", "center"]]), t("place-content-start", [["place-content", "start"]]), t("place-content-end", [["place-content", "end"]]), t("place-content-center-safe", [["place-content", "safe center"]]), t("place-content-end-safe", [["place-content", "safe end"]]), t("place-content-between", [["place-content", "space-between"]]), t("place-content-around", [["place-content", "space-around"]]), t("place-content-evenly", [["place-content", "space-evenly"]]), t("place-content-baseline", [["place-content", "baseline"]]), t("place-content-stretch", [["place-content", "stretch"]]), t("place-items-center", [["place-items", "center"]]), t("place-items-start", [["place-items", "start"]]), t("place-items-end", [["place-items", "end"]]), t("place-items-center-safe", [["place-items", "safe center"]]), t("place-items-end-safe", [["place-items", "safe end"]]), t("place-items-baseline", [["place-items", "baseline"]]), t("place-items-stretch", [["place-items", "stretch"]]), t("content-normal", [["align-content", "normal"]]), t("content-center", [["align-content", "center"]]), t("content-start", [["align-content", "flex-start"]]), t("content-end", [["align-content", "flex-end"]]), t("content-center-safe", [["align-content", "safe center"]]), t("content-end-safe", [["align-content", "safe flex-end"]]), t("content-between", [["align-content", "space-between"]]), t("content-around", [["align-content", "space-around"]]), t("content-evenly", [["align-content", "space-evenly"]]), t("content-baseline", [["align-content", "baseline"]]), t("content-stretch", [["align-content", "stretch"]]), t("items-center", [["align-items", "center"]]), t("items-start", [["align-items", "flex-start"]]), t("items-end", [["align-items", "flex-end"]]), t("items-center-safe", [["align-items", "safe center"]]), t("items-end-safe", [["align-items", "safe flex-end"]]), t("items-baseline", [["align-items", "baseline"]]), t("items-baseline-last", [["align-items", "last baseline"]]), t("items-stretch", [["align-items", "stretch"]]), t("justify-normal", [["justify-content", "normal"]]), t("justify-center", [["justify-content", "center"]]), t("justify-start", [["justify-content", "flex-start"]]), t("justify-end", [["justify-content", "flex-end"]]), t("justify-center-safe", [["justify-content", "safe center"]]), t("justify-end-safe", [["justify-content", "safe flex-end"]]), t("justify-between", [["justify-content", "space-between"]]), t("justify-around", [["justify-content", "space-around"]]), t("justify-evenly", [["justify-content", "space-evenly"]]), t("justify-baseline", [["justify-content", "baseline"]]), t("justify-stretch", [["justify-content", "stretch"]]), t("justify-items-normal", [["justify-items", "normal"]]), t("justify-items-center", [["justify-items", "center"]]), t("justify-items-start", [["justify-items", "start"]]), t("justify-items-end", [["justify-items", "end"]]), t("justify-items-center-safe", [["justify-items", "safe center"]]), t("justify-items-end-safe", [["justify-items", "safe end"]]), t("justify-items-stretch", [["justify-items", "stretch"]]), l("gap", ["--gap", "--spacing"], (o) => [a2("gap", o)]), l("gap-x", ["--gap", "--spacing"], (o) => [a2("column-gap", o)]), l("gap-y", ["--gap", "--spacing"], (o) => [a2("row-gap", o)]), l("space-x", ["--space", "--spacing"], (o) => {
      let g = (() => {
        if (o === "--spacing(0)" || o === "--spacing(-0)")
          return true;
        let w = le.get(o);
        return !!(w && w[0] === 0 && (w[1] === null || y(o)));
      })();
      return [Y2([$2("--tw-space-x-reverse", "0")]), H2(":where(& > :not(:last-child))", [a2("--tw-sort", "row-gap"), a2("--tw-space-x-reverse", "0"), a2("margin-inline-start", g ? "0" : `calc(${o} * var(--tw-space-x-reverse))`), a2("margin-inline-end", g ? "0" : `calc(${o} * calc(1 - var(--tw-space-x-reverse)))`)])];
    }, { supportsNegative: true }), l("space-y", ["--space", "--spacing"], (o) => {
      let g = (() => {
        if (o === "--spacing(0)" || o === "--spacing(-0)")
          return true;
        let w = le.get(o);
        return !!(w && w[0] === 0 && (w[1] === null || y(o)));
      })();
      return [Y2([$2("--tw-space-y-reverse", "0")]), H2(":where(& > :not(:last-child))", [a2("--tw-sort", "column-gap"), a2("--tw-space-y-reverse", "0"), a2("margin-block-start", g ? "0" : `calc(${o} * var(--tw-space-y-reverse))`), a2("margin-block-end", g ? "0" : `calc(${o} * calc(1 - var(--tw-space-y-reverse)))`)])];
    }, { supportsNegative: true }), t("space-x-reverse", [() => Y2([$2("--tw-space-x-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [a2("--tw-sort", "row-gap"), a2("--tw-space-x-reverse", "1")])]), t("space-y-reverse", [() => Y2([$2("--tw-space-y-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [a2("--tw-sort", "column-gap"), a2("--tw-space-y-reverse", "1")])]), t("accent-auto", [["accent-color", "auto"]]), s("accent", { themeKeys: ["--accent-color", "--color"], handle: (o) => [a2("accent-color", o)] }), s("caret", { themeKeys: ["--caret-color", "--color"], handle: (o) => [a2("caret-color", o)] }), s("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (o) => [H2(":where(& > :not(:last-child))", [a2("--tw-sort", "divide-color"), a2("border-color", o)])] }), t("place-self-auto", [["place-self", "auto"]]), t("place-self-start", [["place-self", "start"]]), t("place-self-end", [["place-self", "end"]]), t("place-self-center", [["place-self", "center"]]), t("place-self-end-safe", [["place-self", "safe end"]]), t("place-self-center-safe", [["place-self", "safe center"]]), t("place-self-stretch", [["place-self", "stretch"]]), t("self-auto", [["align-self", "auto"]]), t("self-start", [["align-self", "flex-start"]]), t("self-end", [["align-self", "flex-end"]]), t("self-center", [["align-self", "center"]]), t("self-end-safe", [["align-self", "safe flex-end"]]), t("self-center-safe", [["align-self", "safe center"]]), t("self-stretch", [["align-self", "stretch"]]), t("self-baseline", [["align-self", "baseline"]]), t("self-baseline-last", [["align-self", "last baseline"]]), t("justify-self-auto", [["justify-self", "auto"]]), t("justify-self-start", [["justify-self", "flex-start"]]), t("justify-self-end", [["justify-self", "flex-end"]]), t("justify-self-center", [["justify-self", "center"]]), t("justify-self-end-safe", [["justify-self", "safe flex-end"]]), t("justify-self-center-safe", [["justify-self", "safe center"]]), t("justify-self-stretch", [["justify-self", "stretch"]]);
    for (let o of ["auto", "hidden", "clip", "visible", "scroll"])
      t(`overflow-${o}`, [["overflow", o]]), t(`overflow-x-${o}`, [["overflow-x", o]]), t(`overflow-y-${o}`, [["overflow-y", o]]);
    for (let o of ["auto", "contain", "none"])
      t(`overscroll-${o}`, [["overscroll-behavior", o]]), t(`overscroll-x-${o}`, [["overscroll-behavior-x", o]]), t(`overscroll-y-${o}`, [["overscroll-behavior-y", o]]);
    t("scroll-auto", [["scroll-behavior", "auto"]]), t("scroll-smooth", [["scroll-behavior", "smooth"]]), t("scrollbar-auto", [["scrollbar-width", "auto"]]), t("scrollbar-thin", [["scrollbar-width", "thin"]]), t("scrollbar-none", [["scrollbar-width", "none"]]);
    {
      let o = () => Y2([$2("--tw-scrollbar-thumb", "#0000", "<color>"), $2("--tw-scrollbar-track", "#0000", "<color>")]);
      s("scrollbar-thumb", { themeKeys: ["--color"], handle: (g) => [o(), a2("--tw-scrollbar-thumb", g), a2("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] }), s("scrollbar-track", { themeKeys: ["--color"], handle: (g) => [o(), a2("--tw-scrollbar-track", g), a2("scrollbar-color", "var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)")] });
    }
    t("scrollbar-gutter-auto", [["scrollbar-gutter", "auto"]]), t("scrollbar-gutter-stable", [["scrollbar-gutter", "stable"]]), t("scrollbar-gutter-both", [["scrollbar-gutter", "stable both-edges"]]), t("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), t("text-ellipsis", [["text-overflow", "ellipsis"]]), t("text-clip", [["text-overflow", "clip"]]), t("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), t("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), t("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), t("whitespace-normal", [["white-space", "normal"]]), t("whitespace-nowrap", [["white-space", "nowrap"]]), t("whitespace-pre", [["white-space", "pre"]]), t("whitespace-pre-line", [["white-space", "pre-line"]]), t("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), t("whitespace-break-spaces", [["white-space", "break-spaces"]]), n("tab", { handleBareValue: ({ value: o }) => u(o) ? o : null, handle: (o) => [a2("tab-size", o)] }), r("tab", () => [{ values: ["2", "4", "8"] }]), t("text-wrap", [["text-wrap", "wrap"]]), t("text-nowrap", [["text-wrap", "nowrap"]]), t("text-balance", [["text-wrap", "balance"]]), t("text-pretty", [["text-wrap", "pretty"]]), t("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), t("break-all", [["word-break", "break-all"]]), t("break-keep", [["word-break", "keep-all"]]), t("wrap-anywhere", [["overflow-wrap", "anywhere"]]), t("wrap-break-word", [["overflow-wrap", "break-word"]]), t("wrap-normal", [["overflow-wrap", "normal"]]);
    for (let [o, g] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]])
      n(o, { themeKeys: ["--radius"], handle: (w) => g.map((C) => a2(C, w)), staticValues: { none: g.map((w) => a2(w, "0")), full: g.map((w) => a2(w, "calc(infinity * 1px)")) } });
    t("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), t("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), t("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), t("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), t("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), t("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
    {
      let g = function(w, C) {
        i.functional(w, (A) => {
          if (!A.value) {
            if (A.modifier)
              return;
            let T = e.get(["--default-border-width"]) ?? "1px", K = C.width(T);
            return K ? [o(), ...K] : undefined;
          }
          if (A.value.kind === "arbitrary") {
            let T = A.value.value;
            switch (A.value.dataType ?? ge(T, ["color", "line-width", "length"])) {
              case "line-width":
              case "length": {
                if (A.modifier)
                  return;
                let N = C.width(T);
                return N ? [o(), ...N] : undefined;
              }
              default:
                return T = te2(T, A.modifier, e), T === null ? undefined : C.color(T);
            }
          }
          {
            let T = ae2(A, e, ["--border-color", "--color"]);
            if (T)
              return C.color(T);
          }
          {
            if (A.modifier)
              return;
            let T = e.resolve(A.value.value, ["--border-width"]);
            if (T) {
              let K = C.width(T);
              return K ? [o(), ...K] : undefined;
            }
            if (u(A.value.value)) {
              let K = C.width(`${A.value.value}px`);
              return K ? [o(), ...K] : undefined;
            }
          }
        }), r(w, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (A, T) => `${T * 5}`), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
      };
      var E = g;
      let o = () => Y2([$2("--tw-border-style", "solid")]);
      g("border", { width: (w) => [a2("border-style", "var(--tw-border-style)"), a2("border-width", w)], color: (w) => [a2("border-color", w)] }), g("border-x", { width: (w) => [a2("border-inline-style", "var(--tw-border-style)"), a2("border-inline-width", w)], color: (w) => [a2("border-inline-color", w)] }), g("border-y", { width: (w) => [a2("border-block-style", "var(--tw-border-style)"), a2("border-block-width", w)], color: (w) => [a2("border-block-color", w)] }), g("border-s", { width: (w) => [a2("border-inline-start-style", "var(--tw-border-style)"), a2("border-inline-start-width", w)], color: (w) => [a2("border-inline-start-color", w)] }), g("border-e", { width: (w) => [a2("border-inline-end-style", "var(--tw-border-style)"), a2("border-inline-end-width", w)], color: (w) => [a2("border-inline-end-color", w)] }), g("border-bs", { width: (w) => [a2("border-block-start-style", "var(--tw-border-style)"), a2("border-block-start-width", w)], color: (w) => [a2("border-block-start-color", w)] }), g("border-be", { width: (w) => [a2("border-block-end-style", "var(--tw-border-style)"), a2("border-block-end-width", w)], color: (w) => [a2("border-block-end-color", w)] }), g("border-t", { width: (w) => [a2("border-top-style", "var(--tw-border-style)"), a2("border-top-width", w)], color: (w) => [a2("border-top-color", w)] }), g("border-r", { width: (w) => [a2("border-right-style", "var(--tw-border-style)"), a2("border-right-width", w)], color: (w) => [a2("border-right-color", w)] }), g("border-b", { width: (w) => [a2("border-bottom-style", "var(--tw-border-style)"), a2("border-bottom-width", w)], color: (w) => [a2("border-bottom-color", w)] }), g("border-l", { width: (w) => [a2("border-left-style", "var(--tw-border-style)"), a2("border-left-width", w)], color: (w) => [a2("border-left-color", w)] }), n("divide-x", { defaultValue: e.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: w }) => u(w) ? `${w}px` : null, handle: (w) => [Y2([$2("--tw-divide-x-reverse", "0")]), H2(":where(& > :not(:last-child))", [a2("--tw-sort", "divide-x-width"), o(), a2("--tw-divide-x-reverse", "0"), a2("border-inline-style", "var(--tw-border-style)"), a2("border-inline-start-width", `calc(${w} * var(--tw-divide-x-reverse))`), a2("border-inline-end-width", `calc(${w} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), n("divide-y", { defaultValue: e.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: w }) => u(w) ? `${w}px` : null, handle: (w) => [Y2([$2("--tw-divide-y-reverse", "0")]), H2(":where(& > :not(:last-child))", [a2("--tw-sort", "divide-y-width"), o(), a2("--tw-divide-y-reverse", "0"), a2("border-bottom-style", "var(--tw-border-style)"), a2("border-top-style", "var(--tw-border-style)"), a2("border-top-width", `calc(${w} * var(--tw-divide-y-reverse))`), a2("border-bottom-width", `calc(${w} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), r("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), r("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), t("divide-x-reverse", [() => Y2([$2("--tw-divide-x-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [a2("--tw-divide-x-reverse", "1")])]), t("divide-y-reverse", [() => Y2([$2("--tw-divide-y-reverse", "0")]), () => H2(":where(& > :not(:last-child))", [a2("--tw-divide-y-reverse", "1")])]);
      for (let w of ["solid", "dashed", "dotted", "double", "none"])
        t(`divide-${w}`, [() => H2(":where(& > :not(:last-child))", [a2("--tw-sort", "divide-style"), a2("--tw-border-style", w), a2("border-style", w)])]);
    }
    t("bg-auto", [["background-size", "auto"]]), t("bg-cover", [["background-size", "cover"]]), t("bg-contain", [["background-size", "contain"]]), n("bg-size", { handle(o) {
      if (o)
        return [a2("background-size", o)];
    } }), t("bg-fixed", [["background-attachment", "fixed"]]), t("bg-local", [["background-attachment", "local"]]), t("bg-scroll", [["background-attachment", "scroll"]]), t("bg-top", [["background-position", "top"]]), t("bg-top-left", [["background-position", "left top"]]), t("bg-top-right", [["background-position", "right top"]]), t("bg-bottom", [["background-position", "bottom"]]), t("bg-bottom-left", [["background-position", "left bottom"]]), t("bg-bottom-right", [["background-position", "right bottom"]]), t("bg-left", [["background-position", "left"]]), t("bg-right", [["background-position", "right"]]), t("bg-center", [["background-position", "center"]]), n("bg-position", { handle(o) {
      if (o)
        return [a2("background-position", o)];
    } }), t("bg-repeat", [["background-repeat", "repeat"]]), t("bg-no-repeat", [["background-repeat", "no-repeat"]]), t("bg-repeat-x", [["background-repeat", "repeat-x"]]), t("bg-repeat-y", [["background-repeat", "repeat-y"]]), t("bg-repeat-round", [["background-repeat", "round"]]), t("bg-repeat-space", [["background-repeat", "space"]]), t("bg-none", [["background-image", "none"]]);
    {
      let w = function(T) {
        let K = "in oklab";
        if (T?.kind === "named")
          switch (T.value) {
            case "longer":
            case "shorter":
            case "increasing":
            case "decreasing":
              K = `in oklch ${T.value} hue`;
              break;
            default:
              K = `in ${T.value}`;
          }
        else
          T?.kind === "arbitrary" && (K = T.value);
        return K;
      }, C = function({ negative: T }) {
        return (K) => {
          if (!K.value)
            return;
          if (K.value.kind === "arbitrary") {
            if (K.modifier)
              return;
            let W = K.value.value;
            return (K.value.dataType ?? ge(W, ["angle"])) === "angle" ? (W = T ? `calc(${W} * -1)` : `${W}`, [a2("--tw-gradient-position", W), a2("background-image", `linear-gradient(var(--tw-gradient-stops,${W}))`)]) : T ? undefined : [a2("--tw-gradient-position", W), a2("background-image", `linear-gradient(var(--tw-gradient-stops,${W}))`)];
          }
          let N = K.value.value;
          if (!T && g.has(N))
            N = g.get(N);
          else if (u(N))
            N = T ? `calc(${N}deg * -1)` : `${N}deg`;
          else
            return;
          let R = w(K.modifier);
          return [a2("--tw-gradient-position", `${N}`), Z2("@supports (background-image: linear-gradient(in lab, red, red))", [a2("--tw-gradient-position", `${N} ${R}`)]), a2("background-image", "linear-gradient(var(--tw-gradient-stops))")];
        };
      }, A = function({ negative: T }) {
        return (K) => {
          if (K.value?.kind === "arbitrary") {
            if (K.modifier)
              return;
            let W = K.value.value;
            return [a2("--tw-gradient-position", W), a2("background-image", `conic-gradient(var(--tw-gradient-stops,${W}))`)];
          }
          let N = w(K.modifier);
          if (!K.value)
            return [a2("--tw-gradient-position", N), a2("background-image", "conic-gradient(var(--tw-gradient-stops))")];
          let R = K.value.value;
          if (u(R))
            return R = T ? `calc(${R}deg * -1)` : `${R}deg`, [a2("--tw-gradient-position", `from ${R} ${N}`), a2("background-image", "conic-gradient(var(--tw-gradient-stops))")];
        };
      };
      var j = w, q = C, G = A;
      let o = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], g = new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
      i.functional("-bg-linear", C({ negative: true })), i.functional("bg-linear", C({ negative: false })), r("bg-linear", () => [{ values: [...g.keys()], modifiers: o }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: o }]), i.functional("-bg-conic", A({ negative: true })), i.functional("bg-conic", A({ negative: false })), r("bg-conic", () => [{ hasDefaultValue: true, modifiers: o }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: o }]), i.functional("bg-radial", (T) => {
        if (!T.value) {
          let K = w(T.modifier);
          return [a2("--tw-gradient-position", K), a2("background-image", "radial-gradient(var(--tw-gradient-stops))")];
        }
        if (T.value.kind === "arbitrary") {
          if (T.modifier)
            return;
          let K = T.value.value;
          return [a2("--tw-gradient-position", K), a2("background-image", `radial-gradient(var(--tw-gradient-stops,${K}))`)];
        }
      }), r("bg-radial", () => [{ hasDefaultValue: true, modifiers: o }]);
    }
    i.functional("bg", (o) => {
      if (o.value) {
        if (o.value.kind === "arbitrary") {
          let g = o.value.value;
          switch (o.value.dataType ?? ge(g, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
            case "percentage":
            case "position":
              return o.modifier ? undefined : [a2("background-position", g)];
            case "bg-size":
            case "length":
            case "size":
              return o.modifier ? undefined : [a2("background-size", g)];
            case "image":
            case "url":
              return o.modifier ? undefined : [a2("background-image", g)];
            default:
              return g = te2(g, o.modifier, e), g === null ? undefined : [a2("background-color", g)];
          }
        }
        {
          let g = ae2(o, e, ["--background-color", "--color"]);
          if (g)
            return [a2("background-color", g)];
        }
        {
          if (o.modifier)
            return;
          let g = e.resolve(o.value.value, ["--background-image"]);
          if (g)
            return [a2("background-image", g)];
        }
      }
    }), r("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: [], valueThemeKeys: ["--background-image"] }]);
    let h = () => Y2([$2("--tw-gradient-position"), $2("--tw-gradient-from", "#0000", "<color>"), $2("--tw-gradient-via", "#0000", "<color>"), $2("--tw-gradient-to", "#0000", "<color>"), $2("--tw-gradient-stops"), $2("--tw-gradient-via-stops"), $2("--tw-gradient-from-position", "0%", "<length-percentage>"), $2("--tw-gradient-via-position", "50%", "<length-percentage>"), $2("--tw-gradient-to-position", "100%", "<length-percentage>")]);
    function k(o, g) {
      i.functional(o, (w) => {
        if (w.value) {
          if (w.value.kind === "arbitrary") {
            let C = w.value.value;
            switch (w.value.dataType ?? ge(C, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return w.modifier ? undefined : g.position(C);
              default:
                return C = te2(C, w.modifier, e), C === null ? undefined : g.color(C);
            }
          }
          {
            let C = ae2(w, e, ["--background-color", "--color"]);
            if (C)
              return g.color(C);
          }
          {
            if (w.modifier)
              return;
            let C = e.resolve(w.value.value, ["--gradient-color-stop-positions"]);
            if (C)
              return g.position(C);
            if (w.value.value[w.value.value.length - 1] === "%" && u(w.value.value.slice(0, -1)))
              return g.position(w.value.value);
          }
        }
      }), r(o, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`) }, { values: Array.from({ length: 21 }, (w, C) => `${C * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
    }
    k("from", { color: (o) => [h(), a2("--tw-sort", "--tw-gradient-from"), a2("--tw-gradient-from", o), a2("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (o) => [h(), a2("--tw-gradient-from-position", o)] }), t("via-none", [["--tw-gradient-via-stops", "initial"]]), k("via", { color: (o) => [h(), a2("--tw-sort", "--tw-gradient-via"), a2("--tw-gradient-via", o), a2("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), a2("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (o) => [h(), a2("--tw-gradient-via-position", o)] }), k("to", { color: (o) => [h(), a2("--tw-sort", "--tw-gradient-to"), a2("--tw-gradient-to", o), a2("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (o) => [h(), a2("--tw-gradient-to-position", o)] }), t("mask-none", [["mask-image", "none"]]), i.functional("mask", (o) => {
      if (!o.value || o.modifier || o.value.kind !== "arbitrary")
        return;
      let g = o.value.value;
      switch (o.value.dataType ?? ge(g, ["image", "percentage", "position", "bg-size", "length", "url"])) {
        case "percentage":
        case "position":
          return o.modifier ? undefined : [a2("mask-position", g)];
        case "bg-size":
        case "length":
        case "size":
          return [a2("mask-size", g)];
        default:
          return [a2("mask-image", g)];
      }
    }), t("mask-add", [["mask-composite", "add"]]), t("mask-subtract", [["mask-composite", "subtract"]]), t("mask-intersect", [["mask-composite", "intersect"]]), t("mask-exclude", [["mask-composite", "exclude"]]), t("mask-alpha", [["mask-mode", "alpha"]]), t("mask-luminance", [["mask-mode", "luminance"]]), t("mask-match", [["mask-mode", "match-source"]]), t("mask-type-alpha", [["mask-type", "alpha"]]), t("mask-type-luminance", [["mask-type", "luminance"]]), t("mask-auto", [["mask-size", "auto"]]), t("mask-cover", [["mask-size", "cover"]]), t("mask-contain", [["mask-size", "contain"]]), n("mask-size", { handle(o) {
      if (o)
        return [a2("mask-size", o)];
    } }), t("mask-top", [["mask-position", "top"]]), t("mask-top-left", [["mask-position", "left top"]]), t("mask-top-right", [["mask-position", "right top"]]), t("mask-bottom", [["mask-position", "bottom"]]), t("mask-bottom-left", [["mask-position", "left bottom"]]), t("mask-bottom-right", [["mask-position", "right bottom"]]), t("mask-left", [["mask-position", "left"]]), t("mask-right", [["mask-position", "right"]]), t("mask-center", [["mask-position", "center"]]), n("mask-position", { handle(o) {
      if (o)
        return [a2("mask-position", o)];
    } }), t("mask-repeat", [["mask-repeat", "repeat"]]), t("mask-no-repeat", [["mask-repeat", "no-repeat"]]), t("mask-repeat-x", [["mask-repeat", "repeat-x"]]), t("mask-repeat-y", [["mask-repeat", "repeat-y"]]), t("mask-repeat-round", [["mask-repeat", "round"]]), t("mask-repeat-space", [["mask-repeat", "space"]]), t("mask-clip-border", [["mask-clip", "border-box"]]), t("mask-clip-padding", [["mask-clip", "padding-box"]]), t("mask-clip-content", [["mask-clip", "content-box"]]), t("mask-clip-fill", [["mask-clip", "fill-box"]]), t("mask-clip-stroke", [["mask-clip", "stroke-box"]]), t("mask-clip-view", [["mask-clip", "view-box"]]), t("mask-no-clip", [["mask-clip", "no-clip"]]), t("mask-origin-border", [["mask-origin", "border-box"]]), t("mask-origin-padding", [["mask-origin", "padding-box"]]), t("mask-origin-content", [["mask-origin", "content-box"]]), t("mask-origin-fill", [["mask-origin", "fill-box"]]), t("mask-origin-stroke", [["mask-origin", "stroke-box"]]), t("mask-origin-view", [["mask-origin", "view-box"]]);
    let y2 = () => Y2([$2("--tw-mask-linear", "linear-gradient(#fff, #fff)"), $2("--tw-mask-radial", "linear-gradient(#fff, #fff)"), $2("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
    function S(o, g) {
      i.functional(o, (w) => {
        if (w.value) {
          if (w.value.kind === "arbitrary") {
            let C = w.value.value;
            switch (w.value.dataType ?? ge(C, ["length", "percentage", "color"])) {
              case "color":
                return C = te2(C, w.modifier, e), C === null ? undefined : g.color(C);
              case "percentage":
                return w.modifier || !u(C.slice(0, -1)) ? undefined : g.position(C);
              default:
                return w.modifier ? undefined : g.position(C);
            }
          }
          {
            let C = ae2(w, e, ["--background-color", "--color"]);
            if (C)
              return g.color(C);
          }
          {
            if (w.modifier)
              return;
            let C = ge(w.value.value, ["number", "percentage"]);
            if (!C)
              return;
            switch (C) {
              case "number":
                return !e.resolve(null, ["--spacing"]) || !de(w.value.value) ? undefined : g.position(`--spacing(${w.value.value})`);
              case "percentage":
                return u(w.value.value.slice(0, -1)) ? g.position(w.value.value) : undefined;
              default:
                return;
            }
          }
        }
      }), r(o, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`) }, { values: Array.from({ length: 21 }, (w, C) => `${C * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]), r(o, () => [{ values: Array.from({ length: 21 }, (w, C) => `${C * 5}%`) }, { values: e.get(["--spacing"]) ? yt : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (w, C) => `${C * 5}`) }]);
    }
    let x = () => Y2([$2("--tw-mask-left", "linear-gradient(#fff, #fff)"), $2("--tw-mask-right", "linear-gradient(#fff, #fff)"), $2("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), $2("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
    function b(o, g, w) {
      S(o, { color(C) {
        let A = [y2(), x(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let T of ["top", "right", "bottom", "left"])
          w[T] && (A.push(a2(`--tw-mask-${T}`, `linear-gradient(to ${T}, var(--tw-mask-${T}-from-color) var(--tw-mask-${T}-from-position), var(--tw-mask-${T}-to-color) var(--tw-mask-${T}-to-position))`)), A.push(Y2([$2(`--tw-mask-${T}-from-position`, "0%"), $2(`--tw-mask-${T}-to-position`, "100%"), $2(`--tw-mask-${T}-from-color`, "black"), $2(`--tw-mask-${T}-to-color`, "transparent")])), A.push(a2(`--tw-mask-${T}-${g}-color`, C)));
        return A;
      }, position(C) {
        let A = [y2(), x(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let T of ["top", "right", "bottom", "left"])
          w[T] && (A.push(a2(`--tw-mask-${T}`, `linear-gradient(to ${T}, var(--tw-mask-${T}-from-color) var(--tw-mask-${T}-from-position), var(--tw-mask-${T}-to-color) var(--tw-mask-${T}-to-position))`)), A.push(Y2([$2(`--tw-mask-${T}-from-position`, "0%"), $2(`--tw-mask-${T}-to-position`, "100%"), $2(`--tw-mask-${T}-from-color`, "black"), $2(`--tw-mask-${T}-to-color`, "transparent")])), A.push(a2(`--tw-mask-${T}-${g}-position`, C)));
        return A;
      } });
    }
    b("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), b("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), b("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), b("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), b("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), b("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), b("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), b("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), b("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), b("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), b("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), b("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
    let I = () => Y2([$2("--tw-mask-linear-position", "0deg"), $2("--tw-mask-linear-from-position", "0%"), $2("--tw-mask-linear-to-position", "100%"), $2("--tw-mask-linear-from-color", "black"), $2("--tw-mask-linear-to-color", "transparent")]);
    n("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: o }) {
      if (!u(o))
        return null;
      let g = Number(o);
      return g === 0 ? "0deg" : g === 1 ? "1deg" : `calc(1deg * ${o})`;
    }, handleNegativeBareValue({ value: o }) {
      if (!u(o))
        return null;
      let g = Number(o);
      return g === 0 ? "0deg" : g === 1 ? "-1deg" : `calc(1deg * -${o})`;
    }, handle: (o) => [y2(), I(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), a2("--tw-mask-linear-position", o)] }), r("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), S("mask-linear-from", { color: (o) => [y2(), I(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), a2("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), a2("--tw-mask-linear-from-color", o)], position: (o) => [y2(), I(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), a2("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), a2("--tw-mask-linear-from-position", o)] }), S("mask-linear-to", { color: (o) => [y2(), I(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), a2("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), a2("--tw-mask-linear-to-color", o)], position: (o) => [y2(), I(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), a2("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), a2("--tw-mask-linear-to-position", o)] });
    let D = () => Y2([$2("--tw-mask-radial-from-position", "0%"), $2("--tw-mask-radial-to-position", "100%"), $2("--tw-mask-radial-from-color", "black"), $2("--tw-mask-radial-to-color", "transparent"), $2("--tw-mask-radial-shape", "ellipse"), $2("--tw-mask-radial-size", "farthest-corner"), $2("--tw-mask-radial-position", "center")]);
    t("mask-circle", [["--tw-mask-radial-shape", "circle"]]), t("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), t("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), t("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), t("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), t("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), t("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), t("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), t("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), t("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), t("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), t("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), t("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), t("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), t("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), n("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (o) => [a2("--tw-mask-radial-position", o)] }), n("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (o) => [y2(), D(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), a2("--tw-mask-radial-size", o)] }), S("mask-radial-from", { color: (o) => [y2(), D(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), a2("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), a2("--tw-mask-radial-from-color", o)], position: (o) => [y2(), D(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), a2("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), a2("--tw-mask-radial-from-position", o)] }), S("mask-radial-to", { color: (o) => [y2(), D(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), a2("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), a2("--tw-mask-radial-to-color", o)], position: (o) => [y2(), D(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), a2("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), a2("--tw-mask-radial-to-position", o)] });
    let O = () => Y2([$2("--tw-mask-conic-position", "0deg"), $2("--tw-mask-conic-from-position", "0%"), $2("--tw-mask-conic-to-position", "100%"), $2("--tw-mask-conic-from-color", "black"), $2("--tw-mask-conic-to-color", "transparent")]);
    n("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue({ value: o }) {
      if (!u(o))
        return null;
      let g = Number(o);
      return g === 0 ? "0deg" : g === 1 ? "1deg" : `calc(1deg * ${o})`;
    }, handleNegativeBareValue({ value: o }) {
      if (!u(o))
        return null;
      let g = Number(o);
      return g === 0 ? "0deg" : g === 1 ? "-1deg" : `calc(1deg * -${o})`;
    }, handle: (o) => [y2(), O(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), a2("--tw-mask-conic-position", o)] }), r("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), S("mask-conic-from", { color: (o) => [y2(), O(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), a2("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), a2("--tw-mask-conic-from-color", o)], position: (o) => [y2(), O(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), a2("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), a2("--tw-mask-conic-from-position", o)] }), S("mask-conic-to", { color: (o) => [y2(), O(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), a2("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), a2("--tw-mask-conic-to-color", o)], position: (o) => [y2(), O(), a2("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), a2("mask-composite", "intersect"), a2("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), a2("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), a2("--tw-mask-conic-to-position", o)] }), t("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), t("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), t("bg-clip-text", [["background-clip", "text"]]), t("bg-clip-border", [["background-clip", "border-box"]]), t("bg-clip-padding", [["background-clip", "padding-box"]]), t("bg-clip-content", [["background-clip", "content-box"]]), t("bg-origin-border", [["background-origin", "border-box"]]), t("bg-origin-padding", [["background-origin", "padding-box"]]), t("bg-origin-content", [["background-origin", "content-box"]]);
    for (let o of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"])
      t(`bg-blend-${o}`, [["background-blend-mode", o]]), t(`mix-blend-${o}`, [["mix-blend-mode", o]]);
    t("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), t("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), t("fill-none", [["fill", "none"]]), i.functional("fill", (o) => {
      if (!o.value)
        return;
      if (o.value.kind === "arbitrary") {
        let w = te2(o.value.value, o.modifier, e);
        return w === null ? undefined : [a2("fill", w)];
      }
      let g = ae2(o, e, ["--fill", "--color"]);
      if (g)
        return [a2("fill", g)];
    }), r("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }]), t("stroke-none", [["stroke", "none"]]), i.functional("stroke", (o) => {
      if (o.value) {
        if (o.value.kind === "arbitrary") {
          let g = o.value.value;
          switch (o.value.dataType ?? ge(g, ["color", "number", "length", "percentage"])) {
            case "number":
            case "length":
            case "percentage":
              return o.modifier ? undefined : [a2("stroke-width", g)];
            default:
              return g = te2(o.value.value, o.modifier, e), g === null ? undefined : [a2("stroke", g)];
          }
        }
        {
          let g = ae2(o, e, ["--stroke", "--color"]);
          if (g)
            return [a2("stroke", g)];
        }
        {
          let g = e.resolve(o.value.value, ["--stroke-width"]);
          if (g)
            return [a2("stroke-width", g)];
          if (u(o.value.value))
            return [a2("stroke-width", o.value.value)];
        }
      }
    }), r("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), t("object-contain", [["object-fit", "contain"]]), t("object-cover", [["object-fit", "cover"]]), t("object-fill", [["object-fit", "fill"]]), t("object-none", [["object-fit", "none"]]), t("object-scale-down", [["object-fit", "scale-down"]]), n("object", { themeKeys: ["--object-position"], handle: (o) => [a2("object-position", o)], staticValues: { top: [a2("object-position", "top")], "top-left": [a2("object-position", "left top")], "top-right": [a2("object-position", "right top")], bottom: [a2("object-position", "bottom")], "bottom-left": [a2("object-position", "left bottom")], "bottom-right": [a2("object-position", "right bottom")], left: [a2("object-position", "left")], right: [a2("object-position", "right")], center: [a2("object-position", "center")] } });
    for (let [o, g] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pbs", "padding-block-start"], ["pbe", "padding-block-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]])
      l(o, ["--padding", "--spacing"], (w) => [a2(g, w)]);
    t("text-left", [["text-align", "left"]]), t("text-center", [["text-align", "center"]]), t("text-right", [["text-align", "right"]]), t("text-justify", [["text-align", "justify"]]), t("text-start", [["text-align", "start"]]), t("text-end", [["text-align", "end"]]), l("indent", ["--text-indent", "--spacing"], (o) => [a2("text-indent", o)], { supportsNegative: true }), t("align-baseline", [["vertical-align", "baseline"]]), t("align-top", [["vertical-align", "top"]]), t("align-middle", [["vertical-align", "middle"]]), t("align-bottom", [["vertical-align", "bottom"]]), t("align-text-top", [["vertical-align", "text-top"]]), t("align-text-bottom", [["vertical-align", "text-bottom"]]), t("align-sub", [["vertical-align", "sub"]]), t("align-super", [["vertical-align", "super"]]), n("align", { themeKeys: [], handle: (o) => [a2("vertical-align", o)] }), i.functional("font", (o) => {
      if (!(!o.value || o.modifier)) {
        if (o.value.kind === "arbitrary") {
          let g = o.value.value;
          switch (o.value.dataType ?? ge(g, ["number", "generic-name", "family-name"])) {
            case "generic-name":
            case "family-name":
              return [a2("font-family", g)];
            default:
              return [Y2([$2("--tw-font-weight")]), a2("--tw-font-weight", g), a2("font-weight", g)];
          }
        }
        {
          let g = e.resolveWith(o.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
          if (g) {
            let [w, C = {}] = g;
            return [a2("font-family", w), a2("font-feature-settings", C["--font-feature-settings"]), a2("font-variation-settings", C["--font-variation-settings"])];
          }
        }
        {
          let g = e.resolve(o.value.value, ["--font-weight"]);
          if (g)
            return [Y2([$2("--tw-font-weight")]), a2("--tw-font-weight", g), a2("font-weight", g)];
        }
      }
    }), r("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), n("font-features", { themeKeys: [], handle: (o) => [a2("font-feature-settings", o)] }), t("uppercase", [["text-transform", "uppercase"]]), t("lowercase", [["text-transform", "lowercase"]]), t("capitalize", [["text-transform", "capitalize"]]), t("normal-case", [["text-transform", "none"]]), t("italic", [["font-style", "italic"]]), t("not-italic", [["font-style", "normal"]]), t("underline", [["text-decoration-line", "underline"]]), t("overline", [["text-decoration-line", "overline"]]), t("line-through", [["text-decoration-line", "line-through"]]), t("no-underline", [["text-decoration-line", "none"]]), t("font-stretch-normal", [["font-stretch", "normal"]]), t("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), t("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), t("font-stretch-condensed", [["font-stretch", "condensed"]]), t("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), t("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), t("font-stretch-expanded", [["font-stretch", "expanded"]]), t("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), t("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), n("font-stretch", { handleBareValue: ({ value: o }) => {
      if (!o.endsWith("%"))
        return null;
      let g = Number(o.slice(0, -1));
      return !u(g) || Number.isNaN(g) || g < 50 || g > 200 ? null : o;
    }, handle: (o) => [a2("font-stretch", o)] }), r("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), s("placeholder", { themeKeys: ["--placeholder-color", "--color"], handle: (o) => [H2("&::placeholder", [a2("--tw-sort", "placeholder-color"), a2("color", o)])] }), t("decoration-solid", [["text-decoration-style", "solid"]]), t("decoration-double", [["text-decoration-style", "double"]]), t("decoration-dotted", [["text-decoration-style", "dotted"]]), t("decoration-dashed", [["text-decoration-style", "dashed"]]), t("decoration-wavy", [["text-decoration-style", "wavy"]]), t("decoration-auto", [["text-decoration-thickness", "auto"]]), t("decoration-from-font", [["text-decoration-thickness", "from-font"]]), i.functional("decoration", (o) => {
      if (o.value) {
        if (o.value.kind === "arbitrary") {
          let g = o.value.value;
          switch (o.value.dataType ?? ge(g, ["color", "length", "percentage"])) {
            case "length":
            case "percentage":
              return o.modifier ? undefined : [a2("text-decoration-thickness", g)];
            default:
              return g = te2(g, o.modifier, e), g === null ? undefined : [a2("text-decoration-color", g)];
          }
        }
        {
          let g = e.resolve(o.value.value, ["--text-decoration-thickness"]);
          if (g)
            return o.modifier ? undefined : [a2("text-decoration-thickness", g)];
          if (u(o.value.value))
            return o.modifier ? undefined : [a2("text-decoration-thickness", `${o.value.value}px`)];
        }
        {
          let g = ae2(o, e, ["--text-decoration-color", "--color"]);
          if (g)
            return [a2("text-decoration-color", g)];
        }
      }
    }), r("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), n("animate", { themeKeys: ["--animate"], handle: (o) => [a2("animation", o)], staticValues: { none: [a2("animation", "none")] } });
    {
      let o = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), g = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), w = () => Y2([$2("--tw-blur"), $2("--tw-brightness"), $2("--tw-contrast"), $2("--tw-grayscale"), $2("--tw-hue-rotate"), $2("--tw-invert"), $2("--tw-opacity"), $2("--tw-saturate"), $2("--tw-sepia"), $2("--tw-drop-shadow"), $2("--tw-drop-shadow-color"), $2("--tw-drop-shadow-alpha", "100%", "<percentage>"), $2("--tw-drop-shadow-size")]), C = () => Y2([$2("--tw-backdrop-blur"), $2("--tw-backdrop-brightness"), $2("--tw-backdrop-contrast"), $2("--tw-backdrop-grayscale"), $2("--tw-backdrop-hue-rotate"), $2("--tw-backdrop-invert"), $2("--tw-backdrop-opacity"), $2("--tw-backdrop-saturate"), $2("--tw-backdrop-sepia")]);
      i.functional("filter", (A) => {
        if (!A.modifier) {
          if (A.value === null)
            return [w(), a2("filter", o)];
          if (A.value.kind === "arbitrary")
            return [a2("filter", A.value.value)];
          if (A.value.value === "none")
            return [a2("filter", "none")];
        }
      }), i.functional("backdrop-filter", (A) => {
        if (!A.modifier) {
          if (A.value === null)
            return [C(), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)];
          if (A.value.kind === "arbitrary")
            return [a2("-webkit-backdrop-filter", A.value.value), a2("backdrop-filter", A.value.value)];
          if (A.value.value === "none")
            return [a2("-webkit-backdrop-filter", "none"), a2("backdrop-filter", "none")];
        }
      }), n("blur", { themeKeys: ["--blur"], handle: (A) => [w(), a2("--tw-blur", `blur(${A})`), a2("filter", o)], staticValues: { none: [w(), a2("--tw-blur", " "), a2("filter", o)] } }), n("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (A) => [C(), a2("--tw-backdrop-blur", `blur(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)], staticValues: { none: [C(), a2("--tw-backdrop-blur", " "), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] } }), n("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [w(), a2("--tw-brightness", `brightness(${A})`), a2("filter", o)] }), n("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [C(), a2("--tw-backdrop-brightness", `brightness(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), r("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), n("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [w(), a2("--tw-contrast", `contrast(${A})`), a2("filter", o)] }), n("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [C(), a2("--tw-backdrop-contrast", `contrast(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), r("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), n("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [w(), a2("--tw-grayscale", `grayscale(${A})`), a2("filter", o)] }), n("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [C(), a2("--tw-backdrop-grayscale", `grayscale(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), r("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), n("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: A }) => u(A) ? `${A}deg` : null, handle: (A) => [w(), a2("--tw-hue-rotate", `hue-rotate(${A})`), a2("filter", o)] }), n("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: A }) => u(A) ? `${A}deg` : null, handle: (A) => [C(), a2("--tw-backdrop-hue-rotate", `hue-rotate(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), r("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), n("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [w(), a2("--tw-invert", `invert(${A})`), a2("filter", o)] }), n("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [C(), a2("--tw-backdrop-invert", `invert(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), r("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), n("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [w(), a2("--tw-saturate", `saturate(${A})`), a2("filter", o)] }), n("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, handle: (A) => [C(), a2("--tw-backdrop-saturate", `saturate(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), r("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), n("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [w(), a2("--tw-sepia", `sepia(${A})`), a2("filter", o)] }), n("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: A }) => u(A) ? `${A}%` : null, defaultValue: "100%", handle: (A) => [C(), a2("--tw-backdrop-sepia", `sepia(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), r("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), t("drop-shadow-none", [w, ["--tw-drop-shadow", " "], ["filter", o]]), i.functional("drop-shadow", (A) => {
        let T;
        if (A.modifier && (A.modifier.kind === "arbitrary" ? T = A.modifier.value : xe(A.modifier.value) && (T = `${A.modifier.value}%`)), !A.value) {
          let K = e.get(["--drop-shadow"]), N = e.resolve(null, ["--drop-shadow"]);
          return K === null || N === null ? undefined : [w(), a2("--tw-drop-shadow-alpha", T), ...wt("--tw-drop-shadow-size", K, T, (R) => `var(--tw-drop-shadow-color, ${R})`), a2("--tw-drop-shadow", d(N, ",").map((R) => `drop-shadow(${R})`).join(" ")), a2("filter", o)];
        }
        if (A.value.kind === "arbitrary") {
          let K = A.value.value;
          return (A.value.dataType ?? ge(K, ["color"])) === "color" ? (K = te2(K, A.modifier, e), K === null ? undefined : [w(), a2("--tw-drop-shadow-color", X2(K, "var(--tw-drop-shadow-alpha)")), a2("--tw-drop-shadow", "var(--tw-drop-shadow-size)")]) : A.modifier && !T ? undefined : [w(), a2("--tw-drop-shadow-alpha", T), ...wt("--tw-drop-shadow-size", K, T, (R) => `var(--tw-drop-shadow-color, ${R})`), a2("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), a2("filter", o)];
        }
        {
          let K = e.get([`--drop-shadow-${A.value.value}`]), N = e.resolve(A.value.value, ["--drop-shadow"]);
          if (K && N)
            return A.modifier && !T ? undefined : T ? [w(), a2("--tw-drop-shadow-alpha", T), ...wt("--tw-drop-shadow-size", K, T, (R) => `var(--tw-drop-shadow-color, ${R})`), a2("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), a2("filter", o)] : [w(), a2("--tw-drop-shadow-alpha", T), ...wt("--tw-drop-shadow-size", K, T, (R) => `var(--tw-drop-shadow-color, ${R})`), a2("--tw-drop-shadow", d(N, ",").map((R) => `drop-shadow(${R})`).join(" ")), a2("filter", o)];
        }
        {
          let K = ae2(A, e, ["--drop-shadow-color", "--color"]);
          if (K)
            return K === "inherit" ? [w(), a2("--tw-drop-shadow-color", "inherit"), a2("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [w(), a2("--tw-drop-shadow-color", X2(K, "var(--tw-drop-shadow-alpha)")), a2("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
        }
      }), r("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (A, T) => `${T * 5}`) }, { valueThemeKeys: ["--drop-shadow"] }]), n("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: A }) => xe(A) ? `${A}%` : null, handle: (A) => [C(), a2("--tw-backdrop-opacity", `opacity(${A})`), a2("-webkit-backdrop-filter", g), a2("backdrop-filter", g)] }), r("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (A, T) => `${T * 5}`), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
    }
    {
      let o = `var(--tw-ease, ${e.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, g = `var(--tw-duration, ${e.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
      n("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (w) => [a2("transition-property", w), a2("transition-timing-function", o), a2("transition-duration", g)], staticValues: { none: [a2("transition-property", "none")], all: [a2("transition-property", "all"), a2("transition-timing-function", o), a2("transition-duration", g)], colors: [a2("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), a2("transition-timing-function", o), a2("transition-duration", g)], opacity: [a2("transition-property", "opacity"), a2("transition-timing-function", o), a2("transition-duration", g)], shadow: [a2("transition-property", "box-shadow"), a2("transition-timing-function", o), a2("transition-duration", g)], transform: [a2("transition-property", "transform, translate, scale, rotate"), a2("transition-timing-function", o), a2("transition-duration", g)] } }), t("transition-discrete", [["transition-behavior", "allow-discrete"]]), t("transition-normal", [["transition-behavior", "normal"]]), n("delay", { handleBareValue: ({ value: w }) => u(w) ? `${w}ms` : null, themeKeys: ["--transition-delay"], handle: (w) => [a2("transition-delay", w)] });
      {
        let w = () => Y2([$2("--tw-duration")]);
        t("duration-initial", [w, ["--tw-duration", "initial"]]), i.functional("duration", (C) => {
          if (C.modifier || !C.value)
            return;
          let A = null;
          if (C.value.kind === "arbitrary" ? A = C.value.value : (A = e.resolve(C.value.fraction ?? C.value.value, ["--transition-duration"]), A === null && u(C.value.value) && (A = `${C.value.value}ms`)), A !== null)
            return [w(), a2("--tw-duration", A), a2("transition-duration", A)];
        });
      }
      r("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), r("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
    }
    {
      let o = () => Y2([$2("--tw-ease")]);
      n("ease", { themeKeys: ["--ease"], handle: (g) => [o(), a2("--tw-ease", g), a2("transition-timing-function", g)], staticValues: { initial: [o(), a2("--tw-ease", "initial")], linear: [o(), a2("--tw-ease", "linear"), a2("transition-timing-function", "linear")] } });
    }
    t("will-change-auto", [["will-change", "auto"]]), t("will-change-scroll", [["will-change", "scroll-position"]]), t("will-change-contents", [["will-change", "contents"]]), t("will-change-transform", [["will-change", "transform"]]), n("will-change", { themeKeys: [], handle: (o) => [a2("will-change", o)] }), t("content-none", [["--tw-content", "none"], ["content", "none"]]), n("content", { themeKeys: ["--content"], handle: (o) => [Y2([$2("--tw-content", '""')]), a2("--tw-content", o), a2("content", "var(--tw-content)")] });
    {
      let o = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", g = () => Y2([$2("--tw-contain-size"), $2("--tw-contain-layout"), $2("--tw-contain-paint"), $2("--tw-contain-style")]);
      t("contain-none", [["contain", "none"]]), t("contain-content", [["contain", "content"]]), t("contain-strict", [["contain", "strict"]]), t("contain-size", [g, ["--tw-contain-size", "size"], ["contain", o]]), t("contain-inline-size", [g, ["--tw-contain-size", "inline-size"], ["contain", o]]), t("contain-layout", [g, ["--tw-contain-layout", "layout"], ["contain", o]]), t("contain-paint", [g, ["--tw-contain-paint", "paint"], ["contain", o]]), t("contain-style", [g, ["--tw-contain-style", "style"], ["contain", o]]), n("contain", { themeKeys: [], handle: (w) => [a2("contain", w)] });
    }
    t("forced-color-adjust-none", [["forced-color-adjust", "none"]]), t("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), l("leading", ["--leading", "--spacing"], (o) => [Y2([$2("--tw-leading")]), a2("--tw-leading", o), a2("line-height", o)], { staticValues: { none: [Y2([$2("--tw-leading")]), a2("--tw-leading", "1"), a2("line-height", "1")] } }), n("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (o) => [Y2([$2("--tw-tracking")]), a2("--tw-tracking", o), a2("letter-spacing", o)] }), t("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), t("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
    {
      let o = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", g = () => Y2([$2("--tw-ordinal"), $2("--tw-slashed-zero"), $2("--tw-numeric-figure"), $2("--tw-numeric-spacing"), $2("--tw-numeric-fraction")]);
      t("normal-nums", [["font-variant-numeric", "normal"]]), t("ordinal", [g, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", o]]), t("slashed-zero", [g, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", o]]), t("lining-nums", [g, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", o]]), t("oldstyle-nums", [g, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", o]]), t("proportional-nums", [g, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", o]]), t("tabular-nums", [g, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", o]]), t("diagonal-fractions", [g, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", o]]), t("stacked-fractions", [g, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", o]]);
    }
    {
      let o = () => Y2([$2("--tw-outline-style", "solid")]);
      i.static("outline-hidden", () => [a2("--tw-outline-style", "none"), a2("outline-style", "none"), B2("@media", "(forced-colors: active)", [a2("outline", "2px solid transparent"), a2("outline-offset", "2px")])]), t("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), t("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), t("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), t("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), t("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), i.functional("outline", (g) => {
        if (g.value === null) {
          if (g.modifier)
            return;
          let w = e.get(["--default-outline-width"]) ?? "1px";
          return [o(), a2("outline-style", "var(--tw-outline-style)"), a2("outline-width", w)];
        }
        if (g.value.kind === "arbitrary") {
          let w = g.value.value;
          switch (g.value.dataType ?? ge(w, ["color", "length", "number", "percentage"])) {
            case "length":
            case "number":
            case "percentage":
              return g.modifier ? undefined : [o(), a2("outline-style", "var(--tw-outline-style)"), a2("outline-width", w)];
            default:
              return w = te2(w, g.modifier, e), w === null ? undefined : [a2("outline-color", w)];
          }
        }
        {
          let w = ae2(g, e, ["--outline-color", "--color"]);
          if (w)
            return [a2("outline-color", w)];
        }
        {
          if (g.modifier)
            return;
          let w = e.resolve(g.value.value, ["--outline-width"]);
          if (w)
            return [o(), a2("outline-style", "var(--tw-outline-style)"), a2("outline-width", w)];
          if (u(g.value.value))
            return [o(), a2("outline-style", "var(--tw-outline-style)"), a2("outline-width", `${g.value.value}px`)];
        }
      }), r("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (g, w) => `${w * 5}`), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), n("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: g }) => u(g) ? `${g}px` : null, handle: (g) => [a2("outline-offset", g)] }), r("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
    }
    n("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: o }) => xe(o) ? `${o}%` : null, handle: (o) => [a2("opacity", o)] }), r("opacity", () => [{ values: Array.from({ length: 21 }, (o, g) => `${g * 5}`), valueThemeKeys: ["--opacity"] }]), n("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: o }) => u(o) ? `${o}px` : null, handle: (o) => [a2("text-underline-offset", o)], staticValues: { auto: [a2("text-underline-offset", "auto")] } }), r("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), i.functional("text", (o) => {
      if (o.value) {
        if (o.value.kind === "arbitrary") {
          let g = o.value.value;
          switch (o.value.dataType ?? ge(g, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
            case "size":
            case "length":
            case "percentage":
            case "absolute-size":
            case "relative-size": {
              if (o.modifier) {
                let C = o.modifier.kind === "arbitrary" ? o.modifier.value : e.resolve(o.modifier.value, ["--leading"]);
                if (!C && de(o.modifier.value)) {
                  if (!e.resolve(null, ["--spacing"]))
                    return null;
                  C = `--spacing(${o.modifier.value})`;
                }
                return !C && o.modifier.value === "none" && (C = "1"), C ? [a2("font-size", g), a2("line-height", C)] : null;
              }
              return [a2("font-size", g)];
            }
            default:
              return g = te2(g, o.modifier, e), g === null ? undefined : [a2("color", g)];
          }
        }
        {
          let g = ae2(o, e, ["--text-color", "--color"]);
          if (g)
            return [a2("color", g)];
        }
        {
          let g = e.resolveWith(o.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
          if (g) {
            let [w, C = {}] = Array.isArray(g) ? g : [g];
            if (o.modifier) {
              let A = o.modifier.kind === "arbitrary" ? o.modifier.value : e.resolve(o.modifier.value, ["--leading"]);
              if (!A && de(o.modifier.value)) {
                if (!e.resolve(null, ["--spacing"]))
                  return null;
                A = `--spacing(${o.modifier.value})`;
              }
              if (!A && o.modifier.value === "none" && (A = "1"), !A)
                return null;
              let T = [a2("font-size", w)];
              return A && T.push(a2("line-height", A)), T;
            }
            return typeof C == "string" ? [a2("font-size", w), a2("line-height", C)] : [a2("font-size", w), a2("line-height", C["--line-height"] ? `var(--tw-leading, ${C["--line-height"]})` : undefined), a2("letter-spacing", C["--letter-spacing"] ? `var(--tw-tracking, ${C["--letter-spacing"]})` : undefined), a2("font-weight", C["--font-weight"] ? `var(--tw-font-weight, ${C["--font-weight"]})` : undefined)];
          }
        }
      }
    }), r("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
    let L = () => Y2([$2("--tw-text-shadow-color"), $2("--tw-text-shadow-alpha", "100%", "<percentage>")]);
    t("text-shadow-initial", [L, ["--tw-text-shadow-color", "initial"]]), i.functional("text-shadow", (o) => {
      let g;
      if (o.modifier && (o.modifier.kind === "arbitrary" ? g = o.modifier.value : xe(o.modifier.value) && (g = `${o.modifier.value}%`)), !o.value) {
        let w = e.get(["--text-shadow"]);
        return w === null ? undefined : [L(), a2("--tw-text-shadow-alpha", g), ...xe2("text-shadow", w, g, (C) => `var(--tw-text-shadow-color, ${C})`)];
      }
      if (o.value.kind === "arbitrary") {
        let w = o.value.value;
        return (o.value.dataType ?? ge(w, ["color"])) === "color" ? (w = te2(w, o.modifier, e), w === null ? undefined : [L(), a2("--tw-text-shadow-color", X2(w, "var(--tw-text-shadow-alpha)"))]) : [L(), a2("--tw-text-shadow-alpha", g), ...xe2("text-shadow", w, g, (A) => `var(--tw-text-shadow-color, ${A})`)];
      }
      switch (o.value.value) {
        case "none":
          return o.modifier ? undefined : [L(), a2("text-shadow", "none")];
        case "inherit":
          return o.modifier ? undefined : [L(), a2("--tw-text-shadow-color", "inherit")];
      }
      {
        let w = e.get([`--text-shadow-${o.value.value}`]);
        if (w)
          return [L(), a2("--tw-text-shadow-alpha", g), ...xe2("text-shadow", w, g, (C) => `var(--tw-text-shadow-color, ${C})`)];
      }
      {
        let w = ae2(o, e, ["--text-shadow-color", "--color"]);
        if (w)
          return [L(), a2("--tw-text-shadow-color", X2(w, "var(--tw-text-shadow-alpha)"))];
      }
    }), r("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`), hasDefaultValue: e.get(["--text-shadow"]) !== null }]);
    {
      let A = function(N) {
        return `var(--tw-ring-inset,) 0 0 0 calc(${N} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${C})`;
      }, T = function(N) {
        return `inset 0 0 0 ${N} var(--tw-inset-ring-color, currentcolor)`;
      };
      var ee = A, ie = T;
      let o = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), g = "0 0 #0000", w = () => Y2([$2("--tw-shadow", g), $2("--tw-shadow-color"), $2("--tw-shadow-alpha", "100%", "<percentage>"), $2("--tw-inset-shadow", g), $2("--tw-inset-shadow-color"), $2("--tw-inset-shadow-alpha", "100%", "<percentage>"), $2("--tw-ring-color"), $2("--tw-ring-shadow", g), $2("--tw-inset-ring-color"), $2("--tw-inset-ring-shadow", g), $2("--tw-ring-inset"), $2("--tw-ring-offset-width", "0px", "<length>"), $2("--tw-ring-offset-color", "#fff"), $2("--tw-ring-offset-shadow", g)]);
      t("shadow-initial", [w, ["--tw-shadow-color", "initial"]]), i.functional("shadow", (N) => {
        let R;
        if (N.modifier && (N.modifier.kind === "arbitrary" ? R = N.modifier.value : xe(N.modifier.value) && (R = `${N.modifier.value}%`)), !N.value) {
          let W = e.get(["--shadow"]);
          return W === null ? undefined : [w(), a2("--tw-shadow-alpha", R), ...xe2("--tw-shadow", W, R, (he) => `var(--tw-shadow-color, ${he})`), a2("box-shadow", o)];
        }
        if (N.value.kind === "arbitrary") {
          let W = N.value.value;
          return (N.value.dataType ?? ge(W, ["color"])) === "color" ? (W = te2(W, N.modifier, e), W === null ? undefined : [w(), a2("--tw-shadow-color", X2(W, "var(--tw-shadow-alpha)"))]) : [w(), a2("--tw-shadow-alpha", R), ...xe2("--tw-shadow", W, R, (Ot) => `var(--tw-shadow-color, ${Ot})`), a2("box-shadow", o)];
        }
        switch (N.value.value) {
          case "none":
            return N.modifier ? undefined : [w(), a2("--tw-shadow", g), a2("box-shadow", o)];
          case "inherit":
            return N.modifier ? undefined : [w(), a2("--tw-shadow-color", "inherit")];
        }
        {
          let W = e.get([`--shadow-${N.value.value}`]);
          if (W)
            return [w(), a2("--tw-shadow-alpha", R), ...xe2("--tw-shadow", W, R, (he) => `var(--tw-shadow-color, ${he})`), a2("box-shadow", o)];
        }
        {
          let W = ae2(N, e, ["--box-shadow-color", "--color"]);
          if (W)
            return [w(), a2("--tw-shadow-color", X2(W, "var(--tw-shadow-alpha)"))];
        }
      }), r("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`), hasDefaultValue: e.get(["--shadow"]) !== null }]), t("inset-shadow-initial", [w, ["--tw-inset-shadow-color", "initial"]]), i.functional("inset-shadow", (N) => {
        let R;
        if (N.modifier && (N.modifier.kind === "arbitrary" ? R = N.modifier.value : xe(N.modifier.value) && (R = `${N.modifier.value}%`)), !N.value) {
          let W = e.get(["--inset-shadow"]);
          return W === null ? undefined : [w(), a2("--tw-inset-shadow-alpha", R), ...xe2("--tw-inset-shadow", W, R, (he) => `var(--tw-inset-shadow-color, ${he})`), a2("box-shadow", o)];
        }
        if (N.value.kind === "arbitrary") {
          let W = N.value.value;
          return (N.value.dataType ?? ge(W, ["color"])) === "color" ? (W = te2(W, N.modifier, e), W === null ? undefined : [w(), a2("--tw-inset-shadow-color", X2(W, "var(--tw-inset-shadow-alpha)"))]) : [w(), a2("--tw-inset-shadow-alpha", R), ...xe2("--tw-inset-shadow", W, R, (Ot) => `var(--tw-inset-shadow-color, ${Ot})`, "inset"), a2("box-shadow", o)];
        }
        switch (N.value.value) {
          case "none":
            return N.modifier ? undefined : [w(), a2("--tw-inset-shadow", `inset ${g}`), a2("box-shadow", o)];
          case "inherit":
            return N.modifier ? undefined : [w(), a2("--tw-inset-shadow-color", "inherit")];
        }
        {
          let W = e.get([`--inset-shadow-${N.value.value}`]);
          if (W)
            return [w(), a2("--tw-inset-shadow-alpha", R), ...xe2("--tw-inset-shadow", W, R, (he) => `var(--tw-inset-shadow-color, ${he})`), a2("box-shadow", o)];
        }
        {
          let W = ae2(N, e, ["--box-shadow-color", "--color"]);
          if (W)
            return [w(), a2("--tw-inset-shadow-color", X2(W, "var(--tw-inset-shadow-alpha)"))];
        }
      }), r("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`), hasDefaultValue: e.get(["--inset-shadow"]) !== null }]), t("ring-inset", [w, ["--tw-ring-inset", "inset"]]);
      let C = e.get(["--default-ring-color"]) ?? "currentcolor";
      i.functional("ring", (N) => {
        if (!N.value) {
          if (N.modifier)
            return;
          let R = e.get(["--default-ring-width"]) ?? "1px";
          return [w(), a2("--tw-ring-shadow", A(R)), a2("box-shadow", o)];
        }
        if (N.value.kind === "arbitrary") {
          let R = N.value.value;
          return (N.value.dataType ?? ge(R, ["color", "length"])) === "length" ? N.modifier ? undefined : [w(), a2("--tw-ring-shadow", A(R)), a2("box-shadow", o)] : (R = te2(R, N.modifier, e), R === null ? undefined : [a2("--tw-ring-color", R)]);
        }
        {
          let R = ae2(N, e, ["--ring-color", "--color"]);
          if (R)
            return [a2("--tw-ring-color", R)];
        }
        {
          if (N.modifier)
            return;
          let R = e.resolve(N.value.value, ["--ring-width"]);
          if (R === null && u(N.value.value) && (R = `${N.value.value}px`), R)
            return [w(), a2("--tw-ring-shadow", A(R)), a2("box-shadow", o)];
        }
      }), r("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), i.functional("inset-ring", (N) => {
        if (!N.value)
          return N.modifier ? undefined : [w(), a2("--tw-inset-ring-shadow", T("1px")), a2("box-shadow", o)];
        if (N.value.kind === "arbitrary") {
          let R = N.value.value;
          return (N.value.dataType ?? ge(R, ["color", "length"])) === "length" ? N.modifier ? undefined : [w(), a2("--tw-inset-ring-shadow", T(R)), a2("box-shadow", o)] : (R = te2(R, N.modifier, e), R === null ? undefined : [a2("--tw-inset-ring-color", R)]);
        }
        {
          let R = ae2(N, e, ["--ring-color", "--color"]);
          if (R)
            return [a2("--tw-inset-ring-color", R)];
        }
        {
          if (N.modifier)
            return;
          let R = e.resolve(N.value.value, ["--ring-width"]);
          if (R === null && u(N.value.value) && (R = `${N.value.value}px`), R)
            return [w(), a2("--tw-inset-ring-shadow", T(R)), a2("box-shadow", o)];
        }
      }), r("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (N, R) => `${R * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
      let K = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
      i.functional("ring-offset", (N) => {
        if (N.value) {
          if (N.value.kind === "arbitrary") {
            let R = N.value.value;
            return (N.value.dataType ?? ge(R, ["color", "length"])) === "length" ? N.modifier ? undefined : [a2("--tw-ring-offset-width", R), a2("--tw-ring-offset-shadow", K)] : (R = te2(R, N.modifier, e), R === null ? undefined : [a2("--tw-ring-offset-color", R)]);
          }
          {
            let R = e.resolve(N.value.value, ["--ring-offset-width"]);
            if (R)
              return N.modifier ? undefined : [a2("--tw-ring-offset-width", R), a2("--tw-ring-offset-shadow", K)];
            if (u(N.value.value))
              return N.modifier ? undefined : [a2("--tw-ring-offset-width", `${N.value.value}px`), a2("--tw-ring-offset-shadow", K)];
          }
          {
            let R = ae2(N, e, ["--ring-offset-color", "--color"]);
            if (R)
              return [a2("--tw-ring-offset-color", R)];
          }
        }
      });
    }
    return r("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifierThemeKeys: ["--opacity"], modifiers: Array.from({ length: 21 }, (o, g) => `${g * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), i.functional("@container", (o) => {
      let g = null;
      if (o.value === null ? g = "inline-size" : o.value.kind === "arbitrary" ? g = o.value.value : o.value.kind === "named" && o.value.value === "normal" ? g = "normal" : o.value.kind === "named" && o.value.value === "size" && (g = "size"), g !== null)
        return o.modifier ? [a2("container-type", g), a2("container-name", o.modifier.value)] : [a2("container-type", g)];
    }), r("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), i;
  }
  var ir = ["number", "integer", "ratio", "percentage"];
  function ui(e) {
    let i = a(e.params);
    return al(i) ? (r) => {
      let t = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: new Set, literals: new Set }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: new Set, literals: new Set } };
      P2(e.nodes, (n) => {
        if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier("))
          return;
        let s = M2(n.value);
        P2(s, (l) => {
          if (l.kind !== "function")
            return;
          if (l.value === "--spacing" && !(t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber))
            return P2(l.nodes, (f) => {
              if (f.kind !== "function" || f.value !== "--value" && f.value !== "--modifier")
                return;
              let c = f.value;
              for (let p of f.nodes)
                if (p.kind === "word") {
                  if (p.value === "integer")
                    t[c].usedSpacingInteger ||= true;
                  else if (p.value === "number" && (t[c].usedSpacingNumber ||= true, t["--modifier"].usedSpacingNumber && t["--value"].usedSpacingNumber))
                    return V2.Stop;
                }
            }), V2.Continue;
          if (l.value !== "--value" && l.value !== "--modifier")
            return;
          let d2 = d(F2(l.nodes), ",");
          for (let [f, c] of d2.entries())
            c = c.replace(/\\\*/g, "*"), c = c.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), c = c.replace(/\s+/g, ""), c = c.replace(/(-\*){2,}/g, "-*"), c[0] === "-" && c[1] === "-" && !c.includes("(") && !c.includes("-*") && (c += "-*"), d2[f] = c;
          l.nodes = M2(d2.join(","));
          for (let f of l.nodes)
            if (f.kind === "word" && (f.value[0] === '"' || f.value[0] === "'") && f.value[0] === f.value[f.value.length - 1]) {
              let c = f.value.slice(1, -1);
              t[l.value].literals.add(c);
            } else if (f.kind === "word" && f.value[0] === "-" && f.value[1] === "-") {
              let c = f.value.replace(/-\*.*$/g, "");
              t[l.value].themeKeys.add(c);
            } else if (f.kind === "word" && !(f.value[0] === "[" && f.value[f.value.length - 1] === "]") && !ir.includes(f.value)) {
              console.warn(`Unsupported bare value data type: "${f.value}".
Only valid data types are: ${ir.map((k) => `"${k}"`).join(", ")}.
`);
              let c = f.value, p = structuredClone(l), m = "¶";
              P2(p.nodes, (k) => {
                if (k.kind === "word" && k.value === c)
                  return V2.ReplaceSkip({ kind: "word", value: m });
              });
              let u = "^".repeat(F2([f]).length), v = F2([p]).indexOf(m), h = ["```css", F2([l]), " ".repeat(v) + u, "```"].join(`
`);
              console.warn(h);
            }
        }), n.value = F2(s);
      }), r.utilities.functional(i.slice(0, -2), (n) => {
        let s = re2(e), { value: l, modifier: d } = n, f = false, c = false, p = false, m = false, u = new Map, v = false;
        if (P2([s], (h, k) => {
          let y = k.parent;
          if (y?.kind !== "rule" && y?.kind !== "at-rule" || h.kind !== "declaration" || !h.value)
            return;
          let S = false, x = M2(h.value);
          if (P2(x, (b) => {
            if (b.kind === "function") {
              if (b.value === "--value") {
                f = true;
                let I = li(l, b, r);
                return I ? (c = true, I.ratio ? v = true : u.set(h, y), V2.ReplaceSkip(I.nodes)) : (S = true, V2.Stop);
              } else if (b.value === "--modifier") {
                p = true;
                let I = li(d, b, r);
                return I ? (m = true, V2.ReplaceSkip(I.nodes)) : (S = true, V2.Stop);
              }
            }
          }), S)
            return V2.ReplaceSkip([]);
          h.value = F2(x);
        }), !f || !c || p && !m && d !== null || v && m || d && !v && !m)
          return null;
        if (v)
          for (let [h, k] of u) {
            let y = k.nodes.indexOf(h);
            y !== -1 && k.nodes.splice(y, 1);
          }
        return s.nodes;
      }), r.utilities.suggest(i.slice(0, -2), () => {
        let n = [], s = [];
        for (let [l, { literals: d, usedSpacingNumber: f, usedSpacingInteger: c, themeKeys: p }] of [[n, t["--value"]], [s, t["--modifier"]]]) {
          for (let m of d)
            l.push(m);
          if (f)
            l.push(...yt);
          else if (c)
            for (let m of yt)
              u(m) && l.push(m);
          for (let m of r.theme.keysInNamespaces(p))
            l.push(m.replace(oi, (u, v, h) => `${v}.${h}`));
        }
        return [{ values: n, modifiers: s }];
      });
    } : ll(i) ? (r) => {
      r.utilities.static(i, () => e.nodes.map(re2));
    } : null;
  }
  function li(e, i, r) {
    if (e === null) {
      for (let t of i.nodes)
        if (t.kind === "function" && t.value === "--default")
          return { nodes: t.nodes };
      return;
    }
    for (let t of i.nodes) {
      if (e.kind === "named" && t.kind === "word" && (t.value[0] === "'" || t.value[0] === '"') && t.value[t.value.length - 1] === t.value[0] && t.value.slice(1, -1) === e.value)
        return { nodes: M2(e.value) };
      if (e.kind === "named" && t.kind === "word" && t.value[0] === "-" && t.value[1] === "-") {
        let n = t.value;
        if (n.endsWith("-*")) {
          n = n.slice(0, -2);
          let s = r.theme.resolve(e.value, [n]);
          if (s)
            return { nodes: M2(s) };
        } else {
          let s = n.split("-*");
          if (s.length <= 1)
            continue;
          let l = [s.shift()], d = r.theme.resolveWith(e.value, l, s);
          if (d) {
            let [, f = {}] = d;
            {
              let c = f[s.pop()];
              if (c)
                return { nodes: M2(c) };
            }
          }
        }
      } else if (e.kind === "named" && t.kind === "word") {
        if (!ir.includes(t.value))
          continue;
        let n = t.value === "ratio" && "fraction" in e ? e.fraction : e.value;
        if (!n)
          continue;
        let s = ge(n, [t.value]);
        if (s === null)
          continue;
        if (s === "ratio") {
          let [l, d2] = d(n, "/").map(Number);
          if (!u(l) || !u(d2))
            continue;
        } else {
          if (s === "number" && !de(n))
            continue;
          if (s === "percentage" && !u(n.slice(0, -1)))
            continue;
        }
        if (s === "ratio") {
          let [l, d2] = d(n, "/");
          return { nodes: M2(`${l.trim()} / ${d2.trim()}`), ratio: true };
        }
        return { nodes: M2(n), ratio: false };
      } else if (e.kind === "arbitrary" && t.kind === "word" && t.value[0] === "[" && t.value[t.value.length - 1] === "]") {
        let n = t.value.slice(1, -1);
        if (n === "*")
          return { nodes: M2(e.value) };
        if ("dataType" in e && e.dataType && e.dataType !== n)
          continue;
        if ("dataType" in e && e.dataType)
          return { nodes: M2(e.value) };
        if (ge(e.value, [n]) !== null)
          return { nodes: M2(e.value) };
      }
    }
  }
  function xe2(e, i, r, t, n = "") {
    let s = false, l = it(i, (f) => r == null ? t(f) : f.startsWith("current") ? t(X2(f, r)) : ((f.startsWith("var(") || r.startsWith("var(")) && (s = true), t(ai(f, r))));
    function d2(f) {
      return n ? d(f, ",").map((c) => n.trim() + " " + c.trim()).join(", ") : f;
    }
    return s ? [a2(e, d2(it(i, t))), Z2("@supports (color: lab(from red l a b))", [a2(e, d2(l))])] : [a2(e, d2(l))];
  }
  function wt(e, i, r, t, n = "") {
    let s = false, l = d(i, ",").map((d) => it(d, (f) => r == null ? t(f) : f.startsWith("current") ? t(X2(f, r)) : ((f.startsWith("var(") || r.startsWith("var(")) && (s = true), t(ai(f, r))))).map((d) => `drop-shadow(${d})`).join(" ");
    return s ? [a2(e, n + d(i, ",").map((d) => `drop-shadow(${it(d, t)})`).join(" ")), Z2("@supports (color: lab(from red l a b))", [a2(e, n + l)])] : [a2(e, n + l)];
  }
  var fi = /^-?[a-z][a-zA-Z0-9_-]*/;
  var Zn = 37;
  var Jn = 47;
  var Qn = 46;
  var Xn = 97;
  var el = 122;
  var tl = 65;
  var rl = 90;
  var kt = 48;
  var bt = 57;
  var il = 95;
  var nl = 45;
  function ll(e) {
    let i = fi.exec(e);
    if (i === null)
      return false;
    let r = i[0], t = e.slice(r.length);
    if (t.length === 0 && r.endsWith("-"))
      return false;
    if (t.length === 0)
      return true;
    let n = false;
    for (let s = 0;s < t.length; s++) {
      let l = t.charCodeAt(s);
      switch (l) {
        case Zn: {
          if (s !== t.length - 1)
            return false;
          let f = (t[s - 1] || r[r.length - 1] || "").charCodeAt(0);
          if (f < kt || f > bt)
            return false;
          break;
        }
        case Jn: {
          if (s === t.length - 1 || n)
            return false;
          n = true;
          break;
        }
        case Qn: {
          let f = (t[s - 1] || r[r.length - 1] || "").charCodeAt(0);
          if (f < kt || f > bt)
            return false;
          let p = (t[s + 1] || "").charCodeAt(0);
          if (p < kt || p > bt)
            return false;
          break;
        }
        case il:
        case nl:
          continue;
        default: {
          if (l >= Xn && l <= el || l >= tl && l <= rl || l >= kt && l <= bt)
            continue;
          return false;
        }
      }
    }
    return true;
  }
  function al(e) {
    if (!e.endsWith("-*"))
      return false;
    e = e.slice(0, -2);
    let i = fi.exec(e);
    if (i === null)
      return false;
    let r = i[0];
    return e.slice(r.length).length === 0;
  }
  var nr = { "--alpha": ol, "--spacing": sl, "--theme": ul, theme: fl };
  function ol(e, i, r, ...t) {
    let [n, s] = d(r, "/").map((l) => l.trim());
    if (!n || !s)
      throw new Error(`The --alpha(…) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    if (t.length > 0)
      throw new Error(`The --alpha(…) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    return X2(n, s);
  }
  function sl(e, i, r, ...t) {
    if (!r)
      throw new Error("The --spacing(…) function requires an argument, but received none.");
    if (t.length > 0)
      throw new Error(`The --spacing(…) function only accepts a single argument, but received ${t.length + 1}.`);
    let n = e.theme.resolve(null, ["--spacing"]);
    if (!n)
      throw new Error("The --spacing(…) function requires that the `--spacing` theme variable exists, but it was not found.");
    let s = le.get(r);
    if (s) {
      if (s[0] === 0)
        return "0px";
      if (s[0] === 1)
        return n;
    }
    return `calc(${n} * ${r})`;
  }
  function ul(e, i, r, ...t) {
    if (!r.startsWith("--"))
      throw new Error("The --theme(…) function can only be used with CSS variables from your theme.");
    let n = false;
    r.endsWith(" inline") && (n = true, r = r.slice(0, -7)), i.kind === "at-rule" && (n = true);
    let s = e.resolveThemeValue(r, n);
    if (!s) {
      if (t.length > 0)
        return t.join(", ");
      throw new Error(`Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (t.length === 0)
      return s;
    let l = t.join(", ");
    if (l === "initial")
      return s;
    if (s === "initial")
      return l;
    if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
      let d = M2(s);
      return pl(d, l), F2(d);
    }
    return s;
  }
  function fl(e, i, r, ...t) {
    r = cl(r);
    let n = e.resolveThemeValue(r);
    if (!n && t.length > 0)
      return t.join(", ");
    if (!n)
      throw new Error(`Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return n;
  }
  var ci = new RegExp(Object.keys(nr).map((e) => `${e}\\(`).join("|"));
  function Le(e, i) {
    let r = 0;
    return P2(e, (t) => {
      if (t.kind === "declaration" && t.value && ci.test(t.value)) {
        r |= 8, t.value = pi(t.value, t, i);
        return;
      }
      t.kind === "at-rule" && (t.name === "@media" || t.name === "@custom-media" || t.name === "@container" || t.name === "@supports") && ci.test(t.params) && (r |= 8, t.params = pi(t.params, t, i));
    }), r;
  }
  function pi(e, i, r) {
    let t = M2(e);
    return P2(t, (n) => {
      if (n.kind === "function" && n.value in nr) {
        let s = d(F2(n.nodes).trim(), ",").map((d) => d.trim()), l = nr[n.value](r, i, ...s);
        return V2.Replace(M2(l));
      }
    }), F2(t);
  }
  function cl(e) {
    if (e[0] !== "'" && e[0] !== '"')
      return e;
    let i = "", r = e[0];
    for (let t = 1;t < e.length - 1; t++) {
      let n = e[t], s = e[t + 1];
      n === "\\" && (s === r || s === "\\") ? (i += s, t++) : i += n;
    }
    return i;
  }
  function pl(e, i) {
    P2(e, (r) => {
      if (r.kind === "function" && !(r.value !== "var" && r.value !== "theme" && r.value !== "--theme"))
        if (r.nodes.length === 1)
          r.nodes.push({ kind: "word", value: `, ${i}` });
        else {
          let t = r.nodes[r.nodes.length - 1];
          t.kind === "word" && t.value === "initial" && (t.value = i);
        }
    });
  }
  function xt(e, i) {
    let r = e.length, t = i.length, n = r < t ? r : t;
    for (let s = 0;s < n; s++) {
      let l = e.charCodeAt(s), d = i.charCodeAt(s);
      if (l >= 48 && l <= 57 && d >= 48 && d <= 57) {
        let f = s, c = s + 1, p = s, m = s + 1;
        for (l = e.charCodeAt(c);l >= 48 && l <= 57; )
          l = e.charCodeAt(++c);
        for (d = i.charCodeAt(m);d >= 48 && d <= 57; )
          d = i.charCodeAt(++m);
        let u = e.slice(f, c), v = i.slice(p, m), h = Number(u) - Number(v);
        if (h)
          return h;
        if (u < v)
          return -1;
        if (u > v)
          return 1;
        continue;
      }
      if (l !== d)
        return l - d;
    }
    return e.length - i.length;
  }
  function Me(e) {
    if (e[0] !== "[" || e[e.length - 1] !== "]")
      return null;
    let i = 1, r = i, t = e.length - 1;
    for (;je(e.charCodeAt(i)); )
      i++;
    {
      for (r = i;i < t; i++) {
        let p = e.charCodeAt(i);
        if (p === 92) {
          i++;
          continue;
        }
        if (!(p >= 65 && p <= 90) && !(p >= 97 && p <= 122) && !(p >= 48 && p <= 57) && !(p === 45 || p === 95) && !(p >= 128))
          break;
      }
      if (r === i)
        return null;
    }
    let n = e.slice(r, i);
    for (;je(e.charCodeAt(i)); )
      i++;
    if (i === t)
      return { attribute: n, operator: null, quote: null, value: null, sensitivity: null };
    let s = null, l = e.charCodeAt(i);
    if (l === 61)
      s = "=", i++;
    else if ((l === 126 || l === 124 || l === 94 || l === 36 || l === 42) && e.charCodeAt(i + 1) === 61)
      s = e[i] + "=", i += 2;
    else
      return null;
    for (;je(e.charCodeAt(i)); )
      i++;
    if (i === t)
      return null;
    let d = "", f = null;
    if (l = e.charCodeAt(i), l === 39 || l === 34) {
      f = e[i], i++, r = i;
      for (let p = i;p < t; p++) {
        let m = e.charCodeAt(p);
        m === l ? i = p + 1 : m === 92 && p++;
      }
      d = e.slice(r, i - 1);
    } else {
      for (r = i;i < t && !je(e.charCodeAt(i)); )
        i++;
      d = e.slice(r, i);
    }
    for (;je(e.charCodeAt(i)); )
      i++;
    if (i === t)
      return { attribute: n, operator: s, quote: f, value: d, sensitivity: null };
    let c = null;
    switch (e.charCodeAt(i)) {
      case 105:
      case 73: {
        c = "i", i++;
        break;
      }
      case 115:
      case 83: {
        c = "s", i++;
        break;
      }
      default:
        return null;
    }
    for (;je(e.charCodeAt(i)); )
      i++;
    return i !== t ? null : { attribute: n, operator: s, quote: f, value: d, sensitivity: c };
  }
  function je(e) {
    switch (e) {
      case 32:
      case 9:
      case 10:
      case 13:
        return true;
      default:
        return false;
    }
  }
  function mi(e) {
    let i = false;
    return P2(e, { exit(r) {
      if (r.kind !== "function" || r.value !== "calc" && r.value !== "" || r.nodes.length !== 5 || r.nodes[2].kind !== "word" || r.nodes[2].value !== "*" && r.nodes[2].value !== "+")
        return;
      let t = r.nodes[0], n = r.nodes[4];
      if (dl(t, n)) {
        i = true;
        let s = { kind: "function", value: r.value, nodes: [n, r.nodes[1], r.nodes[2], r.nodes[3], t] };
        return V2.ReplaceSkip(s);
      }
    } }), [i, e];
  }
  function dl(e, i) {
    let r = e.kind === "word" ? le.get(e.value) : null, t = i.kind === "word" ? le.get(i.value) : null;
    if (r !== null && t === null)
      return true;
    if (r === null && t !== null)
      return false;
    if (r !== null && t !== null) {
      let [n, s] = r, [l, d] = t;
      if (s === null && d !== null)
        return true;
      if (s !== null && d === null)
        return false;
      if (n !== l)
        return n - l > 0;
      if (s !== d)
        return (s ?? "").localeCompare(d ?? "") > 0;
    }
    return F2([e]).localeCompare(F2([i])) > 0;
  }
  function Fe(e, i = null) {
    return Array.isArray(e) && e.length === 2 && typeof e[1] == "object" && typeof e[1] !== null ? i ? e[1][i] ?? null : e[0] : Array.isArray(e) && i === null ? e.join(", ") : typeof e == "string" && i === null ? e : null;
  }
  function gi(e, { theme: i }, r) {
    for (let t of r) {
      let n = We([t]);
      n && e.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [t, n] of ml(i)) {
      if (typeof n != "string" && typeof n != "number")
        continue;
      if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), t[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
        let l = typeof n == "string" ? parseFloat(n) : n;
        l >= 0 && l <= 1 && (n = l * 100 + "%");
      }
      let s = We(t);
      s && e.theme.add(`--${s}`, "" + n, 7);
    }
    if (Object.hasOwn(i, "fontFamily")) {
      let t = 5;
      {
        let n = Fe(i.fontFamily.sans);
        n && e.theme.hasDefault("--font-sans") && (e.theme.add("--default-font-family", n, t), e.theme.add("--default-font-feature-settings", Fe(i.fontFamily.sans, "fontFeatureSettings") ?? "normal", t), e.theme.add("--default-font-variation-settings", Fe(i.fontFamily.sans, "fontVariationSettings") ?? "normal", t));
      }
      {
        let n = Fe(i.fontFamily.mono);
        n && e.theme.hasDefault("--font-mono") && (e.theme.add("--default-mono-font-family", n, t), e.theme.add("--default-mono-font-feature-settings", Fe(i.fontFamily.mono, "fontFeatureSettings") ?? "normal", t), e.theme.add("--default-mono-font-variation-settings", Fe(i.fontFamily.mono, "fontVariationSettings") ?? "normal", t));
      }
    }
    return i;
  }
  function ml(e) {
    let i = [];
    return hi(e, [], (r, t) => {
      if (wl(r))
        return i.push([t, r]), 1;
      if (kl(r)) {
        i.push([t, r[0]]);
        for (let n of Reflect.ownKeys(r[1]))
          i.push([[...t, `-${n}`], r[1][n]]);
        return 1;
      }
      if (Array.isArray(r) && r.every((n) => typeof n == "string"))
        return t[0] === "fontSize" ? (i.push([t, r[0]]), r.length >= 2 && i.push([[...t, "-line-height"], r[1]])) : i.push([t, r.join(", ")]), 1;
    }), i;
  }
  var gl = { borderWidth: "border-width", outlineWidth: "outline-width", ringColor: "ring-color", ringWidth: "ring-width", transitionDuration: "transition-duration", transitionTimingFunction: "transition-timing-function" };
  var hl = { animation: "animate", aspectRatio: "aspect", borderRadius: "radius", boxShadow: "shadow", colors: "color", containers: "container", fontFamily: "font", fontSize: "text", letterSpacing: "tracking", lineHeight: "leading", maxWidth: "container", screens: "breakpoint", transitionTimingFunction: "ease" };
  var vl = /^[a-zA-Z0-9-_%/.]+$/;
  function We(e) {
    let i = gl[e[0]];
    if (i && e[1] === "DEFAULT")
      return `default-${i}`;
    if (e[0] === "container")
      return null;
    for (let t of e)
      if (!vl.test(t))
        return null;
    let r = hl[e[0]];
    return r && (e = e.slice(), e[0] = r), e.map((t, n, s) => t === "1" && n !== s.length - 1 ? "" : t).map((t, n) => (t = t.replaceAll(".", "_"), (n === 0 || t.startsWith("-") || t === "lineHeight") && (t = t.replace(/([a-z])([A-Z])/g, (l, d, f) => `${d}-${f.toLowerCase()}`)), t)).filter((t, n) => t !== "DEFAULT" || n !== e.length - 1).join("-");
  }
  function wl(e) {
    return typeof e == "number" || typeof e == "string";
  }
  function kl(e) {
    if (!Array.isArray(e) || e.length !== 2 || typeof e[0] != "string" && typeof e[0] != "number" || e[1] === undefined || e[1] === null || typeof e[1] != "object")
      return false;
    for (let i of Reflect.ownKeys(e[1]))
      if (typeof i != "string" || typeof e[1][i] != "string" && typeof e[1][i] != "number")
        return false;
    return true;
  }
  function hi(e, i = [], r) {
    for (let t of Reflect.ownKeys(e)) {
      let n = e[t];
      if (n == null)
        continue;
      let s = [...i, t], l = r(n, s) ?? 0;
      if (l !== 1) {
        if (l === 2)
          return 2;
        if (!(!Array.isArray(n) && typeof n != "object") && hi(n, s, r) === 2)
          return 2;
      }
    }
  }
  function At(e, i = null, r = true) {
    let [t, n] = nt(M2(e), i, r);
    return t ? F2(n) : e;
  }
  function nt(e, i = null, r = true) {
    let t = false;
    return P2(e, { exit(n, s) {
      if (n.kind === "word" && n.value !== "0") {
        let l = vi(n.value, i, r);
        if (l === null || l === n.value)
          return;
        if (l === "0" && s.parent?.kind === "function") {
          let d = vi(n.value, i, false);
          return d === null ? undefined : (t = true, V2.ReplaceSkip(ne2(d)));
        }
        return t = true, V2.ReplaceSkip(ne2(l));
      } else if (n.kind === "function" && (n.value === "calc" || n.value === "")) {
        if (n.nodes.length !== 5 || n.nodes[2].kind !== "word")
          return;
        let l = n.nodes[0], d = n.nodes[2].value, f = n.nodes[4], c = l.kind === "word" ? le.get(l.value) : null, p = f.kind === "word" ? le.get(f.value) : null;
        if (d === "*" && (c?.[0] === 0 && c?.[1] === null || p?.[0] === 0 && p?.[1] === null))
          return t = true, V2.ReplaceSkip(ne2("0"));
        if (d === "*" && c?.[0] === 0 && c?.[1] !== null && p?.[1] === null)
          return t = true, s.parent?.kind === "function" ? V2.ReplaceSkip(ne2(`0${c[1]}`)) : V2.ReplaceSkip(ne2("0"));
        if (d === "*" && p?.[0] === 0 && p?.[1] !== null && c?.[1] === null)
          return t = true, s.parent?.kind === "function" ? V2.ReplaceSkip(ne2(`0${p[1]}`)) : V2.ReplaceSkip(ne2("0"));
        if (d === "*") {
          if (c?.[0] === 1 && c?.[1] === null)
            return t = true, V2.ReplaceSkip(f);
          if (p?.[0] === 1 && p?.[1] === null)
            return t = true, V2.ReplaceSkip(l);
        }
        if (d === "*" || d === "+") {
          let m = c ?? p, u = c === null ? l : p === null ? f : null;
          if (m !== null && u !== null && u.kind === "function" && (u.value === "calc" || u.value === "") && u.nodes.length === 5 && u.nodes[2].kind === "word" && u.nodes[2].value === d) {
            let v = u.nodes[0], h = u.nodes[4], k = v.kind === "word" ? le.get(v.value) : null, y = h.kind === "word" ? le.get(h.value) : null, S = k ?? y, x = k === null ? v : y === null ? h : null;
            if (S !== null && x !== null) {
              if (d === "*" && !(m[1] === null && S[1] === null || m[1] === null && S[1] !== null || m[1] !== null && S[1] === null) || d === "+" && m[1] !== S[1])
                return;
              let b;
              switch (d) {
                case "*": {
                  b = `${m[0] * S[0]}${m[1] ?? S[1] ?? ""}`;
                  break;
                }
                case "+": {
                  b = `${m[0] + S[0]}${m[1] ?? S[1] ?? ""}`;
                  break;
                }
                default:
                  return;
              }
              if (t = true, d === "*" && b === "1")
                return V2.ReplaceSkip(x);
              let I = { kind: "function", value: n.value, nodes: [ne2(b), n.nodes[1], n.nodes[2], n.nodes[3], x] };
              return V2.ReplaceSkip(I);
            }
          }
        }
        if (c === null || p === null)
          return;
        switch (d) {
          case "*": {
            if (c[1] === p[1] || c[1] === null && p[1] !== null || c[1] !== null && p[1] === null)
              return t = true, V2.ReplaceSkip(ne2(`${c[0] * p[0]}${c[1] ?? p[1] ?? ""}`));
            break;
          }
          case "+": {
            if (c[1] === p[1])
              return t = true, V2.ReplaceSkip(ne2(`${c[0] + p[0]}${c[1] ?? ""}`));
            break;
          }
          case "-": {
            if (c[1] === p[1])
              return t = true, V2.ReplaceSkip(ne2(`${c[0] - p[0]}${c[1] ?? ""}`));
            break;
          }
          case "/": {
            if (p[0] !== 0 && (c[1] === null && p[1] === null || c[1] !== null && p[1] === null)) {
              let m = c[0] / p[0];
              if (Math.round(m * 100) / 100 !== m)
                break;
              return t = true, V2.ReplaceSkip(ne2(`${m}${c[1] ?? ""}`));
            }
            break;
          }
        }
      }
    } }), [t, e];
  }
  function vi(e, i = null, r = true) {
    let t = le.get(e);
    if (t === null)
      return null;
    let [n, s] = t;
    if (s === null)
      return `${n}`;
    if (n === 0 && y(e))
      return r ? "0" : `0${s}`;
    if (!r)
      return `${e}`;
    switch (s.toLowerCase()) {
      case "in":
        return `${n * 96}px`;
      case "cm":
        return `${n * 96 / 2.54}px`;
      case "mm":
        return `${n * 96 / 2.54 / 10}px`;
      case "q":
        return `${n * 96 / 2.54 / 10 / 4}px`;
      case "pc":
        return `${n * 96 / 6}px`;
      case "pt":
        return `${n * 96 / 72}px`;
      case "rem":
        return i !== null ? `${n * i}px` : null;
      case "grad":
        return `${n * 0.9}deg`;
      case "rad":
        return `${n * 180 / Math.PI}deg`;
      case "turn":
        return `${n * 360}deg`;
      case "ms":
        return `${n / 1000}s`;
      case "khz":
        return `${n * 1000}hz`;
      default:
        return `${n}${s}`;
    }
  }
  function Re(e, i = "top", r = "right", t = "bottom", n = "left") {
    return yi(`${e}-${i}`, `${e}-${r}`, `${e}-${t}`, `${e}-${n}`);
  }
  function yi(e = "top", i = "right", r = "bottom", t = "left") {
    return { 1: [[e, 0], [i, 0], [r, 0], [t, 0]], 2: [[e, 0], [i, 1], [r, 0], [t, 1]], 3: [[e, 0], [i, 1], [r, 2], [t, 1]], 4: [[e, 0], [i, 1], [r, 2], [t, 3]] };
  }
  function ue2(e, i) {
    return { 1: [[e, 0], [i, 0]], 2: [[e, 0], [i, 1]] };
  }
  var wi = { inset: yi(), margin: Re("margin"), padding: Re("padding"), "scroll-margin": Re("scroll-margin"), "scroll-padding": Re("scroll-padding"), "border-width": Re("border", "top-width", "right-width", "bottom-width", "left-width"), "border-style": Re("border", "top-style", "right-style", "bottom-style", "left-style"), "border-color": Re("border", "top-color", "right-color", "bottom-color", "left-color"), gap: ue2("row-gap", "column-gap"), overflow: ue2("overflow-x", "overflow-y"), "overscroll-behavior": ue2("overscroll-behavior-x", "overscroll-behavior-y") };
  var ki = { "inset-block": ue2("top", "bottom"), "inset-inline": ue2("left", "right"), "margin-block": ue2("margin-top", "margin-bottom"), "margin-inline": ue2("margin-left", "margin-right"), "padding-block": ue2("padding-top", "padding-bottom"), "padding-inline": ue2("padding-left", "padding-right"), "scroll-margin-block": ue2("scroll-margin-top", "scroll-margin-bottom"), "scroll-margin-inline": ue2("scroll-margin-left", "scroll-margin-right"), "scroll-padding-block": ue2("scroll-padding-top", "scroll-padding-bottom"), "scroll-padding-inline": ue2("scroll-padding-left", "scroll-padding-right") };
  var bi = { "border-block": ["border-bottom", "border-top"], "border-block-color": ["border-bottom-color", "border-top-color"], "border-block-style": ["border-bottom-style", "border-top-style"], "border-block-width": ["border-bottom-width", "border-top-width"], "border-inline": ["border-left", "border-right"], "border-inline-color": ["border-left-color", "border-right-color"], "border-inline-style": ["border-left-style", "border-right-style"], "border-inline-width": ["border-left-width", "border-right-width"] };
  function xi(e, i) {
    if (i & 2) {
      if (e.property in ki) {
        let r = d(e.value, " ");
        return ki[e.property][r.length]?.map(([t, n]) => a2(t, r[n], e.important));
      }
      if (e.property in bi)
        return bi[e.property]?.map((r) => a2(r, e.value, e.important));
    }
    if (e.property in wi) {
      let r = d(e.value, " ");
      return wi[e.property][r.length]?.map(([t, n]) => a2(t, r[n], e.important));
    }
    return null;
  }
  function pe(e, i) {
    for (let r in e)
      delete e[r];
    return Object.assign(e, i);
  }
  function Pe(e) {
    let i = [];
    for (let r of d(e, ".")) {
      if (!r.includes("[")) {
        i.push(r);
        continue;
      }
      let t = 0;
      for (;; ) {
        let n = r.indexOf("[", t), s = r.indexOf("]", n);
        if (n === -1 || s === -1)
          break;
        n > t && i.push(r.slice(t, n)), i.push(r.slice(n + 1, s)), t = s + 1;
      }
      t <= r.length - 1 && i.push(r.slice(t));
    }
    return i;
  }
  function lr(e, i) {
    let r = e;
    return r.storage[Ti] ??= bl(), r.storage[Ni] ??= Al(r), r.storage[Ei] ??= Vl(), r.storage[Ri] ??= Tl(), r.storage[Pi] ??= El(), r.storage[or] ??= Dl(r), r.storage[Vt] ??= Ll(r, i), r.storage[we] ??= ea(r), r.storage[sr] ??= ra(), r.storage[$t] ??= ia(r), r.storage[ur] ??= na(r), r.storage[Nt] ??= la(r), r.storage[Ki] ??= aa(r), r.storage[lt] ??= yl(r), r;
  }
  var Ti = Symbol();
  function bl() {
    return new U2((e) => new U2((i) => ({ rem: e, features: i })));
  }
  var lt = Symbol();
  function yl(e) {
    return new U2((i) => {
      let r = e.storage[we].get(i);
      return function(n, s) {
        let l = typeof n == "string" ? n : e.printCandidate(n), d = r.get(l);
        if (typeof d != "string")
          return false;
        let f = typeof s == "string" ? s : e.printCandidate(s), c = r.get(f);
        return typeof c != "string" ? false : d === c;
      };
    });
  }
  function xl(e, i) {
    let r = 0;
    return i?.collapse && (r |= 1), i?.logicalToPhysical && (r |= 2), lr(e, i).storage[Ti].get(i?.rem ?? null).get(r);
  }
  var Ni = Symbol();
  function Al(e) {
    return new U2((i) => new U2((r) => ({ features: r, designSystem: e, signatureOptions: i })));
  }
  function Cl(e, i, r) {
    let t = 0;
    return r?.collapse && (t |= 1), lr(e).storage[Ni].get(i).get(t);
  }
  function ar(e, i, r) {
    let t = xl(e, r), n = Cl(e, t, r), s = lr(e), l = new Set, d = s.storage[Ei].get(n);
    for (let f of i)
      l.add(d.get(f));
    return l.size <= 1 || !(n.features & 1) ? Array.from(l) : Sl(n, Array.from(l));
  }
  function Sl(e, i) {
    let r = e.designSystem, t = new U2((d) => new U2((f) => new Set)), n = e.designSystem.theme.prefix ? `${e.designSystem.theme.prefix}:` : "";
    for (let d2 of i) {
      let f = d(d2, ":"), c = f.pop(), p = c.endsWith("!");
      p && (c = c.slice(0, -1));
      let m = f.length > 0 ? `${f.join(":")}:` : "", u = p ? "!" : "";
      t.get(m).get(u).add(`${n}${c}`);
    }
    let s = new Set;
    for (let [d, f] of t.entries())
      for (let [c, p] of f.entries())
        for (let m of l(Array.from(p)))
          n && m.startsWith(n) && (m = m.slice(n.length)), s.add(`${d}${m}${c}`);
    return Array.from(s);
    function l(d) {
      let f = e.signatureOptions, c = r.storage[$t].get(f), p = r.storage[sr].get(f), m = d.map((x) => c.get(x));
      if (m.some((x) => x.has("line-height"))) {
        let x = r.theme.keysInNamespaces(["--text"]);
        if (x.length > 0) {
          let b = new Set, I = new Set;
          for (let O of m)
            if (O.has("line-height"))
              for (let L of O.get("line-height")) {
                if (I.has(L))
                  continue;
                I.add(L);
                let E = r.storage[Vt]?.get(L) ?? null;
                if (E !== null)
                  if (de(E)) {
                    b.add(E);
                    for (let j of x)
                      c.get(`text-${j}/${E}`);
                  } else {
                    b.add(L);
                    for (let j of x)
                      c.get(`text-${j}/[${L}]`);
                  }
              }
          let D = new Set;
          for (let O of m)
            if (O.has("font-size")) {
              for (let L of O.get("font-size"))
                if (!D.has(L)) {
                  D.add(L);
                  for (let E of b)
                    de(E) ? c.get(`text-[${L}]/${E}`) : c.get(`text-[${L}]/[${E}]`);
                }
            }
        }
      }
      let u = new U2((x) => {
        let b = new U2((D) => new U2((O) => new Set)), I = new Set(c.get(x).keys());
        if (I.size === 0)
          return b;
        for (let D of de2(r, x))
          if (!(D.kind !== "functional" || D.value === null)) {
            for (let O of r.utilities.keys("functional")) {
              if (O === D.root)
                continue;
              let L = Oi(r, { ...Ue(D), root: O }), E = c.get(L);
              for (let [j, q] of E)
                if (I.has(j))
                  for (let G of q)
                    b.get(j).get(G).add(L);
            }
            return b;
          }
        return b;
      }), v = m.map((x, b) => {
        let I = null;
        for (let D of x.keys()) {
          let O = new Set;
          for (let L of p.get(D).values())
            for (let E of L)
              O.add(E);
          for (let L of x.get(D))
            for (let E of u.get(d[b]).get(D).get(L))
              O.add(E);
          if (I === null ? I = O : I = $i(I, O), I.size === 0)
            return I;
        }
        return I ?? new Set;
      }), h = new U2((x) => new Set([x]));
      for (let x = 0;x < v.length; x++) {
        let b = v[x];
        for (let I = x + 1;I < v.length; I++) {
          let D = v[I];
          for (let O of b)
            if (D.has(O)) {
              h.get(x).add(I), h.get(I).add(x);
              break;
            }
        }
      }
      if (h.size === 0)
        return d;
      let k = new U2((x) => x.split(",").map(Number));
      for (let x of h.values()) {
        let b = Array.from(x).sort((I, D) => I - D);
        k.get(b.join(","));
      }
      let y = new Set(d), S = new Set;
      for (let x of k.values())
        for (let b of sa(x)) {
          if (b.some((O) => S.has(d[O])))
            continue;
          let I = b.flatMap((O) => v[O]).reduce($i), D = r.storage[we].get(f).get(b.map((O) => d[O]).sort((O, L) => O.localeCompare(L)).join(" "));
          for (let O of I)
            if (r.storage[we].get(f).get(O) === D) {
              y.add(O);
              for (let E of b)
                d[E] !== O && S.add(d[E]);
              break;
            }
        }
      for (let x of S)
        y.delete(x);
      return Array.from(y);
    }
  }
  var Ei = Symbol();
  function Vl() {
    return new U2((e) => {
      let i = e.designSystem, r = i.theme.prefix ? `${i.theme.prefix}:` : "", t = i.storage[Ri].get(e), n = i.storage[Pi].get(e);
      return new U2((s, l) => {
        for (let d of i.parseCandidate(s)) {
          let f = d.variants.slice().reverse().flatMap((m) => t.get(m)), c = d.important;
          if (c || f.length > 0) {
            let u = l.get(i.printCandidate({ ...d, variants: [], important: false }));
            return i.theme.prefix !== null && f.length > 0 && (u = u.slice(r.length)), f.length > 0 && (u = `${f.map((v) => i.printVariant(v)).join(":")}:${u}`), c && (u += "!"), i.theme.prefix !== null && f.length > 0 && (u = `${r}${u}`), u;
          }
          let p = n.get(s);
          if (p !== s)
            return p;
        }
        return s;
      });
    });
  }
  var $l = [_l, Zl, Jl, Gl];
  var Ri = Symbol();
  function Tl() {
    return new U2((e) => new U2((i) => {
      let r = [i];
      for (let t of $l)
        for (let n of r.splice(0)) {
          let s = t(Ke(n), e);
          if (Array.isArray(s)) {
            r.push(...s);
            continue;
          } else
            r.push(s);
        }
      return r;
    }));
  }
  var Nl = [Pl, Ol, Il, Ql, zl, Ml, Yl, ql, Hl, Xl];
  var Pi = Symbol();
  function El() {
    return new U2((e) => {
      let i = e.designSystem;
      return new U2((r) => {
        for (let t of i.parseCandidate(r)) {
          let n = Ue(t);
          for (let l of Nl)
            n = l(n, e);
          let s = i.printCandidate(n);
          if (r !== s)
            return s;
        }
        return r;
      });
    });
  }
  var Rl = ["t", "tr", "r", "br", "b", "bl", "l", "tl"];
  function Pl(e) {
    if (e.kind === "static" && e.root.startsWith("bg-gradient-to-")) {
      let i = e.root.slice(15);
      return Rl.includes(i) && (e.root = `bg-linear-to-${i}`), e;
    }
    return e;
  }
  function Ol(e, i) {
    let r = i.designSystem.storage[or];
    if (e.kind === "arbitrary") {
      let [t, n] = r(e.value, e.modifier === null ? 1 : 0);
      t !== e.value && (e.value = t, n !== null && (e.modifier = n));
    } else if (e.kind === "functional" && e.value?.kind === "arbitrary") {
      let [t, n] = r(e.value.value, e.modifier === null ? 1 : 0);
      t !== e.value.value && (e.value.value = t, n !== null && (e.modifier = n));
    }
    return e;
  }
  function _l(e, i) {
    let r = i.designSystem.storage[or], t = Tt(e);
    for (let [n] of t)
      if (n.kind === "arbitrary") {
        let [s] = r(n.selector, 2);
        s !== n.selector && (n.selector = s);
      } else if (n.kind === "functional" && n.value?.kind === "arbitrary") {
        let [s] = r(n.value.value, 2);
        s !== n.value.value && (n.value.value = s);
      }
    return e;
  }
  function Il(e, i) {
    return e.kind === "arbitrary" ? e.value = Ai(e.value, i.designSystem) : e.kind === "functional" && e.value?.kind === "arbitrary" && (e.value.value = Ai(e.value.value, i.designSystem)), e;
  }
  function Ai(e, i) {
    let r = i.theme.prefix ? `--${i.theme.prefix}-spacing` : "--spacing", t = M2(e);
    return P2(t, (n) => {
      if (!(n.kind !== "function" || n.value !== "calc") && n.nodes.length === 5 && !(n.nodes[2].kind !== "word" || n.nodes[2].value !== "*") && !(n.nodes[0].kind !== "function" || n.nodes[0].value !== "var" || n.nodes[0].nodes.length !== 1 || n.nodes[0].nodes[0].kind !== "word" || n.nodes[0].nodes[0].value !== r))
        return V2.Replace(M2(`--spacing(${F2([n.nodes[4]])})`));
    }), F2(t);
  }
  var or = Symbol();
  function Dl(e) {
    return i(e);
    function i(r) {
      function t(d2, f = 0) {
        let c = M2(d2);
        if (f & 2)
          return [Ct(c, l), null];
        let p = 0, m = 0;
        if (P2(c, (h) => {
          h.kind === "function" && h.value === "theme" && (p += 1, P2(h.nodes, (k) => k.kind === "separator" && k.value.includes(",") ? V2.Stop : k.kind === "word" && k.value === "/" ? (m += 1, V2.Stop) : V2.Skip));
        }), p === 0)
          return [d2, null];
        if (m === 0)
          return [Ct(c, s), null];
        if (m > 1)
          return [Ct(c, l), null];
        let u = null;
        return [Ct(c, (h, k) => {
          let y = d(h, "/").map((S) => S.trim());
          if (y.length > 2)
            return null;
          if (c.length === 1 && y.length === 2 && f & 1) {
            let [S, x] = y;
            if (/^\d+%$/.test(x))
              u = { kind: "named", value: x.slice(0, -1) };
            else if (/^0?\.\d+$/.test(x)) {
              let b = Number(x) * 100;
              u = { kind: Number.isInteger(b) ? "named" : "arbitrary", value: b.toString() };
            } else
              u = { kind: "arbitrary", value: x };
            h = S;
          }
          return s(h, k) || l(h, k);
        }), u];
      }
      function n(d, f = true) {
        let c = `--${We(Pe(d))}`;
        return r.theme.get([c]) ? f && r.theme.prefix ? `--${r.theme.prefix}-${c.slice(2)}` : c : null;
      }
      function s(d, f) {
        let c = n(d);
        if (c)
          return f ? `var(${c}, ${f})` : `var(${c})`;
        let p = Pe(d);
        if (p[0] === "spacing" && r.theme.get(["--spacing"])) {
          let m = p[1];
          return de(m) ? `--spacing(${m})` : null;
        }
        return null;
      }
      function l(d2, f) {
        let c = d(d2, "/").map((u) => u.trim());
        d2 = c.shift();
        let p = n(d2, false);
        if (!p)
          return null;
        let m = c.length > 0 ? `/${c.join("/")}` : "";
        return f ? `--theme(${p}${m}, ${f})` : `--theme(${p}${m})`;
      }
      return t;
    }
  }
  function Ct(e, i) {
    return P2(e, (r, t) => {
      if (r.kind === "function" && r.value === "theme") {
        if (r.nodes.length < 1)
          return;
        r.nodes[0].kind === "separator" && r.nodes[0].value.trim() === "" && r.nodes.shift();
        let n = r.nodes[0];
        if (n.kind !== "word")
          return;
        let s = n.value, l = 1;
        for (let c = l;c < r.nodes.length && !r.nodes[c].value.includes(","); c++)
          s += F2([r.nodes[c]]), l = c + 1;
        s = Kl(s);
        let d = r.nodes.slice(l + 1), f = d.length > 0 ? i(s, F2(d)) : i(s);
        if (f === null)
          return;
        {
          let c = t.index - 1;
          for (;c !== -1; ) {
            let p = t.siblings[c];
            if (p.kind === "separator" && p.value.trim() === "") {
              c -= 1;
              continue;
            }
            /^[-+*/]$/.test(p.value.trim()) && (f = `(${f})`);
            break;
          }
        }
        return V2.Replace(M2(f));
      }
    }), F2(e);
  }
  function Kl(e) {
    if (e[0] !== "'" && e[0] !== '"')
      return e;
    let i = "", r = e[0];
    for (let t = 1;t < e.length - 1; t++) {
      let n = e[t], s = e[t + 1];
      n === "\\" && (s === r || s === "\\") ? (i += s, t++) : i += n;
    }
    return i;
  }
  function* Tt(e) {
    function* i(r, t = null) {
      yield [r, t], r.kind === "compound" && (yield* i(r.variant, r));
    }
    yield* i(e, null);
  }
  function de2(e, i) {
    return e.parseCandidate(e.theme.prefix && !i.startsWith(`${e.theme.prefix}:`) ? `${e.theme.prefix}:${i}` : i);
  }
  function Oi(e, i) {
    let r = e.printCandidate(i);
    return e.theme.prefix && r.startsWith(`${e.theme.prefix}:`) ? r.slice(e.theme.prefix.length + 1) : r;
  }
  var Vt = Symbol();
  var _i = 1536;
  var Ul = _i / 16;
  function Ci(e, i, r) {
    let t = i.resolveThemeValue("--spacing");
    if (t === undefined)
      return false;
    let n = le.get(At(t, r));
    if (n === null)
      return false;
    let [s, l] = n, d = e * s;
    return l === "px" ? d <= _i : l === "rem" ? d <= Ul : false;
  }
  function Ll(e, i) {
    let r = e.resolveThemeValue("--spacing");
    if (r === undefined)
      return null;
    r = At(r, i?.rem ?? null);
    let t = le.get(r);
    if (!t)
      return null;
    let [n, s] = t;
    return new U2((l) => {
      if (n === 0)
        return null;
      let d = le.get(At(l, i?.rem ?? null));
      if (!d)
        return null;
      let [f, c] = d;
      return c !== s ? null : f / n;
    });
  }
  function zl(e, i) {
    if (e.kind !== "arbitrary" && !(e.kind === "functional" && e.value?.kind === "arbitrary"))
      return e;
    let r = i.designSystem, t = r.storage[ur].get(i.signatureOptions), n = r.storage[we].get(i.signatureOptions), s = r.storage[lt].get(i.signatureOptions), l = r.printCandidate(e), d = n.get(l);
    if (typeof d != "string")
      return e;
    for (let c of f(d, e))
      if (s(e, c) && jl(r, e, c))
        return c;
    return e;
    function* f(c, p) {
      let m = t.get(c);
      if (m.length > 1) {
        let u;
        for (let v of m)
          if (v[0] !== "-") {
            if (u)
              return;
            u = v;
          }
        if (u)
          for (let v of de2(r, u))
            yield v;
        return;
      }
      if (m.length === 0 && p.modifier) {
        let u = { ...p, modifier: null }, v = n.get(r.printCandidate(u));
        if (typeof v == "string")
          for (let h of f(v, u))
            yield Object.assign({}, h, { modifier: p.modifier });
      }
      if (m.length === 1)
        for (let u of de2(r, m[0]))
          yield u;
      else if (m.length === 0) {
        let u = p.kind === "arbitrary" ? p.value : p.value?.value ?? null;
        if (u === null)
          return;
        if (i.signatureOptions.rem !== null && p.kind === "functional" && p.value?.kind === "arbitrary") {
          let k = r.storage[Vt]?.get(u) ?? null;
          k !== null && de(k) && Ci(k, r, i.signatureOptions.rem) && (yield Object.assign({}, p, { value: { kind: "named", value: k, fraction: null } }));
        }
        let v = r.storage[Vt]?.get(u) ?? null, h = "";
        v !== null && v < 0 && (h = "-", v = Math.abs(v));
        for (let k of Array.from(r.utilities.keys("functional")).sort((y, S) => +(y[0] === "-") - +(S[0] === "-"))) {
          h && (k = `${h}${k}`);
          for (let y of de2(r, `${k}-${u}`))
            yield y;
          if (p.modifier)
            for (let y of de2(r, `${k}-${u}${p.modifier}`))
              yield y;
          if (v !== null && de(v) && Ci(v, r, i.signatureOptions.rem)) {
            for (let y of de2(r, `${k}-${v}`))
              yield y;
            if (p.modifier)
              for (let y of de2(r, `${k}-${v}${rt(p.modifier)}`))
                yield y;
          }
          for (let y of de2(r, `${k}-[${u}]`))
            yield y;
          if (p.modifier)
            for (let y of de2(r, `${k}-[${u}]${rt(p.modifier)}`))
              yield y;
        }
      }
    }
  }
  function jl(e, i, r) {
    let t = null;
    if (i.kind === "functional" && i.value?.kind === "arbitrary" && i.value.value.includes("var(--") ? t = i.value.value : i.kind === "arbitrary" && i.value.includes("var(--") && (t = i.value), t === null)
      return true;
    let n = e.candidatesToCss([e.printCandidate(r)]).join(`
`), s = true;
    return P2(M2(t), (l) => {
      if (l.kind === "function" && l.value === "var") {
        let d = l.nodes[0].value;
        if (!new RegExp(`var\\(${d}[,)]\\s*`, "g").test(n) || n.includes(`${d}:`))
          return s = false, V2.Stop;
      }
    }), s;
  }
  function Ml(e, i) {
    if (e.kind !== "functional" || e.value?.kind !== "named")
      return e;
    let r = i.designSystem, t = r.storage[ur].get(i.signatureOptions), n = r.storage[we].get(i.signatureOptions), s = r.storage[lt].get(i.signatureOptions), l = r.printCandidate(e), d = n.get(l);
    if (typeof d != "string")
      return e;
    for (let c of f(d, e))
      if (s(e, c))
        return c;
    return e;
    function* f(c, p) {
      let m = t.get(c);
      if (m.length > 1) {
        let u;
        for (let v of m)
          if (v[0] !== "-") {
            if (u)
              return;
            u = v;
          }
        if (u)
          for (let v of de2(r, u))
            yield v;
        return;
      }
      if (m.length === 0 && p.modifier) {
        let u = { ...p, modifier: null }, v = n.get(r.printCandidate(u));
        if (typeof v == "string")
          for (let h of f(v, u))
            yield Object.assign({}, h, { modifier: p.modifier });
      }
      if (m.length === 1)
        for (let u of de2(r, m[0]))
          yield u;
    }
  }
  var Fl = new Map([["order-none", "order-0"], ["break-words", "wrap-break-word"], ["overflow-ellipsis", "text-ellipsis"]]);
  var Wl = new Map([[/^(-)?start-(.*?)$/, "$1inset-s-$2"], [/^(-)?end-(.*?)$/, "$1inset-e-$2"]]);
  function* Bl(e) {
    let i = Fl.get(e);
    i && (yield i);
    for (let [r, t] of Wl) {
      let n = e.replace(r, t);
      n !== e && (yield n);
    }
  }
  function Yl(e, i) {
    let r = i.designSystem, t = r.storage[lt].get(i.signatureOptions), n = Oi(r, e);
    for (let s of Bl(n)) {
      if (!t(e, s))
        continue;
      let [l] = de2(r, s);
      return l;
    }
    return e;
  }
  function Gl(e, i) {
    let r = i.designSystem, t = r.storage[Nt], n = r.storage[Ki], s = Tt(e);
    for (let [l] of s) {
      if (l.kind === "compound")
        continue;
      let d = r.printVariant(l), f = t.get(d);
      if (typeof f != "string")
        continue;
      let c = n.get(f);
      if (c.length !== 1)
        continue;
      let p = c[0], m = r.parseVariant(p);
      m !== null && pe(l, m);
    }
    return e;
  }
  function ql(e, i) {
    let r = i.designSystem, t = r.storage[we].get(i.signatureOptions);
    if (e.kind === "functional" && e.value?.kind === "arbitrary" && e.value.dataType !== null) {
      let n = r.printCandidate({ ...e, value: { ...e.value, dataType: null } });
      t.get(r.printCandidate(e)) === t.get(n) && (e.value.dataType = null);
    }
    return e;
  }
  function Hl(e, i) {
    if (e.kind !== "functional" || e.value?.kind !== "arbitrary")
      return e;
    let r = i.designSystem, t = r.storage[we].get(i.signatureOptions), n = t.get(r.printCandidate(e));
    if (n === null)
      return e;
    for (let s of Ii(e))
      if (t.get(r.printCandidate({ ...e, value: s })) === n)
        return e.value = s, e;
    return e;
  }
  function Zl(e) {
    let i = Tt(e);
    for (let [r] of i)
      if (r.kind === "functional" && r.root === "data" && r.value?.kind === "arbitrary" && !r.value.value.includes("="))
        r.value = { kind: "named", value: r.value.value };
      else if (r.kind === "functional" && r.root === "aria" && r.value?.kind === "arbitrary" && (r.value.value.endsWith("=true") || r.value.value.endsWith('="true"') || r.value.value.endsWith("='true'"))) {
        let [t, n] = d(r.value.value, "=");
        if (t[t.length - 1] === "~" || t[t.length - 1] === "|" || t[t.length - 1] === "^" || t[t.length - 1] === "$" || t[t.length - 1] === "*")
          continue;
        r.value = { kind: "named", value: r.value.value.slice(0, r.value.value.indexOf("=")) };
      } else
        r.kind === "functional" && r.root === "supports" && r.value?.kind === "arbitrary" && /^[a-z-][a-z0-9-]*$/i.test(r.value.value) && (r.value = { kind: "named", value: r.value.value });
    return e;
  }
  function* Ii(e, i = e.value?.value ?? "", r = new Set) {
    if (r.has(i))
      return;
    if (r.add(i), yield { kind: "named", value: i, fraction: null }, i.endsWith("%") && de(i.slice(0, -1)) && (yield { kind: "named", value: i.slice(0, -1), fraction: null }), i.includes("/")) {
      let [s, l] = i.split("/");
      u(s) && u(l) && (yield { kind: "named", value: s, fraction: `${s}/${l}` });
    }
    let t = new Set;
    for (let s of i.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g))
      t.add(s[0].trim());
    let n = Array.from(t).sort((s, l) => s.length - l.length);
    for (let s of n)
      yield* Ii(e, s, r);
  }
  function Si(e) {
    return !(e.length === 1 && e[0].kind === "list");
  }
  function St(e) {
    return e.value[0] === "[" && e.value[e.value.length - 1] === "]";
  }
  function Jl(e, i) {
    let r = [e], t = i.designSystem, n = t.storage[Nt], s = Tt(e);
    for (let [l, d] of s)
      if (l.kind === "compound" && (l.root === "has" || l.root === "not" || l.root === "in") && l.modifier !== null && "modifier" in l.variant && (l.variant.modifier = l.modifier, l.modifier = null), l.kind === "arbitrary") {
        if (l.relative)
          continue;
        let f = fe(l.selector);
        if (!Si(f))
          continue;
        if (f.length === 1 && f[0].kind === "complex" && (f = f[0].nodes), d === null && f.length === 3 && f[0].kind === "selector" && f[0].value === "&" && f[1].kind === "combinator" && f[1].value === ">" && f[2].kind === "selector" && f[2].value === "*") {
          pe(l, t.parseVariant("*"));
          continue;
        }
        if (d === null && f.length === 3 && f[0].kind === "selector" && f[0].value === "&" && f[1].kind === "combinator" && f[1].value === " " && f[2].kind === "selector" && f[2].value === "*") {
          pe(l, t.parseVariant("**"));
          continue;
        }
        if (d === null && f.length === 1 && f[0].kind === "compound" && f[0].nodes.length === 2 && f[0].nodes[0].kind === "selector" && f[0].nodes[0].value === "&" && f[0].nodes[1].kind === "function" && f[0].nodes[1].value === ":has" && f[0].nodes[1].nodes.length === 1 && f[0].nodes[1].nodes[0].kind === "selector") {
          pe(l, t.parseVariant(`has-[${oe2(f[0].nodes[1].nodes, true)}]`));
          continue;
        }
        if (d === null && f.length === 3 && f[0].kind === "selector" && f[1].kind === "combinator" && f[1].value === " " && f[2].kind === "selector" && f[2].value === "&") {
          f.pop(), f.pop(), pe(l, t.parseVariant(`in-[${oe2(f, true)}]`));
          continue;
        }
        if (d === null && f[0].kind === "selector" && (f[0].value === "@media" || f[0].value === "@supports")) {
          let u = n.get(t.printVariant(l)), v = M2(oe2(f, true)), h = false;
          if (P2(v, (k) => {
            if (k.kind === "word" && k.value === "not")
              return h = true, V2.Replace([]);
          }), v = M2(F2(v)), P2(v, (k) => {
            k.kind === "separator" && k.value !== " " && k.value.trim() === "" && (k.value = " ");
          }), h) {
            let k = t.parseVariant(`not-[${F2(v)}]`);
            if (k === null)
              continue;
            let y = n.get(t.printVariant(k));
            if (u === y) {
              pe(l, k);
              continue;
            }
          }
        }
        let c = null;
        d === null && f.length === 3 && f[0].kind === "selector" && f[0].value === "&" && f[1].kind === "combinator" && f[1].value === ">" && f[2].kind === "selector" && (f[2].value[0] === ":" || St(f[2])) && (f = [f[2]], c = t.parseVariant("*")), d === null && f.length === 3 && f[0].kind === "selector" && f[0].value === "&" && f[1].kind === "combinator" && f[1].value === " " && f[2].kind === "selector" && (f[2].value[0] === ":" || St(f[2])) && (f = [f[2]], c = t.parseVariant("**"));
        let p = f;
        if (P2(p, { enter(u) {
          if (u.kind === "selector" && u.value === "&")
            return V2.Replace([]);
          if (u.kind === "function")
            return V2.Skip;
        }, exit(u) {
          if (u.kind === "compound" && u.nodes.length === 1)
            return V2.ReplaceSkip(u.nodes);
        } }), p.length !== 1)
          continue;
        let m = p[0];
        if (m.kind === "function" && m.value === ":is") {
          if (!Si(m.nodes) || m.nodes.length !== 1 || m.nodes[0].kind === "selector" && !St(m.nodes[0]))
            continue;
          m = m.nodes[0];
        }
        if (m.kind === "function" && m.value[0] === ":" || m.kind === "selector" && m.value[0] === ":") {
          let u2 = m, v = false;
          if (u2.kind === "function" && u2.value === ":not") {
            if (v = true, u2.nodes.length !== 1 || u2.nodes[0].kind !== "selector" && u2.nodes[0].kind !== "function" || u2.nodes[0].value[0] !== ":")
              continue;
            u2 = u2.nodes[0];
          }
          let h = ((y) => {
            if (y === ":nth-child" && u2.kind === "function" && u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u2.nodes[0].value === "odd")
              return v ? (v = false, "even") : "odd";
            if (y === ":nth-child" && u2.kind === "function" && u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u2.nodes[0].value === "even")
              return v ? (v = false, "odd") : "even";
            for (let [S, x] of [[":nth-child", "nth"], [":nth-last-child", "nth-last"], [":nth-of-type", "nth-of-type"], [":nth-last-of-type", "nth-of-last-type"]])
              if (y === S && u2.kind === "function" && u2.nodes.length === 1)
                return u2.nodes.length === 1 && u2.nodes[0].kind === "value" && u(u2.nodes[0].value) ? `${x}-${u2.nodes[0].value}` : `${x}-[${oe2(u2.nodes, true)}]`;
            if (v) {
              let S = n.get(t.printVariant(l)), x = n.get(`not-[${y}]`);
              if (S === x)
                return `[&${y}]`;
            }
            return null;
          })(u2.value);
          if (h === null) {
            if (c)
              return pe(l, { kind: "arbitrary", selector: m.value, relative: false }), [c, l];
            continue;
          }
          v && (h = `not-${h}`);
          let k = t.parseVariant(h);
          if (k === null)
            continue;
          pe(l, k);
        } else if (m.kind === "selector" && St(m)) {
          let u = Me(m.value);
          if (u === null)
            continue;
          if (u.attribute.startsWith("data-")) {
            let v = u.attribute.slice(5);
            pe(l, { kind: "functional", root: "data", modifier: null, value: u.value === null ? { kind: "named", value: v } : { kind: "arbitrary", value: `${v}${u.operator}${u.quote ?? ""}${u.value}${u.quote ?? ""}${u.sensitivity ? ` ${u.sensitivity}` : ""}` } });
          } else if (u.attribute.startsWith("aria-")) {
            let v = u.attribute.slice(5);
            pe(l, { kind: "functional", root: "aria", modifier: null, value: u.value === null ? { kind: "arbitrary", value: v } : u.operator === "=" && u.value === "true" && u.sensitivity === null ? { kind: "named", value: v } : { kind: "arbitrary", value: `${u.attribute}${u.operator}${u.quote ?? ""}${u.value}${u.quote ?? ""}${u.sensitivity ? ` ${u.sensitivity}` : ""}` } });
          } else
            pe(l, { kind: "arbitrary", selector: m.value, relative: false });
        }
        if (c)
          return [c, l];
      }
    return r;
  }
  function Ql(e, i) {
    if (e.kind !== "functional" || e.value?.kind !== "arbitrary")
      return e;
    let t = i.designSystem.storage[lt].get(i.signatureOptions), n = M2(e.value.value);
    if (n.length === 1 && n[0].kind === "function" && n[0].value === "calc") {
      let [s, l] = nt(n, null, false);
      if (s) {
        let d = Ue(e);
        d.value.value = F2(l), t(e, d) && (e = d, n = l);
      }
    }
    if (e.root[0] === "-") {
      if (n.length === 1 && n[0].kind === "function" && n[0].value === "var")
        return e;
      let s = M2(`calc(${e.value.value} * -1)`), [l, d] = nt(s, null, false);
      if (l) {
        let f = Ue(e);
        f.root = f.root.slice(1), f.value.value = F2(d), t(e, f) && (e = f, n = d);
      }
    }
    if (n.length === 1 && n[0].kind === "function" && n[0].value === "calc") {
      let s = n[0].nodes;
      if (s.length === 5 && s[1].kind === "separator" && s[1].value === " " && s[2].kind === "word" && s[2].value === "*" && s[3].kind === "separator" && s[3].value === " ") {
        let l = s[4].kind === "word" && s[4].value === "-1" ? s[0] : s[0].kind === "word" && s[0].value === "-1" ? s[4] : null;
        if (l) {
          let d = Ue(e);
          d.root = `-${e.root}`, d.value.value = F2([l]), t(e, d) && (e = d);
        }
      }
    }
    return e;
  }
  function Xl(e, i) {
    if (e.kind !== "functional" && e.kind !== "arbitrary" || e.modifier === null)
      return e;
    let r = i.designSystem, t = r.storage[we].get(i.signatureOptions), n = t.get(r.printCandidate(e)), s = e.modifier;
    if (n === t.get(r.printCandidate({ ...e, modifier: null })))
      return e.modifier = null, e;
    {
      let l = { kind: "named", value: s.value.endsWith("%") ? s.value.includes(".") ? `${Number(s.value.slice(0, -1))}` : s.value.slice(0, -1) : s.value, fraction: null };
      if (n === t.get(r.printCandidate({ ...e, modifier: l })))
        return e.modifier = l, e;
    }
    {
      let l = { kind: "named", value: `${parseFloat(s.value) * 100}`, fraction: null };
      if (n === t.get(r.printCandidate({ ...e, modifier: l })))
        return e.modifier = l, e;
    }
    return e;
  }
  var we = Symbol();
  function ea(e) {
    return new U2((i) => new U2((r) => {
      try {
        r = e.theme.prefix && !r.startsWith(e.theme.prefix) ? `${e.theme.prefix}:${r}` : r;
        let t = [H2(".x", [B2("@apply", r)])];
        return oa(e, () => {
          for (let s of e.parseCandidate(r))
            e.compileAstNodes(s, 1);
          Ve(t, e);
        }), Di(e, t, i), se(t);
      } catch {
        return Symbol();
      }
    }));
  }
  var Vi = /#(?:[a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})/gi;
  function Di(e, i, r) {
    let { rem: t } = r;
    return P2(i, { enter(n, s) {
      if (n.kind === "declaration") {
        if (n.value === undefined || n.property === "--tw-sort")
          return V2.Replace([]);
        if (n.property.startsWith("--tw-") && s.siblings.some((m) => m.kind === "declaration" && n.value === m.value && n.important === m.important && !m.property.startsWith("--tw-")))
          return V2.Replace([]);
        if (r.features & 1) {
          let m = xi(n, r.features);
          if (m)
            return V2.Replace(m);
        }
        n.value.includes("var(") && (n.value = ta(n.value, e));
        let l = M2(n.value), [d, f] = nt(l, t), [c, p] = mi(f);
        (d || c) && (n.value = F2(p)), n.value = Se(n.value);
      } else {
        if (n.kind === "context" || n.kind === "at-root")
          return V2.Replace(n.nodes);
        if (n.kind === "comment")
          return V2.Replace([]);
        if (n.kind === "at-rule" && n.name === "@property")
          return V2.Replace([]);
      }
    }, exit(n) {
      if (n.kind === "rule" || n.kind === "at-rule") {
        if (n.nodes.length > 1) {
          let s = new Set;
          for (let l = n.nodes.length - 1;l >= 0; l--) {
            let d = n.nodes[l];
            d.kind === "declaration" && d.value !== undefined && (s.has(d.property) && n.nodes.splice(l, 1), s.add(d.property));
          }
        }
        n.nodes.sort((s, l) => s.kind !== "declaration" || l.kind !== "declaration" ? 0 : s.property.localeCompare(l.property));
      } else if (n.kind === "declaration" && n.value) {
        if (n.property[0] === "-" && n.property[1] === "-")
          return;
        Vi.lastIndex = 0, n.value = n.value.replace(Vi, (s) => s.toLowerCase());
      }
    } }), i;
  }
  function ta(e, i) {
    let r = false, t = M2(e), n = new Set;
    return P2(t, (s) => {
      if (s.kind !== "function" || s.value !== "var" || s.nodes.length !== 1 && s.nodes.length < 3)
        return;
      let l = s.nodes[0].value;
      i.theme.prefix && l.startsWith(`--${i.theme.prefix}-`) && (l = l.slice(`--${i.theme.prefix}-`.length));
      let d = i.resolveThemeValue(l);
      if (!n.has(l) && (n.add(l), d !== undefined && (s.nodes.length === 1 && (r = true, s.nodes.push(...M2(`,${d}`))), s.nodes.length >= 3))) {
        let f = F2(s.nodes), c = `${s.nodes[0].value},${d}`;
        if (f === c)
          return r = true, V2.Replace(M2(d));
      }
    }), r ? F2(t) : e;
  }
  var sr = Symbol();
  function ra() {
    return new U2((e) => new U2((i) => new U2((r) => new Set)));
  }
  var $t = Symbol();
  function ia(e) {
    return new U2((i) => new U2((r) => {
      let t = new U2((s) => new Set);
      e.theme.prefix && !r.startsWith(e.theme.prefix) && (r = `${e.theme.prefix}:${r}`);
      let n = e.parseCandidate(r);
      if (n.length === 0)
        return t;
      try {
        let s = e.compileAstNodes(n[0]).map((l) => re2(l.node));
        P2(Di(e, s, i), (l) => {
          l.kind === "declaration" && (t.get(l.property).add(l.value), e.storage[sr].get(i).get(l.property).get(l.value).add(r));
        });
      } catch {}
      return t;
    }));
  }
  var ur = Symbol();
  function na(e) {
    return new U2((i) => {
      let r = e.storage[we].get(i), t = new U2(() => []);
      for (let [n, s] of e.getClassList()) {
        let l = r.get(n);
        if (typeof l == "string") {
          if (n[0] === "-" && n.endsWith("-0")) {
            let d = r.get(n.slice(1));
            if (typeof d == "string" && l === d)
              continue;
          }
          t.get(l).push(n), e.storage[$t].get(i).get(n);
          for (let d of s.modifiers) {
            if (de(d))
              continue;
            let f = `${n}/${d}`, c = r.get(f);
            typeof c == "string" && (t.get(c).push(f), e.storage[$t].get(i).get(f));
          }
        }
      }
      return t;
    });
  }
  var Nt = Symbol();
  function la(e) {
    return new U2((i) => {
      try {
        i = e.theme.prefix && !i.startsWith(e.theme.prefix) ? `${e.theme.prefix}:${i}` : i;
        let r = [H2(".x", [B2("@apply", `${i}:flex`)])];
        return Ve(r, e), P2(r, (n) => {
          if (n.kind === "at-rule" && n.params.includes(" "))
            n.params = n.params.replaceAll(" ", "");
          else if (n.kind === "rule") {
            let s = fe(n.selector), l = false;
            P2(s, (d) => {
              if (d.kind === "list" || d.kind === "combinator")
                l = true;
              else if (d.kind === "function" && d.value === ":is") {
                if (d.nodes.length === 1)
                  return l = true, V2.Replace(d.nodes);
                if (d.nodes.length === 2 && d.nodes[0].kind === "selector" && d.nodes[0].value === "*" && d.nodes[1].kind === "selector" && d.nodes[1].value[0] === ":")
                  return l = true, V2.Replace(d.nodes[1]);
              } else
                d.kind === "function" && d.value[0] === ":" && d.nodes[0]?.kind === "selector" && d.nodes[0]?.value[0] === ":" && (l = true, d.nodes.unshift({ kind: "selector", value: "*" }));
            }), l && (n.selector = oe2(s, true));
          }
        }), se(r);
      } catch {
        return Symbol();
      }
    });
  }
  var Ki = Symbol();
  function aa(e) {
    let i = e.storage[Nt], r = new U2(() => []);
    for (let [t, n] of e.variants.entries())
      if (n.kind === "static") {
        let s = i.get(t);
        if (typeof s != "string")
          continue;
        r.get(s).push(t);
      }
    return r;
  }
  function oa(e, i) {
    let r = e.theme.values.get, t = new Set;
    e.theme.values.get = (n) => {
      let s = r.call(e.theme.values, n);
      return s === undefined || s.options & 1 && (t.add(s), s.options &= -2), s;
    };
    try {
      return i();
    } finally {
      e.theme.values.get = r;
      for (let n of t)
        n.options |= 1;
    }
  }
  function* sa(e) {
    let i = e.length, r = 1n << BigInt(i);
    for (let t = i;t >= 2; t--) {
      let n = (1n << BigInt(t)) - 1n;
      for (;n < r; ) {
        let s = [];
        for (let f = 0;f < i; f++)
          n >> BigInt(f) & 1n && s.push(e[f]);
        yield s;
        let l = n & -n, d = n + l;
        n = ((d ^ n) >> 2n) / l | d;
      }
    }
  }
  function $i(e, i) {
    if (typeof e.intersection == "function")
      return e.intersection(i);
    if (e.size === 0 || i.size === 0)
      return new Set;
    let r = new Set(e);
    for (let t of i)
      r.has(t) || r.delete(t);
    return r;
  }
  var fa = /^\d+\/\d+$/;
  function Ui(e) {
    let i = new U2((n) => ({ name: n, utility: n, fraction: false, modifiers: [] }));
    for (let n of e.utilities.keys("static")) {
      if (e.utilities.getCompletions(n).length === 0)
        continue;
      let l = i.get(n);
      l.fraction = false, l.modifiers = [];
    }
    for (let n of e.utilities.keys("functional")) {
      let s = e.utilities.getCompletions(n);
      for (let l of s)
        for (let d of l.values) {
          let f = d !== null && fa.test(d), c = d === null ? n : `${n}-${d}`, p = i.get(c);
          if (p.utility = n, p.fraction ||= f, p.modifiers.push(...l.modifiers), l.supportsNegative) {
            let m = i.get(`-${c}`);
            m.utility = `-${n}`, m.fraction ||= f, m.modifiers.push(...l.modifiers);
          }
          p.modifiers = Array.from(new Set(p.modifiers));
        }
    }
    if (i.size === 0)
      return [];
    let r = Array.from(i.values());
    return r.sort((n, s) => xt(n.name, s.name)), ca(r);
  }
  function ca(e) {
    let i = [], r = null, t = new Map, n = new U2(() => []);
    for (let l of e) {
      let { utility: d, fraction: f } = l;
      r || (r = { utility: d, items: [] }, t.set(d, r)), d !== r.utility && (i.push(r), r = { utility: d, items: [] }, t.set(d, r)), f ? n.get(d).push(l) : r.items.push(l);
    }
    r && i[i.length - 1] !== r && i.push(r);
    for (let [l, d] of n) {
      let f = t.get(l);
      f && f.items.push(...d);
    }
    let s = [];
    for (let l of i)
      for (let d of l.items)
        s.push([d.name, { modifiers: d.modifiers }]);
    return s;
  }
  function Li(e) {
    let i = [];
    for (let [t, n] of e.variants.entries()) {
      let d = function({ value: f, modifier: c } = {}) {
        let p = t;
        f && (p += s ? `-${f}` : f), c && (p += `/${c}`);
        let m = e.parseVariant(p);
        if (!m)
          return [];
        let u = H2(".__placeholder__", []);
        if (Be(u, m, e.variants) === null)
          return [];
        let v = [];
        return P2(u.nodes, { exit(h, k) {
          if (h.kind !== "rule" && h.kind !== "at-rule" || h.nodes.length > 0)
            return;
          let y = k.path();
          y.push(h), y.sort((b, I) => {
            let D = b.kind === "at-rule", O = I.kind === "at-rule";
            return D && !O ? -1 : !D && O ? 1 : 0;
          });
          let S = y.flatMap((b) => b.kind === "rule" ? b.selector === "&" ? [] : [b.selector] : b.kind === "at-rule" ? [`${b.name} ${b.params}`] : []), x = "";
          for (let b = S.length - 1;b >= 0; b--)
            x = x === "" ? S[b] : `${S[b]} { ${x} }`;
          v.push(x);
        } }), v;
      };
      var r = d;
      if (n.kind === "arbitrary")
        continue;
      let s = t !== "@", l = e.variants.getCompletions(t);
      switch (n.kind) {
        case "static": {
          i.push({ name: t, values: l, isArbitrary: false, hasDash: s, selectors: d });
          break;
        }
        case "functional": {
          i.push({ name: t, values: l, isArbitrary: true, hasDash: s, selectors: d });
          break;
        }
        case "compound": {
          i.push({ name: t, values: l, isArbitrary: true, hasDash: s, selectors: d });
          break;
        }
      }
    }
    return i;
  }
  function zi(e, i) {
    let { astNodes: r, nodeSorting: t } = $e(Array.from(i), e), n = new Map(i.map((l) => [l, null])), s = 0n;
    for (let l of r) {
      let d = t.get(l)?.candidate;
      d && n.set(d, n.get(d) ?? s++);
    }
    return i.map((l) => [l, n.get(l) ?? null]);
  }
  var Et = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/;
  var fr = class {
    compareFns = new Map;
    variants = new Map;
    completions = new Map;
    groupOrder = null;
    lastOrder = 0;
    static(i, r, { compounds: t, order: n } = {}) {
      this.set(i, { kind: "static", applyFn: r, compoundsWith: 0, compounds: t ?? 2, order: n });
    }
    fromAst(i, r, t) {
      let n = [], s = false;
      P2(r, (l) => {
        l.kind === "rule" ? n.push(l.selector) : l.kind === "at-rule" && l.name === "@variant" ? s = true : l.kind === "at-rule" && l.name !== "@slot" && n.push(`${l.name} ${l.params}`);
      }), this.static(i, (l) => {
        let d = r.map(re2);
        s && at(d, t), cr(d, l.nodes), l.nodes = d;
      }, { compounds: Oe(n) });
    }
    functional(i, r, { compounds: t, order: n } = {}) {
      this.set(i, { kind: "functional", applyFn: r, compoundsWith: 0, compounds: t ?? 2, order: n });
    }
    compound(i, r, t, { compounds: n, order: s } = {}) {
      this.set(i, { kind: "compound", applyFn: t, compoundsWith: r, compounds: n ?? 2, order: s });
    }
    group(i, r) {
      this.groupOrder = this.nextOrder(), r && this.compareFns.set(this.groupOrder, r), i(), this.groupOrder = null;
    }
    has(i) {
      return this.variants.has(i);
    }
    get(i) {
      return this.variants.get(i);
    }
    kind(i) {
      return this.variants.get(i)?.kind;
    }
    compoundsWith(i, r) {
      let t = this.variants.get(i), n = typeof r == "string" ? this.variants.get(r) : r.kind === "arbitrary" ? { compounds: Oe([r.selector]) } : this.variants.get(r.root);
      return !(!t || !n || t.kind !== "compound" || n.compounds === 0 || t.compoundsWith === 0 || (t.compoundsWith & n.compounds) === 0);
    }
    suggest(i, r) {
      this.completions.set(i, r);
    }
    getCompletions(i) {
      return this.completions.get(i)?.() ?? [];
    }
    compare(i, r) {
      if (i === r)
        return 0;
      if (i === null)
        return -1;
      if (r === null)
        return 1;
      if (i.kind === "arbitrary" && r.kind === "arbitrary")
        return i.selector < r.selector ? -1 : 1;
      if (i.kind === "arbitrary")
        return 1;
      if (r.kind === "arbitrary")
        return -1;
      let t = this.variants.get(i.root).order, n = this.variants.get(r.root).order, s = t - n;
      if (s !== 0)
        return s;
      if (i.kind === "compound" && r.kind === "compound") {
        let c = this.compare(i.variant, r.variant);
        return c !== 0 ? c : i.modifier && r.modifier ? i.modifier.value < r.modifier.value ? -1 : 1 : i.modifier ? 1 : r.modifier ? -1 : 0;
      }
      let l = this.compareFns.get(t);
      if (l !== undefined)
        return l(i, r);
      if (i.root !== r.root)
        return i.root < r.root ? -1 : 1;
      let d = i.value, f = r.value;
      return d === null ? -1 : f === null || d.kind === "arbitrary" && f.kind !== "arbitrary" ? 1 : d.kind !== "arbitrary" && f.kind === "arbitrary" || d.value < f.value ? -1 : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(i, { kind: r, applyFn: t, compounds: n, compoundsWith: s, order: l }) {
      let d = this.variants.get(i);
      d ? Object.assign(d, { kind: r, applyFn: t, compounds: n }) : (l === undefined && (this.lastOrder = this.nextOrder(), l = this.lastOrder), this.variants.set(i, { kind: r, applyFn: t, order: l, compoundsWith: s, compounds: n }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function Oe(e) {
    let i = 0;
    for (let r of e) {
      if (r[0] === "@") {
        if (!r.startsWith("@media") && !r.startsWith("@supports") && !r.startsWith("@container"))
          return 0;
        i |= 1;
        continue;
      }
      if (r.includes("::"))
        return 0;
      i |= 2;
    }
    return i;
  }
  function Mi(e) {
    let i = new fr;
    function r(c, p, { compounds: m } = {}) {
      m = m ?? Oe(p), i.static(c, (u) => {
        u.nodes = p.map((v) => Z2(v, u.nodes));
      }, { compounds: m });
    }
    r("*", [":is(& > *)"], { compounds: 0 }), r("**", [":is(& *)"], { compounds: 0 });
    function t(c, p) {
      return p.map((m) => {
        if (c === "@container") {
          let u = M2(m.trim());
          return u.length >= 1 && u[0].kind === "function" ? `not ${m}` : u.length >= 3 && u[0].kind === "word" && u[0].value === "not" && u[2].kind === "function" ? (u.splice(0, 2), F2(u)) : u.length >= 5 && u[0].kind === "word" && u[2].kind === "word" && u[2].value === "not" && u[4].kind === "function" ? (u.splice(2, 2), F2(u)) : u.length >= 3 && u[0].kind === "word" && u[0].value !== "not" && u[2].kind === "function" ? (u.splice(1, 0, { kind: "separator", value: " " }, { kind: "word", value: "not" }), F2(u)) : `not ${m}`;
        } else {
          m = m.trim();
          let u = d(m, " ");
          return u[0] === "not" ? u.slice(1).join(" ") : `not ${m}`;
        }
      });
    }
    let n = ["@media", "@supports", "@container"];
    function s(c) {
      for (let p of n) {
        if (p !== c.name)
          continue;
        let m = d(c.params, ",");
        return m.length > 1 ? null : (m = t(c.name, m), B2(c.name, m.join(", ")));
      }
      return null;
    }
    function l(c) {
      return c.includes("::") ? null : `&:not(${d(c, ",").map((m) => (m = m.replaceAll("&", "*"), m)).join(", ")})`;
    }
    i.compound("not", 3, (c, p) => {
      if (p.variant.kind === "arbitrary" && p.variant.relative || p.modifier)
        return null;
      let m = false;
      if (P2([c], (u, v) => {
        if (u.kind !== "rule" && u.kind !== "at-rule")
          return V2.Continue;
        if (u.nodes.length > 0)
          return V2.Continue;
        let h = [], k = [], y = v.path();
        y.push(u);
        for (let x of y)
          x.kind === "at-rule" ? h.push(x) : x.kind === "rule" && k.push(x);
        if (h.length > 1)
          return V2.Stop;
        if (k.length > 1)
          return V2.Stop;
        let S = [];
        for (let x of k) {
          let b = l(x.selector);
          if (!b)
            return m = false, V2.Stop;
          S.push(H2(b, []));
        }
        for (let x of h) {
          let b = s(x);
          if (!b)
            return m = false, V2.Stop;
          S.push(b);
        }
        return Object.assign(c, H2("&", S)), m = true, V2.Skip;
      }), c.kind === "rule" && c.selector === "&" && c.nodes.length === 1 && Object.assign(c, c.nodes[0]), !m)
        return null;
    }), i.suggest("not", () => Array.from(i.keys()).filter((c) => i.compoundsWith("not", c))), i.compound("group", 2, (c, p) => {
      if (p.variant.kind === "arbitrary" && p.variant.relative)
        return null;
      let m = p.modifier ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group\\/${p.modifier.value})` : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group)`, u = false;
      if (P2([c], (v, h) => {
        if (v.kind !== "rule")
          return V2.Continue;
        for (let y of h.path())
          if (y.kind === "rule")
            return u = false, V2.Stop;
        let k = v.selector.replaceAll("&", m);
        d(k, ",").length > 1 && (k = `:is(${k})`), v.selector = `&:is(${k} *)`, u = true;
      }), !u)
        return null;
    }), i.suggest("group", () => Array.from(i.keys()).filter((c) => i.compoundsWith("group", c))), i.compound("peer", 2, (c, p) => {
      if (p.variant.kind === "arbitrary" && p.variant.relative)
        return null;
      let m = p.modifier ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer\\/${p.modifier.value})` : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer)`, u = false;
      if (P2([c], (v, h) => {
        if (v.kind !== "rule")
          return V2.Continue;
        for (let y of h.path())
          if (y.kind === "rule")
            return u = false, V2.Stop;
        let k = v.selector.replaceAll("&", m);
        d(k, ",").length > 1 && (k = `:is(${k})`), v.selector = `&:is(${k} ~ *)`, u = true;
      }), !u)
        return null;
    }), i.suggest("peer", () => Array.from(i.keys()).filter((c) => i.compoundsWith("peer", c))), r("first-letter", ["&::first-letter"]), r("first-line", ["&::first-line"]), r("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), r("selection", ["& *::selection", "&::selection"]), r("file", ["&::file-selector-button"]), r("placeholder", ["&::placeholder"]), r("backdrop", ["&::backdrop"]), r("details-content", ["&::details-content"]);
    {
      let c = function() {
        return Y2([B2("@property", "--tw-content", [a2("syntax", '"*"'), a2("initial-value", '""'), a2("inherits", "false")])]);
      };
      var d2 = c;
      i.static("before", (p) => {
        p.nodes = [H2("&::before", [c(), a2("content", "var(--tw-content)"), ...p.nodes])];
      }, { compounds: 0 }), i.static("after", (p) => {
        p.nodes = [H2("&::after", [c(), a2("content", "var(--tw-content)"), ...p.nodes])];
      }, { compounds: 0 });
    }
    r("first", ["&:first-child"]), r("last", ["&:last-child"]), r("only", ["&:only-child"]), r("odd", ["&:nth-child(odd)"]), r("even", ["&:nth-child(even)"]), r("first-of-type", ["&:first-of-type"]), r("last-of-type", ["&:last-of-type"]), r("only-of-type", ["&:only-of-type"]), r("visited", ["&:visited"]), r("target", ["&:target"]), r("open", ["&:is([open], :popover-open, :open)"]), r("default", ["&:default"]), r("checked", ["&:checked"]), r("indeterminate", ["&:indeterminate"]), r("placeholder-shown", ["&:placeholder-shown"]), r("autofill", ["&:autofill"]), r("optional", ["&:optional"]), r("required", ["&:required"]), r("valid", ["&:valid"]), r("invalid", ["&:invalid"]), r("user-valid", ["&:user-valid"]), r("user-invalid", ["&:user-invalid"]), r("in-range", ["&:in-range"]), r("out-of-range", ["&:out-of-range"]), r("read-only", ["&:read-only"]), r("empty", ["&:empty"]), r("focus-within", ["&:focus-within"]), i.static("hover", (c) => {
      c.nodes = [H2("&:hover", [B2("@media", "(hover: hover)", c.nodes)])];
    }), r("focus", ["&:focus"]), r("focus-visible", ["&:focus-visible"]), r("active", ["&:active"]), r("enabled", ["&:enabled"]), r("disabled", ["&:disabled"]), r("inert", ["&:is([inert], [inert] *)"]), i.compound("in", 2, (c, p) => {
      if (p.modifier)
        return null;
      let m = false;
      if (P2([c], (u, v) => {
        if (u.kind !== "rule")
          return V2.Continue;
        for (let h of v.path())
          if (h.kind === "rule")
            return m = false, V2.Stop;
        u.selector = `:where(${u.selector.replaceAll("&", "*")}) &`, m = true;
      }), !m)
        return null;
    }), i.suggest("in", () => Array.from(i.keys()).filter((c) => i.compoundsWith("in", c))), i.compound("has", 2, (c, p) => {
      if (p.modifier)
        return null;
      let m = false;
      if (P2([c], (u, v) => {
        if (u.kind !== "rule")
          return V2.Continue;
        for (let h of v.path())
          if (h.kind === "rule")
            return m = false, V2.Stop;
        u.selector = `&:has(${u.selector.replaceAll("&", "*")})`, m = true;
      }), !m)
        return null;
    }), i.suggest("has", () => Array.from(i.keys()).filter((c) => i.compoundsWith("has", c))), i.functional("aria", (c, p) => {
      if (!p.value || p.modifier)
        return null;
      if (p.value.kind === "arbitrary") {
        let m = `[aria-${ji(p.value.value)}]`;
        if (Me(m) === null)
          return null;
        c.nodes = [H2(`&${m}`, c.nodes)];
      } else {
        let m = `[aria-${p.value.value}="true"]`;
        if (Me(m) === null)
          return null;
        c.nodes = [H2(`&${m}`, c.nodes)];
      }
    }), i.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), i.functional("data", (c, p) => {
      if (!p.value || p.modifier)
        return null;
      let m = `[data-${ji(p.value.value)}]`;
      if (Me(m) === null)
        return null;
      c.nodes = [H2(`&${m}`, c.nodes)];
    }), i.functional("nth", (c, p) => {
      if (!p.value || p.modifier || p.value.kind === "named" && !u(p.value.value))
        return null;
      c.nodes = [H2(`&:nth-child(${p.value.value})`, c.nodes)];
    }), i.functional("nth-last", (c, p) => {
      if (!p.value || p.modifier || p.value.kind === "named" && !u(p.value.value))
        return null;
      c.nodes = [H2(`&:nth-last-child(${p.value.value})`, c.nodes)];
    }), i.functional("nth-of-type", (c, p) => {
      if (!p.value || p.modifier || p.value.kind === "named" && !u(p.value.value))
        return null;
      c.nodes = [H2(`&:nth-of-type(${p.value.value})`, c.nodes)];
    }), i.functional("nth-last-of-type", (c, p) => {
      if (!p.value || p.modifier || p.value.kind === "named" && !u(p.value.value))
        return null;
      c.nodes = [H2(`&:nth-last-of-type(${p.value.value})`, c.nodes)];
    }), i.functional("supports", (c, p) => {
      if (!p.value || p.modifier)
        return null;
      let m = p.value.value;
      if (m === null)
        return null;
      if (/^[\w-]*\s*\(/.test(m)) {
        let u = m.replace(/\b(and|or|not)\b/g, " $1 ");
        c.nodes = [B2("@supports", u, c.nodes)];
        return;
      }
      m.includes(":") || (m = `${m}: var(--tw)`), (m[0] !== "(" || m[m.length - 1] !== ")") && (m = `(${m})`), c.nodes = [B2("@supports", m, c.nodes)];
    }, { compounds: 1 }), r("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), r("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), r("contrast-more", ["@media (prefers-contrast: more)"]), r("contrast-less", ["@media (prefers-contrast: less)"]);
    {
      let c = function(p, m, u, v) {
        if (p === m)
          return 0;
        let h = v.get(p);
        if (h === null)
          return u === "asc" ? -1 : 1;
        let k = v.get(m);
        return k === null ? u === "asc" ? 1 : -1 : Ee(h, k, u);
      };
      var f = c;
      {
        let p = e.namespace("--breakpoint"), m = new U2((u) => {
          switch (u.kind) {
            case "static":
              return e.resolveValue(u.root, ["--breakpoint"]) ?? null;
            case "functional": {
              if (!u.value || u.modifier)
                return null;
              let v = null;
              return u.value.kind === "arbitrary" ? v = u.value.value : u.value.kind === "named" && (v = e.resolveValue(u.value.value, ["--breakpoint"])), !v || v.includes("var(") ? null : v;
            }
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        i.group(() => {
          i.functional("max", (u, v) => {
            if (v.modifier)
              return null;
            let h = m.get(v);
            if (h === null)
              return null;
            u.nodes = [B2("@media", `(width < ${h})`, u.nodes)];
          }, { compounds: 1 });
        }, (u, v) => c(u, v, "desc", m)), i.suggest("max", () => Array.from(p.keys()).filter((u) => u !== null)), i.group(() => {
          for (let [u, v] of e.namespace("--breakpoint"))
            u !== null && i.static(u, (h) => {
              h.nodes = [B2("@media", `(width >= ${v})`, h.nodes)];
            }, { compounds: 1 });
          i.functional("min", (u, v) => {
            if (v.modifier)
              return null;
            let h = m.get(v);
            if (h === null)
              return null;
            u.nodes = [B2("@media", `(width >= ${h})`, u.nodes)];
          }, { compounds: 1 });
        }, (u, v) => c(u, v, "asc", m)), i.suggest("min", () => Array.from(p.keys()).filter((u) => u !== null));
      }
      {
        let p = e.namespace("--container"), m = new U2((u) => {
          switch (u.kind) {
            case "functional": {
              if (u.value === null)
                return null;
              let v = null;
              return u.value.kind === "arbitrary" ? v = u.value.value : u.value.kind === "named" && (v = e.resolveValue(u.value.value, ["--container"])), !v || v.includes("var(") ? null : v;
            }
            case "static":
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        i.group(() => {
          i.functional("@max", (u, v) => {
            let h = m.get(v);
            if (h === null)
              return null;
            u.nodes = [B2("@container", v.modifier ? `${v.modifier.value} (width < ${h})` : `(width < ${h})`, u.nodes)];
          }, { compounds: 1 });
        }, (u, v) => c(u, v, "desc", m)), i.suggest("@max", () => Array.from(p.keys()).filter((u) => u !== null)), i.group(() => {
          i.functional("@", (u, v) => {
            let h = m.get(v);
            if (h === null)
              return null;
            u.nodes = [B2("@container", v.modifier ? `${v.modifier.value} (width >= ${h})` : `(width >= ${h})`, u.nodes)];
          }, { compounds: 1 }), i.functional("@min", (u, v) => {
            let h = m.get(v);
            if (h === null)
              return null;
            u.nodes = [B2("@container", v.modifier ? `${v.modifier.value} (width >= ${h})` : `(width >= ${h})`, u.nodes)];
          }, { compounds: 1 });
        }, (u, v) => c(u, v, "asc", m)), i.suggest("@min", () => Array.from(p.keys()).filter((u) => u !== null)), i.suggest("@", () => Array.from(p.keys()).filter((u) => u !== null));
      }
    }
    return r("portrait", ["@media (orientation: portrait)"]), r("landscape", ["@media (orientation: landscape)"]), r("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), r("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), r("dark", ["@media (prefers-color-scheme: dark)"]), r("starting", ["@starting-style"]), r("print", ["@media print"]), r("forced-colors", ["@media (forced-colors: active)"]), r("inverted-colors", ["@media (inverted-colors: inverted)"]), r("pointer-none", ["@media (pointer: none)"]), r("pointer-coarse", ["@media (pointer: coarse)"]), r("pointer-fine", ["@media (pointer: fine)"]), r("any-pointer-none", ["@media (any-pointer: none)"]), r("any-pointer-coarse", ["@media (any-pointer: coarse)"]), r("any-pointer-fine", ["@media (any-pointer: fine)"]), r("noscript", ["@media (scripting: none)"]), i;
  }
  function ji(e) {
    if (e.includes("=")) {
      let [i, ...r] = d(e, "="), t = r.join("=").trim();
      if (t[0] === "'" || t[0] === '"')
        return e;
      if (t.length > 1) {
        let n = t[t.length - 1];
        if (t[t.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S"))
          return `${i}="${t.slice(0, -2)}" ${n}`;
      }
      return `${i}="${t}"`;
    }
    return e;
  }
  function cr(e, i) {
    P2(e, (r) => {
      if (r.kind === "at-rule" && r.name === "@slot")
        return V2.ReplaceSkip(i);
      if (r.kind === "at-rule" && (r.name === "@keyframes" || r.name === "@property"))
        return Object.assign(r, Y2([B2(r.name, r.params, r.nodes)])), V2.Skip;
    });
  }
  function at(e, i) {
    let r = 0;
    return P2(e, (t) => {
      if (t.kind !== "at-rule" || t.name !== "@variant")
        return;
      let n = [], s = d(t.params, ",");
      for (let [l, d2] of s.entries()) {
        let f = H2("&", l === s.length - 1 ? t.nodes : t.nodes.map(re2)), c = d(d2, ":");
        for (let p = c.length - 1;p >= 0; --p) {
          let m = c[p].trim();
          if (!m)
            throw new Error("Cannot use `@variant` with empty variant");
          let u = i.parseVariant(m);
          if (u === null)
            throw new Error(`Cannot use \`@variant\` with unknown variant: ${m}`);
          if (Be(f, u, i.variants) === null)
            throw new Error(`Cannot use \`@variant\` with variant: ${m}`);
        }
        f.selector === "&" ? n.push(...f.nodes) : n.push(f);
      }
      return r |= 32, V2.Replace(n);
    }), r;
  }
  function Fi(e, i) {
    let r = si(e), t = Mi(e), n = new U2((m) => ri(m, p)), s = new U2((m) => Array.from(ti(m, p))), l = new U2((m) => new U2((u) => {
      let v = Wi(u, p, m);
      try {
        let h = v.map((k) => k.node);
        Le(h, p), at(h, p);
      } catch {
        return [];
      }
      return v;
    })), d = new U2((m) => {
      for (let u of ht(m))
        e.markUsedVariable(u);
    });
    function f(m) {
      let u = [];
      for (let v of m) {
        let h = true, { astNodes: k } = $e([v], p, { onInvalidCandidate() {
          h = false;
        } });
        i && P2(k, (y) => (y.src ??= i, V2.Continue)), k = Ne(k, p, 0), u.push(h ? k : []);
      }
      return u;
    }
    function c(m) {
      return f(m).map((u) => u.length > 0 ? se(u) : null);
    }
    let p = { theme: e, utilities: r, variants: t, invalidCandidates: new Set, important: false, candidatesToCss: c, candidatesToAst: f, getClassOrder(m) {
      return zi(this, m);
    }, getClassList() {
      return Ui(this);
    }, getVariants() {
      return Li(this);
    }, parseCandidate(m) {
      return s.get(m);
    }, parseVariant(m) {
      return n.get(m);
    }, compileAstNodes(m, u = 1) {
      return l.get(u).get(m);
    }, printCandidate(m) {
      return ni(p, m);
    }, printVariant(m) {
      return vt(m);
    }, getVariantOrder() {
      let m = Array.from(n.values());
      m.sort((k, y) => this.variants.compare(k, y));
      let u = new Map, v, h = 0;
      for (let k of m)
        k !== null && (v !== undefined && this.variants.compare(v, k) !== 0 && h++, u.set(k, h), v = k);
      return u;
    }, resolveThemeValue(m, u = true) {
      let v = m.lastIndexOf("/"), h = null;
      v !== -1 && (h = m.slice(v + 1).trim(), m = m.slice(0, v).trim());
      let k = e.resolve(null, [m], u ? 1 : 0) ?? undefined;
      return h && k ? X2(k, h) : k;
    }, trackUsedVariables(m) {
      d.get(m);
    }, canonicalizeCandidates(m, u) {
      return ar(this, m, u);
    }, storage: {} };
    return p;
  }
  var pr = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "inset-block-start", "inset-block-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-block-start", "margin-block-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "zoom", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-block-start", "scroll-margin-block-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-block-start", "scroll-padding-block-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "scrollbar-width", "scrollbar-color", "scrollbar-gutter", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-block-start-width", "border-block-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-block-start-style", "border-block-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-block-start-color", "border-block-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-block-start", "padding-block-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-feature-settings", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "tab-size", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
  function $e(e, i, { onInvalidCandidate: r, respectImportant: t } = {}) {
    let n = new Map, s = [], l = new Map;
    for (let c of e) {
      if (i.invalidCandidates.has(c)) {
        r?.(c);
        continue;
      }
      let p = i.parseCandidate(c);
      if (p.length === 0) {
        r?.(c);
        continue;
      }
      l.set(c, p);
    }
    let d = 0;
    (t ?? true) && (d |= 1);
    let f = i.getVariantOrder();
    for (let [c, p] of l) {
      let m = false;
      for (let u of p) {
        let v = i.compileAstNodes(u, d);
        if (v.length !== 0) {
          m = true;
          for (let { node: h, propertySort: k } of v) {
            let y = 0n;
            for (let S of u.variants)
              y |= 1n << BigInt(f.get(S));
            n.set(h, { properties: k, variants: y, candidate: c }), s.push(h);
          }
        }
      }
      m || r?.(c);
    }
    return s.sort((c, p) => {
      let m = n.get(c), u = n.get(p);
      if (m.variants - u.variants !== 0n)
        return Number(m.variants - u.variants);
      let v = 0;
      for (;v < m.properties.order.length && v < u.properties.order.length && m.properties.order[v] === u.properties.order[v]; )
        v += 1;
      return (m.properties.order[v] ?? 1 / 0) - (u.properties.order[v] ?? 1 / 0) || u.properties.count - m.properties.count || xt(m.candidate, u.candidate);
    }), { astNodes: s, nodeSorting: n };
  }
  function Wi(e, i, r) {
    let t = pa(e, i);
    if (t.length === 0)
      return [];
    let n = i.important && !!(r & 1), s = [], l = `.${h2(e.raw)}`;
    for (let d of t) {
      let f = da(d);
      (e.important || n) && Yi(d);
      let c = { kind: "rule", selector: l, nodes: d };
      for (let p of e.variants)
        if (Be(c, p, i.variants) === null)
          return [];
      s.push({ node: c, propertySort: f });
    }
    return s;
  }
  function Be(e, i, r, t = 0) {
    if (i.kind === "arbitrary") {
      if (i.relative && t === 0)
        return null;
      e.nodes = [Z2(i.selector, e.nodes)];
      return;
    }
    let { applyFn: n } = r.get(i.root);
    if (i.kind === "compound") {
      let l = B2("@slot");
      if (Be(l, i.variant, r, t + 1) === null || i.root === "not" && l.nodes.length > 1)
        return null;
      for (let f of l.nodes)
        if (f.kind !== "rule" && f.kind !== "at-rule" || n(f, i) === null)
          return null;
      P2(l.nodes, (f) => {
        if ((f.kind === "rule" || f.kind === "at-rule") && f.nodes.length <= 0)
          return f.nodes = e.nodes, V2.Skip;
      }), e.nodes = l.nodes;
      return;
    }
    if (n(e, i) === null)
      return null;
  }
  function Bi(e) {
    let i = e.options?.types ?? [];
    return i.length > 1 && i.includes("any");
  }
  function pa(e, i) {
    if (e.kind === "arbitrary") {
      let l = e.value;
      return e.modifier && (l = te2(l, e.modifier, i.theme)), l === null ? [] : [[a2(e.property, l)]];
    }
    let r = i.utilities.get(e.root) ?? [], t = [], n = r.filter((l) => !Bi(l));
    for (let l of n) {
      if (l.kind !== e.kind)
        continue;
      let d = l.compileFn(e);
      if (d !== undefined) {
        if (d === null) {
          if (l.options?.types?.length)
            return t;
          continue;
        }
        t.push(d);
      }
    }
    if (t.length > 0)
      return t;
    let s = r.filter((l) => Bi(l));
    for (let l of s) {
      if (l.kind !== e.kind)
        continue;
      let d = l.compileFn(e);
      if (d !== undefined) {
        if (d === null) {
          if (l.options?.types?.length)
            return t;
          continue;
        }
        t.push(d);
      }
    }
    return t;
  }
  function Yi(e) {
    for (let i of e)
      i.kind !== "at-root" && (i.kind === "declaration" ? i.important = true : (i.kind === "rule" || i.kind === "at-rule") && Yi(i.nodes));
  }
  function da(e) {
    let i = new Set, r = 0, t = e.slice(), n = false;
    for (;t.length > 0; ) {
      let s = t.shift();
      if (s.kind === "declaration") {
        if (s.value === undefined || (r++, n))
          continue;
        if (s.property === "--tw-sort") {
          let d = pr.indexOf(s.value ?? "");
          if (d !== -1) {
            i.add(d), n = true;
            continue;
          }
        }
        let l = pr.indexOf(s.property);
        l !== -1 && i.add(l);
      } else if (s.kind === "rule" || s.kind === "at-rule")
        for (let l of s.nodes)
          t.push(l);
    }
    return { order: Array.from(i).sort((s, l) => s - l), count: r };
  }
  function Ve(e, i) {
    let r = 0, t = Z2("&", e), n = new Set, s = new U2(() => new Set), l = new U2(() => new Set);
    P2([t], (m, u) => {
      if (m.kind === "at-rule") {
        if (m.name === "@keyframes")
          return P2(m.nodes, (v) => {
            if (v.kind === "at-rule" && v.name === "@apply")
              throw new Error("You cannot use `@apply` inside `@keyframes`.");
          }), V2.Skip;
        if (m.name === "@utility") {
          let v = m.params.replace(/-\*$/, "");
          l.get(v).add(m), P2(m.nodes, (h) => {
            if (!(h.kind !== "at-rule" || h.name !== "@apply")) {
              n.add(m);
              for (let k of Gi(h, i))
                s.get(m).add(k);
            }
          });
          return;
        }
        if (m.name === "@apply") {
          if (u.parent === null)
            return;
          r |= 1, n.add(u.parent);
          for (let v of Gi(m, i))
            for (let h of u.path())
              n.has(h) && s.get(h).add(v);
        }
      }
    });
    let d2 = new Set, f = [], c = new Set;
    function p(m, u = []) {
      if (!d2.has(m)) {
        if (c.has(m)) {
          let v = u[(u.indexOf(m) + 1) % u.length];
          throw m.kind === "at-rule" && m.name === "@utility" && v.kind === "at-rule" && v.name === "@utility" && P2(m.nodes, (h) => {
            if (h.kind !== "at-rule" || h.name !== "@apply")
              return;
            let k = h.params.split(/\s+/g);
            for (let y of k)
              for (let S of i.parseCandidate(y))
                switch (S.kind) {
                  case "arbitrary":
                    break;
                  case "static":
                  case "functional":
                    if (v.params.replace(/-\*$/, "") === S.root)
                      throw new Error(`You cannot \`@apply\` the \`${y}\` utility here because it creates a circular dependency.`);
                    break;
                  default:
                }
          }), new Error(`Circular dependency detected:

${se([m])}
Relies on:

${se([v])}`);
        }
        c.add(m);
        for (let v of s.get(m))
          for (let h of l.get(v))
            u.push(m), p(h, u), u.pop();
        d2.add(m), c.delete(m), f.push(m);
      }
    }
    for (let m of n)
      p(m);
    for (let m of f)
      "nodes" in m && P2(m.nodes, (u) => {
        if (u.kind !== "at-rule" || u.name !== "@apply")
          return;
        let v = u.params.split(/(\s+)/g), h = {}, k = [], y = [], S = 0;
        for (let [b, I] of v.entries())
          b % 2 === 0 && (I[0] === "-" && I[1] === "-" ? y.push(I) : k.push(I), h[I] = S), S += I.length;
        if (y.length) {
          if (k.length === 0)
            return V2.Skip;
          let b = y.join(" ");
          throw new Error(`You cannot use \`@apply\` with both mixins and utilities. Please move \`@apply ${b}\` into a separate rule.`);
        }
        if (u.nodes.length > 0 && k.length) {
          let b = k.join(" ");
          throw new Error(`The rule \`@apply ${b}\` must not have a body.`);
        }
        {
          let b = Object.keys(h), I = $e(b, i, { respectImportant: false, onInvalidCandidate: (E) => {
            if (i.theme.prefix && !E.startsWith(i.theme.prefix))
              throw new Error(`Cannot apply unprefixed utility class \`${E}\`. Did you mean \`${i.theme.prefix}:${E}\`?`);
            if (i.invalidCandidates.has(E))
              throw new Error(`Cannot apply utility class \`${E}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
            let j = d(E, ":");
            if (j.length > 1) {
              let q = j.pop();
              if (i.candidatesToCss([q])[0]) {
                let G = i.candidatesToCss(j.map((ie) => `${ie}:[--tw-variant-check:1]`)), ee = j.filter((ie, o) => G[o] === null);
                if (ee.length > 0) {
                  if (ee.length === 1)
                    throw new Error(`Cannot apply utility class \`${E}\` because the ${ee.map((ie) => `\`${ie}\``)} variant does not exist.`);
                  {
                    let ie = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                    throw new Error(`Cannot apply utility class \`${E}\` because the ${ie.format(ee.map((o) => `\`${o}\``))} variants do not exist.`);
                  }
                }
              }
            }
            throw i.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${E}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${E}\``);
          } }), D = u.src, O = I.astNodes.map((E) => {
            let j = I.nodeSorting.get(E)?.candidate, q = j ? h[j] : undefined;
            if (E = re2(E), !D || !j || q === undefined)
              return P2([E], (ee) => {
                ee.src = D;
              }), E;
            let G = [D[0], D[1], D[2]];
            return G[1] += 7 + q, G[2] = G[1] + j.length, P2([E], (ee) => {
              ee.src = G;
            }), E;
          }), L = [];
          for (let E of O)
            if (E.kind === "rule")
              for (let j of E.nodes)
                L.push(j);
            else
              L.push(E);
          return V2.Replace(L);
        }
      });
    return r;
  }
  function* Gi(e, i) {
    for (let r of e.params.split(/\s+/g))
      for (let t of i.parseCandidate(r))
        switch (t.kind) {
          case "arbitrary":
            break;
          case "static":
          case "functional":
            yield t.root;
            break;
          default:
        }
  }
  async function dr(e, i, r, t = 0, n = false) {
    let s = 0, l = [];
    return P2(e, (d) => {
      if (d.kind === "at-rule" && (d.name === "@import" || d.name === "@reference")) {
        let f = ma(M2(d.params));
        if (f === null)
          return;
        d.name === "@reference" && (f.media = "reference"), s |= 2;
        let { uri: c, layer: p, media: m, supports: u } = f;
        if (c.startsWith("data:") || c.startsWith("http://") || c.startsWith("https://"))
          return;
        let v = ve({}, []);
        return l.push((async () => {
          if (t > 100)
            throw new Error(`Exceeded maximum recursion depth while resolving \`${c}\` in \`${i}\`)`);
          let h = await r(c, i), k = Te(h.content, { from: n ? h.path : undefined });
          await dr(k, h.base, r, t + 1, n), v.nodes = ga(d, [ve({ base: h.base }, k)], p, m, u);
        })()), V2.ReplaceSkip(v);
      }
    }), l.length > 0 && await Promise.all(l), s;
  }
  function ma(e) {
    let i, r = null, t = null, n = null;
    for (let s = 0;s < e.length; s++) {
      let l = e[s];
      if (l.kind !== "separator") {
        if (l.kind === "word" && !i) {
          if (!l.value || l.value[0] !== '"' && l.value[0] !== "'")
            return null;
          i = l.value.slice(1, -1);
          continue;
        }
        if (l.kind === "function" && l.value.toLowerCase() === "url" || !i)
          return null;
        if ((l.kind === "word" || l.kind === "function") && l.value.toLowerCase() === "layer") {
          if (r)
            return null;
          if (n)
            throw new Error("`layer(…)` in an `@import` should come before any other functions or conditions");
          "nodes" in l ? r = F2(l.nodes) : r = "";
          continue;
        }
        if (l.kind === "function" && l.value.toLowerCase() === "supports") {
          if (n)
            return null;
          n = F2(l.nodes);
          continue;
        }
        t = F2(e.slice(s));
        break;
      }
    }
    return i ? { uri: i, layer: r, media: t, supports: n } : null;
  }
  function ga(e, i, r, t, n) {
    let s = i;
    if (r !== null) {
      let l = B2("@layer", r, s);
      l.src = e.src, s = [l];
    }
    if (t !== null) {
      let l = B2("@media", t, s);
      l.src = e.src, s = [l];
    }
    if (n !== null) {
      let l = B2("@supports", n[0] === "(" ? n : `(${n})`, s);
      l.src = e.src, s = [l];
    }
    return s;
  }
  function Ye(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
      return false;
    let i = Object.getPrototypeOf(e);
    return i === null || Object.getPrototypeOf(i) === null;
  }
  function ot(e, i, r, t = []) {
    for (let n of i)
      if (n != null)
        for (let s of Reflect.ownKeys(n)) {
          t.push(s);
          let l = r(e[s], n[s], t);
          l !== undefined ? e[s] = l : !Ye(e[s]) || !Ye(n[s]) ? e[s] = n[s] : e[s] = ot({}, [e[s], n[s]], r, t), t.pop();
        }
    return e;
  }
  function Rt(e, i, r) {
    return function(n, s) {
      let l = n.lastIndexOf("/"), d = null;
      l !== -1 && (d = n.slice(l + 1).trim(), n = n.slice(0, l).trim());
      let f = (() => {
        let c = Pe(n), [p, m] = ha(e.theme, c), u = r(qi(i() ?? {}, c) ?? null);
        if (typeof u == "string" && (u = u.replace("<alpha-value>", "1")), typeof p != "object")
          return typeof m != "object" && m & 4 ? u ?? p : p;
        if (u !== null && typeof u == "object" && !Array.isArray(u)) {
          let v = ot({}, [u], (h, k) => k);
          if (p === null && Object.hasOwn(u, "__CSS_VALUES__")) {
            let h = {};
            for (let k in u.__CSS_VALUES__)
              h[k] = u[k], delete v[k];
            p = h;
          }
          for (let h in p)
            h !== "__CSS_VALUES__" && (u?.__CSS_VALUES__?.[h] & 4 && qi(v, h.split("-")) !== undefined || (v[a(h)] = p[h]));
          return v;
        }
        if (Array.isArray(p) && Array.isArray(m) && Array.isArray(u)) {
          let v = p[0], h = p[1];
          m[0] & 4 && (v = u[0] ?? v);
          for (let k of Object.keys(h))
            m[1][k] & 4 && (h[k] = u[1][k] ?? h[k]);
          return [v, h];
        }
        return p !== null && typeof p == "object" && !Array.isArray(p) && "DEFAULT" in p ? p.DEFAULT : p ?? u;
      })();
      return d && typeof f == "string" && (f = X2(f, d)), f ?? s;
    };
  }
  function ha(e, i) {
    if (i.length === 1 && i[0].startsWith("--"))
      return [e.get([i[0]]), e.getOptions(i[0])];
    let r = We(i), t = new Map, n = new U2(() => new Map), s = e.namespace(`--${r}`);
    if (s.size === 0)
      return [null, 0];
    let l = new Map;
    for (let [p, m] of s) {
      if (!p || !p.includes("--")) {
        t.set(p, m), l.set(p, e.getOptions(p ? `--${r}-${p}` : `--${r}`));
        continue;
      }
      let u = p.indexOf("--"), v = p.slice(0, u), h = p.slice(u + 2);
      h = h.replace(/-([a-z])/g, (k, y) => y.toUpperCase()), n.get(v === "" ? null : v).set(h, [m, e.getOptions(`--${r}${p}`)]);
    }
    let d = e.getOptions(`--${r}`);
    for (let [p, m] of n) {
      let u = t.get(p);
      if (typeof u != "string")
        continue;
      let v = {}, h = {};
      for (let [k, [y, S]] of m)
        v[k] = y, h[k] = S;
      t.set(p, [u, v]), l.set(p, [d, h]);
    }
    let f = {}, c = {};
    for (let [p, m] of t)
      Hi(f, [p ?? "DEFAULT"], m);
    for (let [p, m] of l)
      Hi(c, [p ?? "DEFAULT"], m);
    return i[i.length - 1] === "DEFAULT" ? [f?.DEFAULT ?? null, c.DEFAULT ?? 0] : ("DEFAULT" in f) && Object.keys(f).length === 1 ? [f.DEFAULT, c.DEFAULT ?? 0] : (f.__CSS_VALUES__ = c, [f, c]);
  }
  function qi(e, i) {
    for (let r = 0;r < i.length; ++r) {
      let t = i[r];
      if (e == null || typeof e != "object" || !Object.hasOwn(e, t)) {
        if (i[r + 1] === undefined)
          return;
        i[r + 1] = `${t}-${i[r + 1]}`;
        continue;
      }
      e = e[t];
    }
    return e;
  }
  function Hi(e, i, r) {
    for (let t of i.slice(0, -1))
      e[t] === undefined && (e[t] = {}), e = e[t];
    e[i[i.length - 1]] = r;
  }
  var Zi = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function mr({ designSystem: e, ast: i, resolvedConfig: r, featuresRef: t, referenceMode: n, src: s }) {
    let l = { addBase(d) {
      if (n)
        return;
      let f = ke(d);
      t.current |= Le(f, e);
      let c = B2("@layer", "base", f);
      P2([c], (p) => {
        p.src = s;
      }), i.push(c);
    }, addVariant(d, f) {
      if (!Et.test(d))
        throw new Error(`\`addVariant('${d}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if (typeof f == "string") {
        if (f.includes(":merge("))
          return;
      } else if (Array.isArray(f)) {
        if (f.some((p) => p.includes(":merge(")))
          return;
      } else if (typeof f == "object") {
        let p = function(m, u) {
          return Object.entries(m).some(([v, h]) => v.includes(u) || typeof h == "object" && p(h, u));
        };
        var c = p;
        if (p(f, ":merge("))
          return;
      }
      typeof f == "string" || Array.isArray(f) ? e.variants.static(d, (p) => {
        p.nodes = Ji(f, p.nodes);
      }, { compounds: Oe(typeof f == "string" ? [f] : f) }) : typeof f == "object" && e.variants.fromAst(d, ke(f), e);
    }, matchVariant(d, f, c) {
      function p(u, v, h) {
        let k = f(u, { modifier: v?.value ?? null });
        return Ji(k, h);
      }
      try {
        let u = f("a", { modifier: null });
        if (typeof u == "string" && u.includes(":merge("))
          return;
        if (Array.isArray(u) && u.some((v) => v.includes(":merge(")))
          return;
      } catch {}
      let m = Object.keys(c?.values ?? {});
      e.variants.group(() => {
        e.variants.functional(d, (u, v) => {
          if (!v.value) {
            if (c?.values && "DEFAULT" in c.values) {
              u.nodes = p(c.values.DEFAULT, v.modifier, u.nodes);
              return;
            }
            return null;
          }
          if (v.value.kind === "arbitrary")
            u.nodes = p(v.value.value, v.modifier, u.nodes);
          else if (v.value.kind === "named" && c?.values) {
            if (!Object.hasOwn(c.values, v.value.value))
              return null;
            let h = c.values[v.value.value];
            if (typeof h != "string")
              return null;
            u.nodes = p(h, v.modifier, u.nodes);
          } else
            return null;
        });
      }, (u, v) => {
        if (u.kind !== "functional" || v.kind !== "functional")
          return 0;
        let h = u.value ? u.value.value : "DEFAULT", k = v.value ? v.value.value : "DEFAULT", y = (c?.values && Object.hasOwn(c.values, h) ? c.values[h] : undefined) ?? h, S = (c?.values && Object.hasOwn(c.values, k) ? c.values[k] : undefined) ?? k;
        if (c && typeof c.sort == "function")
          return c.sort({ value: y, modifier: u.modifier?.value ?? null }, { value: S, modifier: v.modifier?.value ?? null });
        let x = m.indexOf(h), b = m.indexOf(k);
        return x = x === -1 ? m.length : x, b = b === -1 ? m.length : b, x !== b ? x - b : y < S ? -1 : 1;
      }), e.variants.suggest(d, () => Object.keys(c?.values ?? {}).filter((u) => u !== "DEFAULT"));
    }, addUtilities(d2) {
      d2 = Array.isArray(d2) ? d2 : [d2];
      let f = d2.flatMap((p) => Object.entries(p));
      f = f.flatMap(([p, m]) => d(p, ",").map((u) => [u.trim(), m]));
      let c = new U2(() => []);
      for (let [p, m] of f) {
        if (p.startsWith("@keyframes ")) {
          if (!n) {
            let h = Z2(p, ke(m));
            P2([h], (k) => {
              k.src = s;
            }), i.push(h);
          }
          continue;
        }
        let u = fe(p), v = false;
        if (P2(u, (h) => {
          if (h.kind === "selector" && h.value[0] === "." && Zi.test(h.value.slice(1))) {
            let k = h.value;
            h.value = "&";
            let y = oe2(u), S = k.slice(1), x = y === "&" ? ke(m) : [Z2(y, ke(m))];
            c.get(S).push(...x), v = true, h.value = k;
            return;
          }
          if (h.kind === "function" && (h.value === ":not" || h.value === ":nth-child" || h.value === ":nth-last-child"))
            return V2.Skip;
        }), !v)
          throw new Error(`\`addUtilities({ '${p}' : … })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
      }
      for (let [p, m] of c)
        e.theme.prefix && P2(m, (u) => {
          if (u.kind === "rule") {
            let v = fe(u.selector);
            P2(v, (h) => {
              h.kind === "selector" && h.value[0] === "." && (h.value = `.${e.theme.prefix}\\:${h.value.slice(1)}`);
            }), u.selector = oe2(v);
          }
        }), e.utilities.static(p, (u) => {
          let v = m.map(re2);
          return Qi(v, p, u.raw), t.current |= Ve(v, e), v;
        });
    }, matchUtilities(d, f) {
      let c = f?.type ? Array.isArray(f?.type) ? f.type : [f.type] : ["any"];
      for (let [m, u] of Object.entries(d)) {
        let v = function({ negative: h }) {
          return (k) => {
            if (k.value?.kind === "arbitrary" && c.length > 0 && !c.includes("any") && (k.value.dataType && !c.includes(k.value.dataType) || !k.value.dataType && !ge(k.value.value, c)))
              return;
            let y = c.includes("color"), S = null, x = false;
            {
              let D = f?.values ?? {};
              y && (D = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, D)), k.value ? k.value.kind === "arbitrary" ? S = k.value.value : k.value.fraction && Object.hasOwn(D, k.value.fraction) ? (S = D[k.value.fraction], x = true) : Object.hasOwn(D, k.value.value) ? S = D[k.value.value] : D.__BARE_VALUE__ && (S = D.__BARE_VALUE__(k.value) ?? null, x = (k.value.fraction !== null && S?.includes("/")) ?? false) : S = D.DEFAULT ?? null;
            }
            if (S === null)
              return;
            let b;
            {
              let D = f?.modifiers ?? null;
              k.modifier ? D === "any" || k.modifier.kind === "arbitrary" ? b = k.modifier.value : D && Object.hasOwn(D, k.modifier.value) ? b = D[k.modifier.value] : y && !Number.isNaN(Number(k.modifier.value)) ? b = `${k.modifier.value}%` : b = null : b = null;
            }
            if (k.modifier && b === null && !x)
              return k.value?.kind === "arbitrary" ? null : undefined;
            y && b !== null && (S = X2(S, b)), h && (S = `calc(${S} * -1)`);
            let I = ke(u(S, { modifier: b }));
            return Qi(I, m, k.raw), t.current |= Ve(I, e), I;
          };
        };
        var p = v;
        if (!Zi.test(m))
          throw new Error(`\`matchUtilities({ '${m}' : … })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
        f?.supportsNegativeValues && e.utilities.functional(`-${m}`, v({ negative: true }), { types: c }), e.utilities.functional(m, v({ negative: false }), { types: c }), e.utilities.suggest(m, () => {
          let h = f?.values ?? {}, k = new Set(Object.keys(h));
          k.delete("__BARE_VALUE__"), k.delete("__CSS_VALUES__"), k.has("DEFAULT") && (k.delete("DEFAULT"), k.add(null));
          let y = f?.modifiers ?? {}, S = y === "any" ? [] : Object.keys(y);
          return [{ supportsNegative: f?.supportsNegativeValues ?? false, values: Array.from(k), modifiers: S }];
        });
      }
    }, addComponents(d, f) {
      this.addUtilities(d, f);
    }, matchComponents(d, f) {
      this.matchUtilities(d, f);
    }, theme: Rt(e, () => r.theme ?? {}, (d) => d), prefix(d) {
      return d;
    }, config(d, f) {
      let c = r;
      if (!d)
        return c;
      let p = Pe(d);
      for (let m = 0;m < p.length; ++m) {
        let u = p[m];
        if (c[u] === undefined)
          return f;
        c = c[u];
      }
      return c ?? f;
    } };
    return l.addComponents = l.addComponents.bind(l), l.matchComponents = l.matchComponents.bind(l), l;
  }
  function ke(e) {
    let i = [];
    e = Array.isArray(e) ? e : [e];
    let r = e.flatMap((t) => Object.entries(t));
    for (let [t, n] of r)
      if (n != null && n !== false)
        if (typeof n != "object") {
          if (!t.startsWith("--")) {
            if (n === "@slot") {
              i.push(Z2(t, [B2("@slot")]));
              continue;
            }
            t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
          }
          i.push(a2(t, String(n)));
        } else if (Array.isArray(n))
          for (let s of n)
            typeof s == "string" ? i.push(a2(t, s)) : i.push(Z2(t, ke(s)));
        else
          i.push(Z2(t, ke(n)));
    return i;
  }
  function Ji(e, i) {
    return (typeof e == "string" ? [e] : e).flatMap((t) => {
      if (t.trim().endsWith("}")) {
        let n = t.replace("}", "{@slot}}"), s = Te(n);
        return cr(s, i), s;
      } else
        return Z2(t, i);
    });
  }
  function Qi(e, i, r) {
    P2(e, (t) => {
      if (t.kind === "rule") {
        let n = fe(t.selector);
        P2(n, (s) => {
          s.kind === "selector" && s.value === `.${i}` && (s.value = `.${h2(r)}`);
        }), t.selector = oe2(n);
      }
    });
  }
  function Xi(e, i) {
    for (let r of va(i))
      e.theme.addKeyframes(r);
  }
  function va(e) {
    let i = [];
    if ("keyframes" in e.theme)
      for (let [r, t] of Object.entries(e.theme.keyframes))
        i.push(B2("@keyframes", r, ke(t)));
    return i;
  }
  function en(e) {
    return { theme: { ...ye, colors: ({ theme: i }) => i("color", {}), extend: { fontSize: ({ theme: i }) => ({ ...i("text", {}) }), boxShadow: ({ theme: i }) => ({ ...i("shadow", {}) }), animation: ({ theme: i }) => ({ ...i("animate", {}) }), aspectRatio: ({ theme: i }) => ({ ...i("aspect", {}) }), borderRadius: ({ theme: i }) => ({ ...i("radius", {}) }), screens: ({ theme: i }) => ({ ...i("breakpoint", {}) }), letterSpacing: ({ theme: i }) => ({ ...i("tracking", {}) }), lineHeight: ({ theme: i }) => ({ ...i("leading", {}) }), transitionDuration: { DEFAULT: e.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: e.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: i }) => ({ ...i("container", {}) }) } } };
  }
  var wa = { blocklist: [], future: {}, experimental: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
  function hr(e, i) {
    let r = { design: e, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(wa) };
    for (let n of i)
      gr(r, n);
    for (let n of r.configs)
      "darkMode" in n && n.darkMode !== undefined && (r.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== undefined && (r.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== undefined && (r.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== undefined && (r.result.important = n.important ?? false);
    let t = ba(r);
    return { resolvedConfig: { ...r.result, content: r.content, theme: r.theme, plugins: r.plugins }, replacedThemeKeys: t };
  }
  function ka(e, i) {
    if (Array.isArray(e) && Ye(e[0]))
      return e.concat(i);
    if (Array.isArray(i) && Ye(i[0]) && Ye(e))
      return [e, ...i];
    if (Array.isArray(i))
      return i;
  }
  function gr(e, { config: i, base: r, path: t, reference: n, src: s }) {
    let l = [];
    for (let c of i.plugins ?? [])
      "__isOptionsFunction" in c ? l.push({ ...c(), reference: n, src: s }) : ("handler" in c) ? l.push({ ...c, reference: n, src: s }) : l.push({ handler: c, reference: n, src: s });
    if (Array.isArray(i.presets) && i.presets.length === 0)
      throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let c of i.presets ?? [])
      gr(e, { path: t, base: r, config: c, reference: n, src: s });
    for (let c of l)
      e.plugins.push(c), c.config && gr(e, { path: t, base: r, config: c.config, reference: !!c.reference, src: c.src ?? s });
    let d = i.content ?? [], f = Array.isArray(d) ? d : d.files;
    for (let c of f)
      e.content.files.push(typeof c == "object" ? c : { base: r, pattern: c });
    e.configs.push(i);
  }
  function ba(e) {
    let i = new Set, r = Rt(e.design, () => e.theme, n), t = Object.assign(r, { theme: r, colors: o });
    function n(s) {
      return typeof s == "function" ? s(t) ?? null : s ?? null;
    }
    for (let s of e.configs) {
      let l = s.theme ?? {}, d = l.extend ?? {};
      for (let f in l)
        f !== "extend" && i.add(f);
      Object.assign(e.theme, l);
      for (let f in d)
        e.extend[f] ??= [], e.extend[f].push(d[f]);
    }
    delete e.theme.extend;
    for (let s in e.extend) {
      let l = [e.theme[s], ...e.extend[s]];
      e.theme[s] = () => {
        let d = l.map(n);
        return ot({}, d, ka);
      };
    }
    for (let s in e.theme)
      e.theme[s] = n(e.theme[s]);
    if (e.theme.screens && typeof e.theme.screens == "object")
      for (let s of Object.keys(e.theme.screens)) {
        let l = e.theme.screens[s];
        l && typeof l == "object" && (("raw" in l) || ("max" in l) || ("min" in l) && (e.theme.screens[s] = l.min));
      }
    return i;
  }
  function tn(e, i) {
    let r = e.theme.container || {};
    if (typeof r != "object" || r === null)
      return;
    let t = ya(r, i);
    t.length !== 0 && i.utilities.static("container", () => t.map(re2));
  }
  function ya({ center: e, padding: i, screens: r }, t) {
    let n = [], s = null;
    if (e && n.push(a2("margin-inline", "auto")), (typeof i == "string" || typeof i == "object" && i !== null && ("DEFAULT" in i)) && n.push(a2("padding-inline", typeof i == "string" ? i : i.DEFAULT)), typeof r == "object" && r !== null) {
      s = new Map;
      let l = Array.from(t.theme.namespace("--breakpoint").entries());
      if (l.sort((d, f) => Ee(d[1], f[1], "asc")), l.length > 0) {
        let [d] = l[0];
        n.push(B2("@media", `(width >= --theme(--breakpoint-${d}))`, [a2("max-width", "none")]));
      }
      for (let [d, f] of Object.entries(r)) {
        if (typeof f == "object")
          if ("min" in f)
            f = f.min;
          else
            continue;
        s.set(d, B2("@media", `(width >= ${f})`, [a2("max-width", f)]));
      }
    }
    if (typeof i == "object" && i !== null) {
      let l = Object.entries(i).filter(([d]) => d !== "DEFAULT").map(([d, f]) => [d, t.theme.resolveValue(d, ["--breakpoint"]), f]).filter(Boolean);
      l.sort((d, f) => Ee(d[1], f[1], "asc"));
      for (let [d, , f] of l)
        if (s && s.has(d))
          s.get(d).nodes.push(a2("padding-inline", f));
        else {
          if (s)
            continue;
          n.push(B2("@media", `(width >= theme(--breakpoint-${d}))`, [a2("padding-inline", f)]));
        }
    }
    if (s)
      for (let [, l] of s)
        n.push(l);
    return n;
  }
  function rn({ addVariant: e, config: i }) {
    let r = i("darkMode", null), [t, n = ".dark"] = Array.isArray(r) ? r : [r];
    if (t === "variant") {
      let s;
      if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [n]), Array.isArray(s))
        for (let l of s)
          l === ".dark" ? (t = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : l.includes("&") || (t = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
      n = s;
    }
    t === null || (t === "selector" ? e("dark", `&:where(${n}, ${n} *)`) : t === "media" ? e("dark", "@media (prefers-color-scheme: dark)") : t === "variant" ? e("dark", n) : t === "class" && e("dark", `&:is(${n} *)`));
  }
  function nn(e) {
    for (let [r, t] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]])
      e.utilities.suggest(`bg-gradient-to-${r}`, () => []), e.utilities.static(`bg-gradient-to-${r}`, () => [a2("--tw-gradient-position", `to ${t} in oklab`), a2("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
    e.utilities.suggest("bg-left-top", () => []), e.utilities.static("bg-left-top", () => [a2("background-position", "left top")]), e.utilities.suggest("bg-right-top", () => []), e.utilities.static("bg-right-top", () => [a2("background-position", "right top")]), e.utilities.suggest("bg-left-bottom", () => []), e.utilities.static("bg-left-bottom", () => [a2("background-position", "left bottom")]), e.utilities.suggest("bg-right-bottom", () => []), e.utilities.static("bg-right-bottom", () => [a2("background-position", "right bottom")]), e.utilities.suggest("object-left-top", () => []), e.utilities.static("object-left-top", () => [a2("object-position", "left top")]), e.utilities.suggest("object-right-top", () => []), e.utilities.static("object-right-top", () => [a2("object-position", "right top")]), e.utilities.suggest("object-left-bottom", () => []), e.utilities.static("object-left-bottom", () => [a2("object-position", "left bottom")]), e.utilities.suggest("object-right-bottom", () => []), e.utilities.static("object-right-bottom", () => [a2("object-position", "right bottom")]), e.utilities.suggest("max-w-screen", () => []), e.utilities.functional("max-w-screen", (r) => {
      if (!r.value || r.value.kind === "arbitrary")
        return;
      let t = e.theme.resolve(r.value.value, ["--breakpoint"]);
      if (t)
        return [a2("max-width", t)];
    }), e.utilities.suggest("overflow-ellipsis", () => []), e.utilities.static("overflow-ellipsis", () => [a2("text-overflow", "ellipsis")]), e.utilities.suggest("decoration-slice", () => []), e.utilities.static("decoration-slice", () => [a2("-webkit-box-decoration-break", "slice"), a2("box-decoration-break", "slice")]), e.utilities.suggest("decoration-clone", () => []), e.utilities.static("decoration-clone", () => [a2("-webkit-box-decoration-break", "clone"), a2("box-decoration-break", "clone")]), e.utilities.suggest("flex-shrink", () => []), e.utilities.functional("flex-shrink", (r) => {
      if (!r.modifier) {
        if (!r.value)
          return [a2("flex-shrink", "1")];
        if (r.value.kind === "arbitrary")
          return [a2("flex-shrink", r.value.value)];
        if (u(r.value.value))
          return [a2("flex-shrink", r.value.value)];
      }
    }), e.utilities.suggest("flex-grow", () => []), e.utilities.functional("flex-grow", (r) => {
      if (!r.modifier) {
        if (!r.value)
          return [a2("flex-grow", "1")];
        if (r.value.kind === "arbitrary")
          return [a2("flex-grow", r.value.value)];
        if (u(r.value.value))
          return [a2("flex-grow", r.value.value)];
      }
    }), e.utilities.suggest("order-none", () => []), e.utilities.static("order-none", () => [a2("order", "0")]), e.utilities.suggest("break-words", () => []), e.utilities.static("break-words", () => [a2("overflow-wrap", "break-word")]);
    for (let [r, t] of [["start", "inset-inline-start"], ["end", "inset-inline-end"]]) {
      let n = function({ negative: s }) {
        return (l) => {
          if (l.value === null)
            return;
          if (l.value.kind === "arbitrary") {
            if (l.modifier)
              return;
            let f = l.value.value;
            return [a2(t, s ? `calc(${f} * -1)` : f)];
          }
          let d2 = e.theme.resolve(l.value.fraction ?? l.value.value, ["--inset", "--spacing"]);
          if (d2 === null && l.value.fraction) {
            let [f, c] = d(l.value.fraction, "/");
            if (!u(f) || !u(c))
              return;
            d2 = `calc(${l.value.fraction} * 100%)`;
          }
          if (d2 === null && s) {
            let f = e.theme.resolve(null, ["--spacing"]);
            if (f && de(l.value.value) && (d2 = `calc(${f} * -${l.value.value})`, d2 !== null))
              return [a2(t, d2)];
          }
          if (d2 === null) {
            let f = e.theme.resolve(null, ["--spacing"]);
            f && de(l.value.value) && (d2 = `calc(${f} * ${l.value.value})`);
          }
          if (d2 !== null)
            return [a2(t, s ? `calc(${d2} * -1)` : d2)];
        };
      };
      var i = n;
      e.utilities.static(`${r}-auto`, () => [a2(t, "auto")]), e.utilities.static(`${r}-full`, () => [a2(t, "100%")]), e.utilities.static(`-${r}-full`, () => [a2(t, "-100%")]), e.utilities.static(`${r}-px`, () => [a2(t, "1px")]), e.utilities.static(`-${r}-px`, () => [a2(t, "-1px")]), e.utilities.functional(`-${r}`, n({ negative: true })), e.utilities.functional(r, n({ negative: false }));
    }
  }
  function ln(e, i) {
    let r = e.theme.screens || {}, t = i.variants.get("min")?.order ?? 0, n = [];
    for (let [l, d] of Object.entries(r)) {
      let u = function(v) {
        i.variants.static(l, (h) => {
          h.nodes = [B2("@media", m, h.nodes)];
        }, { order: v });
      };
      var s = u;
      let f = i.variants.get(l), c = i.theme.resolveValue(l, ["--breakpoint"]);
      if (f && c && !i.theme.hasDefault(`--breakpoint-${l}`))
        continue;
      let p = true;
      typeof d == "string" && (p = false);
      let m = xa(d);
      p ? n.push(u) : u(t);
    }
    if (n.length !== 0) {
      for (let [, l] of i.variants.variants)
        l.order > t && (l.order += n.length);
      i.variants.compareFns = new Map(Array.from(i.variants.compareFns).map(([l, d]) => (l > t && (l += n.length), [l, d])));
      for (let [l, d] of n.entries())
        d(t + l + 1);
    }
  }
  function xa(e) {
    return (Array.isArray(e) ? e : [e]).map((r) => typeof r == "string" ? { min: r } : r && typeof r == "object" ? r : null).map((r) => {
      if (r === null)
        return null;
      if ("raw" in r)
        return r.raw;
      let t = "";
      return r.max !== undefined && (t += `${r.max} >= `), t += "width", r.min !== undefined && (t += ` >= ${r.min}`), `(${t})`;
    }).filter(Boolean).join(", ");
  }
  function an(e, i) {
    let r = e.theme.aria || {}, t = e.theme.supports || {}, n = e.theme.data || {};
    if (Object.keys(r).length > 0) {
      let s = i.variants.get("aria"), l = s?.applyFn, d = s?.compounds;
      i.variants.functional("aria", (f, c) => {
        let p = c.value;
        return p && p.kind === "named" && p.value in r ? l?.(f, { ...c, value: { kind: "arbitrary", value: r[p.value] } }) : l?.(f, c);
      }, { compounds: d });
    }
    if (Object.keys(t).length > 0) {
      let s = i.variants.get("supports"), l = s?.applyFn, d = s?.compounds;
      i.variants.functional("supports", (f, c) => {
        let p = c.value;
        return p && p.kind === "named" && p.value in t ? l?.(f, { ...c, value: { kind: "arbitrary", value: t[p.value] } }) : l?.(f, c);
      }, { compounds: d });
    }
    if (Object.keys(n).length > 0) {
      let s = i.variants.get("data"), l = s?.applyFn, d = s?.compounds;
      i.variants.functional("data", (f, c) => {
        let p = c.value;
        return p && p.kind === "named" && p.value in n ? l?.(f, { ...c, value: { kind: "arbitrary", value: n[p.value] } }) : l?.(f, c);
      }, { compounds: d });
    }
  }
  var Aa = /^[a-z]+$/;
  async function sn({ designSystem: e, base: i, ast: r, loadModule: t, sources: n }) {
    let s = 0, l = [], d2 = [];
    P2(r, (m, u) => {
      if (m.kind !== "at-rule")
        return;
      let v = et(u);
      if (m.name === "@plugin") {
        if (v.parent !== null)
          throw new Error("`@plugin` cannot be nested.");
        let h = m.params.slice(1, -1);
        if (h.length === 0)
          throw new Error("`@plugin` must have a path.");
        let k = {};
        for (let y of m.nodes ?? []) {
          if (y.kind !== "declaration")
            throw new Error(`Unexpected \`@plugin\` option:

${se([y])}

\`@plugin\` options must be a flat list of declarations.`);
          if (y.value === undefined)
            continue;
          let S = y.value, x = d(S, ",").map((b) => {
            if (b = b.trim(), b === "null")
              return null;
            if (b === "true")
              return true;
            if (b === "false")
              return false;
            if (Number.isNaN(Number(b))) {
              if (b[0] === '"' && b[b.length - 1] === '"' || b[0] === "'" && b[b.length - 1] === "'")
                return b.slice(1, -1);
              if (b[0] === "{" && b[b.length - 1] === "}")
                throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${se([y]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            } else
              return Number(b);
            return b;
          });
          k[y.property] = x.length === 1 ? x[0] : x;
        }
        return l.push([{ id: h, base: v.context.base, reference: !!v.context.reference, src: m.src }, Object.keys(k).length > 0 ? k : null]), s |= 4, V2.Replace([]);
      }
      if (m.name === "@config") {
        if (m.nodes.length > 0)
          throw new Error("`@config` cannot have a body.");
        if (v.parent !== null)
          throw new Error("`@config` cannot be nested.");
        return d2.push({ id: m.params.slice(1, -1), base: v.context.base, reference: !!v.context.reference, src: m.src }), s |= 4, V2.Replace([]);
      }
    }), nn(e);
    let f = e.resolveThemeValue;
    if (e.resolveThemeValue = function(u, v) {
      return u.startsWith("--") ? f(u, v) : (s |= on({ designSystem: e, base: i, ast: r, sources: n, configs: [], pluginDetails: [] }), e.resolveThemeValue(u, v));
    }, !l.length && !d2.length)
      return 0;
    let [c, p] = await Promise.all([Promise.all(d2.map(async ({ id: m, base: u, reference: v, src: h }) => {
      let k = await t(m, u, "config");
      return { path: m, base: k.base, config: k.module, reference: v, src: h };
    })), Promise.all(l.map(async ([{ id: m, base: u, reference: v, src: h }, k]) => {
      let y = await t(m, u, "plugin");
      return { path: m, base: y.base, plugin: y.module, options: k, reference: v, src: h };
    }))]);
    return s |= on({ designSystem: e, base: i, ast: r, sources: n, configs: c, pluginDetails: p }), s;
  }
  function on({ designSystem: e, base: i, ast: r, sources: t, configs: n, pluginDetails: s }) {
    let l = 0, f = [...s.map((k) => {
      if (!k.options)
        return { config: { plugins: [k.plugin] }, base: k.base, reference: k.reference, src: k.src };
      if ("__isOptionsFunction" in k.plugin)
        return { config: { plugins: [k.plugin(k.options)] }, base: k.base, reference: k.reference, src: k.src };
      throw new Error(`The plugin "${k.path}" does not accept options`);
    }), ...n], { resolvedConfig: c } = hr(e, [{ config: en(e.theme), base: i, reference: true, src: undefined }, ...f, { config: { plugins: [rn] }, base: i, reference: true, src: undefined }]), { resolvedConfig: p, replacedThemeKeys: m } = hr(e, f), u = { designSystem: e, ast: r, resolvedConfig: c, featuresRef: { set current(k) {
      l |= k;
    } } }, v = mr({ ...u, referenceMode: false, src: undefined }), h = e.resolveThemeValue;
    e.resolveThemeValue = function(y, S) {
      if (y[0] === "-" && y[1] === "-")
        return h(y, S);
      let x = v.theme(y, undefined);
      if (Array.isArray(x) && x.length === 2)
        return x[0];
      if (Array.isArray(x))
        return x.join(", ");
      if (typeof x == "object" && x !== null && "DEFAULT" in x)
        return x.DEFAULT;
      if (typeof x == "string")
        return x;
    };
    for (let { handler: k, reference: y, src: S } of c.plugins) {
      let x = mr({ ...u, referenceMode: y ?? false, src: S });
      k(x);
    }
    if (gi(e, p, m), Xi(e, p), an(p, e), ln(p, e), tn(p, e), !e.theme.prefix && c.prefix) {
      if (c.prefix.endsWith("-") && (c.prefix = c.prefix.slice(0, -1), console.warn(`The prefix "${c.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !Aa.test(c.prefix))
        throw new Error(`The prefix "${c.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
      e.theme.prefix = c.prefix;
    }
    if (!e.important && c.important === true && (e.important = true), typeof c.important == "string") {
      let k = c.important;
      P2(r, (y, S) => {
        if (y.kind !== "at-rule" || y.name !== "@tailwind" || y.params !== "utilities")
          return;
        let x = et(S);
        return x.parent?.kind === "rule" && x.parent.selector === k ? V2.Stop : V2.ReplaceStop(H2(k, [y]));
      });
    }
    for (let k of c.blocklist)
      e.invalidCandidates.add(k);
    for (let k of c.content.files) {
      if ("raw" in k)
        throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(k, null, 2)}

This feature is not currently supported.`);
      let y = false;
      k.pattern[0] == "!" && (y = true, k.pattern = k.pattern.slice(1)), t.push({ ...k, negated: y });
    }
    return l;
  }
  function un({ ast: e }) {
    let i = new U2((n) => ft(n.code)), r = new U2((n) => ({ url: n.file, content: n.code, ignore: false })), t = { file: null, sources: [], mappings: [] };
    P2(e, (n) => {
      if (!n.src || !n.dst)
        return;
      let s = r.get(n.src[0]);
      if (!s.content)
        return;
      let l = i.get(n.src[0]), d = i.get(n.dst[0]), f = s.content.slice(n.src[1], n.src[2]), c = 0;
      for (let u of f.split(`
`)) {
        if (u.trim() !== "") {
          let v = l.find(n.src[1] + c), h = d.find(n.dst[1]);
          t.mappings.push({ name: null, originalPosition: { source: s, ...v }, generatedPosition: h });
        }
        c += u.length, c += 1;
      }
      let p = l.find(n.src[2]), m = d.find(n.dst[2]);
      t.mappings.push({ name: null, originalPosition: { source: s, ...p }, generatedPosition: m });
    });
    for (let n of i.keys())
      t.sources.push(r.get(n));
    return t.mappings.sort((n, s) => n.generatedPosition.line - s.generatedPosition.line || n.generatedPosition.column - s.generatedPosition.column || (n.originalPosition?.line ?? 0) - (s.originalPosition?.line ?? 0) || (n.originalPosition?.column ?? 0) - (s.originalPosition?.column ?? 0)), t;
  }
  var fn = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function Pt(e) {
    let i = e.indexOf("{");
    if (i === -1)
      return [e];
    let r = [], t = e.slice(0, i), n = e.slice(i), s = 0, l = n.lastIndexOf("}");
    for (let m = 0;m < n.length; m++) {
      let u = n[m];
      if (u === "{")
        s++;
      else if (u === "}" && (s--, s === 0)) {
        l = m;
        break;
      }
    }
    if (l === -1)
      throw new Error(`The pattern \`${e}\` is not balanced.`);
    let d2 = n.slice(1, l), f = n.slice(l + 1), c;
    Ca(d2) ? c = Sa(d2) : c = d(d2, ","), c = c.flatMap((m) => Pt(m));
    let p = Pt(f);
    for (let m of p)
      for (let u of c)
        r.push(t + u + m);
    return r;
  }
  function Ca(e) {
    return fn.test(e);
  }
  function Sa(e) {
    let i = e.match(fn);
    if (!i)
      return [e];
    let [, r, t, n] = i, s = n ? parseInt(n, 10) : undefined, l = [];
    if (/^-?\d+$/.test(r) && /^-?\d+$/.test(t)) {
      let d = parseInt(r, 10), f = parseInt(t, 10);
      if (s === undefined && (s = d <= f ? 1 : -1), s === 0)
        throw new Error("Step cannot be zero in sequence expansion.");
      let c = d < f;
      c && s < 0 && (s = -s), !c && s > 0 && (s = -s);
      for (let p = d;c ? p <= f : p >= f; p += s)
        l.push(p.toString());
    }
    return l;
  }
  function cn(e, i) {
    let r = new Set, t = new Set, n = [];
    function s(l, d = []) {
      if (e.has(l) && !r.has(l)) {
        t.has(l) && i.onCircularDependency?.(d, l), t.add(l);
        for (let f of e.get(l) ?? [])
          d.push(l), s(f, d), d.pop();
        r.add(l), t.delete(l), n.push(l);
      }
    }
    for (let l of e.keys())
      s(l);
    return n;
  }
  var Va = /^[a-z]+$/;
  var Ht = ((n) => (n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n))(Ht || {});
  function $a() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function Ta() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  function Na(e) {
    let i = 0, r = null;
    for (let t of d(e, " "))
      t === "reference" ? i |= 2 : t === "inline" ? i |= 1 : t === "default" ? i |= 4 : t === "static" ? i |= 8 : t.startsWith("prefix(") && t.endsWith(")") && (r = t.slice(7, -1));
    return [i, r];
  }
  var ze = ((f) => (f[f.None = 0] = "None", f[f.AtApply = 1] = "AtApply", f[f.AtImport = 2] = "AtImport", f[f.JsPluginCompat = 4] = "JsPluginCompat", f[f.ThemeFunction = 8] = "ThemeFunction", f[f.Utilities = 16] = "Utilities", f[f.Variants = 32] = "Variants", f[f.AtTheme = 64] = "AtTheme", f))(ze || {});
  async function pn(e, { base: i = "", from: r, loadModule: t = $a, loadStylesheet: n = Ta } = {}) {
    let s = 0;
    e = [ve({ base: i }, e)], s |= await dr(e, i, n, 0, r !== undefined);
    let l = null, d2 = new p, f = new Map, c = new Map, p2 = [], m = null, u = null, v = [], h = [], k = [], y = [], S = null;
    P2(e, (b, I) => {
      if (b.kind !== "at-rule")
        return;
      let D = et(I);
      if (b.name === "@tailwind" && (b.params === "utilities" || b.params.startsWith("utilities"))) {
        if (u !== null)
          return V2.Replace([]);
        if (D.context.reference)
          return V2.Replace([]);
        let O = d(b.params, " ");
        for (let L of O)
          if (L.startsWith("source(")) {
            let E = L.slice(7, -1);
            if (E === "none") {
              S = E;
              continue;
            }
            if (E[0] === '"' && E[E.length - 1] !== '"' || E[0] === "'" && E[E.length - 1] !== "'" || E[0] !== "'" && E[0] !== '"')
              throw new Error("`source(…)` paths must be quoted.");
            S = { base: D.context.sourceBase ?? D.context.base, pattern: E.slice(1, -1) };
          }
        u = b, s |= 16;
      }
      if (b.name === "@utility") {
        if (D.parent !== null)
          throw new Error("`@utility` cannot be nested.");
        if (b.nodes.length === 0)
          throw new Error(`\`@utility ${b.params}\` is empty. Utilities should include at least one property.`);
        let O = ui(b);
        if (O === null) {
          if (!b.params.endsWith("-*")) {
            if (b.params.endsWith("*"))
              throw new Error(`\`@utility ${b.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
            if (b.params.includes("*"))
              throw new Error(`\`@utility ${b.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
          }
          throw new Error(`\`@utility ${b.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        }
        p2.push(O);
      }
      if (b.name === "@source") {
        if (b.nodes.length > 0)
          throw new Error("`@source` cannot have a body.");
        if (D.parent !== null)
          throw new Error("`@source` cannot be nested.");
        let O = false, L = false, E = b.params;
        if (E[0] === "n" && E.startsWith("not ") && (O = true, E = E.slice(4)), E[0] === "i" && E.startsWith("inline(") && (L = true, E = E.slice(7, -1).trim()), E[0] === '"' && E[E.length - 1] !== '"' || E[0] === "'" && E[E.length - 1] !== "'" || E[0] !== "'" && E[0] !== '"')
          throw new Error("`@source` paths must be quoted.");
        let j = E.slice(1, -1);
        if (L) {
          let q = O ? y : k, G = d(j, " ");
          for (let ee of G)
            for (let ie of Pt(ee))
              q.push(ie);
        } else
          h.push({ base: D.context.base, pattern: j, negated: O });
        return V2.ReplaceSkip([]);
      }
      if (b.name === "@variant" && (D.parent === null ? b.nodes.length === 0 ? b.name = "@custom-variant" : (P2(b.nodes, (O) => {
        if (O.kind === "at-rule" && O.name === "@slot")
          return b.name = "@custom-variant", V2.Stop;
      }), b.name === "@variant" && v.push(b)) : v.push(b)), b.name === "@custom-variant") {
        if (D.parent !== null)
          throw new Error("`@custom-variant` cannot be nested.");
        let [O, L] = d(b.params, " ");
        if (!Et.test(O))
          throw new Error(`\`@custom-variant ${O}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (b.nodes.length > 0 && L)
          throw new Error(`\`@custom-variant ${O}\` cannot have both a selector and a body.`);
        if (b.nodes.length === 0) {
          if (!L)
            throw new Error(`\`@custom-variant ${O}\` has no selector or body.`);
          let E = d(L.slice(1, -1), ",");
          if (E.length === 0 || E.some((G) => G.trim() === ""))
            throw new Error(`\`@custom-variant ${O} (${E.join(",")})\` selector is invalid.`);
          let j = [], q = [];
          for (let G of E)
            G = G.trim(), G[0] === "@" ? j.push(G) : q.push(G);
          f.set(O, (G) => {
            G.variants.static(O, (ee) => {
              let ie = [];
              q.length > 0 && ie.push(H2(q.join(", "), ee.nodes));
              for (let o of j)
                ie.push(Z2(o, ee.nodes));
              ee.nodes = ie;
            }, { compounds: Oe([...q, ...j]) });
          }), c.set(O, new Set);
        } else {
          let E = new Set;
          P2(b.nodes, (j) => {
            j.kind === "at-rule" && j.name === "@variant" && E.add(j.params);
          }), f.set(O, (j) => {
            j.variants.fromAst(O, b.nodes, j);
          }), c.set(O, E);
        }
        return V2.ReplaceSkip([]);
      }
      if (b.name === "@media") {
        let O = d(b.params, " "), L = [];
        for (let E of O)
          if (E.startsWith("source(")) {
            let j = E.slice(7, -1);
            P2(b.nodes, (q) => {
              if (q.kind === "at-rule" && q.name === "@tailwind" && q.params === "utilities")
                return q.params += ` source(${j})`, V2.ReplaceStop([ve({ sourceBase: D.context.base }, [q])]);
            });
          } else if (E.startsWith("theme(")) {
            let j = E.slice(6, -1), q = j.includes("reference");
            P2(b.nodes, (G) => {
              if (G.kind !== "context") {
                if (G.kind !== "at-rule") {
                  if (q)
                    throw new Error('Files imported with `@import "…" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "…";` instead.');
                  return V2.Continue;
                }
                if (G.name === "@theme")
                  return G.params += " " + j, V2.Skip;
              }
            });
          } else if (E.startsWith("prefix(")) {
            let j = E.slice(7, -1);
            P2(b.nodes, (q) => {
              if (q.kind === "at-rule" && q.name === "@theme")
                return q.params += ` prefix(${j})`, V2.Skip;
            });
          } else
            E === "important" ? l = true : E === "reference" ? b.nodes = [ve({ reference: true }, b.nodes)] : L.push(E);
        if (L.length > 0)
          b.params = L.join(" ");
        else if (O.length > 0)
          return V2.Replace(b.nodes);
        return V2.Continue;
      }
      if (b.name === "@theme") {
        let [O, L] = Na(b.params);
        if (s |= 64, D.context.reference && (O |= 2), L) {
          if (!Va.test(L))
            throw new Error(`The prefix "${L}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          d2.prefix = L;
        }
        return P2(b.nodes, (E) => {
          if (E.kind === "at-rule" && E.name === "@keyframes")
            return d2.addKeyframes(E), V2.Skip;
          if (E.kind === "comment")
            return;
          if (E.kind === "declaration" && E.property.startsWith("--")) {
            d2.add(a(E.property), E.value ?? "", O, E.src);
            return;
          }
          let j = se([B2(b.name, b.params, [E])]).split(`
`).map((q, G, ee) => `${G === 0 || G >= ee.length - 2 ? " " : ">"} ${q}`).join(`
`);
          throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${j}`);
        }), m ? V2.ReplaceSkip([]) : (m = H2(":root, :host", []), m.src = b.src, V2.ReplaceSkip(m));
      }
    });
    let x = Fi(d2, u?.src);
    if (l && (x.important = l), y.length > 0)
      for (let b of y)
        x.invalidCandidates.add(b);
    s |= await sn({ designSystem: x, base: i, ast: e, loadModule: t, sources: h });
    for (let b of f.keys())
      x.variants.static(b, () => {});
    for (let b of cn(c, { onCircularDependency(I, D) {
      let O = se(I.map((L, E) => B2("@custom-variant", L, [B2("@variant", I[E + 1] ?? D, [])]))).replaceAll(";", " { … }").replace(`@custom-variant ${D} {`, `@custom-variant ${D} { /* ← */`);
      throw new Error(`Circular dependency detected in custom variants:

${O}`);
    } }))
      f.get(b)?.(x);
    for (let b of p2)
      b(x);
    if (m) {
      let b = [];
      for (let [D, O] of x.theme.entries()) {
        if (O.options & 2)
          continue;
        let L = a2(h2(D), O.value);
        L.src = O.src, b.push(L);
      }
      let I = x.theme.getKeyframes();
      for (let D of I)
        e.push(ve({ theme: true }, [Y2([D])]));
      m.nodes = [ve({ theme: true }, b)];
    }
    if (s |= at(e, x), s |= Le(e, x), s |= Ve(e, x), u) {
      let b = u;
      b.kind = "context", b.context = {};
    }
    return P2(e, (b) => {
      if (b.kind === "at-rule")
        return b.name === "@utility" ? V2.Replace([]) : V2.Skip;
    }), { designSystem: x, ast: e, sources: h, root: S, utilitiesNode: u, features: s, inlineCandidates: k };
  }
  async function Ea(e, i = {}) {
    let { designSystem: r, ast: t, sources: n, root: s, utilitiesNode: l, features: d, inlineCandidates: f } = await pn(e, i);
    t.unshift(gt(`! tailwindcss v${yr} | MIT License | https://tailwindcss.com `));
    function c(h) {
      r.invalidCandidates.add(h);
    }
    let p = new Set, m = null, u = 0, v = false;
    for (let h of f)
      r.invalidCandidates.has(h) || (p.add(h), v = true);
    return { sources: n, root: s, features: d, build(h) {
      if (d === 0)
        return e;
      if (!l)
        return m ??= Ne(t, r, i.polyfills), m;
      let k = v, y = false;
      v = false;
      let S = p.size;
      for (let b of h)
        if (!r.invalidCandidates.has(b))
          if (b[0] === "-" && b[1] === "-") {
            let I = r.theme.markUsedVariable(b);
            k ||= I, y ||= I;
          } else
            p.add(b), k ||= p.size !== S;
      if (!k)
        return m ??= Ne(t, r, i.polyfills), m;
      let x = $e(p, r, { onInvalidCandidate: c }).astNodes;
      return i.from && P2(x, (b) => {
        b.src ??= l.src;
      }), !y && u === x.length ? (m ??= Ne(t, r, i.polyfills), m) : (u = x.length, l.nodes = x, m = Ne(t, r, i.polyfills), m);
    } };
  }
  async function zf(e, i = {}) {
    let r = Te(e, { from: i.from }), t = await Ea(r, i), n = r, s = e;
    return { ...t, build(l) {
      let d = t.build(l);
      return d === n || (s = se(d, !!i.from), n = d), s;
    }, buildSourceMap() {
      return un({ ast: n });
    } };
  }
  async function jf(e, i = {}) {
    return (await pn(Te(e, { from: i.from }), i)).designSystem;
  }

  // node_modules/tailwindcss/index.css
  var tailwindcss_default = `@layer theme, base, components, utilities;

@layer theme {
  @theme default {
    --font-sans:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);

    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);

    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);

    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);

    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);

    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);

    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);

    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);

    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);

    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);

    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);

    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);

    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);

    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);

    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);

    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);

    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);

    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);

    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);

    --color-zinc-50: oklch(98.5% 0 none);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);

    --color-neutral-50: oklch(98.5% 0 none);
    --color-neutral-100: oklch(97% 0 none);
    --color-neutral-200: oklch(92.2% 0 none);
    --color-neutral-300: oklch(87% 0 none);
    --color-neutral-400: oklch(70.8% 0 none);
    --color-neutral-500: oklch(55.6% 0 none);
    --color-neutral-600: oklch(43.9% 0 none);
    --color-neutral-700: oklch(37.1% 0 none);
    --color-neutral-800: oklch(26.9% 0 none);
    --color-neutral-900: oklch(20.5% 0 none);
    --color-neutral-950: oklch(14.5% 0 none);

    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);

    --color-mauve-50: oklch(98.5% 0 none);
    --color-mauve-100: oklch(96% 0.003 325.6);
    --color-mauve-200: oklch(92.2% 0.005 325.62);
    --color-mauve-300: oklch(86.5% 0.012 325.68);
    --color-mauve-400: oklch(71.1% 0.019 323.02);
    --color-mauve-500: oklch(54.2% 0.034 322.5);
    --color-mauve-600: oklch(43.5% 0.029 321.78);
    --color-mauve-700: oklch(36.4% 0.029 323.89);
    --color-mauve-800: oklch(26.3% 0.024 320.12);
    --color-mauve-900: oklch(21.2% 0.019 322.12);
    --color-mauve-950: oklch(14.5% 0.008 326);

    --color-olive-50: oklch(98.8% 0.003 106.5);
    --color-olive-100: oklch(96.6% 0.005 106.5);
    --color-olive-200: oklch(93% 0.007 106.5);
    --color-olive-300: oklch(88% 0.011 106.6);
    --color-olive-400: oklch(73.7% 0.021 106.9);
    --color-olive-500: oklch(58% 0.031 107.3);
    --color-olive-600: oklch(46.6% 0.025 107.3);
    --color-olive-700: oklch(39.4% 0.023 107.4);
    --color-olive-800: oklch(28.6% 0.016 107.4);
    --color-olive-900: oklch(22.8% 0.013 107.4);
    --color-olive-950: oklch(15.3% 0.006 107.1);

    --color-mist-50: oklch(98.7% 0.002 197.1);
    --color-mist-100: oklch(96.3% 0.002 197.1);
    --color-mist-200: oklch(92.5% 0.005 214.3);
    --color-mist-300: oklch(87.2% 0.007 219.6);
    --color-mist-400: oklch(72.3% 0.014 214.4);
    --color-mist-500: oklch(56% 0.021 213.5);
    --color-mist-600: oklch(45% 0.017 213.2);
    --color-mist-700: oklch(37.8% 0.015 216);
    --color-mist-800: oklch(27.5% 0.011 216.9);
    --color-mist-900: oklch(21.8% 0.008 223.9);
    --color-mist-950: oklch(14.8% 0.004 228.8);

    --color-taupe-50: oklch(98.6% 0.002 67.8);
    --color-taupe-100: oklch(96% 0.002 17.2);
    --color-taupe-200: oklch(92.2% 0.005 34.3);
    --color-taupe-300: oklch(86.8% 0.007 39.5);
    --color-taupe-400: oklch(71.4% 0.014 41.2);
    --color-taupe-500: oklch(54.7% 0.021 43.1);
    --color-taupe-600: oklch(43.8% 0.017 39.3);
    --color-taupe-700: oklch(36.7% 0.016 35.7);
    --color-taupe-800: oklch(26.8% 0.011 36.5);
    --color-taupe-900: oklch(21.4% 0.009 43.1);
    --color-taupe-950: oklch(14.7% 0.004 49.3);

    --color-black: #000;
    --color-white: #fff;

    --spacing: 0.25rem;

    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;

    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;

    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;

    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;

    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;

    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;

    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);

    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;

    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;

    --aspect-video: 16 / 9;

    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }

  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}

@layer base {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      "Noto Sans",
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring:where(:not(iframe)) {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(…)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer utilities {
  @tailwind utilities;
}
`;

  // node_modules/tailwindcss/theme.css
  var theme_default = `@theme default {
  --font-sans:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(97.1% 0.013 17.38);
  --color-red-100: oklch(93.6% 0.032 17.717);
  --color-red-200: oklch(88.5% 0.062 18.334);
  --color-red-300: oklch(80.8% 0.114 19.571);
  --color-red-400: oklch(70.4% 0.191 22.216);
  --color-red-500: oklch(63.7% 0.237 25.331);
  --color-red-600: oklch(57.7% 0.245 27.325);
  --color-red-700: oklch(50.5% 0.213 27.518);
  --color-red-800: oklch(44.4% 0.177 26.899);
  --color-red-900: oklch(39.6% 0.141 25.723);
  --color-red-950: oklch(25.8% 0.092 26.042);

  --color-orange-50: oklch(98% 0.016 73.684);
  --color-orange-100: oklch(95.4% 0.038 75.164);
  --color-orange-200: oklch(90.1% 0.076 70.697);
  --color-orange-300: oklch(83.7% 0.128 66.29);
  --color-orange-400: oklch(75% 0.183 55.934);
  --color-orange-500: oklch(70.5% 0.213 47.604);
  --color-orange-600: oklch(64.6% 0.222 41.116);
  --color-orange-700: oklch(55.3% 0.195 38.402);
  --color-orange-800: oklch(47% 0.157 37.304);
  --color-orange-900: oklch(40.8% 0.123 38.172);
  --color-orange-950: oklch(26.6% 0.079 36.259);

  --color-amber-50: oklch(98.7% 0.022 95.277);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-amber-200: oklch(92.4% 0.12 95.746);
  --color-amber-300: oklch(87.9% 0.169 91.605);
  --color-amber-400: oklch(82.8% 0.189 84.429);
  --color-amber-500: oklch(76.9% 0.188 70.08);
  --color-amber-600: oklch(66.6% 0.179 58.318);
  --color-amber-700: oklch(55.5% 0.163 48.998);
  --color-amber-800: oklch(47.3% 0.137 46.201);
  --color-amber-900: oklch(41.4% 0.112 45.904);
  --color-amber-950: oklch(27.9% 0.077 45.635);

  --color-yellow-50: oklch(98.7% 0.026 102.212);
  --color-yellow-100: oklch(97.3% 0.071 103.193);
  --color-yellow-200: oklch(94.5% 0.129 101.54);
  --color-yellow-300: oklch(90.5% 0.182 98.111);
  --color-yellow-400: oklch(85.2% 0.199 91.936);
  --color-yellow-500: oklch(79.5% 0.184 86.047);
  --color-yellow-600: oklch(68.1% 0.162 75.834);
  --color-yellow-700: oklch(55.4% 0.135 66.442);
  --color-yellow-800: oklch(47.6% 0.114 61.907);
  --color-yellow-900: oklch(42.1% 0.095 57.708);
  --color-yellow-950: oklch(28.6% 0.066 53.813);

  --color-lime-50: oklch(98.6% 0.031 120.757);
  --color-lime-100: oklch(96.7% 0.067 122.328);
  --color-lime-200: oklch(93.8% 0.127 124.321);
  --color-lime-300: oklch(89.7% 0.196 126.665);
  --color-lime-400: oklch(84.1% 0.238 128.85);
  --color-lime-500: oklch(76.8% 0.233 130.85);
  --color-lime-600: oklch(64.8% 0.2 131.684);
  --color-lime-700: oklch(53.2% 0.157 131.589);
  --color-lime-800: oklch(45.3% 0.124 130.933);
  --color-lime-900: oklch(40.5% 0.101 131.063);
  --color-lime-950: oklch(27.4% 0.072 132.109);

  --color-green-50: oklch(98.2% 0.018 155.826);
  --color-green-100: oklch(96.2% 0.044 156.743);
  --color-green-200: oklch(92.5% 0.084 155.995);
  --color-green-300: oklch(87.1% 0.15 154.449);
  --color-green-400: oklch(79.2% 0.209 151.711);
  --color-green-500: oklch(72.3% 0.219 149.579);
  --color-green-600: oklch(62.7% 0.194 149.214);
  --color-green-700: oklch(52.7% 0.154 150.069);
  --color-green-800: oklch(44.8% 0.119 151.328);
  --color-green-900: oklch(39.3% 0.095 152.535);
  --color-green-950: oklch(26.6% 0.065 152.934);

  --color-emerald-50: oklch(97.9% 0.021 166.113);
  --color-emerald-100: oklch(95% 0.052 163.051);
  --color-emerald-200: oklch(90.5% 0.093 164.15);
  --color-emerald-300: oklch(84.5% 0.143 164.978);
  --color-emerald-400: oklch(76.5% 0.177 163.223);
  --color-emerald-500: oklch(69.6% 0.17 162.48);
  --color-emerald-600: oklch(59.6% 0.145 163.225);
  --color-emerald-700: oklch(50.8% 0.118 165.612);
  --color-emerald-800: oklch(43.2% 0.095 166.913);
  --color-emerald-900: oklch(37.8% 0.077 168.94);
  --color-emerald-950: oklch(26.2% 0.051 172.552);

  --color-teal-50: oklch(98.4% 0.014 180.72);
  --color-teal-100: oklch(95.3% 0.051 180.801);
  --color-teal-200: oklch(91% 0.096 180.426);
  --color-teal-300: oklch(85.5% 0.138 181.071);
  --color-teal-400: oklch(77.7% 0.152 181.912);
  --color-teal-500: oklch(70.4% 0.14 182.503);
  --color-teal-600: oklch(60% 0.118 184.704);
  --color-teal-700: oklch(51.1% 0.096 186.391);
  --color-teal-800: oklch(43.7% 0.078 188.216);
  --color-teal-900: oklch(38.6% 0.063 188.416);
  --color-teal-950: oklch(27.7% 0.046 192.524);

  --color-cyan-50: oklch(98.4% 0.019 200.873);
  --color-cyan-100: oklch(95.6% 0.045 203.388);
  --color-cyan-200: oklch(91.7% 0.08 205.041);
  --color-cyan-300: oklch(86.5% 0.127 207.078);
  --color-cyan-400: oklch(78.9% 0.154 211.53);
  --color-cyan-500: oklch(71.5% 0.143 215.221);
  --color-cyan-600: oklch(60.9% 0.126 221.723);
  --color-cyan-700: oklch(52% 0.105 223.128);
  --color-cyan-800: oklch(45% 0.085 224.283);
  --color-cyan-900: oklch(39.8% 0.07 227.392);
  --color-cyan-950: oklch(30.2% 0.056 229.695);

  --color-sky-50: oklch(97.7% 0.013 236.62);
  --color-sky-100: oklch(95.1% 0.026 236.824);
  --color-sky-200: oklch(90.1% 0.058 230.902);
  --color-sky-300: oklch(82.8% 0.111 230.318);
  --color-sky-400: oklch(74.6% 0.16 232.661);
  --color-sky-500: oklch(68.5% 0.169 237.323);
  --color-sky-600: oklch(58.8% 0.158 241.966);
  --color-sky-700: oklch(50% 0.134 242.749);
  --color-sky-800: oklch(44.3% 0.11 240.79);
  --color-sky-900: oklch(39.1% 0.09 240.876);
  --color-sky-950: oklch(29.3% 0.066 243.157);

  --color-blue-50: oklch(97% 0.014 254.604);
  --color-blue-100: oklch(93.2% 0.032 255.585);
  --color-blue-200: oklch(88.2% 0.059 254.128);
  --color-blue-300: oklch(80.9% 0.105 251.813);
  --color-blue-400: oklch(70.7% 0.165 254.624);
  --color-blue-500: oklch(62.3% 0.214 259.815);
  --color-blue-600: oklch(54.6% 0.245 262.881);
  --color-blue-700: oklch(48.8% 0.243 264.376);
  --color-blue-800: oklch(42.4% 0.199 265.638);
  --color-blue-900: oklch(37.9% 0.146 265.522);
  --color-blue-950: oklch(28.2% 0.091 267.935);

  --color-indigo-50: oklch(96.2% 0.018 272.314);
  --color-indigo-100: oklch(93% 0.034 272.788);
  --color-indigo-200: oklch(87% 0.065 274.039);
  --color-indigo-300: oklch(78.5% 0.115 274.713);
  --color-indigo-400: oklch(67.3% 0.182 276.935);
  --color-indigo-500: oklch(58.5% 0.233 277.117);
  --color-indigo-600: oklch(51.1% 0.262 276.966);
  --color-indigo-700: oklch(45.7% 0.24 277.023);
  --color-indigo-800: oklch(39.8% 0.195 277.366);
  --color-indigo-900: oklch(35.9% 0.144 278.697);
  --color-indigo-950: oklch(25.7% 0.09 281.288);

  --color-violet-50: oklch(96.9% 0.016 293.756);
  --color-violet-100: oklch(94.3% 0.029 294.588);
  --color-violet-200: oklch(89.4% 0.057 293.283);
  --color-violet-300: oklch(81.1% 0.111 293.571);
  --color-violet-400: oklch(70.2% 0.183 293.541);
  --color-violet-500: oklch(60.6% 0.25 292.717);
  --color-violet-600: oklch(54.1% 0.281 293.009);
  --color-violet-700: oklch(49.1% 0.27 292.581);
  --color-violet-800: oklch(43.2% 0.232 292.759);
  --color-violet-900: oklch(38% 0.189 293.745);
  --color-violet-950: oklch(28.3% 0.141 291.089);

  --color-purple-50: oklch(97.7% 0.014 308.299);
  --color-purple-100: oklch(94.6% 0.033 307.174);
  --color-purple-200: oklch(90.2% 0.063 306.703);
  --color-purple-300: oklch(82.7% 0.119 306.383);
  --color-purple-400: oklch(71.4% 0.203 305.504);
  --color-purple-500: oklch(62.7% 0.265 303.9);
  --color-purple-600: oklch(55.8% 0.288 302.321);
  --color-purple-700: oklch(49.6% 0.265 301.924);
  --color-purple-800: oklch(43.8% 0.218 303.724);
  --color-purple-900: oklch(38.1% 0.176 304.987);
  --color-purple-950: oklch(29.1% 0.149 302.717);

  --color-fuchsia-50: oklch(97.7% 0.017 320.058);
  --color-fuchsia-100: oklch(95.2% 0.037 318.852);
  --color-fuchsia-200: oklch(90.3% 0.076 319.62);
  --color-fuchsia-300: oklch(83.3% 0.145 321.434);
  --color-fuchsia-400: oklch(74% 0.238 322.16);
  --color-fuchsia-500: oklch(66.7% 0.295 322.15);
  --color-fuchsia-600: oklch(59.1% 0.293 322.896);
  --color-fuchsia-700: oklch(51.8% 0.253 323.949);
  --color-fuchsia-800: oklch(45.2% 0.211 324.591);
  --color-fuchsia-900: oklch(40.1% 0.17 325.612);
  --color-fuchsia-950: oklch(29.3% 0.136 325.661);

  --color-pink-50: oklch(97.1% 0.014 343.198);
  --color-pink-100: oklch(94.8% 0.028 342.258);
  --color-pink-200: oklch(89.9% 0.061 343.231);
  --color-pink-300: oklch(82.3% 0.12 346.018);
  --color-pink-400: oklch(71.8% 0.202 349.761);
  --color-pink-500: oklch(65.6% 0.241 354.308);
  --color-pink-600: oklch(59.2% 0.249 0.584);
  --color-pink-700: oklch(52.5% 0.223 3.958);
  --color-pink-800: oklch(45.9% 0.187 3.815);
  --color-pink-900: oklch(40.8% 0.153 2.432);
  --color-pink-950: oklch(28.4% 0.109 3.907);

  --color-rose-50: oklch(96.9% 0.015 12.422);
  --color-rose-100: oklch(94.1% 0.03 12.58);
  --color-rose-200: oklch(89.2% 0.058 10.001);
  --color-rose-300: oklch(81% 0.117 11.638);
  --color-rose-400: oklch(71.2% 0.194 13.428);
  --color-rose-500: oklch(64.5% 0.246 16.439);
  --color-rose-600: oklch(58.6% 0.253 17.585);
  --color-rose-700: oklch(51.4% 0.222 16.935);
  --color-rose-800: oklch(45.5% 0.188 13.697);
  --color-rose-900: oklch(41% 0.159 10.272);
  --color-rose-950: oklch(27.1% 0.105 12.094);

  --color-slate-50: oklch(98.4% 0.003 247.858);
  --color-slate-100: oklch(96.8% 0.007 247.896);
  --color-slate-200: oklch(92.9% 0.013 255.508);
  --color-slate-300: oklch(86.9% 0.022 252.894);
  --color-slate-400: oklch(70.4% 0.04 256.788);
  --color-slate-500: oklch(55.4% 0.046 257.417);
  --color-slate-600: oklch(44.6% 0.043 257.281);
  --color-slate-700: oklch(37.2% 0.044 257.287);
  --color-slate-800: oklch(27.9% 0.041 260.031);
  --color-slate-900: oklch(20.8% 0.042 265.755);
  --color-slate-950: oklch(12.9% 0.042 264.695);

  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-700: oklch(37.3% 0.034 259.733);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-gray-900: oklch(21% 0.034 264.665);
  --color-gray-950: oklch(13% 0.028 261.692);

  --color-zinc-50: oklch(98.5% 0 none);
  --color-zinc-100: oklch(96.7% 0.001 286.375);
  --color-zinc-200: oklch(92% 0.004 286.32);
  --color-zinc-300: oklch(87.1% 0.006 286.286);
  --color-zinc-400: oklch(70.5% 0.015 286.067);
  --color-zinc-500: oklch(55.2% 0.016 285.938);
  --color-zinc-600: oklch(44.2% 0.017 285.786);
  --color-zinc-700: oklch(37% 0.013 285.805);
  --color-zinc-800: oklch(27.4% 0.006 286.033);
  --color-zinc-900: oklch(21% 0.006 285.885);
  --color-zinc-950: oklch(14.1% 0.005 285.823);

  --color-neutral-50: oklch(98.5% 0 none);
  --color-neutral-100: oklch(97% 0 none);
  --color-neutral-200: oklch(92.2% 0 none);
  --color-neutral-300: oklch(87% 0 none);
  --color-neutral-400: oklch(70.8% 0 none);
  --color-neutral-500: oklch(55.6% 0 none);
  --color-neutral-600: oklch(43.9% 0 none);
  --color-neutral-700: oklch(37.1% 0 none);
  --color-neutral-800: oklch(26.9% 0 none);
  --color-neutral-900: oklch(20.5% 0 none);
  --color-neutral-950: oklch(14.5% 0 none);

  --color-stone-50: oklch(98.5% 0.001 106.423);
  --color-stone-100: oklch(97% 0.001 106.424);
  --color-stone-200: oklch(92.3% 0.003 48.717);
  --color-stone-300: oklch(86.9% 0.005 56.366);
  --color-stone-400: oklch(70.9% 0.01 56.259);
  --color-stone-500: oklch(55.3% 0.013 58.071);
  --color-stone-600: oklch(44.4% 0.011 73.639);
  --color-stone-700: oklch(37.4% 0.01 67.558);
  --color-stone-800: oklch(26.8% 0.007 34.298);
  --color-stone-900: oklch(21.6% 0.006 56.043);
  --color-stone-950: oklch(14.7% 0.004 49.25);

  --color-mauve-50: oklch(98.5% 0 none);
  --color-mauve-100: oklch(96% 0.003 325.6);
  --color-mauve-200: oklch(92.2% 0.005 325.62);
  --color-mauve-300: oklch(86.5% 0.012 325.68);
  --color-mauve-400: oklch(71.1% 0.019 323.02);
  --color-mauve-500: oklch(54.2% 0.034 322.5);
  --color-mauve-600: oklch(43.5% 0.029 321.78);
  --color-mauve-700: oklch(36.4% 0.029 323.89);
  --color-mauve-800: oklch(26.3% 0.024 320.12);
  --color-mauve-900: oklch(21.2% 0.019 322.12);
  --color-mauve-950: oklch(14.5% 0.008 326);

  --color-olive-50: oklch(98.8% 0.003 106.5);
  --color-olive-100: oklch(96.6% 0.005 106.5);
  --color-olive-200: oklch(93% 0.007 106.5);
  --color-olive-300: oklch(88% 0.011 106.6);
  --color-olive-400: oklch(73.7% 0.021 106.9);
  --color-olive-500: oklch(58% 0.031 107.3);
  --color-olive-600: oklch(46.6% 0.025 107.3);
  --color-olive-700: oklch(39.4% 0.023 107.4);
  --color-olive-800: oklch(28.6% 0.016 107.4);
  --color-olive-900: oklch(22.8% 0.013 107.4);
  --color-olive-950: oklch(15.3% 0.006 107.1);

  --color-mist-50: oklch(98.7% 0.002 197.1);
  --color-mist-100: oklch(96.3% 0.002 197.1);
  --color-mist-200: oklch(92.5% 0.005 214.3);
  --color-mist-300: oklch(87.2% 0.007 219.6);
  --color-mist-400: oklch(72.3% 0.014 214.4);
  --color-mist-500: oklch(56% 0.021 213.5);
  --color-mist-600: oklch(45% 0.017 213.2);
  --color-mist-700: oklch(37.8% 0.015 216);
  --color-mist-800: oklch(27.5% 0.011 216.9);
  --color-mist-900: oklch(21.8% 0.008 223.9);
  --color-mist-950: oklch(14.8% 0.004 228.8);

  --color-taupe-50: oklch(98.6% 0.002 67.8);
  --color-taupe-100: oklch(96% 0.002 17.2);
  --color-taupe-200: oklch(92.2% 0.005 34.3);
  --color-taupe-300: oklch(86.8% 0.007 39.5);
  --color-taupe-400: oklch(71.4% 0.014 41.2);
  --color-taupe-500: oklch(54.7% 0.021 43.1);
  --color-taupe-600: oklch(43.8% 0.017 39.3);
  --color-taupe-700: oklch(36.7% 0.016 35.7);
  --color-taupe-800: oklch(26.8% 0.011 36.5);
  --color-taupe-900: oklch(21.4% 0.009 43.1);
  --color-taupe-950: oklch(14.7% 0.004 49.3);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
  --text-shadow-sm:
    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
  --text-shadow-md:
    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
  --text-shadow-lg:
    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: --theme(--font-sans, initial);
  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);
  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);
  --default-mono-font-family: --theme(--font-mono, initial);
  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);
  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`;

  // node_modules/tailwindcss/preflight.css
  var preflight_default = `/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    'Noto Sans',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring:where(:not(iframe)) {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(…)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`;

  // node_modules/tailwindcss/utilities.css
  var utilities_default = `@tailwind utilities;
`;

  // src/engine.js
  var assets = {
    tailwindcss: tailwindcss_default,
    "tailwindcss/index.css": tailwindcss_default,
    "tailwindcss/theme.css": theme_default,
    "tailwindcss/preflight.css": preflight_default,
    "tailwindcss/utilities.css": utilities_default
  };
  var options = {
    base: "/",
    async loadStylesheet(id, base) {
      const content = assets[id] ?? assets[id + ".css"];
      if (content === undefined) {
        throw new Error(`[postwind] unsupported @import "${id}"`);
      }
      return { base, content };
    }
  };
  function createCompiler(css) {
    return zf(css, options);
  }
  function loadDesignSystem(css) {
    return jf(css, options);
  }
  // package.json
  var version = "0.6.1";

  // src/postwind.js
  function serverStub() {
    const noop = () => Promise.resolve(null);
    return Object.assign(noop, { version, init: noop, ready: noop, shortcut: noop, breakpoint: noop, resolve: noop });
  }
  var PostWind = typeof document === "undefined" ? serverStub() : (() => {
    const breakpoints = {};
    const shortcuts = {};
    const cache = {};
    const candidates = new Set;
    const aliases = new Map;
    const seen = new Set;
    const warned = new Set;
    const knownCache = new Map;
    let pending = [];
    let compiler = null;
    let ds = null;
    let _ready = null;
    let _work = Promise.resolve();
    let _lastCss = "";
    let _css = "";
    let _preflight = true;
    let _preload = [];
    let _warn = false;
    let _nonce = document.currentScript?.nonce || null;
    let _revealResolve;
    const _revealed = new Promise((r) => _revealResolve = r);
    const initOptions = ["css", "preflight", "breakpoints", "shortcuts", "preload", "body", "warn", "nonce"];
    function applyNonce(el) {
      if (_nonce)
        el.nonce = _nonce;
      return el;
    }
    function createStyle(id) {
      const style = document.createElement("style");
      style.id = id;
      return applyNonce(style);
    }
    const styleHide = createStyle("postwind-fouc");
    styleHide.textContent = "body:not(.pw-ready){opacity:0}body.pw-ready{opacity:1;transition:opacity .15s ease-in}" + "body:not(.pw-ready) *,body:not(.pw-ready) *::before,body:not(.pw-ready) *::after{transition:none !important}";
    document.head.appendChild(styleHide);
    const styleMain = createStyle("postwind");
    document.head.appendChild(styleMain);
    const visibleObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const vh = entry.rootBounds?.height || window.innerHeight;
        const on = entry.isIntersecting && (entry.intersectionRatio >= 0.5 || entry.intersectionRect.height >= vh / 2);
        entry.target.classList.toggle("pw-visible", on);
      }
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });
    const observedElements = new WeakSet;
    const unitRe = /^(.+-)(\d+(?:\.\d+)?)(px|rem|em|vh|vw|vmin|vmax|%|ch|ex|cap|lh|dvh|dvw|svh|svw|cqw|cqh)$/;
    const containerQueryRe = /^(min|max)-(\d+):(.+)$/;
    function lastVariantSep(cls) {
      let depth = 0;
      let idx = -1;
      for (let i = 0;i < cls.length; i++) {
        const c = cls[i];
        if (c === "[" || c === "(")
          depth++;
        else if (c === "]" || c === ")")
          depth--;
        else if (c === ":" && depth === 0)
          idx = i;
      }
      return idx;
    }
    function toTw(cls) {
      const i = lastVariantSep(cls);
      const head = i === -1 ? "" : cls.slice(0, i + 1);
      const tail = i === -1 ? cls : cls.slice(i + 1);
      const m = tail.match(unitRe);
      return m ? `${head}${m[1]}[${m[2]}${m[3]}]` : cls;
    }
    function known(candidate) {
      if (!ds)
        return true;
      if (!knownCache.has(candidate)) {
        knownCache.set(candidate, ds.candidatesToCss([candidate])[0] !== null);
      }
      return knownCache.get(candidate);
    }
    function isColonResponsive(cls) {
      const first = cls.indexOf(":");
      if (first <= 0)
        return false;
      const head = cls.slice(0, first);
      if (!head.includes("-") || head.includes("[") || breakpoints[head])
        return false;
      return known(toTw(head));
    }
    function responsive(parts) {
      if (parts.length !== 2 && parts.length !== 3)
        return [];
      const base = parts[0];
      const prop = base.slice(0, base.lastIndexOf("-") + 1);
      const bps = [null, "t", "d"];
      return parts.map((v, i) => {
        const c = toTw(i === 0 ? base : prop + v);
        return bps[i] ? `${bps[i]}:${c}` : c;
      });
    }
    function canonical(cls) {
      const at = cls.match(/^([^@\s]+)@([a-z][a-z0-9-]*)$/);
      if (at && breakpoints[at[2]])
        return canonical(`${at[2]}:${at[1]}`);
      if (cls.includes("|"))
        return responsive(cls.split("|"));
      if (isColonResponsive(cls))
        return responsive(cls.split(":"));
      return [toTw(cls)];
    }
    const reSpecial = /[\\^$.*+?()[\]{}|]/g;
    function aliasRewriter(map) {
      const lookup = new Map;
      for (const [canon, names] of map) {
        const esc = CSS.escape(canon);
        const list = [...names].map((n) => "." + CSS.escape(n)).join(", ");
        lookup.set(esc, `:is(.${esc}, ${list})`);
      }
      if (!lookup.size)
        return (css) => css;
      const alt = [...lookup.keys()].map((e) => e.replace(reSpecial, "\\$&")).join("|");
      const re = new RegExp(`\\.(${alt})(?![\\w\\\\-])`, "g");
      return (css) => css.replace(re, (_, esc) => lookup.get(esc));
    }
    let _aliasRewrite = null;
    function applyAliases(css) {
      _aliasRewrite ||= aliasRewriter(aliases);
      return _aliasRewrite(css);
    }
    function warnIfUnresolved(cls, list) {
      if (warned.has(cls))
        return;
      const sugar = list.length !== 1 || list[0] !== cls;
      const sep = cls.indexOf(":");
      const prefix = sep > 0 ? cls.slice(0, sep) : null;
      const ours = sugar || prefix && (breakpoints[prefix] || prefix === "dark" || prefix === "visible");
      if (!ours)
        return;
      const missing = list.filter((c) => !known(c));
      if (list.length && !missing.length)
        return;
      let hint;
      if (!list.length)
        hint = "expected 2 or 3 responsive segments";
      else if (prefix && breakpoints[prefix])
        hint = `"${cls.slice(sep + 1)}" is not a Tailwind class`;
      else
        hint = `not Tailwind classes: ${missing.join(", ")}`;
      warned.add(cls);
      console.warn(`[postwind] no CSS for "${cls}" (${hint})`);
    }
    function addClass(cls) {
      if (seen.has(cls))
        return;
      seen.add(cls);
      if (cls.startsWith("onload:") || containerQueryRe.test(cls))
        return;
      const list = canonical(cls);
      for (const c of list) {
        if (c !== cls) {
          if (!aliases.has(c))
            aliases.set(c, new Set);
          aliases.get(c).add(cls);
          _aliasRewrite = null;
        }
        if (!candidates.has(c)) {
          candidates.add(c);
          pending.push(c);
        }
      }
      if (_warn)
        warnIfUnresolved(cls, list);
    }
    function shortcutKey(name) {
      return /^[A-Za-z_][\w-]*$/.test(name) ? "." + name : name;
    }
    function addShortcuts(map) {
      for (const [name, classes] of Object.entries(map))
        shortcuts[shortcutKey(name)] = classes;
    }
    function expandShortcut(sel, depth = 0) {
      const out = [];
      for (const cls of shortcuts[sel].split(/\s+/).filter(Boolean)) {
        const nested = shortcuts["." + cls] ? "." + cls : null;
        if (nested && depth < 10)
          out.push(...expandShortcut(nested, depth + 1));
        else
          out.push(cls);
      }
      return out;
    }
    function shortcutCss() {
      const rules = [];
      for (const sel of Object.keys(shortcuts)) {
        const list = expandShortcut(sel).map(toTw).filter((c) => {
          const ok = known(c);
          if (!ok && _warn)
            console.warn(`[postwind] shortcut "${sel}": "${c}" is not a Tailwind class`);
          return ok;
        });
        if (list.length)
          rules.push(`  ${sel} { @apply ${list.join(" ")}; }`);
      }
      return rules.length ? `@layer components {
${rules.join(`
`)}
}` : "";
    }
    function mediaWidth(media, kind) {
      const m = media.match(new RegExp(`${kind}-width:\\s*(\\d+(?:\\.\\d+)?)(px|rem|em)`));
      return m ? parseFloat(m[1]) * (m[2] === "px" ? 1 : 16) : null;
    }
    function sortedBreakpoints() {
      const rank = (media) => {
        const min = mediaWidth(media, "min");
        if (min !== null)
          return [1, min];
        const max = mediaWidth(media, "max");
        return max !== null ? [0, -max] : [2, 0];
      };
      return Object.entries(breakpoints).sort(([, a], [, b]) => {
        const ra = rank(a);
        const rb = rank(b);
        return ra[0] - rb[0] || ra[1] - rb[1];
      });
    }
    function baseCss() {
      const parts = [
        _preflight ? '@import "tailwindcss";' : `@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);`
      ];
      for (const [name, media] of sortedBreakpoints()) {
        parts.push(`@custom-variant ${name} (${media});`);
      }
      parts.push("@custom-variant dark (&:where(.dark, .dark *));");
      parts.push("@custom-variant visible (&:where(.pw-visible));");
      parts.push(_css);
      for (const el of document.querySelectorAll('style[type="text/tailwindcss"]')) {
        parts.push(el.textContent);
      }
      return parts.join(`
`);
    }
    async function compileAll() {
      const base = baseCss();
      try {
        ds = await loadDesignSystem(base);
        knownCache.clear();
        compiler = await createCompiler(base + `
` + shortcutCss());
      } catch (e) {
        console.error("[postwind] compile failed:", e.message);
        throw e;
      }
      const raw = [...seen];
      seen.clear();
      aliases.clear();
      candidates.clear();
      _aliasRewrite = null;
      for (const cls of raw)
        addClass(cls);
      pending = [...candidates];
      _lastCss = "";
      rebuild();
    }
    function recompile() {
      _work = _work.then(compileAll, compileAll);
      return _work;
    }
    function rebuild() {
      if (!compiler)
        return;
      if (!pending.length && _lastCss)
        return;
      const list = pending;
      pending = [];
      _lastCss = compiler.build(list);
      styleMain.textContent = applyAliases(_lastCss);
    }
    let scheduled = false;
    function schedule() {
      if (scheduled)
        return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        rebuild();
      });
    }
    function extractRule(css, selector) {
      let i = css.indexOf(`
  ${selector} {`);
      if (i === -1)
        return null;
      i += 3;
      let depth = 0;
      for (let k = css.indexOf("{", i);k < css.length; k++) {
        if (css[k] === "{")
          depth++;
        else if (css[k] === "}" && --depth === 0) {
          return css.slice(i, k + 1).replace(/^ {2}/gm, "");
        }
      }
      return null;
    }
    function ready() {
      if (!_ready)
        init();
      return _work;
    }
    async function resolve(cls) {
      await ready();
      const key = shortcutKey(cls);
      if (shortcuts[key]) {
        rebuild();
        return extractRule(_lastCss, key);
      }
      const list = canonical(cls);
      if (!list.length)
        return null;
      const out = ds.candidatesToCss(list).filter(Boolean);
      if (!out.length)
        return null;
      const own = list.filter((c) => c !== cls).map((c) => [c, [cls]]);
      return aliasRewriter(new Map(own))(out.join(`
`));
    }
    function inject(cls) {
      if (cache[cls])
        return cache[cls];
      cache[cls] = ready().then(() => {
        addClass(cls);
        rebuild();
        return resolve(cls);
      });
      return cache[cls];
    }
    function breakpoint(name, media) {
      breakpoints[name] = media;
      bindBodyClass();
      return _ready ? recompile() : Promise.resolve();
    }
    function shortcut(name, classes) {
      addShortcuts(typeof name === "object" ? name : { [name]: classes });
      return _ready ? recompile() : Promise.resolve();
    }
    function observeVisible(el) {
      if (observedElements.has(el))
        return;
      observedElements.add(el);
      _revealed.then(() => visibleObserver.observe(el));
    }
    const cqState = new WeakMap;
    const cqObserver = new ResizeObserver((entries) => {
      for (const entry of entries)
        applyContainerQueries(entry.target, entry.contentRect.width);
    });
    function applyContainerQueries(el, width) {
      const state = cqState.get(el);
      if (!state)
        return;
      const on = new Set;
      for (const q of state.queries.values()) {
        if (q.mode === "min" ? width >= q.width : width <= q.width)
          on.add(q.cls);
      }
      for (const { cls } of state.queries.values()) {
        if (on.has(cls)) {
          if (!el.classList.contains(cls)) {
            el.classList.add(cls);
            state.added.add(cls);
          }
        } else if (state.added.has(cls)) {
          el.classList.remove(cls);
          state.added.delete(cls);
        }
      }
    }
    function syncContainerQueries(el) {
      const classes = [...el.classList].filter((c) => containerQueryRe.test(c));
      let state = cqState.get(el);
      if (!state) {
        if (!classes.length)
          return;
        state = { queries: new Map, added: new Set };
        cqState.set(el, state);
      }
      let changed = false;
      for (const cls of classes) {
        if (state.queries.has(cls))
          continue;
        const [, mode, width, inner] = cls.match(containerQueryRe);
        state.queries.set(cls, { mode, width: +width, cls: inner });
        if (compiler)
          addClass(inner);
        changed = true;
      }
      for (const cls of state.queries.keys()) {
        if (classes.includes(cls))
          continue;
        state.queries.delete(cls);
        changed = true;
      }
      if (!changed)
        return;
      const targets = new Set([...state.queries.values()].map((q) => q.cls));
      for (const cls of state.added) {
        if (targets.has(cls))
          continue;
        el.classList.remove(cls);
        state.added.delete(cls);
      }
      cqObserver.unobserve(el);
      if (state.queries.size)
        cqObserver.observe(el);
      else
        cqState.delete(el);
    }
    function handleOnload(el, cls) {
      const targetClass = cls.substring(7);
      _revealed.then(() => setTimeout(() => el.classList.add(targetClass), 100));
    }
    const wired = new WeakMap;
    function processElement(el) {
      if (!el.classList)
        return;
      for (const cls of el.classList) {
        if (cls.startsWith("onload:")) {
          if (!wired.has(el))
            wired.set(el, new Set);
          if (!wired.get(el).has(cls)) {
            wired.get(el).add(cls);
            handleOnload(el, cls);
          }
          continue;
        }
        if (containerQueryRe.test(cls))
          continue;
        if (cls.startsWith("visible:"))
          observeVisible(el);
        if (compiler)
          addClass(cls);
      }
      syncContainerQueries(el);
    }
    function initClasses(root) {
      for (const el of (root || document).querySelectorAll("[class]"))
        processElement(el);
    }
    function _reveal() {
      if (!document.body)
        return;
      document.body.classList.add("pw-ready");
      _revealResolve();
    }
    setTimeout(_reveal, 1500);
    function whenDom() {
      if (document.readyState !== "loading")
        return Promise.resolve();
      return new Promise((r) => document.addEventListener("DOMContentLoaded", r));
    }
    const domObserver = new MutationObserver((mutations) => {
      if (!compiler)
        return;
      let needsCompile = false;
      const isTwStyle = (n) => n.matches?.('style[type="text/tailwindcss"]') || n.querySelector?.('style[type="text/tailwindcss"]');
      for (const m of mutations) {
        if (m.type === "attributes") {
          if (m.target.nodeType === 1)
            processElement(m.target);
          continue;
        }
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1)
            continue;
          if (isTwStyle(node))
            needsCompile = true;
          processElement(node);
          for (const child of node.querySelectorAll?.("[class]") || [])
            processElement(child);
        }
      }
      if (needsCompile)
        recompile();
      else
        schedule();
    });
    domObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
    let _bodyClass = false;
    let _bodyClassCurrent = null;
    let _bodyQueries = [];
    function updateBodyClass() {
      if (!document.body)
        return;
      const [m, d] = _bodyQueries;
      const name = m?.matches ? "mobile" : d?.matches ? "desktop" : "tablet";
      if (name === _bodyClassCurrent)
        return;
      if (_bodyClassCurrent)
        document.body.classList.remove(_bodyClassCurrent);
      document.body.classList.add(name);
      _bodyClassCurrent = name;
    }
    function bindBodyClass() {
      if (!_bodyClass)
        return;
      for (const q of _bodyQueries)
        q?.removeEventListener("change", updateBodyClass);
      _bodyQueries = ["m", "d"].map((n) => breakpoints[n] && window.matchMedia(breakpoints[n].replace(/^@media\s*/, "")));
      for (const q of _bodyQueries)
        q?.addEventListener("change", updateBodyClass);
      updateBodyClass();
    }
    function _setupDarkAuto() {
      if (!window.matchMedia)
        return;
      const run = () => {
        if (!document.body?.classList.contains("dark-auto"))
          return;
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        if (query.matches)
          document.body.classList.add("dark");
        query.addEventListener("change", (e) => document.body.classList.toggle("dark", e.matches));
      };
      if (document.body)
        run();
      else
        document.addEventListener("DOMContentLoaded", run);
    }
    function init(opts = {}) {
      for (const key of Object.keys(opts)) {
        if (!initOptions.includes(key))
          console.warn(`[postwind] unknown init option "${key}"`);
      }
      if (opts.warn !== undefined)
        _warn = !!opts.warn;
      if (opts.nonce) {
        _nonce = opts.nonce;
        applyNonce(styleMain);
        applyNonce(styleHide);
      }
      let dirty = false;
      if (opts.preflight !== undefined && _preflight !== !!opts.preflight) {
        _preflight = !!opts.preflight;
        dirty = true;
      }
      if (opts.css) {
        _css += `
` + opts.css;
        dirty = true;
      }
      if (opts.breakpoints) {
        Object.assign(breakpoints, opts.breakpoints);
        dirty = true;
      }
      if (opts.shortcuts) {
        addShortcuts(opts.shortcuts);
        dirty = true;
      }
      if (opts.preload) {
        const list = Array.isArray(opts.preload) ? opts.preload : opts.preload.split(/\s+/).filter(Boolean);
        _preload.push(...list);
        if (_ready)
          list.forEach(inject);
      }
      if (opts.body)
        _bodyClass = true;
      if (opts.body || opts.breakpoints)
        whenDom().then(bindBodyClass);
      if (_ready) {
        if (dirty)
          recompile();
        return _work;
      }
      _setupDarkAuto();
      _ready = whenDom().then(compileAll).then(() => {
        for (const cls of _preload) {
          addClass(cls);
          cache[cls] ||= Promise.resolve().then(() => resolve(cls));
        }
        initClasses();
        rebuild();
        _reveal();
      });
      _work = _ready;
      return _work;
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => _ready || init());
    } else if (!_ready) {
      queueMicrotask(() => _ready || init());
    }
    inject.version = version;
    inject.init = init;
    inject.ready = ready;
    inject.breakpoint = breakpoint;
    inject.shortcut = shortcut;
    inject.resolve = resolve;
    breakpoint("m", "@media (max-width: 767px)");
    breakpoint("t", "@media (min-width: 768px)");
    breakpoint("d", "@media (min-width: 1024px)");
    return inject;
  })();
  if (typeof window !== "undefined")
    window.PostWind = PostWind;
  var postwind_default = PostWind;
})();
