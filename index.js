import GetCongradAnimation from "./scripts/congradAnimation.js";
import birthday from "./scripts/birthdayAnimation.js";
import today from "./scripts/todayAnimation.js";
import utility from "./scripts/utility.js";
import anime from "./scripts/anime.es.js";
import easyEquation from "./scripts/easyEquationAnimation.js";
import hardEquation from "./scripts/hardEquationAnimation.js";

function Setup() {

    HideElement([
        ".tick",
        ".cross",
        ".question-birthday",
        ".question-today",
        ".question-color",
        ".question-easy-equation",
        ".question-hard-equation",
        ".congrad"
    ]);
    anime(utility.GetEntryAnimation(".question-easy-equation" , 1000)).play();

    const birthdaydayAnimation = birthday.GetBirthdayAnimation();
    const todayAnimation = today.GetTodayAnimation();
    // const likeThingsAnimation = GetLikeThingAnimation();
    // const foodDayAnimation = GetFoodAnimation();

    const easyEquationAnimation = easyEquation.GetAnimation();
    const hardEquationAnimation = hardEquation.GetAnimation();
    // const easyDecodeAnimation = GetEasyDecodeAnimation();
    // const hardDecodeAnimation = GetHardDeodeAnimation();
    const congradAnimation = GetCongradAnimation();

    AddEvent(".question-easy-equation #answer", "keyup", (e) => {
        if (e.keyCode === 13) {
            const result = easyEquation.CheckAnswer(e.target.value);
            anime(GetResultAnimation(result)).play();
            anime(easyEquationAnimation.out).play();
            
            if(result) {
                anime(hardEquationAnimation.in).play();
            } else {
                anime(easyEquationAnimation.in).play();
            }
            // congradAnimation.play();
        }
    });

    AddEvent(".question-hard-equation #answer", "keyup", (e) => {
        if (e.keyCode === 13) {
            const result = hardEquation.CheckAnswer(e.target.value);
            anime(GetResultAnimation(result)).play();
            anime(hardEquationAnimation.out).play();

            if (result) {
                anime(birthdaydayAnimation.in).play();
            } else {
                anime(hardEquationAnimation.in).play();
            }
        }
    });

    AddEvent(".question-birthday #birthday", "keyup", (e) => {
        if (e.keyCode === 13) {
            const result = birthday.CheckBirthday(e.target.value);
            anime(GetResultAnimation(result)).play();
            anime(birthdaydayAnimation.out).play();

            if (result) {
                anime(todayAnimation.in).play();
            } else {
                anime(birthdaydayAnimation.in).play();
            }
            // congradAnimation.play();
        }
    });

    AddEvent(".question-today #today", "keyup", (e) => {
        if (e.keyCode === 13) {
            const result = birthday.CheckBirthday(e.target.value);
            anime(GetResultAnimation(result)).play();


            if (result) {
                anime(todayAnimation.out).play();
                anime(utility.GetEntryAnimation(".congrad", 2000, 1000)).play();
                congradAnimation.play();
            } else {
                anime(todayAnimation.in).play();
            }
        }
    });

}

function GetResultAnimation(result)
{
    const animation = result ? utility.GetTickAnimation() : utility.GetCrossAnimation();
    return animation;
}

function HideElement(list) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        anime(utility.GetOutroAnimation(element, 0, 1)).play();
    }
}

function AddEvent(selector, event, callback) {
    // query for class
    const element = document.querySelector(selector);
    // add enter key up event listener to question-birthday
    element.addEventListener(event, (e) => {
        e.preventDefault();
        callback(e);
    });
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }
function preventDefault(e) {
    e.preventDefault();
}
var wheelOpt = supportsPassive ? { passive: false } : false;
window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
Setup();