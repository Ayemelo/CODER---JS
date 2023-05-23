let letra1 = "a"
let letra2 = "u"
let letra3 = "t"
let letra4 = "o"

let letra1Adivinada = false
let letra2Adivinada = false
let letra3Adivinada = false
let letra4Adivinada = false

let sigueJugando = true

while(sigueJugando === true)
{
    let letraUsuario = prompt("Ingresa una letra. \n Pista: palabra de 4 letras")

    chequearLetra(letraUsuario)

    if (letra1Adivinada  & letra2Adivinada & letra3Adivinada & letra4Adivinada) {
        sigueJugando = false
    }
}

function chequearLetra(letra){
    if (letra == letra1) {
        letra1Adivinada = true
        alert("Letra 1 adivinada!")
    }else if(letra == letra2){
        letra2Adivinada = true
        alert("Letra 2 adivinada!")
    }else if(letra == letra3){
        letra3Adivinada = true
        alert("Letra 3 adivinada!")
    }else if(letra == letra4){
        letra4Adivinada = true
        alert("Letra 4 adivinada!")
    }else{
        alert("Esa letra no existe en la palabra!")
    }
}


alert("Palabra adivinada! PALABRA:AUTO")