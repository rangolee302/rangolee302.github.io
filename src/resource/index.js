import { TextureLoader, CubeTextureLoader, } from "three";

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

function createSkyBoxTexture(state) {
  const {
    list,
  } = state;
  const loader = new CubeTextureLoader();
  const length = list.length;
  let textureList = {};
  for (let index = 0; index < length; index++) {
    const element = list[index];
    textureList[element.name] = loader.load(element.path);
  }
  return textureList;
}

const MainSceneTextureLoaderData = {
  list: [
    {
      name: "earth-night",
      path: "/asset/image/object/earth-night.jpg",
    },
    {
      name: "homepage_01",
      path: "/asset/image/object/plane/homepage_01.jpg",
    },
    {
      name: "homepage_02",
      path: "/asset/image/object/plane/homepage_02.jpg",
    },
    {
      name: "homepage_04",
      path: "/asset/image/object/plane/homepage_04.jpg",
    },
    {
      name: "homepage_05",
      path: "/asset/image/object/plane/homepage_05.jpg",
    },
    {
      name: "homepage_07",
      path: "/asset/image/object/plane/homepage_07.jpg",
    },
    {
      name: "homepage_08",
      path: "/asset/image/object/plane/homepage_08.jpg",
    },
  ],
}

export const MainSceneTexture = new TexturePackInit(MainSceneTextureLoaderData);
