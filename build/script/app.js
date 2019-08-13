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
<<<<<<< HEAD
  var offset = 0;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 1000);
  event.preventDefault();
=======
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
});


// Animate scroll
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'), 
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});

// Wow
$(document).ready(function(){
  new WOW().init();
});

// 3D letters
$(document).ready(function(){
   $('.hero__title').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('.hero__title').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
>>>>>>> master
});


// Slider - Switcher
var tabLinks = document.querySelectorAll(".services__menu a");
var tabPanels = document.querySelectorAll(".services__desc--block");

for (let i = 0; i<tabLinks.length; i++) {

  let el = tabLinks[i];
<<<<<<< HEAD

  el.addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector(".services__menu li.active").classList.remove("active");
    document.querySelector(".services__desc--block.active").classList.remove("active");
    document.querySelector(".services-bg.active").classList.remove("active");

    var parentListItemIndex = el.parentElement.getAttribute('data-tab'),
    panelContentIndex = '[data-tab-index="' + parentListItemIndex + '"]';

    el.parentElement.classList.add("active");

=======

  el.addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector(".services__menu li.active").classList.remove("active");
    document.querySelector(".services__desc--block.active").classList.remove("active");
    document.querySelector(".services-bg.active").classList.remove("active");

    var parentListItemIndex = el.parentElement.getAttribute('data-tab'),
    panelContentIndex = '[data-tab-index="' + parentListItemIndex + '"]';

    el.parentElement.classList.add("active");

        // document.querySelector(panelContentIndex).classList.add("active");
>>>>>>> master
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
  dots: false,
  centerMode: true,
  focusOnSelect: true,
<<<<<<< HEAD
  responsive: [{
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      variableWidth: true
    }
  }]
});

// FancyBox
// $(".industrial__img").on('click', function() {

//   $.fancybox.open([
//   {
//     src  : 'img/industrial-1.jpeg',
//     opts : {
//       thumb   : 'img/industrial-1.jpeg'
//     }
//   },
//   {
//     src  : 'img/industrial-3.jpeg',
//     opts : {
//       thumb   : 'img/industrial-3.jpeg'
//     }
//   },
//   {
//     src  : 'img/industrial-2.jpeg',
//     opts : {
//       thumb   : 'img/industrial-2.jpeg'
//     }
//   }
//   ], {
//     infobar: false,
//     toolbar: false,
//     transitionEffect: 'circular'
//   });
// });

$('[data-fancybox="images"]').fancybox({
  afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});

// $(".web__img").on('click', function() {

//   $.fancybox.open([
//   {
//     src  : 'img/web-2.jpg',
//     opts : {
//       thumb   : 'img/web-2.jpg'
//     }
//   },
//   {
//     src  : 'img/web-1.jpeg',
//     opts : {
//       thumb   : 'img/web-1.jpeg'
//     }
//   },
//   {
//     src  : 'img/web-3.jpg',
//     opts : {
//       thumb   : 'img/web-3.jpg'
//     }
//   }
//   ], {
//     infobar: false,
//     toolbar: false,
//     transitionEffect: 'circular'
//   });
// });

// $(".photo__img").on('click', function() {

//   $.fancybox.open([
//   {
//     src  : 'img/cat.jpg',
//     opts : {
//       thumb   : 'img/cat.jpg'
//     }
//   },
//   {
//     src  : 'img/printing-machine.jpg',
//     opts : {
//       thumb   : 'img/printing-machine.jpg'
//     }
//   },
//   {
//     src  : 'img/building.jpg',
//     opts : {
//       thumb   : 'img/building.jpg'
//     }
//   }
//   ], {
//     infobar: false,
//     toolbar: false,
//     transitionEffect: 'circular'
//   });
// });

=======
  responsive: [
  {
    breakpoint: 901,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerPadding: '20px'
    }
  }]
});

// FancyBox
$('[data-fancybox]').fancybox({
  toolbar: false,
  infobar: false,
  transitionEffect: "circular"
}
);
>>>>>>> master

// Slider - Blog

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
  centerMode: false,
  focusOnSelect: true,
<<<<<<< HEAD
  responsive: [{
    breakpoint: 1025,
    settings: {
      vertical: false,
      slidesToShow: 2.5
=======
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1.6,
      slidesToScroll: 1,
      infinite: true,
      vertical: false
    }
  },
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 1,
      vertical: false
>>>>>>> master
    }
  }]
});

// Map

var map;

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var myLatLng = {lat: 54.597139, lng: -5.928875};
=======
var myLatLng = {lat: 54.597720, lng: -5.928854};
>>>>>>> master
function initMap() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 15,
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
>>>>>>> master
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
<<<<<<< HEAD
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
=======
    });
  } else {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.604891, lng: -5.928642},
      zoom: 14,
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
>>>>>>> master
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
<<<<<<< HEAD
    }
    ]
  });

  var marker = new google.maps.Marker({
    position: {lat: 51.741761, lng: -1.231600},
=======
    })
  }

  var marker = new google.maps.Marker({
    position: {lat: 54.604891, lng: -5.928642},
>>>>>>> master
    map: map,
    icon: 'img/map-marker.png'
  });
}



const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmmoVDg4kbMva-Bkm-NTO_-6X6GcqIIHs&callback=initMap';
document.head.appendChild(googleMapsScript);