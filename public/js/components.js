// Function to load and include HTML components
function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return;
    }

    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            element.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Function to update all contact information
function updateContactInfo() {
    // Update email
    const emailElements = document.querySelectorAll('#contact-email');
    const email = 'anoor.13pal@gmail.com'; // Central place to update email
    emailElements.forEach(element => {
        element.textContent = email;
    });

    // Update phone
    const phoneElements = document.querySelectorAll('#contact-phone');
    const phone = '+91 9560676526'; // Central place to update phone
    phoneElements.forEach(element => {
        element.textContent = phone;
    });

    // Update year in copyright
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer components if their containers exist
    if (document.getElementById('header-container')) {
        loadComponent('header-container', '/components/header.html');
    }
    
    if (document.getElementById('footer-container')) {
        loadComponent('footer-container', '/components/footer.html');
    }

    // Update contact information after a short delay to ensure components are loaded
    setTimeout(updateContactInfo, 100);
});