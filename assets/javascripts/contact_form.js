$(document).ready(function() {
  var ERROR_MESSAGES = {
    "_replyto" : {
      "required" : "Das E-Mail Feld wird benötigt, damit ich Ihnen antworten kann.",
      "not_valid" : "Mit Ihre E-Mail Adresse scheint etwas nicht zu stimmen."
    },
    "_subject" : {
      "required" : "Der Betreff wird benötigt, damit ich einen Überblick bekomme."
    },
    "message" : {
      "required" : "Ohne Nachricht weiß ich nicht, wie ich Ihnen helfen kann."
    }
  }

  $('#offerform form input[type="submit"]').click(function(e) {
    e.preventDefault();

    var errors = 0

    var email = $('#offerform input[name="_replyto"]');
    var subject = $('#offerform input[name="_subject"]');
    var message = $('#offerform textarea[name="message"]');

    var fields = [email, subject, message];

    $.each(fields, function(index, field) {
      if(field.val() == '') {
        errors++;
        field.addClass('has_error');
        show_error_message(field, ERROR_MESSAGES[field.attr('name')]['required']);
      } else {
        field.removeClass('has_error');
        clear_error_message(field);
      }
    });

    if(email.val() != '') {
      if(validate_email(email.val())) {
        email.removeClass('has_error');
        clear_error_message(email);
      } else {
        errors++;
        email.addClass('has_error');
        show_error_message(email, ERROR_MESSAGES['_replyto']['not_valid']);
      }
    }

    if(errors == 0) {
      // send_per_ajax(email.val(), subject.val(), message.val());
      $('#offerform form').addClass('form-sended');
      $('#offerform .thank-you-notice').show();
    }
  });
});

function send_per_ajax(email, subject, message) {
  $.ajax({
      url: "https://formspree.io/daniel@richertproduction.de",
      method: "POST",
      data: {email: email, subject: subject, message: message},
      dataType: "json"
  }).done(function() {
    // alert( "success" );
  });
};

function validate_email(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
};

function show_error_message(field, message) {
  field.siblings('.error-message').text(message).show('slow');
}

function clear_error_message(field) {
  field.siblings('.error-message').hide('slow').text('');
}
