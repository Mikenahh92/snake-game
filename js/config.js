// Configuration Module
// Defines game constants including canvas dimensions and visual settings

const CONFIG = {
  // Grid settings
  GRID_SIZE: 20,    // Number of cells per row/column
  CELL_SIZE: 20,    // Pixel size of each cell

  // Derived canvas dimensions
  get CANVAS_WIDTH() {
    return this.GRID_SIZE * this.CELL_SIZE;
  },
  get CANVAS_HEIGHT() {
    return this.GRID_SIZE * this.CELL_SIZE;
  },

  // Canvas element ID
  CANVAS_ID: 'game-canvas',

  // Colors
  BACKGROUND_COLOR: '#0A0E27',

  // Game speed (ms per tick) — will be used in future stories
  GAME_SPEED: 150
};
