const imagesContainer = document.querySelector('.regions__cards')

imagesContainer.addEventListener('mouseover', e => {
	if (e.target.className === 'regions__img') {
		e.target.style.display = 'none'
		e.target.nextElementSibling.style.display = 'block'
		e.target.nextElementSibling.nextElementSibling.style.display = 'none'
	}
})
