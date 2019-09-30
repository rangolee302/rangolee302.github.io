import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Group, } from "three";
import { Cube, } from "./cube";
import { Sphere, } from "./sphere";
import { Light, } from "./point-light";
import { AnimateBehavior, RenderBehavior, StartBehavior, wrapBehaviors, AddChildrenBehavior, OrbitControlUpdateBehavior, } from "../behaviors";
import { EnvironmentLight, } from "./ambient-light";
import { SkyBox, } from "./skybox";
import { OrbitControls, } from "../control";
import { Board, } from "./plane";

const ControlMaxDistance = 10.0;
const ControlMinDistance = 5.0;

// How far you can orbit vertically, upper and lower limits.
// Range is 0 to Math.PI radians.
const MinPolarAngle = Math.PI * (15/32); // radians
const MaxPolarAngle = Math.PI * (17/32); // radians

// How far you can orbit horizontally, upper and lower limits.
// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
const MinAzimuthAngle = - Math.PI * (1/32); //; // radians
const MaxAzimuthAngle = Math.PI * (1/32); // radians
const Boards = [

]

function getControl(state) {
  const {
    camera,
    renderer,
  } = state;
  const control = new OrbitControls(camera, renderer.domElement);
  control.enablePan = false;

  control.minPolarAngle = MinPolarAngle;
  control.maxPolarAngle = MaxPolarAngle;

  control.minAzimuthAngle = MinAzimuthAngle;
  control.maxAzimuthAngle = MaxAzimuthAngle;

  control.maxDistance = ControlMaxDistance;
  control.minDistance = ControlMinDistance;

  return control;
}

function getScene() {
  var scene = new Scene();
  scene.background = SkyBox();
  return scene;
}

function getCamera() {
  var aspect = window.innerWidth / window.innerHeight;
  var camera = new PerspectiveCamera(75, aspect, 0.1, 1000);

  camera.position.set(0, 0, 5);
  camera.lookAt(new Vector3(0, 0, -1)); // Set look at coordinate like this
  camera.up.set(0, 1, 0);

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
    OrbitControlUpdateBehavior,
  ];
  return wrapBehaviors(behaviors, state, props);
}

function getBoardRing() {
  const group = new Group();
  const { length, } = Boards;
  for (let index = 0; index < length; index++) {

    const element = Boards[index];

    const board = Board({
      position: new Vector3(2, 2, 0),
      width: 3.5,
      height: 2,
      image: element,
      animation: function (mesh) {
        // mesh.rotateX(0.1);
        const angle = 0.1;
        mesh.rotateY(angle);
      },
    })

    group.add(board);

  }
  return group;
}

function getBoard() {
  return Board({
    position: new Vector3(2, 2, 0),
    width: 3.5,
    height: 2,
    image: "homepage_01",
    animation: function (mesh) {
      // mesh.rotateX(0.1);
      const angle = 0.1;
      mesh.rotateY(angle);
    },
  })
}

export function MainSceneContainer (behaviors) {
  const children = [Cube(), Sphere(), Light(), EnvironmentLight(), getBoard(), ];
  const state = {
    children,
    camera: getCamera(),
    renderer: getRenderer(),
    scene: getScene(),
  }
  state.control = getControl(state);
  return behaviors(state)
}

export const MainScene = MainSceneContainer(MainSceneBehavior);