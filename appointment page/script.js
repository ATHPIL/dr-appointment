$(document).ready(function(){
    $('#appointmentForm').submit(function(event){
      event.preventDefault(); // Prevent default form submission behavior
      
      // Simulate a successful booking
      var isSuccess = true; // Change to false to simulate an error scenario
  
      if (isSuccess) {
        $('#message').html('<p class="text-success">Booking was successful!</p>').show();
        // Reset the form after successful booking
        $('#appointmentForm')[0].reset();
      } else {
        $('#message').html('<p class="text-danger">Booking failed. Please try again later.</p>').show();
      }
  
      // Return false to prevent form submission and page reload
      return false;
    });
  });
  