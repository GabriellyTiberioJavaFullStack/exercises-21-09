alert('Você quer calcular quanto vai pagar pelo produto adquirido? Aperte OK.')

let preçoproduto = parseFloat(prompt('Qual o preço de etiqueta do produto?'))

while (isNaN(preçoproduto) || preçoproduto <= 0) {
    alert('O preço digitado é inválido. Por favor, informe o preço apenas com números, sem carácteres especiais (letras ou acentos)')
    preçoproduto = parseFloat(prompt('Qual o preço do produto?')) 
}

const mensagem = ` 
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro.
Digite 2 para pagamento em cheque.
Digite 3 para pagamento em cartão.
`

let metododepag = prompt(mensagem)

while (isNaN(metododepag) || metododepag < 1 || metododepag > 3) {
    alert('Método de pagamento inválido. Selecione novamente')
    metododepag = parseInt(prompt(mensagem))
}

console.log(preçoproduto)
console.log(metododepag)

if (metododepag == 1 || metododepag == 2 ) { 
    const preçofinal = preçoproduto * 0.9
    alert(`O preço final do pagamento é ${preçofinal} reais.`)
} 

else if (metododepag == 3 ) { 
    alert(`Você selecionou cartão!`)
    const parcelas = parseInt(prompt(`Informe a quantidade de parcelas`))
    

    if (parcelas == 1 ) {
    const preçofinal = preçoproduto * 0.85
    alert(`O preço final do produto é ${preçofinal} reais.`)
    }
    
    else if (parcelas == 2 ) {
    alert(`O preço final do pagamento é ${preçoproduto} reais.`)

    }
    
    else  {
    const preçofinal = (preçoproduto + (preçoproduto * 0.10)) 
    alert(`O preço final do produto é ${preçofinal} reais.`)
      
    }     
}




