import {
  BoxGeometry,
  MeshNormalMaterial,
  Mesh,
  PointLight,
  Group,
} from "three";

function Light () {
  const light = new PointLight(0xffffff, 8, 10);
  return {
    object: light,
  }
}
export function Cube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);

  cube.position.x = 2;

  return {
    object: cube,
    animation: function (mesh) {
      mesh.rotateX(0.1);
      mesh.rotateY(0.1);
    },
  }
}


// export function CubeLight() {
//   const group = new Group();
//   group.add(Cube().object);
//   group.add(Light().object);
//   return {
//     animation: function () {
//     },
//     object: group,
//   }
// }