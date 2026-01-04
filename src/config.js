// PostWind Configuration

/**
 * Constants used throughout PostWind
 */
export const CONSTANTS = {
  DEFAULT_PIXEL_MULTIPLIER: 4,
  DEFAULT_BREAKPOINTS: {
    'sm': '(min-width: 640px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 1024px)',
    'xl': '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    'm': '(max-width: 768px)',
    't': '(min-width: 769px) and (max-width: 1024px)',
    'd': '(min-width: 1025px)',
    'mobile': '(max-width: 768px)',
    'tablet': '(min-width: 769px) and (max-width: 1024px)',
    'desktop': '(min-width: 1025px)'
  },
  SUPPORTED_PSEUDO_STATES: [
    'hover', 'focus', 'active', 'disabled', 'visited',
    'focus-within', 'focus-visible', 'first', 'last', 'odd', 'even',
    'visible', 'checked', 'target', 'open', 'placeholder-shown',
    // Children selector (targets all direct children)
    '&',
    // Dark mode
    'dark',
    // Pseudo-elements (use :: in CSS)
    'before', 'after', 'placeholder', 'marker', 'selection',
    'first-line', 'first-letter', 'file'
  ],
  PSEUDO_SELECTOR_MAPPING: {
    'first': 'first-child',
    'last': 'last-child',
    'odd': 'nth-child(odd)',
    'even': 'nth-child(even)',
    'visible': '.dw-visible',  // Special handling for visibility state
    'checked': 'checked',
    'target': 'target',
    'open': 'open',
    'placeholder-shown': 'placeholder-shown',
    // Pseudo-elements use :: notation
    'before': '::before',
    'after': '::after',
    'placeholder': '::placeholder',
    'marker': '::marker',
    'selection': '::selection',
    'first-line': '::first-line',
    'first-letter': '::first-letter',
    'file': '::file-selector-button'
  },
  // Set of pseudo-elements that use :: instead of :
  PSEUDO_ELEMENTS: new Set([
    'before', 'after', 'placeholder', 'marker', 'selection',
    'first-line', 'first-letter', 'file'
  ])
};

function createDefaultProperties() {
  return {
    // Spacing - Padding
    'p': 'padding',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'px': ['padding-left', 'padding-right'],
    'py': ['padding-top', 'padding-bottom'],
    'ps': 'padding-inline-start',
    'pe': 'padding-inline-end',

    // Spacing - Margin
    'm': 'margin',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'mx': ['margin-left', 'margin-right'],
    'my': ['margin-top', 'margin-bottom'],
    'ms': 'margin-inline-start',
    'me': 'margin-inline-end',

    // Sizing
    'w': 'width',
    'h': 'height',
    'min-w': 'min-width',
    'min-h': 'min-height',
    'max-w': 'max-width',
    'max-h': 'max-height',
    'size': ['width', 'height'],

    // Typography
    'text': 'font-size',
    'leading': 'line-height',
    'tracking': 'letter-spacing',
    'indent': 'text-indent',

    // Flexbox & Grid
    'gap': 'gap',
    'gap-x': 'column-gap',
    'gap-y': 'row-gap',
    'space-x': 'margin-left',
    'space-y': 'margin-top',
    'flex': 'flex',

    // Layout
    'top': 'top',
    'right': 'right',
    'bottom': 'bottom',
    'left': 'left',
    'inset': ['top', 'right', 'bottom', 'left'],
    'inset-x': ['left', 'right'],
    'inset-y': ['top', 'bottom'],
    'start': 'inset-inline-start',
    'end': 'inset-inline-end',

    // Borders
    'border': 'border-width',
    'border-t': 'border-top-width',
    'border-r': 'border-right-width',
    'border-b': 'border-bottom-width',
    'border-l': 'border-left-width',
    'border-x': ['border-left-width', 'border-right-width'],
    'border-y': ['border-top-width', 'border-bottom-width'],
    'border-s': 'border-inline-start-width',
    'border-e': 'border-inline-end-width',
    // Border Style
    'border-style': 'border-style',
    'border-t-style': 'border-top-style',
    'border-r-style': 'border-right-style',
    'border-b-style': 'border-bottom-style',
    'border-l-style': 'border-left-style',
    'border-x-style': ['border-left-style', 'border-right-style'],
    'border-y-style': ['border-top-style', 'border-bottom-style'],
    'border-s-style': 'border-inline-start-style',
    'border-e-style': 'border-inline-end-style',

    // Border Radius
    'br': 'border-radius',
    'rounded': 'border-radius',
    'rounded-t': ['border-top-left-radius', 'border-top-right-radius'],
    'rounded-r': ['border-top-right-radius', 'border-bottom-right-radius'],
    'rounded-b': ['border-bottom-right-radius', 'border-bottom-left-radius'],
    'rounded-l': ['border-top-left-radius', 'border-bottom-left-radius'],
    'rounded-tl': 'border-top-left-radius',
    'rounded-tr': 'border-top-right-radius',
    'rounded-br': 'border-bottom-right-radius',
    'rounded-bl': 'border-bottom-left-radius',
    'rounded-s': ['border-start-start-radius', 'border-start-end-radius'],
    'rounded-e': ['border-end-start-radius', 'border-end-end-radius'],
    'rounded-ss': 'border-start-start-radius',
    'rounded-se': 'border-start-end-radius',
    'rounded-ee': 'border-end-end-radius',
    'rounded-es': 'border-end-start-radius',

    // Effects
    'ring': 'box-shadow',
    'ring-offset': 'box-shadow',
    'shadow': 'box-shadow',
    'opacity': 'opacity',
    'blur': 'filter',
    'brightness': 'filter',
    'contrast': 'filter',
    'grayscale': 'filter',
    'hue-rotate': 'filter',
    'invert': 'filter',
    'saturate': 'filter',
    'sepia': 'filter',
    'backdrop-blur': 'backdrop-filter',
    'backdrop-brightness': 'backdrop-filter',
    'backdrop-contrast': 'backdrop-filter',
    'backdrop-grayscale': 'backdrop-filter',
    'backdrop-hue-rotate': 'backdrop-filter',
    'backdrop-invert': 'backdrop-filter',
    'backdrop-opacity': 'backdrop-filter',
    'backdrop-saturate': 'backdrop-filter',
    'backdrop-sepia': 'backdrop-filter',

    // Transform
    'scale': 'transform',
    'scale-x': 'transform',
    'scale-y': 'transform',
    'rotate': 'transform',
    'translate-x': 'transform',
    'translate-y': 'transform',
    'skew-x': 'transform',
    'skew-y': 'transform',

    // Transition & Animation
    'duration': 'transition-duration',
    'delay': 'transition-delay',
    'ease': 'transition-timing-function',

    // CSS Grid
    'grid-cols': 'grid-template-columns',
    'grid-rows': 'grid-template-rows',
    'col': 'grid-column',
    'col-span': 'grid-column',
    'col-start': 'grid-column-start',
    'col-end': 'grid-column-end',
    'row': 'grid-row',
    'row-span': 'grid-row',
    'row-start': 'grid-row-start',
    'row-end': 'grid-row-end',

    // Animation & Transition
    'animate': 'animation',

    // Colors
    'bg': 'background-color',
    'border-color': 'border-color',
    'outline': 'outline-color',
    'decoration': 'text-decoration-color',
    'placeholder': 'placeholder-color',
    'caret': 'caret-color',
    'accent': 'accent-color',
    'fill': 'fill',
    'stroke': 'stroke',

    // Background
    'bg-image': 'background-image',
    'bg-position': 'background-position',
    'bg-size': 'background-size',
    'bg-repeat': 'background-repeat',
    'bg-attachment': 'background-attachment',
    'bg-clip': 'background-clip',
    'bg-origin': 'background-origin',
    'from': '--tw-gradient-from',
    'via': '--tw-gradient-via',
    'to': '--tw-gradient-to',

    // Typography
    'font': 'font-family',
    'font-size': 'font-size',
    'font-weight': 'font-weight',
    'font-style': 'font-style',
    'text-decoration': 'text-decoration',
    'text-decoration-thickness': 'text-decoration-thickness',
    'text-underline-offset': 'text-underline-offset',
    'text-transform': 'text-transform',
    'text-overflow': 'text-overflow',
    'text-align': 'text-align',
    'text-indent': 'text-indent',
    'vertical-align': 'vertical-align',
    'whitespace': 'white-space',
    'word-break': 'word-break',
    'hyphens': 'hyphens',

    // Lists
    'list-image': 'list-style-image',
    'list-position': 'list-style-position',
    'list-type': 'list-style-type',

    // Appearance
    'appearance': 'appearance',
    'columns': 'columns',
    'break-before': 'break-before',
    'break-inside': 'break-inside',
    'break-after': 'break-after',
    'box-decoration': 'box-decoration-break',
    'box-sizing': 'box-sizing',

    // Floats
    'float': 'float',
    'clear': 'clear',

    // Object
    'object': 'object-fit',
    'object-position': 'object-position',

    // Overflow
    'overflow': 'overflow',
    'overflow-x': 'overflow-x',
    'overflow-y': 'overflow-y',
    'overscroll': 'overscroll-behavior',
    'overscroll-x': 'overscroll-behavior-x',
    'overscroll-y': 'overscroll-behavior-y',

    // Position
    'position': 'position',

    // Visibility
    'visibility': 'visibility',

    // Z-Index
    'z': 'z-index',

    // Flexbox
    'flex-direction': 'flex-direction',
    'flex-wrap': 'flex-wrap',
    'flex-grow': 'flex-grow',
    'flex-shrink': 'flex-shrink',
    'flex-basis': 'flex-basis',
    'order': 'order',
    'justify-content': 'justify-content',
    'justify-items': 'justify-items',
    'justify-self': 'justify-self',
    'align-content': 'align-content',
    'align-items': 'align-items',
    'align-self': 'align-self',
    'place-content': 'place-content',
    'place-items': 'place-items',
    'place-self': 'place-self',

    // Grid
    'grid': 'grid',
    'grid-template': 'grid-template',
    'grid-template-columns': 'grid-template-columns',
    'grid-template-rows': 'grid-template-rows',
    'grid-template-areas': 'grid-template-areas',
    'grid-auto-columns': 'grid-auto-columns',
    'grid-auto-rows': 'grid-auto-rows',
    'grid-auto-flow': 'grid-auto-flow',
    'grid-column': 'grid-column',
    'grid-column-start': 'grid-column-start',
    'grid-column-end': 'grid-column-end',
    'grid-row': 'grid-row',
    'grid-row-start': 'grid-row-start',
    'grid-row-end': 'grid-row-end',
    'grid-area': 'grid-area',

    // Spacing
    'space': 'margin',

    // Sizing
    'aspect': 'aspect-ratio',
    'contain': 'contain',
    'container': 'container-type',
    'content': 'content',

    // Transform
    'transform': 'transform',
    'transform-origin': 'transform-origin',
    'translate': 'transform',
    'rotate': 'transform',
    'scale': 'transform',
    'skew': 'transform',

    // Interactivity
    'accent-color': 'accent-color',
    'caret-color': 'caret-color',
    'cursor': 'cursor',
    'outline-width': 'outline-width',
    'outline-style': 'outline-style',
    'outline-offset': 'outline-offset',
    'resize': 'resize',
    'scroll-behavior': 'scroll-behavior',
    'scroll-snap-align': 'scroll-snap-align',
    'scroll-snap-stop': 'scroll-snap-stop',
    'scroll-snap-type': 'scroll-snap-type',
    'touch-action': 'touch-action',
    'user-select': 'user-select',
    'will-change': 'will-change',

    // SVG
    'fill': 'fill',
    'stroke': 'stroke',
    'stroke-width': 'stroke-width',
    'stroke-dasharray': 'stroke-dasharray',
    'stroke-dashoffset': 'stroke-dashoffset',
    'stroke-linecap': 'stroke-linecap',
    'stroke-linejoin': 'stroke-linejoin',

    // Accessibility
    'sr': 'position',
    'not-sr': 'position',
    'forced-color-adjust': 'forced-color-adjust',

    // Tables
    'border-collapse': 'border-collapse',
    'border-spacing': 'border-spacing',
    'table-layout': 'table-layout',
    'caption-side': 'caption-side',
    'empty-cells': 'empty-cells',

    // Others
    'scroll-m': 'scroll-margin',
    'scroll-mt': 'scroll-margin-top',
    'scroll-mr': 'scroll-margin-right',
    'scroll-mb': 'scroll-margin-bottom',
    'scroll-ml': 'scroll-margin-left',
    'scroll-mx': ['scroll-margin-left', 'scroll-margin-right'],
    'scroll-my': ['scroll-margin-top', 'scroll-margin-bottom'],
    'scroll-p': 'scroll-padding',
    'scroll-pt': 'scroll-padding-top',
    'scroll-pr': 'scroll-padding-right',
    'scroll-pb': 'scroll-padding-bottom',
    'scroll-pl': 'scroll-padding-left',
    'scroll-px': ['scroll-padding-left', 'scroll-padding-right'],
    'scroll-py': ['scroll-padding-top', 'scroll-padding-bottom']
  };
}

