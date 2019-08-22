import {
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  MeshBasicMaterial,
} from "three";

export function Cube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);

  cube.position.x = 2;

  return {
    mesh: cube,
    animation: function () {
      this.mesh.rotateX(0.1);
      this.mesh.rotateY(0.1);
    },
  }
}