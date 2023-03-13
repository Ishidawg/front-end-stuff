var clicks = 0;

function clique() {
    clicks ++;
    document.getElementById('res').innerHTML = clicks;

    if (clicks >= 50) {
        document.getElementById('msg').innerHTML = '50 TIMES!'
    }
    if (clicks >= 100) {
        document.getElementById('msg').innerHTML = 'STOP!!'
    }
}