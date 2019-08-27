import { TextureLoader, } from "three";

function createTextureList(state) {
  const {
    list,
  } = state;
  const loader = new TextureLoader();
  const length = list.length;
  let textureList = {};
  for (let index = 0; index < length; index++) {
    const element = list[index];
    textureList[element.name] = loader.load(element.path);
  }
  return textureList;
}

export function getTexture(pack, name) {
  const {
    textureList,
  } = pack;
  const texture = textureList[name]
  if (!texture) {
    return null;
  }
  return texture;
}

function TexturePackInit(state) {
  return {
    textureList: createTextureList(state),
  }
}

const MainSceneTextureLoaderData = {
  list: [
    {
      name: "earth-night",
      path: "/asset/image/austin/earth-night.jpg",
    },
  ],
}



export const MainSceneTexture = new TexturePackInit(MainSceneTextureLoaderData);
