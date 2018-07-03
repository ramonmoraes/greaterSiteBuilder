"use strict";
import Site from './Site';

export default class SiteBuilder {
  constructor() {
    this.blocks = [];
  }

  withBlock(block) {
    this.blocks.push(block);
    return this;
  }

  withBlocks(blocks = []) {
    this.blocks.concat(blocks);
    return this;
  }

  build() {
    return new Site(this);
  }
}
