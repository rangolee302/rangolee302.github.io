import { PointLight, } from "three";


export function Light() {

  var light = new PointLight(0xffffff, 5, 60);
  light.position.set(0, 0, 3);
  return {
    object: light,
  }
}