"use strict";
import Site from './Site';

export default class SiteBuilder {
  constructor() {
    this.blocks = [];
  }

  withBlock(block) {
    this.blocks.push(block.construct());
    return this;
  }

  withBlocks(arrayOfBlocks = []) {
    this.blocks.concat(arrayOfBlocks.map(block => block.construct()));
    return this;
  }

  build() {
    return new Site(this);
  }
}
