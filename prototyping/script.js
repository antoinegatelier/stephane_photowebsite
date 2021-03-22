class Photo {
    constructor(selector) {
        this.selector = selector;
        this.height = selector.naturalHeight;
        this.width = selector.naturalWidth;
        this.ratio = Number((this.width/this.height).toFixed(3));
    }
};

const pictures = [];

const pic_1 = pictures.push(new Photo(document.getElementById("picture_1")));
const pic_2 = pictures.push(new Photo(document.getElementById("picture_2")));
const pic_3 = pictures.push(new Photo(document.getElementById("picture_3")));
const pic_4 = pictures.push(new Photo(document.getElementById("picture_4")));
const pic_5 = pictures.push(new Photo(document.getElementById("picture_5")));
const pic_6 = pictures.push(new Photo(document.getElementById("picture_6")));
const pic_7 = pictures.push(new Photo(document.getElementById("picture_7")));
const pic_8 = pictures.push(new Photo(document.getElementById("picture_8")));
const pic_9 = pictures.push(new Photo(document.getElementById("picture_9")));

/* Test
for (i = 0; i < pictures.length; i++) {
    console.log(`Photo ${i}: Height: ${pictures[i].height}, typeof Height: ${typeof pictures[i].height}, Width: ${pictures[i].width}, Ratio: ${pictures[i].ratio}, typeof Ratio: ${typeof pictures[i].ratio}`);
};
*/

const adjustHeight = () => {
    let galleryRect = document.getElementById('gallery').getBoundingClientRect();
    let galleryWidth = galleryRect.width;
    console.log(`Gallery width: ${galleryWidth}, typeOf Gallery width: ${typeof galleryWidth}`);
    //let windowWidth = window.innerWidth;
    let gridGap = 10;
    console.log(`typeof gridGap: ${typeof gridGap}`);
    let gridColumn = 3;
    console.log(`typeof gridColumn: ${typeof gridColumn}`);
    let n = 3;
    console.log(`typeof n: ${typeof n}`);
    let setHeight_row1 = Math.round((galleryWidth - (gridGap * (gridColumn - 1))) / (pictures[0].ratio + pictures[1].ratio + pictures[2].ratio));
    console.log(`typeof setHeight_row1: ${typeof setHeight_row1}`);
    for (i = 0; i < n; i++) {
        pictures[i].selector.style.height = setHeight_row1 + 'px';
        //let setWidth = Math.round(setHeight_row1 * pictures[i].ratio);
        //pictures[i].selector.style.width = setWidth + 'px';
    };
    let setHeight_row2 = Math.round((galleryWidth - (gridGap * (gridColumn - 1))) / (pictures[3].ratio + pictures[4].ratio + pictures[5].ratio));
    console.log(`typeof setHeight_row2: ${typeof setHeight_row2}`);
    for (i = 3; i < 6; i++) {
        pictures[i].selector.style.height = setHeight_row2 + 'px';
        //let setWidth = Math.round(setHeight_row2 * pictures[i].ratio);
        //pictures[i].selector.style.width = setWidth + 'px';
    };
    let setHeight_row3 = Math.round((galleryWidth - (gridGap * (gridColumn - 1))) / (pictures[6].ratio + pictures[7].ratio + pictures[8].ratio));
    console.log(`typeof setHeight_row3: ${typeof setHeight_row3}`);
    for (i = 6; i < 9; i++) {
        pictures[i].selector.style.height = setHeight_row3 + 'px';
        //let setWidth = Math.round(setHeight_row3 * pictures[i].ratio);
        //pictures[i].selector.style.width = setWidth + 'px';
    };
};


/*
let windowWidth = window.innerWidth;
console.log(`Window width: ${windowWidth}`); //test

let navBarRect = document.getElementById('navBar').getBoundingClientRect();
let navBarWidth = navBarRect.width;
console.log(`navBarReact.width: ${navBarRect.width}, navBarWidth: ${navBarWidth}`); //test

let gridGap = 10;
let gridColumn = 3;
let n = 3;

let setHeight = Math.round((windowWidth + navBarWidth - (gridGap * (gridColumn - 1))) / (pictures[0].ratio + pictures[1].ratio + pictures[2].ratio)); 
console.log(`Height to set: ${setHeight}`); //test

for (i = 0; i < n; i++) {
    pictures[i].selector.style.height = `${setHeight}px`;
    pictures[i].selector.style.width = "auto";
};
*/


/*
windowWidth = pictureHeight * (sum(ratioPicture1 to ratioPictureN)) + (gridGap * n-1) - navBarWidth
setHeight = (windowWidth + navBarWidth - (gridGap * (gridColumn - 1))) / (ratioPicture1 + ratioPicture2 + ratioPicture3)
*/

