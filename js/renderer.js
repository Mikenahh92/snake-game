// Canvas Renderer Module
// Manages HTML5 Canvas initialization and 2D rendering context

class Renderer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  /**
   * Initialize the canvas element and 2D rendering context.
   * Sets canvas dimensions from CONFIG constants and applies background color.
   * @returns {boolean} True if initialization succeeded, false otherwise.
   */
  init() {
    // Locate the canvas element
    this.canvas = document.getElementById(CONFIG.CANVAS_ID);
    if (!this.canvas) {
      console.error('Renderer: Canvas element not found (id="' + CONFIG.CANVAS_ID + '")');
      return false;
    }

    // Set canvas dimensions from config
    this.canvas.width = CONFIG.CANVAS_WIDTH;
    this.canvas.height = CONFIG.CANVAS_HEIGHT;

    // Acquire 2D rendering context
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Renderer: Failed to acquire 2D rendering context');
      return false;
    }

    // Apply initial background
    this.clearCanvas();

    console.log('Canvas initialized (' + this.canvas.width + 'x' + this.canvas.height + ')');
    console.log('2D context acquired successfully');
    return true;
  }

  /**
   * Clear the entire canvas and fill with the configured background color.
   */
  clearCanvas() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = CONFIG.BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
