import { AmbientLight, } from "three";

export function EnvironmentLight () {
  const color = 0x404040;
  const light = new AmbientLight(color)
  return {
    object: light,
  }
}