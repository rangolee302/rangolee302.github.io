import utility from "./utility.js";

function GetBirthdayAnimation() {
    return { 
        in: utility.GetEntryAnimation(".question-birthday", 2000, 1000),
        out: utility.GetOutroAnimation(".question-birthday", 0, 1000),
    };
}

function CheckBirthday(birthday) {

    if (birthday !== "5月9號") {
        return false;
    }
    return true;
}

export default { GetBirthdayAnimation, CheckBirthday};