function CalculadoraDePartidas(vitórias , derrotas){
    let saldoVitorias = vitórias - derrotas
    return saldoVitorias
}

let resultado = CalculadoraDePartidas(87, 34)
let nivel

if (resultado <= 10){
    nivel = "Ferro"
}
else if (resultado <= 20){
    nivel = "Bronze"
}
else if (resultado <= 50){
    nivel = "Prata"
}
else if (resultado <= 80){
    nivel = "Ouro"
}
else if (resultado <= 90){
    nivel = "Diamante"
}
else if (resultado <= 100){
    nivel = "Lendàrio"
}
else {
    nivel = Imortal
}


console.log ("O Herói tem de saldo " + resultado + " está no nível " + nivel)