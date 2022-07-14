import menu from './menuData'

export function renderMenuSlider() {
	const menuContainer = document.querySelector('.menu__page')
	const prevBtn = document.querySelector('.prev')
	const nextBtn = document.querySelector('.next')

	let index = 0

	function menuOutput(index) {
		const output = `
  <div class="menu__right-category">${menu[index].category}</div>



  ${menu[index].plats.map(
		plat => `
    <div class="menu__right-dish-name">
    ${plat.nom} - ${plat.prix}€
    </div>
    <div class="menu__right-dish-description">
    ${plat.description}
    </div>
  `
	)}
  `
		menuContainer.innerHTML = output
	}

	menuOutput(index)

	prevBtn.addEventListener('click', () => {
		if (index <= 0) {
			return
		}
		index -= 1
		menuOutput(index)
	})

	nextBtn.addEventListener('click', () => {
		if (index >= menu.length - 1) {
			return
		}
		index += 1
		menuOutput(index)
	})
}
