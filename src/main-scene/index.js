import { Scene, PerspectiveCamera, WebGLRenderer, } from "three";
import { Cube, } from "./cube";
import { Sphere, } from "./sphere";
import { Light, } from "./point-light";
import { AnimateBehavior, RenderBehavior, StartBehavior, wrapBehaviors, AddChildrenBehavior, } from "../behaviors";
import { EnvironmentLight, } from "./ambient-light";



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

export function MainSceneBehavior(state = {}) {
  const props = {
    pool: state.scene,
  }
  const behaviors = [
    AnimateBehavior,
    RenderBehavior,
    StartBehavior,
    AddChildrenBehavior,
  ];
  return wrapBehaviors(behaviors, state, props);
}

export function MainSceneContainer (behaviors) {
  const children = [Cube(), Sphere(), Light(), EnvironmentLight(), ];
  const state = {
    children,
    camera: getCamera(),
    renderer: getRenderer(),
    scene: getScene(),
  }
  return behaviors(state)
}

export const MainScene = MainSceneContainer(MainSceneBehavior);