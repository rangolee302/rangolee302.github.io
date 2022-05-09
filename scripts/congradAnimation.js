import anime from "./anime.es.js";
import config from "./word-config.js";


const wordLineMap = config.wordLineMap;
const wordPositionMap = config.wordPositionMap;
const grid = [30, 5];
const largerGrid = [48, 15]
const col = grid[0];
const row = grid[1];
const colInLargeGrid = largerGrid[0];
const wordGroup = CreateWordGroup();
const wordGroupSize = GetWordGroupSize();

function CreateWordGroup() {
    const group = [];
    // loop wordPositionMap
    for (let i = 0; i < wordPositionMap.length; i++) {
        // loop wordPositionMap[i]
        for (let j = 0; j < wordPositionMap[i].length; j++) {
            // push wordPositionMap[i][j] to group
            group.push(i);
        }
    }
    return group;
}

function GetWordGroupSize() {
    const group = [];
    for (let i = 0; i < wordPositionMap.length; i++) {
        let size = 0;
        for (let j = 0; j < wordPositionMap[i].length; j++) {
            size++;
        }
        group.push(size);
    }
    // add up group by map  
    return group;
}

function GetOrderInGroup(group, index) {
    let order = 0;
    for (let i = 0; i < group; i++) {
        order += wordGroupSize[i];
    }
    return index - order;
}

function GetOffset(group) {
    return {
        x: wordLineMap[group].x * 5,
        y: wordLineMap[group].y * 6,
    };
}

function GetWordPostiion(el, i) {
    if (i >= wordGroup.length) {
        return { x: 0, y: 0 };
    }

    // use i to get postiion from wordPositionMap
    const group = wordGroup[i];
    const order = GetOrderInGroup(group, i);
    if (order >= wordPositionMap[group].length) {
        return { x: 0, y: 0 };
    }
    const position = wordPositionMap[group][order];
    const offset = GetOffset(group);
    return {
        x: position.x + offset.x,
        y: position.y + offset.y,
    };
}

function GetCurrnetPosition(i, colNumber) {
    const x = i % colNumber;
    const y = Math.floor(i / colNumber);
    return { x, y };
}

function GetCongradAnimation() {
    const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    const fragment = document.createDocumentFragment();

    const numberOfElements = 176;

    for (let i = 0; i < numberOfElements; i++) {
        fragment.appendChild(document.createElement('div'));
    }

    staggerVisualizerEl.appendChild(fragment);

    const staggersAnimation = anime.timeline({
        targets: '.stagger-visualizer div',
        easing: 'easeInOutSine',
        delay: anime.stagger(2000 + 50),
        // loop: true,
        // direction: 'alternate',
        autoplay: false
    })
        .add({
            translateX: 0,
            translateY: 0,
            delay: anime.stagger(100, { grid: grid, from: 'center' })
        })
        .add({
            translateX: [
                { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'x' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'x' }) }
            ],
            translateY: [
                { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'y' }) },
                { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'y' }) }
            ],
            duration: 1000,
            scale: .5,
            delay: anime.stagger(100, { grid: grid, from: 'center' })
        })
        // .add({
        //     translateX: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'x' }),
        //     translateY: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'y' }),
        //     rotate: 0,
        //     scaleX: 2.5,
        //     scaleY: .25,
        //     delay: anime.stagger(4, { from: 'center' })
        // })
        .add({
            translateX: () => anime.random(-40, 40),
            translateY: () => anime.random(-40, 40),
            delay: anime.stagger(10, { from: 'center' })
        })
        // .add({
        //     translateX: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'x' }),
        //     translateY: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'y' }),
        //     rotate: anime.stagger([-180, 180]),
        //     scaleX: .25,
        //     scaleY: 2.5,
        //     delay: anime.stagger(10, { from: 'first' })
        // })
        .add({
            rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
            delay: anime.stagger(50, { grid: grid, from: 'center' })
        })
        // .add({
        //     translateX: 0,
        //     translateY: 0,
        //     scale: .5,
        //     scaleX: 1,
        //     rotate: 180,
        //     duration: 1000,
        //     delay: anime.stagger(100, { grid: grid, from: 'first' })
        // })
        // .add({
        //     scale: .25,
        //     scaleY: 1,
        //     delay: anime.stagger(20, { grid: grid, from: 'center' })
        // })
        .add({
            translateX: (el, i) => {
                const currentPosition = GetCurrnetPosition(i, colInLargeGrid);
                const wordPosition = GetWordPostiion(el, i);
                return -currentPosition.x + wordPosition.x + "rem";
            },
            translateY: (el, i) => {
                const currentPosition = GetCurrnetPosition(i, colInLargeGrid);
                // log currentPosition
                const wordPosition = GetWordPostiion(el, i);
                return -currentPosition.y + wordPosition.y + "rem";
            },
            rotate: 0,
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            delay: anime.stagger(4, { from: 'center' }),
            endDelay: 1000,
        });
    return staggersAnimation;
}


export default GetCongradAnimation;