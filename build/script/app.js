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


// Animate scroll
$(window).scroll(function(){
         var $sections = $('section');
  $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$("nav").on("click","a", function (event) {
        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 800);
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
});

$(document).ready(function(){
   $('.hero__title').on('touchmove', function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('.hero__title').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
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
    document.querySelector(".services-bg.active").classList.remove("active");

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
  dots: false,
  centerMode: true,
  focusOnSelect: true,
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
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1,
      infinite: true,
      vertical: false
    }
  },
  {
    breakpoint: 865,
    settings: {
      slidesToShow: 2,
      vertical: false
    }
  },
  {
    breakpoint: 595,
    settings: {
      slidesToShow: 1.6,
      vertical: false
    }
  },
  {
    breakpoint: 390,
    settings: {
      slidesToShow: 1,
      vertical: false
    }
  }]
});

// Map

var map;

var myLatLng = {lat: 54.597720, lng: -5.928854};
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
    })
  }

  var marker = new google.maps.Marker({
    position: {lat: 54.604891, lng: -5.928642},
    map: map,
    icon: 'img/map-marker.png'
  });
}

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmmoVDg4kbMva-Bkm-NTO_-6X6GcqIIHs&callback=initMap';
document.head.appendChild(googleMapsScript);

// Open Form
var openModal = function() {
    $('.modal-wrapper').css('display', 'flex');
  }

  var closeModal = function() {
    $('.modal-wrapper').css('display', 'none');
  }

  $('.open-btn').click(function(e) {
    e.preventDefault();
    openModal();
  });

  $('.modal-wrapper').on('click', function(e) {
        let modal = $(".contact__form");
        if (!modal.is(e.target)
            && modal.has(e.target).length === 0) {
              closeModal();
        }
  });


