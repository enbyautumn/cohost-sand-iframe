/** @type {HTMLCanvasElement} */
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let scale = (window.devicePixelRatio || 1) * 2;
canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;
ctx.scale(scale, scale);

// import WebFont from 'https://cors.evaexists.workers.dev/?url=https://esm.sh/webfontloader@1.6.28';
import WebFont from 'https://cors.evaexists.workers.dev/?url=https://esm.sh/v102/webfontloader@1.6.28/es2022/webfontloader.js'
import {LoremIpsum} from 'https://cdn.skypack.dev/lorem-ipsum'
import WrappableText from 'https://cdn.skypack.dev/wrappable-text'
 
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

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});  

let font = 'Atkinson Hyperlegible';
let fontSize = 16;
ctx.font = `${fontSize}px ${font}`;
ctx.fillStyle = `rgb(25, 25, 25)`
let text = 'Hello World ' + lorem.generateParagraphs(1);
let lineHeight = 28;

document.getElementsByTagName('div')[0].innerText = text

let wt = new WrappableText(text, {
    measure: string => ctx.measureText(string).width,
});

const { lines, overflow } = wt.wrap(canvas.width / scale)

console.log(text, { lines, overflow })

// ctx.fillText(text, 0, fontSize);

lines.forEach((line, index) => {
    let baseline = (index + 1) * fontSize
    baseline += index * (lineHeight - fontSize)

    // ctx.beginPath()
    // ctx.moveTo(0, baseline)
    // ctx.lineTo(line.width, baseline)
    // ctx.stroke()

    ctx.fillText(line.value, 0, baseline)
  })