export function AddChildrenToSceneBehavior(state) {
  const {
    children = [],
    scene,
  } = state;
  children.forEach(element => {
    if (element.object) {
      scene.add(element.object)
    }
  });
}

export function AddChildrenToGroupBehavior(state) {
  const {
    children = [],
    group,
  } = state;
  children.forEach(element => {
    if (element.object) {
      group.add(element.object)
    }
  });
}

export function RenderBehavior(state) {
  const {
    animation, renderer, camera, scene,
  } = state || {};
  if (animation) {
    animation();
  }
  renderer.render(scene, camera);
}

export function AnimateBehavior(state) {
  const {
    children,
  } = state || {};
  children.forEach(element => {
    if (element.animation) {
      element.animation(element.object);
    }
  });
}