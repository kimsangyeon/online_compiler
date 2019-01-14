
window.onload = () => {
    const elTextArea = document.getElementById('code-textarea');
    const elBtn = document.getElementById('compile-btn');
    elBtn.onclick = () => {
        console.log(elTextArea.value);
        $.ajax({
            url: `${location.protocol}//${location.hostname}:${location.port}/compile`,
            type: "POST",
            data: {'code': elTextArea.value},
            success: (data) => {
                console.log(data);
            }
        });
    }
}