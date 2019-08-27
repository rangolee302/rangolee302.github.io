import { Scene, PerspectiveCamera, WebGLRenderer, } from "three";
import { Cube, } from "./cube";
import { Sphere, } from "./sphere";
import { Light, } from "./point-light";
import { AnimateBehavior, RenderBehavior, AddChildrenToSceneBehavior, } from "../behaviors";



function getScene(children) {
  var scene = new Scene();
  if (children) {
    scene.add(children)
  }
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

function start(state) {
  const {
    renderer,
  } = state || {};
  document.body.appendChild(renderer.domElement);
}

export const MainSceneBehavior = (function (state) {
  // const {
  //   scene,
  //   camera,
  //   renderer,
  //   children,
  // } = state

  AnimateBehavior(state);
  AddChildrenToSceneBehavior(state);
  return {
    render: RenderBehavior(state),
    start: start(state),
    animation: AnimateBehavior(state),
  }
});

export const MainScene = (function(behaviorsMode) {
  const children = [Cube(), Sphere(), Light(), ];
  const state = {
    children,
    camera: getCamera(),
    renderer: getRenderer(),
    scene: getScene(children),
  }
  return behaviorsMode(state)
}(MainSceneBehavior));