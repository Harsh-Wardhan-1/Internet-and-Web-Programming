console.log("hel");
$(document).ready(function () {
    $("#red").mouseenter(function () {
        document.body.style.backgroundColor = "red";
    })
    $("#red").mouseleave(function () {
        document.body.style.backgroundColor = "white";
    })
    $("#green").mouseenter(function () {
        document.body.style.backgroundColor = "green";
    })
    $("#green").mouseleave(function () {
        document.body.style.backgroundColor = "white";
    })
    $("#blue").mouseenter(function () {
        document.body.style.backgroundColor = "blue";
    })
    $("#blue").mouseleave(function () {
        document.body.style.backgroundColor = "white";
    })

});
