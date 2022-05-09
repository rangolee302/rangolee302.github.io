import utility from "./utility.js";

function GetTodayAnimation() {
    return {
        in: utility.GetEntryAnimation(".question-today", 2000, 1000),
        out: utility.GetOutroAnimation(".question-today", 0, 1000),
    };
}

function CheckBirthday(birthday) {

    if (birthday !== "5月9號") {
        return false;
    }
    return true;
}

export default { GetTodayAnimation, CheckBirthday };