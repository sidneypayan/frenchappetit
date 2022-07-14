export function renderModal() {
	const modal = document.querySelector('.modal-booking')
	const modalBtn = document.querySelector('.hero__btn')
	const closeModalBtn = document.querySelector('.modal-booking__close')
	const containerHeader = document.querySelector('.container-header')

	modalBtn.addEventListener('click', () => {
		modal.style.display = 'flex'
		containerHeader.style.display = 'none'
	})

	closeModalBtn.addEventListener('click', () => {
		modal.style.display = 'none'
		containerHeader.style.display = 'block'
	})
}
