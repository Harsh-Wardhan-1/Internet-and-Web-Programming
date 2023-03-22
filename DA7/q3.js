
$(document).ready(function () {
    $("#submit").click(function () {
        const inputCity = document.getElementById('input-city').value.toLowerCase();
        // console.log(inputCity);
        const cityExits = document.getElementById(inputCity);
        if (cityExits) {
            document.getElementById('list').style.fontWeight = "normal";
            cityExits.style.fontWeight = "bold";
            document.getElementById('message').innerText = "";
        }
        else {
            document.getElementById('list').style.fontWeight = "normal";
            document.getElementById('message').innerText = "City does not exist in the list."
        }
    });
});

