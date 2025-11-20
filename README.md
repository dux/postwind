# DuxWind

Real-time Tailwind-like CSS generator with shortcuts, responsive utilities, and modern features.

## Features

- **🚀 Real-time CSS generation** - Styles are generated as you use classes
- **📱 Responsive utilities** - Multiple breakpoint syntaxes
- **⚡ Custom shortcuts** - Define reusable class combinations
- **🎨 Arbitrary values** - Use any CSS value with bracket notation
- **🔧 Configurable** - Customize properties, breakpoints, and keywords
- **🐛 Debug mode** - Track original classes during development
- **🌊 Pipe notation** - Compact responsive syntax
- **@ Alternative syntax** - Property-first breakpoint notation

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
    <script src="src/dux-wind.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            DuxWind.resetCss();
            DuxWind.loadDefaultConfig();
            
            // Custom breakpoints
            DuxWind.config.breakpoints = {
                's': '(max-width: 480px)',    // Small mobile
                'm': '(max-width: 768px)',    // Mobile
                't': '(max-width: 1024px)',   // Tablet
                'd': '(min-width: 1025px)'    // Desktop
            };
            
            // Custom shortcuts
            DuxWind.config.shortcuts = {
                'btn': 'px-4 py-2 rounded font-medium cursor-pointer',
                'box': 'bg-white rounded border p-4 shadow-sm'
            };
            
            DuxWind.init();
        });
    </script>
</head>
<body>
    <div class="p-4 bg-blue-500 text-white rounded">
        Hello DuxWind!
    </div>
</body>
</html>
```

## Configuration

### Basic Setup

```javascript
// Reset CSS and load default configuration
DuxWind.resetCss();
DuxWind.loadDefaultConfig();

// Initialize with options
DuxWind.init({
    debug: true,        // Enable debug mode
    clearCache: true    // Clear processed classes cache
});
```

### Custom Breakpoints

```javascript
// Redefine breakpoints
DuxWind.config.breakpoints = {
    'm': '(max-width: 768px)',    // Mobile
    'd': '(min-width: 769px)'     // Desktop
};
```

### Custom Shortcuts

```javascript
DuxWind.config.shortcuts = {
    'btn': 'px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer border',
    'btn-primary': 'btn bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
    'card': 'bg-white rounded-lg border p-6 shadow-sm',
    'container': 'max-w-1200px mx-auto px-4'
};
```

## Responsive Utilities

DuxWind supports multiple syntaxes for responsive design:

### Traditional Breakpoint Syntax
```html
<div class="m:text-16px d:text-24px">
    Small text on mobile, large on desktop
</div>
```

### @ Notation (Alternative)
```html
<div class="text-16px@m text-24px@d">
    Same as above, property-first syntax
</div>
```

### Pipe Notation (Compact)
```html
<div class="text-16|24px">
    Values for each breakpoint: mobile|desktop
</div>

<div class="p-4|8">
    Padding: 16px mobile, 32px desktop
</div>
```

## Arbitrary Values

Use any CSS value with bracket notation:

```html
<!-- Dimensions -->
<div class="w-[250px] h-[100px]">

<!-- Colors -->
<div class="bg-[#ff6b6b] text-[#ffffff]">

<!-- Complex values -->
<div class="w-[calc(100vh-4rem)]">

<!-- With breakpoints -->
<div class="w-[300px]@m w-[500px]@d">
```

## Built-in Utilities

### Spacing
```html
<!-- Padding -->
<div class="p-4 px-8 py-2">         <!-- All, horizontal, vertical -->
<div class="pt-4 pr-8 pb-2 pl-6">   <!-- Individual sides -->

<!-- Margin -->
<div class="m-4 mx-auto my-8">      <!-- Auto centering -->
<div class="-mt-4">                 <!-- Negative margins -->
```

### Layout
```html
<!-- Flexbox -->
<div class="flex justify-center items-center gap-4">
<div class="flex-col flex-wrap">

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
<div class="col-span-2 row-span-3">

<!-- Positioning -->
<div class="relative absolute fixed">
<div class="top-4 left-8 z-10">
```

### Typography
```html
<!-- Font -->
<div class="font-bold text-center">
<div class="text-lg leading-tight tracking-wide">

<!-- Colors -->
<div class="text-blue-500 text-white">
```

### Styling
```html
<!-- Background -->
<div class="bg-blue-500 bg-transparent">

<!-- Borders -->
<div class="border border-2 border-blue-500">
<div class="rounded rounded-lg">

<!-- Effects -->
<div class="shadow-sm opacity-50">
<div class="transition duration-300 ease-in-out">
```

## Shortcuts

Define reusable combinations:

```html
<!-- Define shortcuts -->
<script>
DuxWind.config.shortcuts = {
    'btn': 'px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer border',
    'btn-primary': 'btn bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
    'card': 'bg-white rounded-lg border p-6 shadow-sm'
};
</script>

