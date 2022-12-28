/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let scale = window.devicePixelRatio || 2;
canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;
ctx.scale(scale, scale);

// import WebFont from 'https://cors.evaexists.workers.dev/?url=https://esm.sh/webfontloader@1.6.28';
import WebFont from 'https://cors.evaexists.workers.dev/?url=https://esm.sh/v102/webfontloader@1.6.28/es2022/webfontloader.js'

function loadFont() {
    return new Promise((resolve, reject) => {
        WebFont.load({
            google: {
                families: ['Atkinson Hyperlegible']
            },
            fontactive: resolve,
        });
    });
}

await loadFont();

let font = 'Atkinson Hyperlegible';
let fontSize = 16;
let text = 'Hello World';
ctx.font = `${fontSize}px ${font}`;
ctx.fillStyle = `rgb(25, 25, 25)`
ctx.fillText(text, 0, fontSize);