import CodeMirror from './CodeMirror';

/**
 * Compiler
 */
class Compiler {
    constructor(editorId, code = '') {
        init(editorId, code);
    }

    init(editorId, code = '') {
        this.codeMirror = new CodeMirror(editorId);
        this.setCode(code);
    }

    setCode(code) {
        codeMirror.setValue(code);
    }
}

export default Compiler;