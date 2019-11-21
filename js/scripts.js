$(document).ready(function(){
  $("#blanks").submit(function(event){

      var firstNameInput = $("input#firstName").val();
      var lastNameInput = $("input#lastName").val();
      var streetAddressInput = $("input#streetAddress").val();
      var secondLineAddressInput = $("input#secondLineAddress").val();
      var phoneInput = $("input#phone").val();
      var emailInput = $("input#email").val();

    $(".receipt").prepend(firstNameInput);
    $(".receipt").prepend(lastNameInput);
    $(".receipt").prepend(streetAddressInput);
    $(".receipt").prepend(secondLineAddressInput);
    $(".receipt").prepend(phoneInput);
    $(".receipt").prepend(emailInput);

    $(".receipt").show();

    event.preventDefault();
  });


});
