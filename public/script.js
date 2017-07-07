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
  $( ".scale" ).text( "\u00b0C: " );
  $( ".scale-spin" ).removeClass("hide");
  $( ".scale-in" ).val("celcius");
  $( ".kelvins" ).addClass("hide");
});

$( ".fahrenheit" ).click(function() {
  $( ".scale" ).text( "\u00b0F: " );
  $( ".scale-spin" ).removeClass("hide");
  $( ".scale-in" ).val("fahrenheit");
  $( ".kelvins" ).addClass("hide");
});

$( ".rankine" ).click(function() {
  $( ".scale" ).text( "\u00b0R: " );
  $( ".scale-spin" ).removeClass("hide");
  $( ".scale-in" ).val("rankine");
  $( ".kelvins" ).addClass("hide");
});

$( ".convert" ).click(function() {
  $( ".kelvins" ).removeClass("hide");
});
