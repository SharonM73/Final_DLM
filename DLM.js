function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const sectionToShow = document.getElementById(id);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
        setTimeout(() => {
            sectionToShow.classList.add('active');
        }, 10);
    }

    document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    document.getElementById("mainNav").classList.remove('active');
}

document.getElementById('phishingCheckForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const url = document.getElementById('link').value;
    const resultDiv = document.getElementById('phishingResult');
    if (isPhishingWebsite(url)) {
        resultDiv.textContent = "This is a Phishing Website!";
    } else {
        resultDiv.textContent = "This is not a Phishing Website!";
    }
});

function isPhishingWebsite(url) {
    // Add your phishing detection logic here
    // For now, this is a placeholder function
    return false; // Placeholder return value
}

window.onload = function() {
    showSection('info');
}
