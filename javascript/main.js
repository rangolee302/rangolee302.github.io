import {
    draw
} from "./draw";
import {
    getHomeImages
} from "./getImage";

export const canvas = document.querySelector("canvas");
export const content = canvas.getContext("2d");

runAnimation();
export const homeImages = getHomeImages();

function runAnimation() {
    console.log("hello world");
    requestAnimationFrame(draw);
}