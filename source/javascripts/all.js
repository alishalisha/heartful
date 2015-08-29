//= require_tree .

$('.c-registry-card__gift').on('click', function() {
  $(this).toggleClass('c-button--disabled');
  $(this).parent('.c-registry-card__info').next('.c-registry-card__qty').toggleClass('active');
})

var d = $('.c-hero');
var heroHeight = d.height();
console.log('hero height: ' + heroHeight);

var e = $('.c-nav');
var navHeight = e.outerHeight();
console.log('nav height: ' + navHeight);

// when the hero's bottom offset to the top
// is less than
// or equal to navHeight do something
document.onscroll = function() {
  if (window.scrollY >= (heroHeight - navHeight)) {
    console.log('woot: ' + window.scrollY);
    $('.c-nav').css('color', 'black');
  } else {
    $('.c-nav').css('color', 'white');
  }
};


