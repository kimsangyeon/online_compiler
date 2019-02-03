import Compiler from './Compiler';
import consts from './consts/consts';

const {CODE_DEFAULT} = consts;

window.onload = () => {
    const compiler = new Compiler('codesnippet_editable' , CODE_DEFAULT.JAVASCRIPT);
    const elBtn = document.getElementById('compile-btn');
    const elCompileOutput = document.getElementById('compile-output');
    const elCompileTime = document.getElementById('compile-time');
    elBtn.onclick = () => {
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'code': compiler.getForm().getValue()},
            success: (data) => {
                elCompileOutput.textContent = data.stdout;
                elCompileTime.textContent = data.time;
            }
        });
    }
};
