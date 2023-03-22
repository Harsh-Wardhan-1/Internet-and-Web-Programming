
$(document).ready(function () {
    $("#extract").click(extractText);
});

function extractText() {
    const list = document.getElementById('list');
    const listMessage = document.getElementById('list-message');
    listMessage.innerHTML = list.innerHTML;
}