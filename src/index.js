import Block from "./classes/Block";
import SiteBuilder from "./classes/SiteBuilder";

class Hi extends Block {
  constructor() {
    super();
  }

  construct() {
    return "Hiiii";
  }
}

const blockHi = new Hi();
new SiteBuilder().withBlock(blockHi).build();
