import { SphereGeometry, Mesh, MeshPhongMaterial, } from "three";
import { getTexture, MainSceneTexture, } from "../../resource";


export function Sphere() {
  const geometry = new SphereGeometry(2, 32, 32);
  const texture = getTexture(MainSceneTexture, "earth-night")
  const material = new MeshPhongMaterial({
    map: texture,
    flatShading: false,
  });
  const sphere = new Mesh(geometry, material);

  sphere.position.x = -2;
  sphere.position.y = 0;
  sphere.position.z = 0;

  return {
    object: sphere,
    animation: function (mesh) {
      mesh.rotateY(0.01);
    },
  }
}