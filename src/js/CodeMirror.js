/**
 * CodeMirror
 */
class CodeMirror {
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
		this.form.setValue("// Your code here!\nfunction fn() { \n    return;\n}");
	}
	
}

export default CodeMirror;