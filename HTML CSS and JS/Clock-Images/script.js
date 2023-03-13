function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bkg = document.getElementsByTagName('body')[0]
    var data = new Date()
    var hora = fixhora(data.getHours())
    var min = fixminutos(data.getMinutes())
    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if (hora >= 05 && hora < 13) {
        //Bom dia.
        img.src = 'imagens/manha.png'
        bkg.style.background = '#F2BB9B'
    } else if (hora > 12 && hora < 19) {
        //Boa tarde.
        img.src = 'imagens/tarde.png'
        bkg.style.background = '#0487D9'
    } else {
        //Boa noite.
        img.src = 'imagens/noite.png'
        bkg.style.background = '#282C40'
    }

}

function fixhora(h) {
    if (h < 10) {
        h = "0" + h;
    }
    return h;
}

function fixminutos(m) {
    if (m < 10) {
        m = "0" + m;
    }
    return m;
}