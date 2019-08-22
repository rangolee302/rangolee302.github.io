import { SphereGeometry, Mesh, MeshNormalMaterial, MeshPhongMaterial, } from "three";
import { TexturePack, } from "../../resource";


export function Sphere() {
  const geometry = new SphereGeometry(2, 16, 16);
  const texture = TexturePack.getTexture("earth-night");
  const material = new MeshPhongMaterial({
    map: texture,
  });
  const sphere = new Mesh(geometry, material);

  sphere.position.x = -2;
  sphere.position.y = 0;
  sphere.position.z = 0;

  return {
    mesh: sphere,
    animation: function () {
      // this.mesh.rotateX(0.01);
      this.mesh.rotateY(0.01);
    },
  }
}