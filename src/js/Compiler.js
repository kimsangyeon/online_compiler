import Editor from './Editor';

/**
 * Compiler
 */
class Compiler {
    constructor(editorId, code = '') {
        this.editor = null;
	this.init(editorId, code);
    }

    init(editorId, code = '') {
        this.editor = new Editor(editorId);
        this.setCode(code);
    }

    setCode(code) {
        this.editor.setValue(code);
    }
}

export default Compiler;
