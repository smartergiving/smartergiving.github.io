/*
  Directive by HTML5 UP
  html5up.net | @n33co
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  skel.breakpoints({
    wide: '(max-width: 1680px)',
    normal: '(max-width: 1280px)',
    narrow: '(max-width: 980px)',
    narrower: '(max-width: 840px)',
    mobile: '(max-width: 736px)',
    mobilep: '(max-width: 480px)'
  });

  $(function() {

    var $window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        $body.removeClass('is-loading');
      });

    // Fix: Placeholder polyfill.
      $('form').placeholder();

    // Prioritize "important" elements on narrower.
      skel.on('+narrower -narrower', function() {
        $.prioritize(
          '.important\\28 narrower\\29',
          skel.breakpoint('narrower').active
        );
      });

    // Form submission via Formspree
    var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/hello@smartergiving.org',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        },
        success: function(data) {
          $contactForm.find('.alert--loading').hide();
          $contactForm.append('<div class="alert alert--success">Message sent!</div>');
        },
        error: function(err) {
          $contactForm.find('.alert--loading').hide();
          $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
        }
      });
    });

  });

})(jQuery);
