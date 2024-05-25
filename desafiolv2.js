
let resultado = soma(1000,10)

function soma ( vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio
}

let userName = nome("Nicolas")
function nome(userName) {
    console.log("Olá, " + userName + "! Como você está?, espero que você esteja bem =) . seu parametro de VD é " 
    + resultado)
}


if (resultado <10){
    console.log("Seu rank atualmentee é Ferro");
} else if (resultado >=11 && resultado <20){
    console.log("Seu rank atualmente é Bronze");
} else if (resultado >=21 && resultado <50){
    console.log("Seu rank atualmente é Prata");
} else if (resultado >=51 && resultado <80){
    console.log("Seu rank atualmente é Ouro");
} else if (resultado >=81 &&  resultado <90){
    console.log("Seu rank atualmente é Diamante");
} else if (resultado >=91 && resultado <100){
    console.log("Seu rank atualmente Lendário");
} else if (resultado >= 101){
    console.log("Seu rank é Imortal")
}

