//= require_tree .

$('.c-registry-card__gift').on('click', function() {
  $(this).toggleClass('disabled');
  $(this).parent('.c-registry-card__info').next('.c-registry-card__qty').toggleClass('active');
})
