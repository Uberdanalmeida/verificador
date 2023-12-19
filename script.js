function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txt = document.getElementById('tano')
    var res = document.getElementById('ver')

    if(txt.value.length == 0 || txt.value > ano) {
        alert('Verifique os dados.')
    }

    else {
        var sexo = document.getElementsByName('sex')
        var idade = ano - (txt.value)
        var imag = document.getElementById('foto')
        var genero = ''

        if(sexo[0].checked) {
            genero = 'Homem'
            
            if(idade >= 0 && idade < 5) {
                imag.src = 'criança-menino.jpg'
                res.innerHTML = `Criança de ${idade} anos.`
            }
            else if(idade < 12) {
                imag.src = 'menino.jpg'
                res.innerHTML = `Menino de ${idade} anos.`
            }
            else if(idade < 25) {
                imag.src = 'jovem-homem.jpg'
                res.innerHTML = `Jovem de ${idade} anos.`
            }
            else if(idade < 50) {
                imag.src = 'homem.jpg'
                res.innerHTML = `${genero} de ${idade} anos.`
            }
            else {
                imag.src = 'idoso.jpg'
                res.innerHTML = `${genero} de ${idade} anos.`
            }
        }

        
        if(sexo[1].checked) {
            genero = 'Mulher'
            
            if(idade >= 0 && idade < 5) {
                imag.src = 'criança-menina.jpg'
                res.innerHTML = `Criança de ${idade} anos.`
            }
            else if(idade < 12) {
                imag.src = 'menina.jpg'
                res.innerHTML = `Menina de ${idade} anos.`
            }
            else if(idade < 25) {
                imag.src = 'jovem-mulher.jpg'
                res.innerHTML = `Jovem de ${idade} anos.`
            }
            else if(idade < 50) {
                imag.src = 'mulher (2).jpg'
                res.innerHTML = `${genero} de ${idade} anos.`
            }
            else {
                imag.src = 'idosa.jpg'
                res.innerHTML = `${genero} de ${idade} anos.`
            }
        }
    }
}