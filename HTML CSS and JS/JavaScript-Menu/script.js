//var name = prompt("What's your name?")
//document.getElementById('wel').innerHTML = `Hi ${name}!`

function verify() {
    var meal = Number(document.getElementById('meal').value);
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id' ,'path');

    switch (meal) {
        case 1:
            res.style.color = 'yellow'
            res.innerHTML = 'Enjoy your pizza!'
            img.setAttribute('src', 'imagens/p-r.png')
            break;
        case 2:
            res.style.color = 'orange'
            res.innerHTML = 'Good choice, our pasta is nice! Enjoy your meal!'
            img.setAttribute('src', 'imagens/pa-r.png')
            break;
        case 3:
            res.style.color = 'lightblue'
            res.innerHTML = 'Oh, ice cream, is a good dessert! Enjoy your cold meal!'
            img.setAttribute('src', 'imagens/ic-r.png')
            break;
        case 4:
            res.style.color = 'Pink'
            res.innerHTML = 'Wait Wait.. you really doing that?'
            img.setAttribute('src', 'imagens/m-r.png')
            break;
        default:
            res.style.color = 'red'
            res.innerHTML = `Sorry, we dont have meal ${meal}.`

    }
    img.style.margin = 'auto'
    res.style.font = 'normal 14pt Arial'
    res.style.textShadow = '2px 2px 2px rgba(0,0,0,0.5)'
    res.style.border = 'solid 2px black'
    res.style.margin = 'auto'
    res.style.height = '160px'
    res.style.width = '460px'
    res.style.background = 'rgba(0,0,0,0.3)'
    res.appendChild(img)
}