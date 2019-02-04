import Compiler from './Compiler';
import consts from './consts/consts';

const {LANGUAGE, CODE_DEFAULT} = consts;

window.onload = () => {
    const compiler = new Compiler('codesnippet_editable' , LANGUAGE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);
    const editor = compiler.getEditor();
    const elSelect = document.getElementById('compile-select');
    const elBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');
    elBtn.onclick = () => {
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'language': compiler.getLanguage(), 'code': editor.getForm().getValue()},
            success: (data) => {
                elCompileOutput.textContent = data.stdout;
                elCompileTime.textContent = data.time;
            }
        });
    };

    elSelect.onchange = () => {
        const language = elSelect.value;

        compiler.setLanguage(language);
        switch (language) {
            case LANGUAGE.JAVASCRIPT:
                compiler.setCode(CODE_DEFAULT.JAVASCRIPT);
                break;
            case LANGUAGE.PYTHON:
                compiler.setCode(CODE_DEFAULT.PYTHON);
                break;
        }
    };
};
