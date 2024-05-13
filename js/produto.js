const miniatures = document.querySelectorAll("img[data-img='miniature']")
const mainImg = document.querySelector("img[data-img='main']")

miniatures.forEach(img => {
	img.addEventListener('click', () => {
		mainImg.src = img.src

		disableMiniatures()
		img.classList.remove('opacity-25')
	})
})

function disableMiniatures() {
	miniatures.forEach(img => {
		img.classList.add('opacity-25')
	})
}
