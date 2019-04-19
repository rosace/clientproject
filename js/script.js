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
       $("#secondBody").append('<a href="' + response[0].permalink_url  + '">hi</a>');
        
       console.log("hi");
   }
        
    });
});
SC.initialize({
 client_id: '5aa8e389ba4e24b6106af5159ab3e344'
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});

// I don't understand any of the javascript code lol