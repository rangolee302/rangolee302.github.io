import { TextureLoader, } from "three";


const TextureList = [
  {
    name: "earth-night",
    path: "/asset/image/austin/earth-night.jpg",
  },
]

export const TexturePack = {
  init: function() {
    const loader = new TextureLoader();
    const length = TextureList.length;
    for (let index = 0; index < length; index++) {
      const element = TextureList[index];
      this[element.name] = loader.load(element.path);
    }
    this.init = null;
  },
  getTexture: function (name) {
    const texture = this[name]
    if (!texture) {
      return null;
    }
    return texture;
  },
}