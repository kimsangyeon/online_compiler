window.onload = () => {
	CodeMirror.fromTextArea(document.getElementById('codesnippet_editable'), {
        mode: 'javascript',
        lineNumbers: true
    });
};