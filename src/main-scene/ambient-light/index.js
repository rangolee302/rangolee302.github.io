import { AmbientLight, } from "three";

export function EnvironmentLight () {
  const color = 0x404040;
  const light = new AmbientLight(color)

  // light.position.x = 0;
  // light.position.y = 0;
  // light.position.z = 0;

  return {
    object: light,
  }
}