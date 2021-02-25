function initMap() {
	// add your code here
	L.mapquest.key = 'LL8GWZtL3AjUU2QUKhCvuqUBF0AYW8O1';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.8789272, -117.2370064],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	//Add marker to the map
	L.marker([32.88,-117.236]).addTo(map);
}