function createBorderRadiusKeywordMap() {
  const keywords = {};
  const variants = [
    { name: 'none', value: '0px' },
    { name: 'sm', value: '0.125rem' },
    { name: '', value: '0.25rem' },
    { name: 'md', value: '0.375rem' },
    { name: 'lg', value: '0.5rem' },
    { name: 'xl', value: '0.75rem' },
    { name: '2xl', value: '1rem' },
    { name: '3xl', value: '1.5rem' },
    { name: 'full', value: '9999px' }
  ];

  const baseClassName = (variant) => variant.name ? `rounded-${variant.name}` : 'rounded';
  variants.forEach(variant => {
    keywords[baseClassName(variant)] = `border-radius: ${variant.value};`;
  });

  const edgeGroups = {
    't': ['border-top-left-radius', 'border-top-right-radius'],
    'r': ['border-top-right-radius', 'border-bottom-right-radius'],
    'b': ['border-bottom-right-radius', 'border-bottom-left-radius'],
    'l': ['border-top-left-radius', 'border-bottom-left-radius'],
    's': ['border-start-start-radius', 'border-end-start-radius'],
    'e': ['border-start-end-radius', 'border-end-end-radius']
  };

  Object.entries(edgeGroups).forEach(([edge, props]) => {
    variants.forEach(variant => {
      const suffix = variant.name ? `-${variant.name}` : '';
      const className = `rounded-${edge}${suffix}`;
      keywords[className] = props.map(prop => `${prop}: ${variant.value};`).join(' ');
    });
  });

  const cornerGroups = {
    'tl': ['border-top-left-radius'],
    'tr': ['border-top-right-radius'],
    'br': ['border-bottom-right-radius'],
    'bl': ['border-bottom-left-radius'],
    'ss': ['border-start-start-radius'],
    'se': ['border-start-end-radius'],
    'ee': ['border-end-end-radius'],
    'es': ['border-end-start-radius']
  };

  Object.entries(cornerGroups).forEach(([corner, props]) => {
    variants.forEach(variant => {
      const suffix = variant.name ? `-${variant.name}` : '';
      const className = `rounded-${corner}${suffix}`;
      keywords[className] = props.map(prop => `${prop}: ${variant.value};`).join(' ');
    });
  });

  return keywords;
}

