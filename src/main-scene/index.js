import { Scene, PerspectiveCamera, WebGLRenderer, } from "three";
import { Cube, } from "./cube";

function getScene() {
  var scene = new Scene();
  return scene;
}

function getCamera() {
  var aspect = window.innerWidth / window.innerHeight;
  var camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 5;
  return camera;
}

function getRenderer() {
  var renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}

export function MainScene() {
  return {
    scene: getScene(),
    camera: getCamera(),
    renderer: getRenderer(),
    cube: Cube(),
    start: function () {
      this.scene.add(this.cube);
      document.body.appendChild(this.renderer.domElement);
    },
    render: function () {
      this.animation();
      this.renderer.render(this.scene, this.camera);
    },
    animation: function () {
      this.cube.rotateX(0.1);
      this.cube.rotateY(0.1);
    },
  }
}
