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
});

$( ".fahrenheit" ).click(function() {
  $( ".scale" ).text( "\u00b0F: " );
  $( ".scale-spin" ).removeClass("hide");
  $( ".scale-in" ).val("fahrenheit");
});

$( ".rankine" ).click(function() {
  $( ".scale" ).text( "\u00b0R: " );
  $( ".scale-spin" ).removeClass("hide");
  $( ".scale-in" ).val("rankine");
});

// Handle conversion
$( ".scale-spin" ).on("submit",function(e) {
  e.preventDefault();
  var curr_scale = $( ".scale-in" ).val();
  var temp = $( "#spinner" ).val();
  temp = parseInt(temp);

  // calculate temperature
  if (curr_scale == 'celcius') {
    $( ".scale" ).text( "\u00b0C: " );
    $( ".k-input" ).val(computeCelcius(temp));
  }

  if (curr_scale == 'fahrenheit') {
    $( ".scale" ).text( "\u00b0F: " );
    $( ".k-input" ).val(computeFahrenheit(temp));
  }

  if (curr_scale == 'rankine') {
    $( ".scale" ).text( "\u00b0R: " );
    $( ".k-input" ).val(computeRankine(temp));
  }
});

function computeCelcius(c_val) {
  var temp = c_val + 273.15;
  return temp.toFixed(2);
}

function computeFahrenheit(f_val) {
  var temp = (f_val + 459.67) * 5 / 9;
  return temp.toFixed(2);
}

function computeRankine(r_val) {
  var temp = r_val * 5 / 9;
  return temp.toFixed(2);
}