// Tailwind 4 complete color palette with all shades
// Using hex values for maximum compatibility
const TAILWIND_COLORS = {
  // Special values
  black: { DEFAULT: '#000000' },
  white: { DEFAULT: '#ffffff' },
  transparent: { DEFAULT: 'transparent' },
  current: { DEFAULT: 'currentColor' },
  inherit: { DEFAULT: 'inherit' },

  // Slate
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },

  // Gray
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  },

  // Zinc
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b'
  },

  // Neutral
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a'
  },

  // Stone
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09'
  },

  // Red
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },

  // Orange
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407'
  },

  // Amber
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },

  // Yellow
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006'
  },

  // Lime
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05'
  },

  // Green
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },

  // Emerald
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22'
  },

  // Teal
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e'
  },

  // Cyan
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344'
  },

  // Sky
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49'
  },

  // Blue
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Indigo
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'
  },

  // Violet
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065'
  },

  // Purple
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764'
  },

  // Fuchsia
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e'
  },

  // Pink
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
    950: '#500724'
  },

  // Rose
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519'
  },

  // Turquoise (custom color - not in standard Tailwind)
  turquoise: {
    50: '#effefa',
    100: '#c7fff0',
    200: '#90ffe2',
    300: '#51f7d2',
    400: '#1de4bd',
    500: '#40e0d0',
    600: '#06a896',
    700: '#0a857a',
    800: '#0d6963',
    900: '#105752',
    950: '#023435'
  },

  // Light Blue (CSS named color)
  lightblue: {
    50: '#f7fbff',
    100: '#eff7ff',
    200: '#e0efff',
    300: '#cce3ff',
    400: '#b3d2ff',
    500: '#add8e6',
    600: '#7eb8d6',
    700: '#5b99c6',
    800: '#3d7cb6',
    900: '#2a5ea6',
    950: '#1a3d6d'
  },

  // Coral (CSS named color)
  coral: {
    50: '#fff5f2',
    100: '#ffe8e1',
    200: '#ffd4c7',
    300: '#ffb8a3',
    400: '#ff9070',
    500: '#ff7f50',
    600: '#f05a28',
    700: '#c9431a',
    800: '#a33a1a',
    900: '#86351c',
    950: '#49170a'
  },

  // Gold (CSS named color)
  gold: {
    50: '#fffef0',
    100: '#fffacc',
    200: '#fff099',
    300: '#ffe066',
    400: '#ffcc00',
    500: '#ffd700',
    600: '#d4a800',
    700: '#a67c00',
    800: '#7a5c00',
    900: '#524000',
    950: '#2e2400'
  },

  // Navy (CSS named color)
  navy: {
    50: '#f0f4ff',
    100: '#e0e8ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#000080',
    950: '#000040'
  },

  // Maroon (CSS named color)
  maroon: {
    50: '#fdf2f4',
    100: '#fce7eb',
    200: '#f9d0d9',
    300: '#f4a9ba',
    400: '#ec7694',
    500: '#df4770',
    600: '#c9265a',
    700: '#a91d4a',
    800: '#800000',
    900: '#5c0015',
    950: '#370009'
  },

  // Olive (CSS named color)
  olive: {
    50: '#f9faf4',
    100: '#f1f4e4',
    200: '#e2e8c9',
    300: '#cdd6a4',
    400: '#b3bf79',
    500: '#808000',
    600: '#6b6b00',
    700: '#545400',
    800: '#454500',
    900: '#3a3a00',
    950: '#1f1f00'
  },

  // Silver (CSS named color)
  silver: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#d9d9d9',
    400: '#cccccc',
    500: '#c0c0c0',
    600: '#9e9e9e',
    700: '#757575',
    800: '#616161',
    900: '#424242',
    950: '#212121'
  },

  // Aqua (CSS named color - alias for cyan)
  aqua: {
    50: '#f0fdff',
    100: '#e0fbff',
    200: '#baf8ff',
    300: '#7ef4ff',
    400: '#42f0ff',
    500: '#00ffff',
    600: '#00d4d4',
    700: '#00a9a9',
    800: '#007e7e',
    900: '#005353',
    950: '#002f2f'
  },

  // Magenta (CSS named color - alias for fuchsia)
  magenta: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#ff00ff',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e'
  },

  // Brown
  brown: {
    50: '#fef3f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#a52a2a',
    600: '#8b4513',
    700: '#6b3e0e',
    800: '#4a2c0a',
    900: '#331d06',
    950: '#1a0e03'
  },

  // Beige
  beige: {
    50: '#fffcf8',
    100: '#fff9f1',
    200: '#fff3e3',
    300: '#ffeccc',
    400: '#ffe0af',
    500: '#f5f5dc',
    600: '#d4c5a9',
    700: '#b39c78',
    800: '#927749',
    900: '#735b36',
    950: '#3e311d'
  },

  // Salmon
  salmon: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#fa8072',
    600: '#e15a4c',
    700: '#c44134',
    800: '#9f322a',
    900: '#822a24',
    950: '#4b1512'
  },

  // Crimson
  crimson: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#dc143c',
    600: '#b81030',
    700: '#940d25',
    800: '#710a1d',
    900: '#5a0717',
    950: '#2f040c'
  },

  // Lavender
  lavender: {
    50: '#fafbff',
    100: '#f5f6ff',
    200: '#ebebf9',
    300: '#e1e5f7',
    400: '#ebdffe',
    500: '#e6e6fa',
    600: '#b8b8d1',
    700: '#9194a8',
    800: '#737480',
    900: '#5c5e67',
    950: '#36373d'
  },

  // Khaki
  khaki: {
    50: '#fbfbf5',
    100: '#f5f5e6',
    200: '#ebe9d0',
    300: '#dedbb5',
    400: '#cdca94',
    500: '#f0e68c',
    600: '#c9c273',
    700: '#a39b5a',
    800: '#817848',
    900: '#695f3b',
    950: '#3b361f'
  },

  // Chocolate
  chocolate: {
    50: '#fef5f0',
    100: '#fde9d6',
    200: '#fbd5a8',
    300: '#f7b669',
    400: '#f39c2b',
    500: '#d2691e',
    600: '#b05618',
    700: '#8e4414',
    800: '#6e350f',
    900: '#572b0d',
    950: '#321a08'
  },

  // Sienna
  sienna: {
    50: '#fef7f2',
    100: '#fdece0',
    200: '#fbdac1',
    300: '#f7bd96',
    400: '#f3995f',
    500: '#a0522d',
    600: '#874326',
    700: '#6e341e',
    800: '#562617',
    900: '#441f11',
    950: '#2a110a'
  },

  // Plum
  plum: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e8b4ff',
    500: '#dda0dd',
    600: '#b989ba',
    700: '#957299',
    800: '#755b78',
    900: '#5e4961',
    950: '#362837'
  },

  // Tomato
  tomato: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ff6347',
    600: '#d9553d',
    700: '#b34533',
    800: '#8e3629',
    900: '#742b22',
    950: '#431613'
  }
};

// Legacy BASE_COLORS for backward compatibility (maps to 500 shade)
const BASE_COLORS = {
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  slate: '#64748b',
  gray: '#6b7280',
  zinc: '#71717a',
  neutral: '#737373',
  stone: '#78716c',
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
  turquoise: '#40e0d0',
  lightblue: '#add8e6',
  coral: '#ff7f50',
  gold: '#ffd700',
  navy: '#000080',
  maroon: '#800000',
  olive: '#808000',
  silver: '#c0c0c0',
  aqua: '#00ffff',
  magenta: '#ff00ff',
  brown: '#a52a2a',
  beige: '#f5f5dc',
  salmon: '#fa8072',
  crimson: '#dc143c',
  lavender: '#e6e6fa',
  khaki: '#f0e68c',
  chocolate: '#d2691e',
  sienna: '#a0522d',
  plum: '#dda0dd',
  tomato: '#ff6347'
};

const SHADE_STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function getColorValue(colorName, shade) {
  const color = TAILWIND_COLORS[colorName];
  if (!color) return null;

  // Handle special colors (black, white, transparent, current, inherit)
  if (color.DEFAULT !== undefined) {
    return color.DEFAULT;
  }

  // Return specific shade or 500 as default
  if (shade !== undefined && shade !== null) {
    return color[shade] || null;
  }

  return color[500] || null;
}

function formatColorValue(name, tone, _value) {
  // Handle special colors
  if (name === 'transparent') return 'transparent';
  if (name === 'current') return 'currentColor';
  if (name === 'inherit') return 'inherit';
  if (name === 'black') return '#000000';
  if (name === 'white') return '#ffffff';

  // Get the color value from the palette
  const colorValue = getColorValue(name, tone);
  if (colorValue) return colorValue;

  // Fallback to legacy behavior if color not found
  return _value || null;
}

function createColorKeywordMap(prefix, cssProperty) {
  const entries = {};

  Object.entries(TAILWIND_COLORS).forEach(([name, shades]) => {
    // Handle special colors (black, white, transparent, current, inherit)
    if (shades.DEFAULT !== undefined) {
      entries[`${prefix}-${name}`] = `${cssProperty}: ${shades.DEFAULT}`;
      return;
    }

    // Add base class (maps to 500)
    if (shades[500]) {
      entries[`${prefix}-${name}`] = `${cssProperty}: ${shades[500]}`;
    }

    // Add all shade variants
    SHADE_STOPS.forEach(shade => {
      if (shades[shade]) {
        entries[`${prefix}-${name}-${shade}`] = `${cssProperty}: ${shades[shade]}`;
      }
    });
  });

  return entries;
}

function createGradientColorMap(prefix, colorVar, stopsVar, isVia = false) {
  const entries = {};

  Object.entries(TAILWIND_COLORS).forEach(([name, shades]) => {
    // Handle special colors (black, white, transparent, current, inherit)
    if (shades.DEFAULT !== undefined) {
      if (isVia) {
        entries[`${prefix}-${name}`] = `${colorVar}: ${shades.DEFAULT}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)`;
      } else {
        entries[`${prefix}-${name}`] = `${colorVar}: ${shades.DEFAULT}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)`;
      }
      return;
    }

    // Add base class (maps to 500)
    if (shades[500]) {
      if (isVia) {
        entries[`${prefix}-${name}`] = `${colorVar}: ${shades[500]}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)`;
      } else {
        entries[`${prefix}-${name}`] = `${colorVar}: ${shades[500]}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)`;
      }
    }

    // Add all shade variants
    SHADE_STOPS.forEach(shade => {
      if (shades[shade]) {
        if (isVia) {
          entries[`${prefix}-${name}-${shade}`] = `${colorVar}: ${shades[shade]}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)`;
        } else {
          entries[`${prefix}-${name}-${shade}`] = `${colorVar}: ${shades[shade]}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)`;
        }
      }
    });
  });

  return entries;
}

export function resolveColorValue(name, tone) {
  return formatColorValue(name, tone, BASE_COLORS[name]);
}

export function resolveDynamicColor(prefix, name, tone) {
  const formatted = resolveColorValue(name, tone);
  if (!formatted) return null;

  const prop = {
    bg: 'background-color',
    text: 'color',
    border: 'border-color',
    accent: 'accent-color',
    fill: 'fill',
    stroke: 'stroke',
    caret: 'caret-color',
    decoration: 'text-decoration-color',
    outline: 'outline-color',
    shadow: 'box-shadow',
    ring: '--tw-ring-color'
  }[prefix];

  if (!prop) return null;
  return `${prop}: ${formatted}`;
}

