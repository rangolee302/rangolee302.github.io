import { CubeTextureLoader, } from "three"

export function SkyBox() {
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/asset/image/skybox/right.png",
    "/asset/image/skybox/left.png",
    "/asset/image/skybox/top.png",
    "/asset/image/skybox/bot.png",
    "/asset/image/skybox/front.png",
    "/asset/image/skybox/back.png",
  ])
  return texture;
}