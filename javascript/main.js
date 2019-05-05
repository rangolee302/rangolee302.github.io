
import { getHomeImages } from "./getImage.js";
import { draw } from "./draw.js";

export const canvas = document.querySelector("canvas");
export const content = canvas.getContext("2d");

runAnimation();
export const homeImages = getHomeImages();

function runAnimation() {
    console.log("hello world");
    requestAnimationFrame(draw);
}