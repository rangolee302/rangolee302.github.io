import utility from "./utility.js";

function GetAnimation() {
    return {
        in: utility.GetEntryAnimation(".question-easy-equation", 2000, 1000),
        out: utility.GetOutroAnimation(".question-easy-equation", 0, 1000),
    };
}

function CheckAnswer(answer) {

    if (answer !== "509") {
        return false;
    }
    return true;
}

export default { GetAnimation, CheckAnswer };