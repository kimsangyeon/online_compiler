import Canvas from './Canvas';
import consts from './consts/consts';
import questions from './consts/questions';

const {LANGUAGE, MODE, CODE, ALGORITHM, QUESTIONS} = consts;
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
    elQuestion.innerHTML = CANVAS.fillRect;

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

        elQuestion.innerHTML = CANVAS[question];
        context.clearRect(0, 0, elCanvas.width, elCanvas.height);
        contextEx.clearRect(0, 0, elCanvasEx.width, elCanvasEx.height);

        switch(question) {
            case QUESTIONS.FILLRECT:
                fillRect(contextEx);
                break;
            case QUESTIONS.TRIANGLE:
                triangle(contextEx);
                break;
            case QUESTIONS.SMILE:
                smile(contextEx);
                break;

        }
    };
};

/**
 * init canvas draw (fillRect)
 * @param {HTMLElement} canvas
 */
function initDraw(elCanvas) {
    if (elCanvas.getContext) {
        fillRect(elCanvas.getContext('2d'));
    }
}

/**
 * canvas fillRect draw
 * @param {Object} ctx
 */
function fillRect(ctx) {
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

/**
 * canvas triangle draw
 * @param {Object} ctx
 */
function triangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}

/**
 * canvas smile draw
 * @param {Object} ctx
 */
function smile(ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}

