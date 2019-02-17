import Compiler from './Compiler';
import consts from './consts/consts';

const {LANGUAGE, MODE, CODE, ALGORITHM} = consts;

window.onload = () => {
    const elLanguageSelect = document.getElementById('compile-select');
    const elAlgorithmSelect = document.getElementById('algorithm-select');
    const elCompileBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileMessage = document.getElementById('compile-message');
    const elCompileTime = document.getElementById('compile-time');

    let compiler = new Compiler('codesnippet_editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[LANGUAGE.JAVASCRIPT][ALGORITHM.NONE]);

    /**
     * compile Button onclick
     */
    elCompileBtn.onclick = () => {
        const language = compiler.getLanguage();
        const algorithm = elAlgorithmSelect.value;
        const code = compiler.getEditor().getForm().getValue();

        elCompileOutput.innerHTML = '';
        elCompileMessage.innerHTML = '';
        elCompileTime.innerHTML = '';

        if (algorithm === ALGORITHM.NONE) {
            return;
        }

        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {
                'language': language,
                'algorithm': algorithm,
                'code': code
            },
            success: (data) => {
                if (elAlgorithmSelect.value === ALGORITHM.FACTORIAL) {
                    const result = JSON.parse(data);
                    result.forEach(({stdout, stderr, time, result}) => {
                        const elOutput = document.createElement('p');
                        elOutput.textContent = stdout;
                        elCompileOutput.appendChild(elOutput);

                        const elMessage = document.createElement('p');
                        elMessage.textContent = !!result ? "answer" : "wrong";
                        elCompileMessage.appendChild(elMessage);

                        const elTime = document.createElement('p');
                        elTime.textContent = time + ' ms';
                        elCompileTime.appendChild(elTime);
                    });
                }
            }
        });
    };

    /**
     * language Select onchange
     */
    elLanguageSelect.onchange = () => {
        const language = elLanguageSelect.value.toUpperCase();
        const algorithm = elAlgorithmSelect.value.toUpperCase();

        compiler.setLanguage(language);
        switch (language) {
            case LANGUAGE.JAVASCRIPT:
                compiler.init('codesnippet_editable', LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE[language][algorithm]);
                break;
            case LANGUAGE.PYTHON:
                compiler.init('codesnippet_editable', LANGUAGE.PYTHON, MODE.PYTHON, CODE[language][algorithm]);
                break;
            case LANGUAGE.JAVA:
                compiler.init('codesnippet_editable', LANGUAGE.JAVA, MODE.JAVA, CODE[language][algorithm]);
                break;
        }
    };
};