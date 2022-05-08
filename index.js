import GetCongradAnimation from "./scripts/congradAnimation.js";
import anime from "./scripts/anime.es.js";
// import GetBirthdayAnimation from "./scripts/birthdayAnimation.js";

function GetEntryAnimation(targets, delay = 100) {
    return {
        targets,
        translateX: 0,
        translateY: 0,
        duration: 1000,
        scale: 1,
        easing: "easeInOutQuart",
        // delay,
    };
}

function GetOutroAnimation(targets, delay = 100) {
    return {
        targets,
        translateY: "-1000%",
        duration: 1000,
        easing: "easeInOutQuart",
        scale: 0.5,
        // delay,
        autoplay: false
    };
}

function GetBirthdayAnimation() {
    const birthdaydayAnimation = anime.timeline(
        // {}
        GetOutroAnimation(".question-birthday", 200)
    ).add(
        GetEntryAnimation(".question-birthday", 1000)
    );
    return birthdaydayAnimation;
}

function Setup() {
    const birthdaydayAnimation = GetBirthdayAnimation();
    // const todayAnimation = GetTodayAnimation();
    // const likeThingsAnimation = GetLikeThingAnimation();
    // const foodDayAnimation = GetFoodAnimation();

    // const easyEquationAnimation = GetEquationAnimation();
    // const hardEquationAnimation = GetEquationAnimation();
    // const easyDecodeAnimation = GetEasyDecodeAnimation();
    // const hardDecodeAnimation = GetHardDeodeAnimation();
    const congradAnimation = GetCongradAnimation();

    AddEvent(".question-birthday #birthday", "keyup", (e) => {
        if (e.key === "Enter") {
            console.log("enter key pressed");
            birthdaydayAnimation.play();
            congradAnimation.play();
        }
    });
}

function AddEvent(selector, event, callback) {
    // query for class
    const birthdayQuestion = document.querySelector(selector);
    // add enter key up event listener to question-birthday
    birthdayQuestion.addEventListener(event, (e) => {
        e.preventDefault();
        callback(e);
    });
}


Setup();