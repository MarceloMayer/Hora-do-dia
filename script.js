let identificadorHORA = document.getElementById('identificador')
let imagem = document.getElementById('img')
let hor = new Date()

let horaAtual = hor.getHours()
let min= hor.getMinutes()


identificadorHORA.innerHTML =  `Agora são ${horaAtual} horas e ${min} minutos`

imagem.src = ""
if (horaAtual>18) {
    imagem.src = "img/noite.jpg"//das 18 até 3h da manhã
} else if(horaAtual>3 && horaAtual<12 ){//3 da manhã até meio-dia
    imagem.src = "img/dia.jpg"
}else{
    imagem.src = "img/tarde.jpg"//de meio-dia até 18h
}
