import Canvas from './Canvas';
import consts from './consts/consts';
import questions from './consts/questions';

const {LANGUAGE, MODE, CODE, ALGORITHM} = consts;
const {CANVAS} = questions;

window.onload = () => {
    const elCanvas = document.getElementById('canvas');
    const elCanvasEx = document.getElementById('canvas-ex');
    const context = elCanvas.getContext('2d');
    const contextEx = elCanvasEx.getContext('2d');
    const elQuestionSelect = document.getElementById('question-select');
    const elQuestion = document.getElementById('canvas-question');
    const elDrawResult = document.getElementById('draw-result');
    const elDrawBtn = document.getElementById('draw-btn');

    let canvas = new Canvas('codesnippet-editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.CANVAS]);
    elQuestion.innerHTML = CANVAS.FILLRECT;

    elDrawBtn.onclick = () => {
        context.clearRect(0, 0, elCanvas.offsetWidth, elCanvas.offsetHeight);

        const code = canvas.getEditor().getForm().getValue();
        const drawFunction = new Function(code);
        drawFunction();

        const canvasData = context.getImageData(0, 0, elCanvas.offsetWidth, elCanvas.offsetHeight).data;
        const canvasExData = contextEx.getImageData(0, 0, elCanvasEx.offsetWidth, elCanvasEx.offsetHeight).data;

        elDrawResult.textContent = JSON.stringify(canvasData) == JSON.stringify(canvasExData);
    };

    initDraw(elCanvasEx);

    /**
     * Canvas Select onchage
     **/
    elQuestionSelect.onchange = () => {
        const question = elQuestionSelect.value;
        elQuestion.innerHTML = CANVAS[question.toUpperCase()];
    };
};

/**
 * init canvas draw (fillRect)
 * @param {HTMLElement} canvas
 */
function initDraw(elCanvas) {
    if (elCanvas.getContext) {
        const ctx = elCanvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

