"use strict";

export default class Site {
  constructor(options) {
    this.blocks = options.blocks;
    this.mold = options.mold;
    
    this.blockCount = 0;
    this.render();
  }

  render() {
    const { blocks, blockCount } = this;
    if (blockCount < blocks.length) {
      this.addBlock(blocks[blockCount]);
      window.requestAnimationFrame(() => this.render());
    } 
  }
  
  addBlock(block) {
    this.mold.appendChild(block);
    this.blockCount++;
  }
}