<!-- Use shortcuts -->
<button class="btn-primary">Click me</button>
<div class="card">Card content</div>
```

## Animations & Transitions

```html
<!-- Animations -->
<div class="animate-spin">      <!-- Spinning -->
<div class="animate-pulse">     <!-- Pulsing -->
<div class="animate-bounce">    <!-- Bouncing -->

<!-- Transitions -->
<div class="transition duration-300 ease-in-out">
<div class="hover:bg-blue-600 active:bg-blue-700">
```

## Interactive States

```html
<!-- Hover effects -->
<button class="bg-blue-500 hover:bg-blue-600">

<!-- Focus states -->
<input class="border focus:border-blue-500 focus:ring-2">

<!-- Active states -->
<button class="active:scale-95">

<!-- Combined states -->
<button class="hover:bg-blue-600 active:bg-blue-700 focus:ring-2">

<!-- Responsive + states -->
<button class="hover:bg-blue-600@d">  <!-- Hover only on desktop -->
```

## Debug Mode

Debug mode helps track class expansions:

```javascript
// Enable debug (auto-enabled for development ports > 2000)
DuxWind.init({ debug: true });
```

```html
<!-- With debug enabled -->
<div class="btn-primary" data-dw-class="btn-primary">
    <!-- Expands to actual utility classes -->
    <!-- data-dw-class preserves original for debugging -->
</div>
```

## Configuration Options

### Properties
Add custom CSS property mappings:

```javascript
DuxWind.config.properties = {
    'fs': 'font-size',           // fs-16 -> font-size: 64px
    'bg': 'background-color',    // bg-red -> background-color: red
    'w': 'width',               // w-10 -> width: 40px
};
```

### Keywords
Define keyword classes:

```javascript
DuxWind.config.keywords = {
    'flex': 'display: flex',
    'hidden': 'display: none',
    'text-center': 'text-align: center'
};
```

### Pixel Multiplier
Customize the default pixel multiplication:

```javascript
DuxWind.config.pixelMultiplier = 4;  // p-4 = 16px (4 * 4)
```

## API Reference

### Methods

```javascript
// Core methods
DuxWind.init(options)           // Initialize with options
DuxWind.loadClass(className)    // Process a single class
DuxWind.resetCss()             // Apply modern CSS reset
DuxWind.loadDefaultConfig()    // Load default configuration
DuxWind.generateDoc()          // Generate documentation HTML

// Init options
{
    debug: boolean,      // Enable debug mode (default: auto-detect)
    clearCache: boolean  // Clear processed classes (default: true)
}
```

### Global Configuration

```javascript
DuxWind.config = {
    breakpoints: {
        'm': '(max-width: 768px)',
        'd': '(min-width: 769px)'
    },
    pixelMultiplier: 4,
    properties: { /* ... */ },
    keywords: { /* ... */ },
    shortcuts: { /* ... */ }
};
```

## Examples

### Complete Button System
```javascript
DuxWind.config.shortcuts = {
    'btn': 'px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer border',
    'btn-primary': 'btn bg-blue-500 text-white border-blue-500 hover:bg-blue-600 active:bg-blue-700',
    'btn-secondary': 'btn bg-gray-500 text-white border-gray-500 hover:bg-gray-600',
    'btn-outline': 'btn bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50',
    'btn-sm': 'px-3 py-1 text-sm',
    'btn-lg': 'px-6 py-3 text-lg'
};
```

### Responsive Layout
```html
<div class="container">
    <header class="p-4|8 bg-white border-b">
        <h1 class="text-24|36px font-bold text-center">
            DuxWind
        </h1>
    </header>
    
    <main class="p-4|8">
        <div class="grid grid-cols-1@m grid-cols-3@d gap-4|8">
            <div class="card">
                <h2 class="text-18|24px font-semibold mb-4">
                    Card Title
                </h2>
                <p class="text-gray-600 leading-relaxed">
                    Card content with responsive typography.
                </p>
                <button class="btn-primary mt-4">
                    Learn More
                </button>
            </div>
        </div>
    </main>
</div>
```

### Custom Theme
```javascript
DuxWind.config.shortcuts = {
    // Spacing
    'container': 'max-w-1200px mx-auto px-4|8',
    'section': 'py-12|20',
    
    // Typography
    'h1': 'text-32|48px font-bold leading-tight',
    'h2': 'text-24|32px font-semibold leading-tight',
    'text-muted': 'text-gray-600',
    
    // Components
    'card': 'bg-white rounded-lg border p-6 shadow-sm',
    'badge': 'px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium',
    
    // Buttons
    'btn': 'px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer border',
    'btn-primary': 'btn bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
    'btn-ghost': 'btn bg-transparent border-transparent hover:bg-gray-100'
};
```

## Browser Support

DuxWind works in all modern browsers that support:
- ES6+ JavaScript
- CSS Custom Properties
- MutationObserver API

## License

MIT License - feel free to use in personal and commercial projects.