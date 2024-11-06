/* Add your JavaScript to this file */
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from actually submitting

        const email = emailInput.value.trim();

        if (email) {
            // Display thank you message with the entered email
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.color = "green";
        } else {
            // Display error message if email is not entered
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        }

        // Clear the email input field after displaying the message
        emailInput.value = "";
    });
});
