// Mobile menu
$(document).ready(function () {
	$('[data-sidenav]').sidenav();
});

// Yandex Map API

ymaps.ready(init);
function init(){     
	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 7
	});
	myMap.controls
	.remove('zoomControl')
	.remove('button')
	.remove('FullscreenControl')
	.remove('GeolocationControl')
	.remove('RouteButton')
	.remove('TrafficControl')
	.remove('RouteEditor');
	myMap.behaviors.disable([
		'drag',
		'scrollZoom'
		]);
}

// WOW

wow = new WOW({
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       true,       // default
	live:         true        // default
});
wow.init();


// ========== Sticky Header

$(window).scroll(function() {
	if ($(window).scrollTop() >= 200) {
		$('.header__wrap').addClass("sticky");
	}
	else{
		$('.header__wrap').removeClass("sticky");
	}
});