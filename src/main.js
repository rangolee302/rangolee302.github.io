import { MainScene, } from "./main-scene";

function Start() {

  MainScene.start();
  MainScene.add();

  function draw() {
    requestAnimationFrame(draw);
    MainScene.animation();
    MainScene.render();
  }
  draw();
}

Start()

