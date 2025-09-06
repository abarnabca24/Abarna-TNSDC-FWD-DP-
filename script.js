// Contact Form Submission

document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault(); // Stop page reload

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  // Simple validation (just for demo)

  if (name && email && message) {

    document.getElementById("responseMsg").textContent =

      "Thank you, " + name + "! Your message has been received.";

    document.getElementById("responseMsg").style.color = "green";

    // Clear form

    document.getElementById("contactForm").reset();

  } else {

    document.getElementById("responseMsg").textContent =

      "Please fill in all fields.";

    document.getElementById("responseMsg").style.color = "red";

  }

});