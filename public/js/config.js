// Site configuration
const siteConfig = {
    // Contact information
    contactEmail: 'anoor.13pal@gmail.com',
    contactPhone: '+91 9560676526',
    
    // Social media links
    socialMedia: {
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/'
    },
    
    // Company information
    companyName: 'ProfitGrocery',
    companyTagline: 'A premium mobile e-commerce application',
    
    // App download links
    downloadLinks: {
        android: '#',
        ios: '#'
    }
};

// Function to get contact information
function getContactEmail() {
    return siteConfig.contactEmail;
}

function getContactPhone() {
    return siteConfig.contactPhone;
}

// Function to update contact elements on the page
function updateContactElements() {
    document.querySelectorAll('.contact-email').forEach(element => {
        element.textContent = siteConfig.contactEmail;
        if (element.tagName === 'A') {
            element.href = `mailto:${siteConfig.contactEmail}`;
        }
    });

    document.querySelectorAll('.contact-phone').forEach(element => {
        element.textContent = siteConfig.contactPhone;
        if (element.tagName === 'A') {
            element.href = `tel:${siteConfig.contactPhone.replace(/\s+/g, '')}`;
        }
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateContactElements);