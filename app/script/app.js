// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.header').removeClass('open-nav');
    } else {
        $('.header').addClass('open-nav');
    }
});

$('.header li a').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.header').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


// Slider - Switcher
var tabLinks = document.querySelectorAll(".services__menu a");
var tabPanels = document.querySelectorAll(".services__desc--block");

for (let i = 0; i<tabLinks.length; i++) {

    let el = tabLinks[i];

    el.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(".services__menu li.active").classList.remove("active");
        document.querySelector(".services__desc--block.active").classList.remove("active");
        document.querySelector(".bg.active").classList.remove("active");

        var parentListItemIndex = el.parentElement.getAttribute('data-tab'),
            panelContentIndex = '[data-tab-index="' + parentListItemIndex + '"]';

        el.parentElement.classList.add("active");
        
        // document.querySelector(panelContentIndex).classList.add("active");
          $(panelContentIndex).addClass("active");


    });
}



// Background
var tabBg = $(".block-industrial");

$('.services__menu--link').on('click', function(){
  if (tabBg.css('display') == 'block') {
  console.log('ttttt');
  $('.services').css('background-image','url(img/about-1.jpg)');
}
})




// Slider - Portfolio

$('.portfolio__images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.portfolio__menu'
});
$('.portfolio__menu').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.portfolio__images',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
 
});



$('.blog__slider--big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.blog__slider--small'
});
$('.blog__slider--small').slick({
  vertical: true,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  asNavFor: '.blog__slider--big',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  prevArrow: $('.btn__prev'),
  nextArrow: $('.btn__next')
});


// Map

var map;

var myLatLng = {lat: 51.740460, lng: -1.231846};
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 18,
          disableDefaultUI: true,
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
});

var marker = new google.maps.Marker({
position: {lat: 51.741761, lng: -1.231600},
map: map,
icon: 'img/map-marker.png'
});
}

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmmoVDg4kbMva-Bkm-NTO_-6X6GcqIIHs&callback=initMap';
document.head.appendChild(googleMapsScript);