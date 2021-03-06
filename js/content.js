

$(document).ready(function() {

  // this is the landing page
  $.get("locations_tab.html", function( my_var ) {
      $( "#content" ).html(my_var);
  });

  // fill content with appropriate page
  $( "a" ).click(function(e) {
    var id = $(this).attr("id");
    if ( id == "home" ) {
      $.get("home_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "locations" ) {
      $.get("locations_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "pricing" ) {
      $.get("pricing_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "about_the_doctors" ) {
      $.get("doctor_bio_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "patient_info_sheets" ) {
      $.get("home_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }


    else if ( id == "patient_feedback" ) {
      $.get("patient_feedback_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "contact_info" ) {
      $.get("contact_info.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

    else if ( id == "helpful_links" ) {
      $.get("home_tab.html", function( my_var ) {
          $( "#content" ).html(my_var);
      });
    }

  });
});
