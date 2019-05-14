
import {
    getImages, imageBase
} from "./getImage.js";
import { draw } from "./draw.js";

export const canvas = document.querySelector("canvas");
export const content = canvas.getContext("2d");
export const image = getImages(imageBase.avenger);

console.log(image);

function runAnimation() {
    console.log("hello world");
    requestAnimationFrame(draw);
    requestAnimationFrame(runAnimation);
}

runAnimation();