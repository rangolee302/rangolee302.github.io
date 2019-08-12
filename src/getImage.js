const homeImageRelativePath = "../asset/image/austin/";
const homeImages = [
  "homepage_01.jpg",
  "homepage_02.jpg",
  "homepage_03.jpg",
  "homepage_04.jpg",
  "homepage_05.jpg",
  "homepage_06.jpg",
  "homepage_07.jpg",
  "homepage_08.jpg",
];

const avengerRelativePath = "../asset/image/avenger/";
const avengerImages = [
  "cap.jpg",
  "iron-man-helmet.jpg",
  "iron-man.jpg",
  "spiderman.jpg",
  "thor.jpg",
];

/**
 * @returns {Array} return array of Image obj
 */
export function getImages(base) {
  const numOfImg = base.list.length;
  let images = [];
  for (let i = 0; i < numOfImg; i++) {
    const newImage = new Image();
    newImage.src = base.relativePath + base.list[i];
    images.push(newImage);
  }
  return images;
}

export const imageBase = {
  home: {
    relativePath: homeImageRelativePath,
    list: homeImages,
  },
  avenger: {
    relativePath: avengerRelativePath,
    list: avengerImages,
  },
};

