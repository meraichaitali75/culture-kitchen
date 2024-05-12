"use strict";

$(document).ready(function () {

  var users = [
    { email: "chaitali@123gmail.com", password: "Chaitalimerai@123" },
    { email: "sumit@123gmail.com", password: "Sumitarya@123" },
    { email: "ajay@gmail.com", password: "Ajayodedara@123" },
    { email: "susheela@gmail.com", password: "SusheelaHegde@123" },
  ];

  $('#loginForm').submit(function (event) {
    event.preventDefault();

    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailHelp = document.getElementById("emailHelp");
    var passwordHelp = document.getElementById("passwordHelp");
    var successMsg = document.getElementById("success-msg");
    var isValidUser = false;

    if (email.trim() === "") {
      emailHelp.innerText = "Please enter email!";
      emailHelp.style.display = "block"; // Show the error message
      successMsg.innerText = ""; // Clear any previous success message
      return false;
    } else if (!emailRegex.test(email)) {
      emailHelp.innerText = "Please enter a valid email address!";
      emailHelp.style.display = "block"; // Show the error message
      successMsg.innerText = ""; // Clear any previous success message
      return false;
    } else {
      emailHelp.innerText = ""; // Clear any previous error message
      emailHelp.style.display = "none"; // Hide the error message
    }

    // Password validation
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;
    if (!passwordRegex.test(password)) {
      passwordHelp.innerText =
        "Password must contain at least one lowercase letter, one uppercase letter, one special character, and be at least 6 characters long!";
      passwordHelp.style.display = "block"; // Show the error message
      successMsg.innerText = ""; // Clear any previous success message
      return false;
    } else {
      passwordHelp.innerText = ""; // Clear any previous error message
      passwordHelp.style.display = "none"; // Hide the error message
    }

    // Check if the entered email and password match any user in the array
    users.forEach(function (user) {
      if (user.email === email && user.password === password) {
        isValidUser = true;
      }
    });

    if (isValidUser) {
      // Show success message
      successMsg.innerText = "Login successful!";

      // Redirect to index.html after a delay
      setTimeout(function () {
        console.log("Redirecting to index.html");
        window.location.href = "index.html";
      }, 3000);

      return true;
    } else {
      event.preventDefault();
      successMsg.innerText = "Invalid email or password!";

      return false;
    }
  });
});
