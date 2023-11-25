const textElement = document.getElementById("text");
const texts = ["Web Developer", "Discord Bot Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeText, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, 100);
    }
}

typeText();


// Function to open a popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// Function to close a popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Event listeners for opening and closing popups
document.getElementById("about").addEventListener("click", () => openPopup("popup-about"));
document.getElementById("close-about").addEventListener("click", () => closePopup("popup-about"));

document.getElementById("works").addEventListener("click", () => openPopup("popup-works"));
document.getElementById("close-works").addEventListener("click", () => closePopup("popup-works"));

document.getElementById("suggestions").addEventListener("click", () => openPopup("popup-suggestions"));
document.getElementById("close-suggestions").addEventListener("click", () => closePopup("popup-suggestions"));

document.getElementById("placeholder").addEventListener("click", () => openPopup("popup-placeholder"));
document.getElementById("close-placeholder").addEventListener("click", () => closePopup("popup-placeholder"));

document.getElementById("social").addEventListener("click", () => openPopup("popup-social"));
document.getElementById("close-social").addEventListener("click", () => closePopup("popup-social"));

function openContactMenu() {
    var contactMenu = document.getElementById('contact-pop-up-menu');
    contactMenu.style.display = 'block';
  }
  
  function closeContactMenu() {
    var contactMenu = document.getElementById('contact-pop-up-menu');
    contactMenu.style.display = 'none';
  }
  