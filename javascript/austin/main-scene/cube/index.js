import { BoxGeometry, MeshBasicMaterial, Mesh, } from "three";

var geometry = new BoxGeometry(1, 1, 1);
var material = new MeshBasicMaterial({
	color: 0x00ff00
});
const mesh = new Mesh(geometry, material);

mesh.rotation.x += 0.1;
mesh.rotation.y += 0.1;

export const Cube = mesh;