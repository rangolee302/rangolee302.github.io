import { PlaneGeometry, MeshPhongMaterial, Mesh, Vector3, } from "three";
import { MainSceneTexture, getTexture, } from "../../resource";

export function Board({
  position = new Vector3(0, 0, 0),
  width = 0,
  height = 0,
  image = "",
  animation = () => {},
}) {
  const geometry = new PlaneGeometry(width, height);
  const texture = getTexture(MainSceneTexture, image)
  const material = new MeshPhongMaterial({
    map: texture,
  });
  const plane = new Mesh(geometry, material);

  plane.position.setX(position.x);
  plane.position.setY(position.y);
  plane.position.setZ(position.z);

  return {
    object: plane,
    animation,
  }
}