import Compiler from './Compiler';

window.onload = () => {
	const Compiler = new Compiler('codesnippet_editable' , "// Your code here!\nfunction fn() { \n    return;\n}")
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