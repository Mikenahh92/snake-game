// Game Configuration Constants
// Single source of truth for all game configuration values

// Grid and Board Dimensions
export const GRID_SIZE = 20; // Cell size in pixels
export const BOARD_WIDTH = 20; // Board width in grid cells
export const BOARD_HEIGHT = 20; // Board height in grid cells

// Derived dimensions (total pixels)
export const CANVAS_WIDTH = GRID_SIZE * BOARD_WIDTH; // 400px
export const CANVAS_HEIGHT = GRID_SIZE * BOARD_HEIGHT; // 400px

// Game Speed
export const INITIAL_SPEED = 100; // Milliseconds per move

// Color Palette (matching Style Guide specifications)
export const COLORS = {
  BACKGROUND: '#0A0E27',
  SNAKE: '#00FF41',
  FOOD: '#00FF41'
};
