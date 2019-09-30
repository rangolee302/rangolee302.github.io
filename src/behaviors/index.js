import { OrbitControls, } from "../control";


export const AddChildrenBehavior = {
  name: "add",
  behavior: function (state = {}, props = {}) {
    const {
      pool = {},
    } = props
    const {
      children = [],
    } = state;
    const length = children.length;
    for (let index = 0; index < length; index++) {
      const {
        object = {},
      } = children[index];
      pool.add(object)
    }
  },
}

export const OrbitControlUpdateBehavior = {
  name: "controlUpdate",
  behavior: function (state) {
    const {
      control = null,
    } = state;
    if (control) {
      control.update();
    }
  },
}

export const RenderBehavior = {
  name: "render",
  behavior: function (state) {
    const {
      renderer = {},
      camera = {},
      scene = {},
    } = state || {};
    renderer.render(scene, camera);
  },
};

export const AnimateBehavior = {
  name: "animation",
  behavior: function (state) {
    const {
      children,
    } = state || {};
    const {length = 0, } = children;
    for (let index = 0; index < length; index++) {
      const {
        animation = () => {},
        object = {},
      } = children[index];
      if (animation) {
        animation(object);
      }
    }
  },
}


export const StartBehavior = {
  name: "start",
  behavior: function (state) {
    const {
      renderer,
    } = state || {};
    document.body.appendChild(renderer.domElement);
  },
}

export function wrapBehaviors(behaviors = [], state, props) {
  const wrapPackage = {};
  const length = behaviors.length;
  for (let index = 0; index < length; index++) {
    const {
      name = "", behavior = () => {},
    } = behaviors[index];
    wrapPackage[name] = () => behavior(state, props);
  }
  return wrapPackage
}