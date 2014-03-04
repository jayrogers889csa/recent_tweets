$(document).ready(function() {
  $('#enter_username').on('submit', function(event) {
    event.preventDefault();

    $('#results').html('<img src="/images/ajax-loader.gif"/>');

    var username = $("input[name='handle']").val();

    $.post(('/' + username), function(serverResponse) {
      // console.log(serverResponse);
      $('#results').html(serverResponse);
    })
  })
});

