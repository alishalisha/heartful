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

document.onscroll = function() {
  if (window.scrollY >= (heroHeight - navHeight)) {
    $('.c-nav').removeClass('c-nav--transparent');
    $('.c-nav').addClass('animate');
  } else {
    $('.c-nav').removeClass('animate');
    $('.c-nav').addClass('c-nav--transparent');
  }
};


