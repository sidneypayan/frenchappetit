export function renderMap() {
	mapboxgl.accessToken =
		'pk.eyJ1IjoiZWtubyIsImEiOiJja29zbGt6ODcwMm4wMzFsbDVyY2Rub2VuIn0.-mSFgOLIKA4S1NSM2N50kw'
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: '15',
		center: [7.26957, 43.6976],
	})

	var marker = new mapboxgl.Marker({
		color: '#555',
	})
		.setLngLat([7.26957, 43.6976])
		.addTo(map)
}
