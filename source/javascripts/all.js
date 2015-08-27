//= require_tree .

$('.c-registry-card__gift').on('click', function() {
  $(this).toggleClass('c-button--disabled');
  $(this).parent('.c-registry-card__info').next('.c-registry-card__qty').toggleClass('active');
})
