/**
 * CodeMirror editor
 */
class Editor {
	constructor(id) {
		this.form = CodeMirror.fromTextArea(document.getElementById(id), {
	        mode: "javascript",
	        theme: "lucario",
	        lineNumbers: true
	    });
	}

	getForm() {
		return this.form;
	}

	setValue(value) {
		this.form.setValue(value);
	}
	
}

export default Editor;
