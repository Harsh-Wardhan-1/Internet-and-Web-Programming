var s1 = {
    "Subject": "Maths",
    "Marks": 40
};
var s2 = {
    "Subject": "Eng",
    "Marks": 50
};
var s3 = {
    "Subject": "IWP",
    "Marks": 20
};

var arr = [s1, s2, s3];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j].Marks > arr[j + 1].Marks) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

const ele = document.getElementById("text");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    ele.innerHTML += arr[i].Subject + `: ` + arr[i].Marks + `<br>`;
}

function findAvg() {
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        avg += arr[i].Marks;
    }
    avg /= arr.length;
    window.alert("The average is " + avg);
}