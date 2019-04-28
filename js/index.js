$('.carousel').carousel({
    interval: 2500
})

const imagesUrl = [
    '1',
    '2'
]

let auxBg = 0;

setInterval(() => {
    auxBg++;
    
    if (imagesUrl.length == auxBg) {
        auxBg = 0
    }

    console.log(imagesUrl[auxBg]);

}, 2500);