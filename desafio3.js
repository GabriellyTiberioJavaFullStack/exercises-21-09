alert(`Iremos calcular seu peso ideal!`)

const a = ` Qual a sua altura?`
const altura = prompt(a)
console.log(altura)

const g = ` Qual o seu genêro?`
const genêro = prompt(g)
console.log(genêro)

if (genêro == 'feminino') {
    const pesoideal = parseInt (altura * 62.1) - 58
    alert(`Seu genêro é feminino, sendo assim seu peso ideal deveria ser ` + pesoideal + `Kg.`)

}

if (genêro == 'masculino') {
    const pesoideal = parseInt (altura * 72.7) - 44.7
    alert(`Seu genêro é masculino, sendo assim seu peso ideal deveria ser ` + pesoideal + `Kg.`)
    
}


