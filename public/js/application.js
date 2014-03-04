$(document).ready(function() {
  $('#enter_username').on('submit', function(event) {
    event.preventDefault();

    $('#results').html('<img src="/images/ajax-loader.gif"/><span>One Moment Please...</span>');

    var username = $("input[name='handle']").val();

    $.post(('/' + username), function(serverResponse) {
      $('#results').html(serverResponse);
    })
  })

  $('#submit-tweet').on('click', function(event){
    event.preventDefault();

    var data = {
      tweet: $("textarea[name='tweet']").val()
    }

    console.log(data)
    $('#pending').html('<img src="/images/ajax-loader.gif"/><span>Waiting to Tweet</span>')
    $.post('/tweet', data, function(serverResponse){
      // console.log(serverResponse)
      $('#pending').replaceWith(serverResponse);
    })

  });
});



