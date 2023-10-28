

  $(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  // Form submission
  $(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      // Perform form validation and submission logic here
    });
  });

