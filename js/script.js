/* global $ */
/* global SC */
console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
var userInput = $('#search').val();
var soundcloud = "https://api.soundcloud.com/tracks?q=" + userInput + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";

$("#searchButton").click(function(){
    
    $.ajax({
   url: soundcloud,
   method: "GET",
   success: function(response){
       $("#searchedResults").show();
       $("#songTitle").html('<p>' + response[0].title + '</p>');
        
   }
    
    });
});

// I don't understand any of the javascript code lol