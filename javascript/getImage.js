/**
 * @returns {Array} return array of Image obj
 */
export function getHomePageImages(){
    const numOfImg = homeImages.length;
    let images = [];
    for(let i = 0; i < numOfImg ; i++){
        const newImage = new Image();
        newImage.src = homeImageRelativePath + homeImages[i];
        images.push(newImage);
    }
    return images;
}

const homeImageRelativePath = "../asset/image/austin/";
const homeImages = [
    `homepage_01.jpg`,
    `homepage_02.jpg`,
    `homepage_03.jpg`,
    `homepage_04.jpg`,
    `homepage_05.jpg`,
    `homepage_06.jpg`,
    `homepage_07.jpg`,
    `homepage_08.jpg`,
]