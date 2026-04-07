// Game Controller Module
// Manages game initialization and main game loop

class Game {
  constructor() {
    this.renderer = null;
  }

  /**
   * Initialize the game: set up renderer and canvas.
   */
  init() {
    this.renderer = new Renderer();
    const success = this.renderer.init();
    if (!success) {
      console.error('Game: Renderer initialization failed');
      return;
    }
    console.log('Game initialized successfully');
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const game = new Game();
  game.init();
});
