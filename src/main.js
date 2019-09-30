import { MainScene, } from "./main-scene";

function Start() {

  MainScene.start();
  MainScene.add();
  MainScene.controlUpdate();

  function draw() {
    requestAnimationFrame(draw);
    MainScene.animation();
    MainScene.render();
    MainScene.controlUpdate();
  }
  draw();
}

Start()

