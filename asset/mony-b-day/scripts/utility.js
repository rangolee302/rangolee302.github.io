import anime from "./anime.es.js";

function GetEntryAnimation(targets, delay = 100, duration = 500) {
    return {
        targets,
        translateX: 0,
        translateY: 0,
        duration,
        scale: 1,
        easing: "easeInOutQuart",
        delay,
        autoplay: false
    };
}

function GetOutroAnimation(targets, delay = 100, duration = 500) {
    return {
        targets,
        translateX: 0,
        translateY: -1000,
        duration,
        easing: "easeInOutQuart",
        scale: 0.5,
        delay,
        autoplay: false
    };
}

function GetTickAnimation() {
    return {
        targets: '.tick',
        translateX: 0,
        translateY: 0,
        scale: 1,
        easing: 'easeInOutSine',
        endDelay: 500,
        autoplay: false,
        duration: 750,
        // loop: 1,
        direction: 'alternate',
    }
}

function GetCrossAnimation() {
    const animation = {
        targets: '.cross',
        translateX: 0,
        translateY: 0,
        scale: 1,
        easing: 'easeInOutSine',
        endDelay: 500,
        autoplay: false,
        duration: 750,
        // loop: 1,
        direction: 'alternate',
    }
    return animation;
}

export default {
    GetEntryAnimation,
    GetOutroAnimation,
    GetTickAnimation,
    GetCrossAnimation
};