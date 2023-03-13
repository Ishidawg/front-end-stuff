function submit() {
    var menu = document.getElementById('menu').value;
    var txt = document.getElementById('res');
    //console.log(menu) - mostra o valor do option no console ex: pizza = 3.

    if (menu == 1) {
        txt.innerHTML = 'Enjoy your Strogonoff!';
    } else if (menu == 2) {
        txt.innerText = 'Enjoy your Pasta!';
    } else if (menu == 3) {
        txt.innerText = 'Enjoy your Pizza!';
    } else if (menu == 4) {
        txt.innerText = 'Enjoy your Hamburguer!';
    }
}