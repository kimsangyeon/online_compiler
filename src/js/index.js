import Compiler from './Compiler';
import consts from './consts/consts';

const {LANGUAGE, MODE, CODE_DEFAULT} = consts;

window.onload = () => {
    const elLanguageSelect = document.getElementById('compile-select');
    const elAlgorithmSelect = document.getElementById('algorithm-select');
    const elCompileBtn = document.getElementById('compile-btn');
    const elTestBtn = document.getElementById('test-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');

    let compiler = new Compiler('codesnippet_editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);

    /**
     * compile Button onclick
     */
    elCompileBtn.onclick = () => {
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'language': compiler.getLanguage(), 'code': compiler.getEditor().getForm().getValue()},
    /**
     * test Button onclick
     */
    elTestBtn.onclick = () => {
        const compileCode = compiler.getEditor().getForm().getValue() + getPrintCode(compiler.getLanguage(), elAlgorithmSelect.value);

        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/test`,
            type: "POST",
            data: {
                'language': compiler.getLanguage(),
                'algorithm': elAlgorithmSelect.value,
                'code': compileCode
            },
            success: (data) => {
                elCompileOutput.textContent = data.stdout;
                elCompileTime.textContent = data.time;
            }
        });
    };

    /**
     * language Select onchange
     */
    elLanguageSelect.onchange = () => {
        const language = elLanguageSelect.value;

        compiler.setLanguage(language);
        switch (language) {
            case LANGUAGE.JAVASCRIPT:
                compiler.init('codesnippet_editable', LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);
                break;
            case LANGUAGE.PYTHON:
                compiler.init('codesnippet_editable', LANGUAGE.PYTHON, MODE.PYTHON, CODE_DEFAULT.PYTHON);
                break;
            case LANGUAGE.JAVA:
                compiler.init('codesnippet_editable', LANGUAGE.JAVA, MODE.JAVA, CODE_DEFAULT.JAVA);
                break;
        }
    };
};
