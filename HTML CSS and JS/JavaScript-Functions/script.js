var date = new Date()

function ham() {
    var hours = fh(date.getHours())
    var min = fm(date.getMinutes())
    var msg = document.getElementById('showham')
    var img = document.createElement('img')
    img.setAttribute('id', 'caminho')


    if (hours <= 12) {
        document.getElementById('bodyall').style.background = 'lightgreen'
        img.setAttribute('src', 'imagens/manhaf.png')
        msg.innerHTML = `${hours}:${min} - Good morning!`
    } else if (hours <= 18) {
        document.getElementById('bodyall').style.background = 'lightblue'
        img.setAttribute('src', 'imagens/tardef.png')
        msg.innerHTML = `${hours}:${min} - Good evening!`
    } else if (hours <= 23) {
        document.getElementById('bodyall').style.background = 'gray'
        img.setAttribute('src', 'imagens/luaf.png')
        msg.innerHTML = `${hours}:${min} - Good night!`
    }

    function fh(h) {
        if (h < 10) {
            h = '0' + h
        }
        return h
    }
    
    function fm(m) {
        if (m < 10) {
            m = '0' + m
        }
        return m
    }
    msg.style.fontFamily = 'Arial'
    msg.style.fontSize = '42px'
    msg.appendChild(img)
}

function dd() {
    var day = date.getDate()
    var msg2 = document.getElementById('showdd')
    msg2.style.fontFamily = 'Arial'
    msg2.style.fontSize = '42px'
    msg2.innerHTML = `${day}`
}

function dfd() {
    var fd = date.toDateString()
    document.getElementById('showdfd').style.fontFamily = 'Arial'
    document.getElementById('showdfd').style.fontSize = '42px'
    document.getElementById('showdfd').innerHTML = `${fd}`
}

function ts() {
    var text = document.getElementById('txt1').value
    var check = document.getElementsByName('char')
    var modtxt = document.getElementById('showchar')

    modtxt.style.fontFamily = 'Arial'
    modtxt.style.fontSize = '42px'

    if (check[0].checked) {
        modtxt.innerHTML = `${text}`.toUpperCase()
    } else if (check[1].checked) {
        modtxt.innerHTML = `${text}`.toLowerCase()
    }

}

function dotw() {
    var dw = date.getDay()
    switch (dw) {
        case 0:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Sunday'
            break;
        case 1:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Monday'
            break;
        case 2:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Tuesday'
            break;
        case 3:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Wednesday'
            break;
        case 4:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Thursday'
            break;
        case 5:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Friday'
            break;
        case 6:
            document.getElementById('showdotw').style.fontSize = '42px'
            document.getElementById('showdotw').style.fontFamily = 'Arial'
            document.getElementById('showdotw').innerHTML = 'Saturday'
            break;
        default:
            break;
        
            
    }
}