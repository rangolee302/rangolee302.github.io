import {
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
} from "three";

// var geometry = new BoxGeometry(1, 1, 1);
// var material = new MeshBasicMaterial({
//   color: 0x00ff00,
// });
// const mesh = new Mesh(geometry, material);

// mesh.rotation.x += 0.1;
// mesh.rotation.y += 0.1;

// export const Cube = mesh;.

export function Cube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);
  return cube;
}