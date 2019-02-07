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

    /**
     * Get Editor form object
     * @return {Object} form
     **/
    getForm() {
        return this.form;
    }

    /**
     * Editor form set value
     * @param {String} value
     **/
    setValue(value) {
        this.form.setValue(value);
    }
    
}

export default Editor;
