document.addEventListener("DOMContentLoaded", function () {
  // Set hero section backgrounds
  $(".hero__items.set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  // Initialize Hero Slider
  $(".hero__slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });

  // Initialize Best Sellers Carousel
  $(".best-sellers__carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // Best Sellers Action Buttons
  $('.best-sellers__item__actions .action-btn').on('click', function(e) {
    e.preventDefault();
    const $button = $(this);
    const action = $button.data('action');
    const id = $button.data('id');

    // Add ripple effect
    const ripple = $('<div class="ripple"></div>');
    const x = e.pageX - $button.offset().left;
    const y = e.pageY - $button.offset().top;
    
    ripple.css({
      top: y - 10,
      left: x - 10
    });

    $button.append(ripple);
    setTimeout(() => ripple.remove(), 1000);

    // Add active state
    $button.addClass('active');
    setTimeout(() => $button.removeClass('active'), 500)
  });});