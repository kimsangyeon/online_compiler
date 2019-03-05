window.onload = () => {
    const codemirror = CodeMirror.fromTextArea(document.getElementById('codesnippet-editable'), {
        mode: 'javascript',
        lineNumbers: true
    });
    codemirror.setValue("var ctx = document.getElementById('canvas').getContext('2d');");

    const elCanvas = document.getElementById('canvas');
    const elCanvasEx = document.getElementById('canvas-ex');
    const context = elCanvas.getContext('2d');
    const contextEx = elCanvasEx.getContext('2d');
    const elDrawResult = document.getElementById('draw-result');
    const elDrawBtn = document.getElementById('draw-btn');

    elDrawBtn.onclick = () => {
        context.clearRect(0, 0, elCanvas.offsetWidth, elCanvas.offsetHeight);

        const code = codemirror.getValue();
        const drawFunction = new Function(code);
        drawFunction();

        const canvasData = context.getImageData(0, 0, elCanvas.offsetWidth, elCanvas.offsetHeight).data;
        const canvasExData = contextEx.getImageData(0, 0, elCanvasEx.offsetWidth, elCanvasEx.offsetHeight).data;

        elDrawResult.textContent = JSON.stringify(canvasData) == JSON.stringify(canvasExData);
    };

    initDraw(elCanvasEx);
};

/**
 * init canvas draw (fillRect)
 * @param {HTMLElement} canvas
 */
function initDraw(canvas) {
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

