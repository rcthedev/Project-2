$(document).ready(function(){
    let signUpForm = $("form.signup");
    let emailInput = $("input#email-input");
    let passwordInput = $("input#password-input");

    
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
   
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });


  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members");
        
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

