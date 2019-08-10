import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { Cube } from "./cube";

var aspectRatio = window.innerWidth / window.innerHeight;
var NearPlaneDistance = 0.1;
var FarPlanceDistance = 1000;
const cameraZOffset = 5;


var scene = new Scene();
var camera = new PerspectiveCamera(75, aspectRatio, NearPlaneDistance, FarPlanceDistance);

var renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = cameraZOffset;

function render(){
	requestAnimationFrame(render);

	scene.add(Cube);

	renderer.render(scene, camera);
}

export const MainScene = render;