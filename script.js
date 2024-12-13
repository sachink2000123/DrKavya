// Get the modal, button, and close elements
var modal = document.getElementById("trialModal");
var btn = document.getElementById("trialBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex"; // Show the modal
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal if clicked outside
    }
}
// Get the modal, button, and close elements
var modal = document.getElementById("trialModal");
var btn = document.getElementById("trialBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// JavaScript can go here (e.g., validation, animations, etc.)
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}
