import Compiler from './Compiler';
import consts from './consts/consts';

const {CODE_DEFAULT} = consts;

window.onload = () => {
    const compiler = new Compiler('codesnippet_editable' , CODE_DEFAULT.JAVASCRIPT);
    const elSelect = document.getElementById('compile-select');
    const elBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');
    elBtn.onclick = () => {
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'code': codeMirror.getValue()},
            success: (data) => {
                elCompileOutput.textContent = data.stdout;
                elCompileTime.textContent = data.time;
            }
        });
    }
};
