alert(`Vamos checar o seu IMC!`)

const a = `Qual a sua altura?`
const altura = Number(prompt(a))
console.log(altura)

const p = `Qual o seu peso aproximado?`
const peso = Number(prompt(p))
console.log(peso)

const IMC = Number(peso / (altura * altura))
const IMC2 = IMC.toFixed(2)

console.log(IMC)
console.log(IMC2)

alert(`Seu IMC é ` + IMC2)

if (IMC2 <= 18.5) {
    alert(`Cuidado! Você está abaixo do peso!`)
}


if (IMC2 <= 18.5 && IMC <= 25) {
    alert(`Parabéns, você está no peso ideal!`)
}


if (IMC2 > 25 && IMC <= 30 ) {
    alert(` Cuidado! Você está acima do peso!`)
}


if (IMC2 >= 30 ) {
    alert(` Cuidado!!! Você está obeso!!!`)
}
