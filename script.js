console.log("script sourced");

$(document).ready(onReady);

function onReady() {
  console.log("check onReady");

  $.ajax({
    url: 'http://www.omdbapi.com/?t=arrival',
    success: function(response){
        console.log("resonse: ", response);
        console.log(response.Title);
        console.log(response.Plot);
        $('#container').append('<img src = " ' + response.Poster + '">');

        $('.title').append(response.Title);
        $('.plot').append(response.Plot);
        // $('#container').append('<img src = " ' + response.Poster + '">');
        $('.note').append("The aliens' 'mysterious spacecraft' are called pods- just like us!");
//I'm getting a lot of yellow warning lines, and I don't know why! Oops.
    }

  });
}
