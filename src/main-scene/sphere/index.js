import { SphereGeometry, MeshBasicMaterial, Mesh, MeshNormalMaterial, TextureLoader, } from "three";
import { Texture, } from "../../resource";

function getTexture() {
  const loader = new TextureLoader();
  return loader.load(Texture.earth);
}

export function Sphere() {
  const geometry = new SphereGeometry(2, 16, 16);
  const texture = getTexture();
  const material = new MeshNormalMaterial({
    wireframe: true,
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