/**
 * CodeMirror editor
 */
class Editor {
    constructor(id, mode) {
        this.form = CodeMirror.fromTextArea(document.getElementById(id), {
            mode: mode,
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
