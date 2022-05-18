import utility from "./utility.js";

function GetAnimation() {
    return {
        in: utility.GetEntryAnimation(".question-hard-equation", 2000, 1000),
        out: utility.GetOutroAnimation(".question-hard-equation", 0, 1000),
    };
}

function CheckAnswer(answer) {

    if (answer !== "3.14") {
        return false;
    }
    return true;
}

export default { GetAnimation, CheckAnswer };