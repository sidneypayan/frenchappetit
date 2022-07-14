import('./overlay').then(function (page) {
	page.renderOverlay()
})

import('./menuSlider').then(function (page) {
	page.renderMenuSlider()
})

import('./map').then(function (page) {
	page.renderMap()
})

import('./modal').then(function (page) {
	page.renderModal()
})
