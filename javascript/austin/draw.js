import { canvas } from "./main.js";

const ReferenceWidth = 1920;
const ReferenceHeight = 1080;
const CanvasWidthBoundingRatio =  1;
const CanvasHeightBoundingRatio = 0.8;
const MovingSpeed = 200;

export function getScaledValue(value) {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    const ratio = ((windowHeight / ReferenceHeight) + (windowWidth / ReferenceWidth))/2;
    return value * (ratio);
}

export function draw(delta) {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    
    canvas.width = windowWidth * CanvasWidthBoundingRatio;
    canvas.height = windowHeight * CanvasHeightBoundingRatio;

    const content = canvas.getContext("2d");
    content.fillRect(getScaledValue(250),getScaledValue(250), getScaledValue(300), getScaledValue(300))

}

