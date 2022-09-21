alert('Quer saber quanto você pagara pela gasolina hoje? Aperte OK.')

const goua = `Você deseja alcool ou gasolina
Digite A para alcool 
Digite G para gasolina `

const alga = prompt(goua)

console.log(alga)

if (alga == 'A') {
    alert(`Você selecionou alcool!`)

    const l = `Quantos litros você deseja?`
    const litros = prompt(l) 

    if (litros <= 25 ) {
    const preçofinal = (1.90 * litros) * 0.98
    alert(`Você pagara ${preçofinal} reais.`)

    }
    
    if (litros >= 25 ) {
    const preçofinal = (1.90 * litros) * 0.94
    alert(`Você pagara ${preçofinal} reais.`)
    }
    
}

else if (alga =="G" ) {
    alert(`Você selecionou gasolina!`)

    const l = `Quantos litros você deseja?`
    const litros = prompt(l) 

    if (litros <= 25 ) {
    const preçofinal = (1.90 * litros) * 0.97
    alert(`Você pagara ${preçofinal} reais.`)
    }

    if (litros >= 25 ) {
    const preçofinal = (2.70 * litros) * 0.95
    alert(`Você pagara ${preçofinal} reais.`)
    }

}
