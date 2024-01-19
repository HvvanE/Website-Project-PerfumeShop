$(function(){
  // Include
$('.header-include').load('include/header.html')

  // Dark Mode
$('.mode').click(function(){
  $(this).toggleClass('on')
})
$('.mode').click(function(){
  $('body, header, .logo, section:nth-child(odd), .section-header, .category, .proposal, review').toggleClass('dark')
})

// Tab menu
$('.tab1').show()
$('.btn-tab a:nth-child(1)').click(function(){
  $('.tab1').show()
  $('.tab2').hide()
  $('.tab3').hide()
  $('.tab4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn-tab a:nth-child(2)').click(function(){
  $('.tab1').hide()
  $('.tab2').show()
  $('.tab3').hide()
  $('.tab4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn-tab a:nth-child(3)').click(function(){
  $('.tab1').hide()
  $('.tab2').hide()
  $('.tab3').show()
  $('.tab4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn-tab a:nth-child(4)').click(function(){
  $('.tab1').hide()
  $('.tab2').hide()
  $('.tab3').hide()
  $('.tab4').show()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})

// Accordion
$('.accordion-content').eq(0).show()
$('.accordion-title').click(function(){
  $(this).siblings('.accordion-content').stop().slideUp()
  $(this).next().stop().slideToggle()
})

// Slick Slide
$('.welcome-slider').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '265px',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.new-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.review-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

})