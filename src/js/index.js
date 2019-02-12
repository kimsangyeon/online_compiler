import Compiler from './Compiler';
import consts from './consts/consts';
import algorithm from './consts/algorithm';

const {LANGUAGE, MODE, CODE_DEFAULT, ALGORITHM} = consts;
const {FACTORIAL} = algorithm;

window.onload = () => {
    const elLanguageSelect = document.getElementById('compile-select');
    const elAlgorithmSelect = document.getElementById('algorithm-select');
    const elCompileBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');

    let compiler = new Compiler('codesnippet_editable' , LANGUAGE.JAVASCRIPT, MODE.JAVASCRIPT, CODE_DEFAULT.JAVASCRIPT);

    /**
     * compile Button onclick
     */
    elCompileBtn.onclick = () => {
        const compileCode = compiler.getEditor().getForm().getValue() + getResultCode(compiler.getLanguage(), elAlgorithmSelect.value);
        
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {
                'language': compiler.getLanguage(),
                'code': compileCode
            },
            success: (data) => {
                if (elAlgorithmSelect.value === ALGORITHM.FACTORIAL) {
                    const output = [];
                    const result = JSON.parse(data.stdout);
                    Object.keys(result).forEach(key => output.push(result[key] === FACTORIAL.RESULT[key]));

                    elCompileOutput.textContent = output;
                } else {
                    elCompileOutput.textContent = data.stdout;
                    elCompileTime.textContent = data.time;
                }
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

/**
 * return result code (console log, print)
 * @return {String} code
 */
function getResultCode(language, algorithm) {
    let code = '';

    if (language === LANGUAGE.JAVASCRIPT) {
        if(algorithm === ALGORITHM.FACTORIAL) {
            code = `const result = {1:fn(1), 2:fn(2), 3:fn(3), 4:fn(4), 5:fn(5)};console.log(JSON.stringify(result));`;
        } else {
            code = 'console.log(fn());';
        }
    } else if (language === LANGUAGE.PYTHON) {
        if(algorithm === ALGORITHM.FACTORIAL) {
            
        } else {
            code = 'print(fn())';
        }
    } else if (language === LANGUAGE.JAVA) {
        if(algorithm === ALGORITHM.FACTORIAL) {
            
        }
    }

    return code;
}
