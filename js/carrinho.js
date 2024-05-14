const cupomInput = document.querySelector('#cupom')
const cupomBtn = document.querySelector('#cupom-btn')
const precoEl = document.querySelector('#preco')
let preco = 12579.0

function aplicarDesconto(desconto) {
	return preco - (preco * desconto) / 100
}

function formatarPreco(preco) {
	return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

cupomBtn.addEventListener('click', () => {
	if (cupomInput.value == 'HARMONIA10') {
		preco = aplicarDesconto(10)
		precoEl.innerHTML = formatarPreco(preco)
		cupomBtn.disabled = true
		alert("Cupom aplicado com sucesso!")
	} else {
		alert("Cupom não existe")
	}
})

window.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(location.search)
})
