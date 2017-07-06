// JQuery UI Menu
$( function() {
  $( "#menu" ).menu();
} );

// JQuery UI Spinner
$( function() {
  var spinner = $( "#spinner" ).spinner();
} );

// Change label based on menu selection
$( ".celcius" ).click(function() {
  $( ".scale" ).text( "\u2103 : " );
  $( ".scale-spin" ).removeClass("hide");
});

$( ".fahrenheit" ).click(function() {
  $( ".scale" ).text( "\u2109 : " );
  $( ".scale-spin" ).removeClass("hide");
});
