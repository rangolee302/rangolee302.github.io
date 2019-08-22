import { Scene, PerspectiveCamera, WebGLRenderer, } from "three";
import { Cube, } from "./cube";
import { Sphere, } from "./sphere";

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
    children: [Cube(), Sphere(), ],
    addChildren: function () {
      const length = this.children.length;
      for (let index = 0; index < length; index++) {
        const element = this.children[index];
        this.scene.add(element.mesh);
      }
    },
    start: function () {
      this.addChildren();
      document.body.appendChild(this.renderer.domElement);
    },
    render: function () {
      this.animation();
      this.renderer.render(this.scene, this.camera);
    },
    animation: function () {
      const length = this.children.length;
      for (let index = 0; index < length; index++) {
        const element = this.children[index];
        element.animation();
      }
    },
  }
}
