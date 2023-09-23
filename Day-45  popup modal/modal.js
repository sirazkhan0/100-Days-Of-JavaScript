
// Function to display the modal after a time delay
function displayModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Time delay in milliseconds (e.g., 5000ms = 5 seconds)
var timeDelay = 10000;

// Set a timeout to display the modal after the time delay
setTimeout(displayModal, timeDelay);

// Close the modal when the close button is clicked
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = closeModal;
