"use strict";

class Block {
  constructor() {
    buildBlock();
  }

  construct() {
    throw Error("A block must be constructed");
  }

  buildBlock() {
    const material = construct();
    const materialType = typeof material;

    if (materialType === "string") {
      return buildFromString(material);
    }

    if (materialType === "object") {
      return buildFromObject(material);
    }

    throw TypeError(
      `What's ${materialType} ? Never seen this type of block before! It may break!`
    );
  }

  buildFromString(string) {
      return document.createRange().createContextualFragment(string);
  }

  buildFromObject(object) {
    if (object instanceof HTMLElement) {
        return object;
    }
    throw TypeError("I can't handle this object =\ , is unbuildable to me :angry:")
  }
}
