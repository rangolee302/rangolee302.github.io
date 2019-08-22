import { MainScene, } from "./main-scene";
import { TexturePack, } from "./resource";

function Start() {
  const sceneObj = MainScene();
  sceneObj.start();

  function draw() {
    requestAnimationFrame(draw);
    sceneObj.render();
  }
  draw();
}

TexturePack.init();
Start()

