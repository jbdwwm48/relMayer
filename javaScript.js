// secret

function displaySecret() {
    var secret = document.getElementById("secret");
    if (secret.style.display === "none") {
        secret.style.display = "flex";
    } else {
        secret.style.display = "none";
    }
}

// Lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

const closeButton = document.createElement ('button');
    closeButton.textContent = 'X';
    closeButton.className = 'button__close';
    lightbox.appendChild(closeButton);

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
})

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
})