/* ========================================================================== 
 * jQuery plugin to make alert messages under bootstrap fixed header
 * ========================================================================== */


// Body padding required
// The fixed navbar will overlay your other content, unless you add padding to the top of the <body>. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.

// Copy
// body { padding-top: 70px; }
// Make sure to include this after the core Bootstrap CSS.

(function ( $ ) {
   "use strict";
    $.fn.setBodyPad = function() {
      
      var dynamicNavbar = $('.navbar-dynamic-height');
      var slideMessage = $('.navbar-dynamic-height .slide-message');
      var slideMessageHeight = $(slideMessage).height();

      var setBodyPad = function() {
          var navHeight = $(dynamicNavbar).height();
          $('body').css('paddingTop', function() {
              return 20 + navHeight; 
          });

      };

      if(dynamicNavbar) {   
          setBodyPad();
          $(window).resize(setBodyPad);
          $(slideMessage).on('closed.bs.alert', function () {
            setBodyPad();
            $(window).resize(setBodyPad).off();
          });

      };

      $(window).scroll(function() {
          if ($(this).scrollTop()> slideMessageHeight) {
              $(slideMessage).slideUp();
          } else {
            $(slideMessage).slideDown();
          }
      });
    };
 
}( jQuery ));



$('.navbar').setBodyPad();