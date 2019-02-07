import Compiler from './Compiler';
import consts from './consts/consts';

const {LANGUAGE, CODE_DEFAULT} = consts;

window.onload = () => {
    const elSelect = document.getElementById('compile-select');
    const elBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');

    let compiler = new Compiler('codesnippet_editable' , LANGUAGE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);

    /**
     * compile Button onclick
     */
    elBtn.onclick = () => {
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'language': compiler.getLanguage(), 'code': compiler.getEditor().getForm().getValue()},
            success: (data) => {
                elCompileOutput.textContent = data.stdout;
                elCompileTime.textContent = data.time;
            }
        });
    };

    /**
     * language Select onchange
     */
    elSelect.onchange = () => {
        const language = elSelect.value;

        compiler.setLanguage(language);
        switch (language) {
            case LANGUAGE.JAVASCRIPT:
                compiler.init('codesnippet_editable', LANGUAGE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);
                break;
            case LANGUAGE.PYTHON:
                compiler.init('codesnippet_editable', LANGUAGE.PYTHON, CODE_DEFAULT.PYTHON);
                break;
            case LANGUAGE.JAVA:
                compiler.init('codesnippet_editable', LANGUAGE.JAVA, CODE_DEFAULT.JAVA);
                break;
        }
    };
};
