
window.onload = () => {
    const codeMirror =CodeMirror.fromTextArea(document.getElementById('codesnippet_editable'), {
        mode: "javascript",
        theme: "lucario",
        lineNumbers: true
    });
    codeMirror.setValue("// Your code here!\nfunction fn() { \n    return;\n}");

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
}