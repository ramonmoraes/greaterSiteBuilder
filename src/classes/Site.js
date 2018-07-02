"use strict";

class Site {
  constructor(options) {
    this.blocks = options.blocks;
    render();
  }

  render() {
    this.blocks.array.forEach(block => {
      document.body.appendChild(block);
    });
  }
}
