import Editor from './Editor';

/**
 * Compiler
 */
class Compiler {
    constructor(editorId, language = 'javascript', code = '') {
        this.editor = null;
        this.init(editorId, this.language, code);
    }

    init(editorId, language = 'javascript', code = '') {
        this.editor = new Editor(editorId);
        this.setCode(language);
        this.setCode(code);
    }

    setLanguage(language) {
        this.language = language;
    }

    getLanguage() {
        return this.language;
    }

    setCode(code) {
        this.editor.setValue(code);
    }
}

export default Compiler;
