import anime from "./anime.es.js";

function GetEntryAnimation(targets, delay = 100) {
    return {
        targets,
        translateX: 0,
        translateY: 0,
        duration: 1000,
        scale: 1,
        easing: "easeInOutQuart",
        delay,
    };
}

function GetOutroAnimation(targets, delay = 100) {
    return {
        targets,
        translateY: "-1000%",
        duration: 1000,
        easing: "easeInOutQuart",
        scale: 0.5,
        delay,
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

export default GetBirthdayAnimation();