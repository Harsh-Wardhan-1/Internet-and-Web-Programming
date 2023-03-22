let values = []
const butEl = document.querySelector('.submit');

butEl.addEventListener('click', () => {
    let val = document.querySelector('input').value;
    if (values.includes(val)) {
        window.alert("Dublicate");
    }
    else {
        values.push(val);
    }
    console.log(values);
    val.value = '';
});