function createDefaultKeywords() {
  const keywords = {
    // Display
    'block': 'display: block',
    'inline-block': 'display: inline-block',
    'inline': 'display: inline',
    'flex': 'display: flex',
    'inline-flex': 'display: inline-flex',
    'table': 'display: table',
    'inline-table': 'display: inline-table',
    'table-caption': 'display: table-caption',
    'table-cell': 'display: table-cell',
    'table-column': 'display: table-column',
    'table-column-group': 'display: table-column-group',
    'table-footer-group': 'display: table-footer-group',
    'table-header-group': 'display: table-header-group',
    'table-row-group': 'display: table-row-group',
    'table-row': 'display: table-row',
    'flow-root': 'display: flow-root',
    'grid': 'display: grid',
    'inline-grid': 'display: inline-grid',
    'contents': 'display: contents',
    'list-item': 'display: list-item',
    'hidden': 'display: none',
    'none': 'display: none',

    // Box Sizing
    'box-border': 'box-sizing: border-box',
    'box-content': 'box-sizing: content-box',

    // Floats
    'float-left': 'float: left',
    'float-right': 'float: right',
    'float-none': 'float: none',

    // Clear
    'clear-left': 'clear: left',
    'clear-right': 'clear: right',
    'clear-both': 'clear: both',
    'clear-none': 'clear: none',

    // Isolation
    'isolate': 'isolation: isolate',
    'isolation-auto': 'isolation: auto',

    // Object Fit
    'object-contain': 'object-fit: contain',
    'object-cover': 'object-fit: cover',
    'object-fill': 'object-fit: fill',
    'object-none': 'object-fit: none',
    'object-scale-down': 'object-fit: scale-down',

    // Object Position
    'object-bottom': 'object-position: bottom',
    'object-center': 'object-position: center',
    'object-left': 'object-position: left',
    'object-left-bottom': 'object-position: left bottom',
    'object-left-top': 'object-position: left top',
    'object-right': 'object-position: right',
    'object-right-bottom': 'object-position: right bottom',
    'object-right-top': 'object-position: right top',
    'object-top': 'object-position: top',

    // Overflow
    'overflow-auto': 'overflow: auto',
    'overflow-hidden': 'overflow: hidden',
    'overflow-clip': 'overflow: clip',
    'overflow-visible': 'overflow: visible',
    'overflow-scroll': 'overflow: scroll',
    'overflow-x-auto': 'overflow-x: auto',
    'overflow-y-auto': 'overflow-y: auto',
    'overflow-x-hidden': 'overflow-x: hidden',
    'overflow-y-hidden': 'overflow-y: hidden',
    'overflow-x-clip': 'overflow-x: clip',
    'overflow-y-clip': 'overflow-y: clip',
    'overflow-x-visible': 'overflow-x: visible',
    'overflow-y-visible': 'overflow-y: visible',
    'overflow-x-scroll': 'overflow-x: scroll',
    'overflow-y-scroll': 'overflow-y: scroll',

    // Overscroll Behavior
    'overscroll-auto': 'overscroll-behavior: auto',
    'overscroll-contain': 'overscroll-behavior: contain',
    'overscroll-none': 'overscroll-behavior: none',
    'overscroll-y-auto': 'overscroll-behavior-y: auto',
    'overscroll-y-contain': 'overscroll-behavior-y: contain',
    'overscroll-y-none': 'overscroll-behavior-y: none',
    'overscroll-x-auto': 'overscroll-behavior-x: auto',
    'overscroll-x-contain': 'overscroll-behavior-x: contain',
    'overscroll-x-none': 'overscroll-behavior-x: none',

    // Position
    'static': 'position: static',
    'fixed': 'position: fixed',
    'absolute': 'position: absolute',
    'relative': 'position: relative',
    'sticky': 'position: sticky',

    // Visibility
    'visible': 'visibility: visible',
    'invisible': 'visibility: hidden',
    'collapse': 'visibility: collapse',

    // Z-Index
    'z-0': 'z-index: 0',
    'z-10': 'z-index: 10',
    'z-20': 'z-index: 20',
    'z-30': 'z-index: 30',
    'z-40': 'z-index: 40',
    'z-50': 'z-index: 50',
    'z-auto': 'z-index: auto',

    // Flex direction
    'flex-row': 'flex-direction: row',
    'flex-row-reverse': 'flex-direction: row-reverse',
    'flex-col': 'flex-direction: column',
    'flex-col-reverse': 'flex-direction: column-reverse',

    // Flex wrap
    'flex-wrap': 'flex-wrap: wrap',
    'flex-wrap-reverse': 'flex-wrap: wrap-reverse',
    'flex-nowrap': 'flex-wrap: nowrap',

    // Flex
    'flex-1': 'flex: 1 1 0%',
    'flex-2': 'flex: 2 2 0%',
    'flex-3': 'flex: 3 3 0%',
    'flex-auto': 'flex: 1 1 auto',
    'flex-initial': 'flex: 0 1 auto',
    'flex-none': 'flex: none',

    // Flex Grow
    'grow': 'flex-grow: 1',
    'grow-0': 'flex-grow: 0',

    // Flex Shrink
    'shrink': 'flex-shrink: 1',
    'shrink-0': 'flex-shrink: 0',

    // Order
    'order-1': 'order: 1',
    'order-2': 'order: 2',
    'order-3': 'order: 3',
    'order-4': 'order: 4',
    'order-5': 'order: 5',
    'order-6': 'order: 6',
    'order-7': 'order: 7',
    'order-8': 'order: 8',
    'order-9': 'order: 9',
    'order-10': 'order: 10',
    'order-11': 'order: 11',
    'order-12': 'order: 12',
    'order-first': 'order: -9999',
    'order-last': 'order: 9999',
    'order-none': 'order: 0',

    // Justify content
    'justify-normal': 'justify-content: normal',
    'justify-start': 'justify-content: flex-start',
    'justify-end': 'justify-content: flex-end',
    'justify-center': 'justify-content: center',
    'justify-between': 'justify-content: space-between',
    'justify-around': 'justify-content: space-around',
    'justify-evenly': 'justify-content: space-evenly',
    'justify-stretch': 'justify-content: stretch',

    // Justify Items
    'justify-items-start': 'justify-items: start',
    'justify-items-end': 'justify-items: end',
    'justify-items-center': 'justify-items: center',
    'justify-items-stretch': 'justify-items: stretch',

    // Justify Self
    'justify-self-auto': 'justify-self: auto',
    'justify-self-start': 'justify-self: start',
    'justify-self-end': 'justify-self: end',
    'justify-self-center': 'justify-self: center',
    'justify-self-stretch': 'justify-self: stretch',

    // Align Content
    'content-normal': 'align-content: normal',
    'content-center': 'align-content: center',
    'content-start': 'align-content: flex-start',
    'content-end': 'align-content: flex-end',
    'content-between': 'align-content: space-between',
    'content-around': 'align-content: space-around',
    'content-evenly': 'align-content: space-evenly',
    'content-baseline': 'align-content: baseline',
    'content-stretch': 'align-content: stretch',

    // Align items
    'items-start': 'align-items: flex-start',
    'items-end': 'align-items: flex-end',
    'items-center': 'align-items: center',
    'items-baseline': 'align-items: baseline',
    'items-stretch': 'align-items: stretch',

    // Align self
    'self-auto': 'align-self: auto',
    'self-start': 'align-self: flex-start',
    'self-end': 'align-self: flex-end',
    'self-center': 'align-self: center',
    'self-stretch': 'align-self: stretch',
    'self-baseline': 'align-self: baseline',

    // Place Content
    'place-content-center': 'place-content: center',
    'place-content-start': 'place-content: start',
    'place-content-end': 'place-content: end',
    'place-content-between': 'place-content: space-between',
    'place-content-around': 'place-content: space-around',
    'place-content-evenly': 'place-content: space-evenly',
    'place-content-baseline': 'place-content: baseline',
    'place-content-stretch': 'place-content: stretch',

    // Place Items
    'place-items-start': 'place-items: start',
    'place-items-end': 'place-items: end',
    'place-items-center': 'place-items: center',
    'place-items-baseline': 'place-items: baseline',
    'place-items-stretch': 'place-items: stretch',

    // Place Self
    'place-self-auto': 'place-self: auto',
    'place-self-start': 'place-self: start',
    'place-self-end': 'place-self: end',
    'place-self-center': 'place-self: center',
    'place-self-stretch': 'place-self: stretch',


    // Text Align
    'text-left': 'text-align: left',
    'text-center': 'text-align: center',
    'text-right': 'text-align: right',
    'text-justify': 'text-align: justify',
    'text-start': 'text-align: start',
    'text-end': 'text-align: end',

    // Text Color (duplicates)
    'text-inherit': 'color: inherit',
    'text-current': 'color: currentColor',
    'text-transparent': 'color: transparent',

    // Vertical Align
    'align-baseline': 'vertical-align: baseline',
    'align-top': 'vertical-align: top',
    'align-middle': 'vertical-align: middle',
    'align-bottom': 'vertical-align: bottom',
    'align-text-top': 'vertical-align: text-top',
    'align-text-bottom': 'vertical-align: text-bottom',
    'align-sub': 'vertical-align: sub',
    'align-super': 'vertical-align: super',

    // Whitespace
    'whitespace-normal': 'white-space: normal',
    'whitespace-nowrap': 'white-space: nowrap',
    'whitespace-pre': 'white-space: pre',
    'whitespace-pre-line': 'white-space: pre-line',
    'whitespace-pre-wrap': 'white-space: pre-wrap',
    'whitespace-break-spaces': 'white-space: break-spaces',

    // Word Break
    'break-normal': 'overflow-wrap: normal; word-break: normal',
    'break-words': 'overflow-wrap: break-word',
    'break-all': 'word-break: break-all',
    'break-keep': 'word-break: keep-all',

    // Hyphens
    'hyphens-none': 'hyphens: none',
    'hyphens-manual': 'hyphens: manual',
    'hyphens-auto': 'hyphens: auto',

    // Content (for pseudo-elements)
    'content-none': 'content: none',
    'content-empty': 'content: ""',

    // Font Family
    'font-sans': 'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    'font-serif': 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    'font-mono': 'font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',

    // Font Size
    'text-xs': 'font-size: 0.75rem; line-height: 1rem',
    'text-sm': 'font-size: 0.875rem; line-height: 1.25rem',
    'text-base': 'font-size: 1rem; line-height: 1.5rem',
    'text-lg': 'font-size: 1.125rem; line-height: 1.75rem',
    'text-xl': 'font-size: 1.25rem; line-height: 1.75rem',
    'text-2xl': 'font-size: 1.5rem; line-height: 2rem',
    'text-3xl': 'font-size: 1.875rem; line-height: 2.25rem',
    'text-4xl': 'font-size: 2.25rem; line-height: 2.5rem',
    'text-5xl': 'font-size: 3rem; line-height: 1',
    'text-6xl': 'font-size: 3.75rem; line-height: 1',
    'text-7xl': 'font-size: 4.5rem; line-height: 1',
    'text-8xl': 'font-size: 6rem; line-height: 1',
    'text-9xl': 'font-size: 8rem; line-height: 1',

    // Font Style
    'italic': 'font-style: italic',
    'not-italic': 'font-style: normal',

    // Font Weight
    'font-thin': 'font-weight: 100',
    'font-extralight': 'font-weight: 200',
    'font-light': 'font-weight: 300',
    'font-normal': 'font-weight: 400',
    'font-medium': 'font-weight: 500',
    'font-semibold': 'font-weight: 600',
    'font-bold': 'font-weight: 700',
    'font-extrabold': 'font-weight: 800',
    'font-black': 'font-weight: 900',

    // Font Variant Numeric
    'normal-nums': 'font-variant-numeric: normal',
    'ordinal': 'font-variant-numeric: ordinal',
    'slashed-zero': 'font-variant-numeric: slashed-zero',
    'lining-nums': 'font-variant-numeric: lining-nums',
    'oldstyle-nums': 'font-variant-numeric: oldstyle-nums',
    'proportional-nums': 'font-variant-numeric: proportional-nums',
    'tabular-nums': 'font-variant-numeric: tabular-nums',
    'diagonal-fractions': 'font-variant-numeric: diagonal-fractions',
    'stacked-fractions': 'font-variant-numeric: stacked-fractions',

    // Text Decoration
    'underline': 'text-decoration-line: underline',
    'overline': 'text-decoration-line: overline',
    'line-through': 'text-decoration-line: line-through',
    'no-underline': 'text-decoration-line: none',

    // Text Decoration Style
    'decoration-solid': 'text-decoration-style: solid',
    'decoration-double': 'text-decoration-style: double',
    'decoration-dotted': 'text-decoration-style: dotted',
    'decoration-dashed': 'text-decoration-style: dashed',
    'decoration-wavy': 'text-decoration-style: wavy',

    // Text Decoration Thickness
    'decoration-auto': 'text-decoration-thickness: auto',
    'decoration-from-font': 'text-decoration-thickness: from-font',
    'decoration-0': 'text-decoration-thickness: 0px',
    'decoration-1': 'text-decoration-thickness: 1px',
    'decoration-2': 'text-decoration-thickness: 2px',
    'decoration-4': 'text-decoration-thickness: 4px',
    'decoration-8': 'text-decoration-thickness: 8px',

    // Text Underline Offset
    'underline-offset-auto': 'text-underline-offset: auto',
    'underline-offset-0': 'text-underline-offset: 0px',
    'underline-offset-1': 'text-underline-offset: 1px',
    'underline-offset-2': 'text-underline-offset: 2px',
    'underline-offset-4': 'text-underline-offset: 4px',
    'underline-offset-8': 'text-underline-offset: 8px',

    // Text Transform
    'uppercase': 'text-transform: uppercase',
    'lowercase': 'text-transform: lowercase',
    'capitalize': 'text-transform: capitalize',
    'normal-case': 'text-transform: none',

    // Text Overflow
    'truncate': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap',
    'text-ellipsis': 'text-overflow: ellipsis',
    'text-clip': 'text-overflow: clip',

    // Text Wrap & Balancing
    'text-wrap': 'text-wrap: wrap',
    'text-nowrap': 'text-wrap: nowrap',
    'text-balance': 'text-wrap: balance',
    'text-pretty': 'text-wrap: pretty',

    // Text Indent
    'indent-0': 'text-indent: 0px',
    'indent-px': 'text-indent: 1px',
    'indent-0.5': 'text-indent: 0.125rem',
    'indent-1': 'text-indent: 0.25rem',
    'indent-1.5': 'text-indent: 0.375rem',
    'indent-2': 'text-indent: 0.5rem',
    'indent-2.5': 'text-indent: 0.625rem',
    'indent-3': 'text-indent: 0.75rem',
    'indent-3.5': 'text-indent: 0.875rem',
    'indent-4': 'text-indent: 1rem',
    'indent-5': 'text-indent: 1.25rem',
    'indent-6': 'text-indent: 1.5rem',
    'indent-7': 'text-indent: 1.75rem',
    'indent-8': 'text-indent: 2rem',
    'indent-9': 'text-indent: 2.25rem',
    'indent-10': 'text-indent: 2.5rem',
    'indent-11': 'text-indent: 2.75rem',
    'indent-12': 'text-indent: 3rem',
    'indent-14': 'text-indent: 3.5rem',
    'indent-16': 'text-indent: 4rem',
    'indent-20': 'text-indent: 5rem',
    'indent-24': 'text-indent: 6rem',
    'indent-28': 'text-indent: 7rem',
    'indent-32': 'text-indent: 8rem',
    'indent-36': 'text-indent: 9rem',
    'indent-40': 'text-indent: 10rem',
    'indent-44': 'text-indent: 11rem',
    'indent-48': 'text-indent: 12rem',
    'indent-52': 'text-indent: 13rem',
    'indent-56': 'text-indent: 14rem',
    'indent-60': 'text-indent: 15rem',
    'indent-64': 'text-indent: 16rem',
    'indent-72': 'text-indent: 18rem',
    'indent-80': 'text-indent: 20rem',
    'indent-96': 'text-indent: 24rem',

    // Pointer events
    'pointer-events-none': 'pointer-events: none',
    'pointer-events-auto': 'pointer-events: auto',

    // Cursor
    'cursor-auto': 'cursor: auto',
    'cursor-default': 'cursor: default',
    'cursor-pointer': 'cursor: pointer',
    'cursor-wait': 'cursor: wait',
    'cursor-text': 'cursor: text',
    'cursor-move': 'cursor: move',
    'cursor-not-allowed': 'cursor: not-allowed',

    // Select
    'select-none': 'user-select: none',
    'select-text': 'user-select: text',
    'select-all': 'user-select: all',
    'select-auto': 'user-select: auto',

    // Background Attachment
    'bg-fixed': 'background-attachment: fixed',
    'bg-local': 'background-attachment: local',
    'bg-scroll': 'background-attachment: scroll',

    // Background Clip
    'bg-clip-border': 'background-clip: border-box',
    'bg-clip-padding': 'background-clip: padding-box',
    'bg-clip-content': 'background-clip: content-box',
    'bg-clip-text': 'background-clip: text',

    // Background Color (extended)
    'bg-inherit': 'background-color: inherit',
    'bg-current': 'background-color: currentColor',
    'bg-transparent': 'background-color: transparent',

    // Background Origin
    'bg-origin-border': 'background-origin: border-box',
    'bg-origin-padding': 'background-origin: padding-box',
    'bg-origin-content':  'background-origin: content-box',

    // Background Position
    'bg-bottom': 'background-position: bottom',
    'bg-center': 'background-position: center',
    'bg-left': 'background-position: left',
    'bg-left-bottom': 'background-position: left bottom',
    'bg-left-top': 'background-position: left top',
    'bg-right': 'background-position: right',
    'bg-right-bottom': 'background-position: right bottom',
    'bg-right-top': 'background-position: right top',
    'bg-top': 'background-position: top',

    // Background Repeat
    'bg-repeat': 'background-repeat: repeat',
    'bg-no-repeat': 'background-repeat: no-repeat',
    'bg-repeat-x': 'background-repeat: repeat-x',
    'bg-repeat-y': 'background-repeat: repeat-y',
    'bg-repeat-round': 'background-repeat: round',
    'bg-repeat-space': 'background-repeat: space',

    // Background Size
    'bg-auto': 'background-size: auto',
    'bg-cover': 'background-size: cover',
    'bg-contain': 'background-size: contain',

    // Text colors (using duplicates as requested)
    'text-inherit': 'color: inherit',
    'text-current': 'color: currentColor',
    'text-transparent': 'color: transparent',

    // Border utilities
    'border': 'border-width: 1px; border-style: solid; border-color: #d1d5db',
    'border-b': 'border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #d1d5db',
    'border-blue-500': 'border-color: #3b82f6',

    // Border Style
    'border-solid': 'border-style: solid',
    'border-dashed': 'border-style: dashed',
    'border-dotted': 'border-style: dotted',
    'border-double': 'border-style: double',
    'border-groove': 'border-style: groove',
    'border-ridge': 'border-style: ridge',
    'border-inset': 'border-style: inset',
    'border-outset': 'border-style: outset',
    'border-hidden': 'border-style: hidden',
    'border-none': 'border-style: none',
    // Top/Bottom/Left/Right border styles
    'border-t-solid': 'border-top-style: solid',
    'border-t-dashed': 'border-top-style: dashed',
    'border-t-dotted': 'border-top-style: dotted',
    'border-t-double': 'border-top-style: double',
    'border-r-solid': 'border-right-style: solid',
    'border-r-dashed': 'border-right-style: dashed',
    'border-r-dotted': 'border-right-style: dotted',
    'border-r-double': 'border-right-style: double',
    'border-b-solid': 'border-bottom-style: solid',
    'border-b-dashed': 'border-bottom-style: dashed',
    'border-b-dotted': 'border-bottom-style: dotted',
    'border-b-double': 'border-bottom-style: double',
    'border-l-solid': 'border-left-style: solid',
    'border-l-dashed': 'border-left-style: dashed',
    'border-l-dotted': 'border-left-style: dotted',
    'border-l-double': 'border-left-style: double',
    // X/Y axis border styles
    'border-x-solid': 'border-left-style: solid; border-right-style: solid',
    'border-x-dashed': 'border-left-style: dashed; border-right-style: dashed',
    'border-x-dotted': 'border-left-style: dotted; border-right-style: dotted',
    'border-x-double': 'border-left-style: double; border-right-style: double',
    'border-y-solid': 'border-top-style: solid; border-bottom-style: solid',
    'border-y-dashed': 'border-top-style: dashed; border-bottom-style: dashed',
    'border-y-dotted': 'border-top-style: dotted; border-bottom-style: dotted',
    'border-y-double': 'border-top-style: double; border-bottom-style: double',


    // Ring utilities
    'ring-2': 'box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5)',
    'ring-4': 'box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5)',
    'ring-indigo-200': 'box-shadow: 0 0 0 3px rgba(199, 210, 254, 0.5)',

    // CSS Grid values
    'grid-cols-1': 'grid-template-columns: repeat(1, minmax(0, 1fr))',
    'grid-cols-2': 'grid-template-columns: repeat(2, minmax(0, 1fr))',
    'grid-cols-3': 'grid-template-columns: repeat(3, minmax(0, 1fr))',
    'grid-cols-4': 'grid-template-columns: repeat(4, minmax(0, 1fr))',
    'grid-cols-6': 'grid-template-columns: repeat(6, minmax(0, 1fr))',
    'grid-cols-12': 'grid-template-columns: repeat(12, minmax(0, 1fr))',
    'grid-rows-1': 'grid-template-rows: repeat(1, minmax(0, 1fr))',
    'grid-rows-2': 'grid-template-rows: repeat(2, minmax(0, 1fr))',
    'grid-rows-3': 'grid-template-rows: repeat(3, minmax(0, 1fr))',
    'col-span-1': 'grid-column: span 1 / span 1',
    'col-span-2': 'grid-column: span 2 / span 2',
    'col-span-3': 'grid-column: span 3 / span 3',
    'col-span-4': 'grid-column: span 4 / span 4',
    'col-span-6': 'grid-column: span 6 / span 6',
    'col-span-full': 'grid-column: 1 / -1',
    'row-span-1': 'grid-row: span 1 / span 1',
    'row-span-2': 'grid-row: span 2 / span 2',
    'row-span-3': 'grid-row: span 3 / span 3',
    'row-span-full': 'grid-row: 1 / -1',

    // Grid positioning
    'col-start-1': 'grid-column-start: 1',
    'col-start-2': 'grid-column-start: 2',
    'col-start-3': 'grid-column-start: 3',
    'col-start-4': 'grid-column-start: 4',
    'col-start-5': 'grid-column-start: 5',
    'col-start-6': 'grid-column-start: 6',
    'col-end-1': 'grid-column-end: 1',
    'col-end-2': 'grid-column-end: 2',
    'col-end-3': 'grid-column-end: 3',
    'col-end-4': 'grid-column-end: 4',
    'col-end-5': 'grid-column-end: 5',
    'col-end-6': 'grid-column-end: 6',
    'row-start-1': 'grid-row-start: 1',
    'row-start-2': 'grid-row-start: 2',
    'row-start-3': 'grid-row-start: 3',
    'row-start-4': 'grid-row-start: 4',
    'row-end-1': 'grid-row-end: 1',
    'row-end-2': 'grid-row-end: 2',
    'row-end-3': 'grid-row-end: 3',
    'row-end-4': 'grid-row-end: 4',

    // Animations
    'animate-none': 'animation: none',
    'animate-spin': 'animation: spin 1s linear infinite',
    'animate-ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    'animate-pulse': 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'animate-bounce': 'animation: bounce 1s infinite',

    // Transitions
    'transition': 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    'transition-none': 'transition-property: none',
    'transition-all': 'transition-property: all',
    'transition-colors': 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke',
    'transition-opacity': 'transition-property: opacity',
    'transition-shadow': 'transition-property: box-shadow',
    'transition-transform': 'transition-property: transform',

    // Duration
    'duration-75': 'transition-duration: 75ms',
    'duration-100': 'transition-duration: 100ms',
    'duration-150': 'transition-duration: 150ms',
    'duration-200': 'transition-duration: 200ms',
    'duration-300': 'transition-duration: 300ms',
    'duration-500': 'transition-duration: 500ms',
    'duration-700': 'transition-duration: 700ms',
    'duration-1000': 'transition-duration: 1000ms',

    // Easing
    'ease-linear': 'transition-timing-function: linear',
    'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',

    // Line Height
    'leading-3': 'line-height: 0.75rem',
    'leading-4': 'line-height: 1rem',
    'leading-5': 'line-height: 1.25rem',
    'leading-6': 'line-height: 1.5rem',
    'leading-7': 'line-height: 1.75rem',
    'leading-8': 'line-height: 2rem',
    'leading-9': 'line-height: 2.25rem',
    'leading-10': 'line-height: 2.5rem',
    'leading-none': 'line-height: 1',
    'leading-tight': 'line-height: 1.25',
    'leading-snug': 'line-height: 1.375',
    'leading-normal': 'line-height: 1.5',
    'leading-relaxed': 'line-height: 1.625',
    'leading-loose': 'line-height: 2',

    // List Style Image
    'list-image-none': 'list-style-image: none',

    // List Style Position
    'list-inside': 'list-style-position: inside',
    'list-outside': 'list-style-position: outside',

    // List Style Type
    'list-none': 'list-style-type: none',
    'list-disc': 'list-style-type: disc',
    'list-decimal': 'list-style-type: decimal',

    // Spacing utilities
    'space-y-1': 'margin-top: 0.25rem',
    'space-y-2': 'margin-top: 0.5rem',
    'space-y-4': 'margin-top: 1rem',
    'space-y-6': 'margin-top: 1.5rem',


    // Appearance
    'appearance-none': 'appearance: none',
    'appearance-auto': 'appearance: auto',

    // Columns
    'columns-1': 'columns: 1',
    'columns-2': 'columns: 2',
    'columns-3': 'columns: 3',
    'columns-4': 'columns: 4',
    'columns-5': 'columns: 5',
    'columns-6': 'columns: 6',
    'columns-7': 'columns: 7',
    'columns-8': 'columns: 8',
    'columns-9': 'columns: 9',
    'columns-10': 'columns: 10',
    'columns-11': 'columns: 11',
    'columns-12': 'columns: 12',
    'columns-auto': 'columns: auto',
    'columns-3xs': 'columns: 16rem',
    'columns-2xs': 'columns: 18rem',
    'columns-xs': 'columns: 20rem',
    'columns-sm': 'columns: 24rem',
    'columns-md': 'columns: 28rem',
    'columns-lg': 'columns: 32rem',
    'columns-xl': 'columns: 36rem',
    'columns-2xl': 'columns: 42rem',
    'columns-3xl': 'columns: 48rem',
    'columns-4xl': 'columns: 56rem',
    'columns-5xl': 'columns: 64rem',
    'columns-6xl': 'columns: 72rem',
    'columns-7xl': 'columns: 80rem',

    // Break Before
    'break-before-auto': 'break-before: auto',
    'break-before-avoid': 'break-before: avoid',
    'break-before-all': 'break-before: all',
    'break-before-avoid-page': 'break-before: avoid-page',
    'break-before-page': 'break-before: page',
    'break-before-left': 'break-before: left',
    'break-before-right': 'break-before: right',
    'break-before-column': 'break-before: column',

    // Break Inside
    'break-inside-auto': 'break-inside: auto',
    'break-inside-avoid': 'break-inside: avoid',
    'break-inside-avoid-page': 'break-inside: avoid-page',
    'break-inside-avoid-column': 'break-inside: avoid-column',

    // Break After
    'break-after-auto': 'break-after: auto',
    'break-after-avoid': 'break-after: avoid',
    'break-after-all': 'break-after: all',
    'break-after-avoid-page': 'break-after: avoid-page',
    'break-after-page': 'break-after: page',
    'break-after-left': 'break-after: left',
    'break-after-right': 'break-after: right',
    'break-after-column': 'break-after: column',

    // Box Decoration Break
    'box-decoration-clone': 'box-decoration-break: clone',
    'box-decoration-slice': 'box-decoration-break: slice',

    // Box Sizing (duplicate)
    'box-border': 'box-sizing: border-box',
    'box-content': 'box-sizing: content-box',

    // Width
    'w-0': 'width: 0px',
    'w-px': 'width: 1px',
    'w-0.5': 'width: 0.125rem',
    'w-1': 'width: 0.25rem',
    'w-1.5': 'width: 0.375rem',
    'w-2': 'width: 0.5rem',
    'w-2.5': 'width: 0.625rem',
    'w-3': 'width: 0.75rem',
    'w-3.5': 'width: 0.875rem',
    'w-4': 'width: 1rem',
    'w-5': 'width: 1.25rem',
    'w-6': 'width: 1.5rem',
    'w-7': 'width: 1.75rem',
    'w-8': 'width: 2rem',
    'w-9': 'width: 2.25rem',
    'w-10': 'width: 2.5rem',
    'w-11': 'width: 2.75rem',
    'w-12': 'width: 3rem',
    'w-14': 'width: 3.5rem',
    'w-16': 'width: 4rem',
    'w-20': 'width: 5rem',
    'w-24': 'width: 6rem',
    'w-28': 'width: 7rem',
    'w-32': 'width: 8rem',
    'w-36': 'width: 9rem',
    'w-40': 'width: 10rem',
    'w-44': 'width: 11rem',
    'w-48': 'width: 12rem',
    'w-52': 'width: 13rem',
    'w-56': 'width: 14rem',
    'w-60': 'width: 15rem',
    'w-64': 'width: 16rem',
    'w-72': 'width: 18rem',
    'w-80': 'width: 20rem',
    'w-96': 'width: 24rem',
    'w-auto': 'width: auto',
    'w-1/2': 'width: 50%',
    'w-1/3': 'width: 33.333333%',
    'w-2/3': 'width: 66.666667%',
    'w-1/4': 'width: 25%',
    'w-2/4': 'width: 50%',
    'w-3/4': 'width: 75%',
    'w-1/5': 'width: 20%',
    'w-2/5': 'width: 40%',
    'w-3/5': 'width: 60%',
    'w-4/5': 'width: 80%',
    'w-1/6': 'width: 16.666667%',
    'w-2/6': 'width: 33.333333%',
    'w-3/6': 'width: 50%',
    'w-4/6': 'width: 66.666667%',
    'w-5/6': 'width: 83.333333%',
    'w-1/12': 'width: 8.333333%',
    'w-2/12': 'width: 16.666667%',
    'w-3/12': 'width: 25%',
    'w-4/12': 'width: 33.333333%',
    'w-5/12': 'width: 41.666667%',
    'w-6/12': 'width: 50%',
    'w-7/12': 'width: 58.333333%',
    'w-8/12': 'width: 66.666667%',
    'w-9/12': 'width: 75%',
    'w-10/12': 'width: 83.333333%',
    'w-11/12': 'width: 91.666667%',
    'w-full': 'width: 100%',
    'w-screen': 'width: 100vw',
    'w-svw': 'width: 100svw',
    'w-lvw': 'width: 100lvw',
    'w-dvw': 'width: 100dvw',
    'w-min': 'width: min-content',
    'w-max': 'width: max-content',
    'w-fit': 'width: fit-content',

    // Min-Width
    'min-w-0': 'min-width: 0px',
    'min-w-1': 'min-width: 0.25rem',
    'min-w-2': 'min-width: 0.5rem',
    'min-w-3': 'min-width: 0.75rem',
    'min-w-4': 'min-width: 1rem',
    'min-w-5': 'min-width: 1.25rem',
    'min-w-6': 'min-width: 1.5rem',
    'min-w-7': 'min-width: 1.75rem',
    'min-w-8': 'min-width: 2rem',
    'min-w-9': 'min-width: 2.25rem',
    'min-w-10': 'min-width: 2.5rem',
    'min-w-11': 'min-width: 2.75rem',
    'min-w-12': 'min-width: 3rem',
    'min-w-14': 'min-width: 3.5rem',
    'min-w-16': 'min-width: 4rem',
    'min-w-20': 'min-width: 5rem',
    'min-w-24': 'min-width: 6rem',
    'min-w-28': 'min-width: 7rem',
    'min-w-32': 'min-width: 8rem',
    'min-w-36': 'min-width: 9rem',
    'min-w-40': 'min-width: 10rem',
    'min-w-44': 'min-width: 11rem',
    'min-w-48': 'min-width: 12rem',
    'min-w-52': 'min-width: 13rem',
    'min-w-56': 'min-width: 14rem',
    'min-w-60': 'min-width: 15rem',
    'min-w-64': 'min-width: 16rem',
    'min-w-72': 'min-width: 18rem',
    'min-w-80': 'min-width: 20rem',
    'min-w-96': 'min-width: 24rem',
    'min-w-px': 'min-width: 1px',
    'min-w-0.5': 'min-width: 0.125rem',
    'min-w-1.5': 'min-width: 0.375rem',
    'min-w-2.5': 'min-width: 0.625rem',
    'min-w-3.5': 'min-width: 0.875rem',
    'min-w-full': 'min-width: 100%',
    'min-w-min': 'min-width: min-content',
    'min-w-max': 'min-width: max-content',
    'min-w-fit': 'min-width: fit-content',

    // Max-Width
    'max-w-0': 'max-width: 0rem',
    'max-w-none': 'max-width: none',
    'max-w-xs': 'max-width: 20rem',
    'max-w-sm': 'max-width: 24rem',
    'max-w-md': 'max-width: 28rem',
    'max-w-lg': 'max-width: 32rem',
    'max-w-xl': 'max-width: 36rem',
    'max-w-2xl': 'max-width: 42rem',
    'max-w-3xl': 'max-width: 48rem',
    'max-w-4xl': 'max-width: 56rem',
    'max-w-5xl': 'max-width: 64rem',
    'max-w-6xl': 'max-width: 72rem',
    'max-w-7xl': 'max-width: 80rem',
    'max-w-full': 'max-width: 100%',
    'max-w-min': 'max-width: min-content',
    'max-w-max': 'max-width: max-content',
    'max-w-fit': 'max-width: fit-content',
    'max-w-prose': 'max-width: 65ch',
    'max-w-screen-sm': 'max-width: 640px',
    'max-w-screen-md': 'max-width: 768px',
    'max-w-screen-lg': 'max-width: 1024px',
    'max-w-screen-xl': 'max-width: 1280px',
    'max-w-screen-2xl': 'max-width: 1536px',

    // Height
    'h-0': 'height: 0px',
    'h-px': 'height: 1px',
    'h-0.5': 'height: 0.125rem',
    'h-1': 'height: 0.25rem',
    'h-1.5': 'height: 0.375rem',
    'h-2': 'height: 0.5rem',
    'h-2.5': 'height: 0.625rem',
    'h-3': 'height: 0.75rem',
    'h-3.5': 'height: 0.875rem',
    'h-4': 'height: 1rem',
    'h-5': 'height: 1.25rem',
    'h-6': 'height: 1.5rem',
    'h-7': 'height: 1.75rem',
    'h-8': 'height: 2rem',
    'h-9': 'height: 2.25rem',
    'h-10': 'height: 2.5rem',
    'h-11': 'height: 2.75rem',
    'h-12': 'height: 3rem',
    'h-14': 'height: 3.5rem',
    'h-16': 'height: 4rem',
    'h-20': 'height: 5rem',
    'h-24': 'height: 6rem',
    'h-28': 'height: 7rem',
    'h-32': 'height: 8rem',
    'h-36': 'height: 9rem',
    'h-40': 'height: 10rem',
    'h-44': 'height: 11rem',
    'h-48': 'height: 12rem',
    'h-52': 'height: 13rem',
    'h-56': 'height: 14rem',
    'h-60': 'height: 15rem',
    'h-64': 'height: 16rem',
    'h-72': 'height: 18rem',
    'h-80': 'height: 20rem',
    'h-96': 'height: 24rem',
    'h-auto': 'height: auto',
    'h-1/2': 'height: 50%',
    'h-1/3': 'height: 33.333333%',
    'h-2/3': 'height: 66.666667%',
    'h-1/4': 'height: 25%',
    'h-2/4': 'height: 50%',
    'h-3/4': 'height: 75%',
    'h-1/5': 'height: 20%',
    'h-2/5': 'height: 40%',
    'h-3/5': 'height: 60%',
    'h-4/5': 'height: 80%',
    'h-1/6': 'height: 16.666667%',
    'h-2/6': 'height: 33.333333%',
    'h-3/6': 'height: 50%',
    'h-4/6': 'height: 66.666667%',
    'h-5/6': 'height: 83.333333%',
    'h-full': 'height: 100%',
    'h-screen': 'height: 100vh',
    'h-svh': 'height: 100svh',
    'h-lvh': 'height: 100lvh',
    'h-dvh': 'height: 100dvh',
    'h-min': 'height: min-content',
    'h-max': 'height: max-content',
    'h-fit': 'height: fit-content',

    // Min-Height
    'min-h-0': 'min-height: 0px',
    'min-h-1': 'min-height: 0.25rem',
    'min-h-2': 'min-height: 0.5rem',
    'min-h-3': 'min-height: 0.75rem',
    'min-h-4': 'min-height: 1rem',
    'min-h-5': 'min-height: 1.25rem',
    'min-h-6': 'min-height: 1.5rem',
    'min-h-7': 'min-height: 1.75rem',
    'min-h-8': 'min-height: 2rem',
    'min-h-9': 'min-height: 2.25rem',
    'min-h-10': 'min-height: 2.5rem',
    'min-h-11': 'min-height: 2.75rem',
    'min-h-12': 'min-height: 3rem',
    'min-h-14': 'min-height: 3.5rem',
    'min-h-16': 'min-height: 4rem',
    'min-h-20': 'min-height: 5rem',
    'min-h-24': 'min-height: 6rem',
    'min-h-28': 'min-height: 7rem',
    'min-h-32': 'min-height: 8rem',
    'min-h-36': 'min-height: 9rem',
    'min-h-40': 'min-height: 10rem',
    'min-h-44': 'min-height: 11rem',
    'min-h-48': 'min-height: 12rem',
    'min-h-52': 'min-height: 13rem',
    'min-h-56': 'min-height: 14rem',
    'min-h-60': 'min-height: 15rem',
    'min-h-64': 'min-height: 16rem',
    'min-h-72': 'min-height: 18rem',
    'min-h-80': 'min-height: 20rem',
    'min-h-96': 'min-height: 24rem',
    'min-h-px': 'min-height: 1px',
    'min-h-0.5': 'min-height: 0.125rem',
    'min-h-1.5': 'min-height: 0.375rem',
    'min-h-2.5': 'min-height: 0.625rem',
    'min-h-3.5': 'min-height: 0.875rem',
    'min-h-full': 'min-height: 100%',
    'min-h-screen': 'min-height: 100vh',
    'min-h-svh': 'min-height: 100svh',
    'min-h-lvh': 'min-height: 100lvh',
    'min-h-dvh': 'min-height: 100dvh',
    'min-h-min': 'min-height: min-content',
    'min-h-max': 'min-height: max-content',
    'min-h-fit': 'min-height: fit-content',

    // Max-Height
    'max-h-0': 'max-height: 0px',
    'max-h-px': 'max-height: 1px',
    'max-h-0.5': 'max-height: 0.125rem',
    'max-h-1': 'max-height: 0.25rem',
    'max-h-1.5': 'max-height: 0.375rem',
    'max-h-2': 'max-height: 0.5rem',
    'max-h-2.5': 'max-height: 0.625rem',
    'max-h-3': 'max-height: 0.75rem',
    'max-h-3.5': 'max-height: 0.875rem',
    'max-h-4': 'max-height: 1rem',
    'max-h-5': 'max-height: 1.25rem',
    'max-h-6': 'max-height: 1.5rem',
    'max-h-7': 'max-height: 1.75rem',
    'max-h-8': 'max-height: 2rem',
    'max-h-9': 'max-height: 2.25rem',
    'max-h-10': 'max-height: 2.5rem',
    'max-h-11': 'max-height: 2.75rem',
    'max-h-12': 'max-height: 3rem',
    'max-h-14': 'max-height: 3.5rem',
    'max-h-16': 'max-height: 4rem',
    'max-h-20': 'max-height: 5rem',
    'max-h-24': 'max-height: 6rem',
    'max-h-28': 'max-height: 7rem',
    'max-h-32': 'max-height: 8rem',
    'max-h-36': 'max-height: 9rem',
    'max-h-40': 'max-height: 10rem',
    'max-h-44': 'max-height: 11rem',
    'max-h-48': 'max-height: 12rem',
    'max-h-52': 'max-height: 13rem',
    'max-h-56': 'max-height: 14rem',
    'max-h-60': 'max-height: 15rem',
    'max-h-64': 'max-height: 16rem',
    'max-h-72': 'max-height: 18rem',
    'max-h-80': 'max-height: 20rem',
    'max-h-96': 'max-height: 24rem',
    'max-h-none': 'max-height: none',
    'max-h-full': 'max-height: 100%',
    'max-h-screen': 'max-height: 100vh',
    'max-h-svh': 'max-height: 100svh',
    'max-h-lvh': 'max-height: 100lvh',
    'max-h-dvh': 'max-height: 100dvh',
    'max-h-min': 'max-height: min-content',
    'max-h-max': 'max-height: max-content',
    'max-h-fit': 'max-height: fit-content',

    // Shadow
    'shadow-sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)',

    // Interactivity
    'resize-none': 'resize: none',
    'resize-y': 'resize: vertical',
    'resize-x': 'resize: horizontal',
    'resize': 'resize: both',

    // Scroll Behavior
    'scroll-auto': 'scroll-behavior: auto',
    'scroll-smooth': 'scroll-behavior: smooth',

    // Scroll Snap Align
    'snap-start': 'scroll-snap-align: start',
    'snap-end': 'scroll-snap-align: end',
    'snap-center': 'scroll-snap-align: center',
    'snap-align-none': 'scroll-snap-align: none',

    // Scroll Snap Stop
    'snap-normal': 'scroll-snap-stop: normal',
    'snap-always': 'scroll-snap-stop: always',

    // Scroll Snap Type
    'snap-none': 'scroll-snap-type: none',
    'snap-x': 'scroll-snap-type: x var(--tw-scroll-snap-strictness)',
    'snap-y': 'scroll-snap-type: y var(--tw-scroll-snap-strictness)',
    'snap-both': 'scroll-snap-type: both var(--tw-scroll-snap-strictness)',
    'snap-mandatory': '--tw-scroll-snap-strictness: mandatory',
    'snap-proximity': '--tw-scroll-snap-strictness: proximity',

    // Touch Action
    'touch-auto': 'touch-action: auto',
    'touch-none': 'touch-action: none',
    'touch-pan-x': 'touch-action: pan-x',
    'touch-pan-left': 'touch-action: pan-left',
    'touch-pan-right': 'touch-action: pan-right',
    'touch-pan-y': 'touch-action: pan-y',
    'touch-pan-up': 'touch-action: pan-up',
    'touch-pan-down': 'touch-action: pan-down',
    'touch-pinch-zoom': 'touch-action: pinch-zoom',
    'touch-manipulation': 'touch-action: manipulation',

    // Will Change
    'will-change-auto': 'will-change: auto',
    'will-change-scroll': 'will-change: scroll-position',
    'will-change-contents': 'will-change: contents',
    'will-change-transform': 'will-change: transform',

    // Screen Readers
    'sr-only': 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0',
    'not-sr-only': 'position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal',

    // Forced Color Adjust
    'forced-color-adjust-auto': 'forced-color-adjust: auto',
    'forced-color-adjust-none': 'forced-color-adjust: none',
  };

  //  Generate color keywords for all prefixes
  Object.assign(keywords, createColorKeywordMap('bg', 'background-color'));
  Object.assign(keywords, createColorKeywordMap('text', 'color'));
  Object.assign(keywords, createColorKeywordMap('border', 'border-color'));
  Object.assign(keywords, createColorKeywordMap('accent', 'accent-color'));
  Object.assign(keywords, createColorKeywordMap('fill', 'fill'));
  Object.assign(keywords, createColorKeywordMap('stroke', 'stroke'));
  Object.assign(keywords, createColorKeywordMap('caret', 'caret-color'));
  Object.assign(keywords, createColorKeywordMap('decoration', 'text-decoration-color'));
  Object.assign(keywords, createColorKeywordMap('outline', 'outline-color'));
  Object.assign(keywords, createBorderRadiusKeywordMap());

  // Gradient keywords
  Object.assign(keywords, {
    'bg-gradient': 'background-image: linear-gradient(to right, var(--tw-gradient-stops))',
    'bg-gradient-to-t': 'background-image: linear-gradient(to top, var(--tw-gradient-stops))',
    'bg-gradient-to-tr': 'background-image: linear-gradient(to top right, var(--tw-gradient-stops))',
    'bg-gradient-to-r': 'background-image: linear-gradient(to right, var(--tw-gradient-stops))',
    'bg-gradient-to-br': 'background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))',
    'bg-gradient-to-b': 'background-image: linear-gradient(to bottom, var(--tw-gradient-stops))',
    'bg-gradient-to-bl': 'background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))',
    'bg-gradient-to-l': 'background-image: linear-gradient(to left, var(--tw-gradient-stops))',
    'bg-gradient-to-tl': 'background-image: linear-gradient(to top left, var(--tw-gradient-stops))'
  });

  // Gradient color keywords
  Object.assign(keywords, createGradientColorMap('from', '--tw-gradient-from', '--tw-gradient-stops'));
  Object.assign(keywords, createGradientColorMap('via', '--tw-gradient-via', '--tw-gradient-stops', true));
  Object.assign(keywords, createGradientColorMap('to', '--tw-gradient-to', '--tw-gradient-stops'));

  return keywords;
}

