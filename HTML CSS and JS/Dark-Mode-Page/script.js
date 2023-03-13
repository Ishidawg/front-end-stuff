function clicar() {
    var txt = document.getElementById('text').value;
    var res = document.getElementById('res');

    res.innerHTML = `${txt}`
}

function checkbox() {
    document.querySelector('html').classList.toggle('dark-mode');
}