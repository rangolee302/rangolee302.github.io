import { MainScene, } from "./main-scene";

function Start() {
  const mainScene = MainScene();
  mainScene.start(mainScene);

  function draw() {
    requestAnimationFrame(draw);
    mainScene.render();
  }
  draw();
}

Start()

