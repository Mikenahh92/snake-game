# GRP-47 Canvas Backing Store Note

When initializing the `<canvas>` element for rendering, the backing store (bitmap buffer) **must be scaled by `devicePixelRatio` before the first draw call**.

## Why

High-DPI / Retina displays report CSS pixels that are smaller than physical device pixels. If the canvas backing store is not scaled to match `devicePixelRatio`, the rendered output will appear blurry because the browser upscales a low-resolution bitmap.

## Pattern

```js
const dpr = window.devicePixelRatio || 1;
canvas.width  = cssWidth  * dpr;
canvas.height = cssHeight * dpr;

const ctx = canvas.getContext('2d');
ctx.scale(dpr, dpr);

// Now draw using CSS-pixel coordinates — the backing store handles sharpness.
```

## When

Apply this during **canvas setup / init**, before any `fillRect`, `drawImage`, or other drawing commands are issued.
