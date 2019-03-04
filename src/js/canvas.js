window.onload = () => {
	const codemirror = CodeMirror.fromTextArea(document.getElementById('codesnippet-editable'), {
        mode: 'javascript',
        lineNumbers: true
    });
    codemirror.setValue("var ctx = document.getElementById('canvas').getContext('2d');");

    const elCanvs = document.getElementById('canvas');
    const elDrawBtn = document.getElementById('draw-btn');
    elDrawBtn.onclick = () => {
    	elCanvs.getContext('2d').clearRect(0, 0, elCanvs.offsetWidth, elCanvs.offsetHeight);

    	const code = codemirror.getValue();
    	const drawFunction = new Function(code);
    	drawFunction();
    };
};