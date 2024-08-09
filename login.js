$(".message a").click(function () {
   $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
 });
 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values of the input fields
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Hardcoded credentials for demonstration
  var correctUsername = "admin";
  var correctPassword = "123";

  // Check if the entered credentials match the hardcoded ones
  if (username === correctUsername && password === correctPassword) {
      document.getElementById('message').innerText="Welcome";
      // Redirect to a new page if the credentials are correct
      window.location.href = "home.html";
  } else {
      // Display an error message if the credentials are incorrect
      document.getElementById('message').innerText = "Invalid username or password. Please try again.";
  }
});
