"use strict";
import Site from './Site';

export default class SiteBuilder {
  constructor() {
    this.blocks = [];
    this.mold = document.body;
  }

  withMold(mold) {
    this.mold = mold;
    return this;
  }

  withBlock(block) {
    this.blocks.push(block.buildBlock());
    return this;
  }

  withBlocks(arrayOfBlocks = []) {
    this.blocks.concat(arrayOfBlocks.map(block => block.buildBlock()));
    return this;
  }

  build() {
    return new Site(this);
  }
}
