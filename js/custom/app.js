(function () {
  jQuery(function($) {

    var $toggleElem = $('.js-toggle'),
        $homeSlider = $('.js-topListSlider'),
        $matchHeightElem = $('.js-matchHeight'),
        $showmap = $('.js-showMap'),
        $showvideo = $('.js-showVideo');

    var mediaBP = {
      medium: 'only screen and (min-width: 750px)',
      large: 'only screen and (min-width: 1024px)',
      largeDown: 'only screen and (max-width: 1024px)',
      xlarge: 'only screen and (min-width: 1200px)',
      xxlarge: 'only screen and (min-width: 1440px)'
    };

    $toggleElem.click(function (e) {
      e.preventDefault();
      var $toggleTarget = $($(this).data('toggle'));
      $toggleTarget.toggleClass('is-open');
      e.stopPropagation();
      hideOnClickOutside($(this).data('toggle'));
    });

    function hideOnClickOutside(element) {
      $(document).click(function(event) {
        if(!$(event.target).closest(element).length) {
          if($(element).is(":visible")) {
            $(element).toggleClass('is-open');
          }
        }
      });
    }


    $('.toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);
        var atr = $this.attr('data-img');

        if ($this.next().hasClass('show')) {
            $this.removeClass('active');
            $this.next().removeClass('show').slideUp(350);

        } else {
            $this.parent().parent().find('li .inner').removeClass('show').slideUp(350);
            $this.parent().parent().find('li .active').removeClass('active');
            $this.addClass('active');
            $this.next().addClass('show').slideToggle(350);
        }

        $(".accordion__img").hide();
        $('#js-data-img_'+atr).fadeIn(500);

    });


      $homeSlider.slick({
          mobileFirst: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          arrows: true,
          prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev" aria-label="Previous"><span class="icon-back"></span></button>',
          nextArrow: '<button id="next" type="button" class="slick-arrow slick-next" aria-label="Next"><span class="icon-next"></span></button>'
  });


      $('.image-popup').magnificPopup({
          type: 'image',
          removalDelay: 300,
          mainClass: 'mfp-fade'
      });


      $('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: 'auto',

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
      });


      //for open map
        $('.openmap_content__title span, .icon-pin').click(function () {
          $showmap.slideToggle(500);
      });

      $('.factsvideo_content .btn').click(function (e) {
          e.preventDefault();
          $showvideo.slideToggle(500);
      });

  });
})();
