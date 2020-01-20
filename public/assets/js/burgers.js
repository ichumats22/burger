$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('Create Button clicked!');

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: 0
    };

    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#devour").on("click", function(event) {
   event.preventDefault();

    console.log('Devour button clicked!')
    var id = $(this).data('id');
    var newStatus = $(this).data('newstatus');
    var updatedBurger = {
      devoured: newStatus
    };
  
    console.log(updatedBurger);
    
    // Send the POST request.
    $.ajax('/api/burgers/' + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {
        console.log(`Burger devoured!`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#delete").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});