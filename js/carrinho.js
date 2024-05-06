window.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(location.search)

	console.log(params)
	console.log(params.get('cor'))
	console.log(params.get('qtd'))
})
