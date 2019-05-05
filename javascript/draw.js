const referenceWidth = 1920;
const referenceHeight = 1080;

export function getScaledValue(value) {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    const ratio = ((windowHeight/referenceHeight) + (windowWidth/referenceWidth))/2;
    return value* (ratio);
}

export function draw(delta) {
    console.log("drawing");

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const content = canvas.getContext("2d");
    content.fillRect(getScaledValue(50),getScaledValue(50), getScaledValue(100), getScaledValue(100))

}

