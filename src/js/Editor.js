/**
 * CodeMirror editor
 */
class Editor {
    constructor(id, language) {
        this.form = CodeMirror.fromTextArea(document.getElementById(id), {
            mode: language,
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
