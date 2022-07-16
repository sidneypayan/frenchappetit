const imagesContainer = document.querySelector('.regions__cards')

imagesContainer.addEventListener('mouseover', e => {
	if (e.target.className === 'regions__img') {
		console.log('mouseover')
		e.target.style.display = 'none'
		e.target.nextElementSibling.style.display = 'block'
		e.target.nextElementSibling.nextElementSibling.style.display = 'none'
	}
})

imagesContainer.addEventListener('mouseout', e => {
	if (e.target.className === 'regions__img-overlay') {
		console.log('mouseout')
		e.target.style.display = 'none'
		e.target.previousElementSibling.style.display = 'block'
		e.target.nextElementSibling.style.display = 'block'
	}
})
