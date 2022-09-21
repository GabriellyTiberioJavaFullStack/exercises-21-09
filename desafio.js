alert('Você quer calcular quanto vai pagar pelo produto adquirido? Aperte OK.')

const preçoproduto = parseFloat(prompt('Qual o preço de etiqueta do produto?'))

const mensagem = ` 
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro.
Digite 2 para pagamento em cheque.
Digite 3 para pagamento em cartão.
`
const metododepag = prompt(mensagem)

console.log(preçoproduto)
console.log(metododepag)

// || = OU
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




