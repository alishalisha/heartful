//= require_tree .

$('.c-registry-card__cart').on('click', function() {
  $(this).parent('.c-registry-card__info').next('.c-registry-card__qty').toggleClass('active');
})