export const CONFIG = {
  breakpoints: CONSTANTS.DEFAULT_BREAKPOINTS,
  pixelMultiplier: CONSTANTS.DEFAULT_PIXEL_MULTIPLIER,
  props: createDefaultProperties(),
  keywords: createDefaultKeywords(),
  shortcuts: {}
};

/**
 * Validate configuration object
 * @param {object} config
 * @returns {object} Validation result
 */
export function validateConfig(config) {
  const errors = [];

  if (!config) {
    errors.push('Config object is required');
    return { valid: false, errors };
  }

  // Validate breakpoints
  if (config.breakpoints) {
    Object.entries(config.breakpoints).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        errors.push(`Breakpoint "${key}" must be a string`);
      }
      if (!value.includes('width') && !value.includes('height')) {
        errors.push(`Breakpoint "${key}" should contain width or height media query`);
      }
    });
  }

  // Validate pixelMultiplier
  if (config.pixelMultiplier !== undefined) {
    if (typeof config.pixelMultiplier !== 'number' || config.pixelMultiplier <= 0) {
      errors.push('pixelMultiplier must be a positive number');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export function createDefaultConfig() {
  const config = {
    breakpoints: CONSTANTS.DEFAULT_BREAKPOINTS,
    pixelMultiplier: CONSTANTS.DEFAULT_PIXEL_MULTIPLIER,
    props: createDefaultProperties(),
    keywords: createDefaultKeywords(),
    shortcuts: {}
  };

  // Validate the default configuration
  const validation = validateConfig(config);
  if (!validation.valid) {
    console.warn('PostWind: Default configuration validation errors:', validation.errors);
  }

  return config;
}
