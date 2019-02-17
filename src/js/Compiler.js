import Editor from './Editor';

/**
 * Compiler
 */
class Compiler {
    constructor(editorId, language = 'javascript', mode, code = '') {
        this.editor = null;
        this.init(editorId, this.language, mode, code);
    }

    /**
     * init Compiler
     * @param {String} editorId
     * @param {String} language
     * @param {String} mode
     * @param {String} code
     **/
    init(editorId, language = 'javascript', mode, code = '') {
        const elCodeMirror = document.getElementsByClassName('CodeMirror');
        if (elCodeMirror.length > 0) {
            Array.from(elCodeMirror).forEach(el => el.remove());
        }

        this.editor = new Editor(editorId, mode);
        this.setLanguage(language);
        this.setMode(mode);
        this.setCode(code);
    }

    /**
     * get editor object
     * @return {Editor} editor
     **/
    getEditor() {
        return this.editor;
    }

    /**
     * set language
     * @param {String} language
     **/
    setLanguage(language) {
        this.language = language;
    }

    /**
     * get language
     * @return {String} language
     **/
    getLanguage() {
        return this.language;
    }

    /**
     * set Code
     * @param {String} code
     **/
    setCode(code) {
        this.editor.setValue(code);
    }

    /**
     * set Mode
     * @param {String} mode
     **/
    setMode(mode) {
        this.mode = mode;
    }

    /**
     * get Mode
     * @return {String} mode
     **/
    getMode() {
        return this.mode;
    }
}

export default Compiler;
