function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value >= ano || fano.value == String()) {
        alert("[ERROR]- Tente novamente! -[ERROR]")
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade >= 10 && idade < 22) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade >= 24 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else if (idade >= 60 && idade < 100) {
                //Idoso
                img.setAttribute('src', 'imagens/idosom.png')
            } else {
                //Morto
                img.setAttribute('src', 'imagens/caveira.png')
                document.getElementById('caveira').style.textAlign = 'center'
                document.getElementById('caveira').innerHTML = 'Achamos que o senhor está morto...'
            }
        } else if (sex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade >= 10 && idade < 24) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade >= 24 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagens/adultof.png')
            } else if (idade >= 60 && idade < 100) {
                //Idoso
                img.setAttribute('src', 'imagens/idosof.png')
            } else {
                //Morto
                img.setAttribute('src', 'imagens/caveira.png')
                document.getElementById('caveira').style.textAlign = 'center'
                document.getElementById('caveira').innerHTML = 'Achamos que a senhora está morta...'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)

    }

}
