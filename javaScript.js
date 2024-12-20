// Secret

// Function to toggle the display of an element with id 'secret'
function displaySecret() { 
    var secret = document.getElementById("secret");
    // If the element is currently hidden, show it; otherwise, hide it
    if (secret.style.display === "none") {
        secret.style.display = "flex";
    } else {
        secret.style.display = "none";
    }
}

// Lightbox

// Create a div element to serve as the lightbox overlay
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Select all images on the page
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        // Activate the lightbox
        lightbox.classList.add('active');
        // Create a new img element and set its source to the clicked image's source
        const img = document.createElement('img');
        img.src = image.src;
        // Remove any existing child elements from the lightbox
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        // Append the new img element to the lightbox
        lightbox.appendChild(img);
    });
});

// Add an event listener to the lightbox to close it when clicked
lightbox.addEventListener('click', e => {
    // Ensure the click is on the lightbox itself, not its children
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

// Birth Countdown

function daysUntilDate(targetDate) {
    // Get the current date
    const currentDate = new Date();
    // Calculate the difference in milliseconds between the target date and the current date
    const differenceMs = targetDate.getTime() - currentDate.getTime();
    // Convert the difference from milliseconds to days and return the result
    return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
}

// Define the target date
const targetDate = new Date('2035-04-05');
// Get the element where the result will be displayed
const countdownElement = document.getElementById('countdown');
// Display the result in the DOM
countdownElement.innerHTML = `Re-l naîtra dans ${daysUntilDate(targetDate)} jours.`;

// Form validation

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formName = document.getElementById('formName').value;
    const formMail = document.getElementById('formMail').value;
    const formTextArea = document.getElementById('formTextArea').value;
    let valid = true;

    // Check if formName is filled or send alert
    if (formName.trim() === '') {
        valid = false;
        alert('Le champ Nom est obligatoire.');
    }

    // Check if formMail is filled or send alert
    if (formMail.trim() === '') {
        valid = false;
        alert('Le champ Email est obligatoire.');
    }

    // Check if formTextArea is filled with at least 50 characters
    if (formTextArea.trim().length < 50) {
        valid = false;
        alert('Le champ Message doit contenir au moins 50 caractères.');
    }

    // Check all inputs and send form if they are valid
    if (valid) {
        // console.log to emulate form submission
        console.log('Formulaire soumis avec succès !');
    }
});
