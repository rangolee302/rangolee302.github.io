import { MainScene, } from "./main-scene";

function Start() {
  const sceneObj = MainScene();
  sceneObj.start();

  function draw() {
    requestAnimationFrame(draw);
    sceneObj.render();
  }
  draw();
}

Start();

