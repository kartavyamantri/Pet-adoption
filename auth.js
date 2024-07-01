function updateNavbar() {
    const loginLink = document.getElementById('login-link');
    if (!loginLink) return; // Ensure the login link exists

    if (localStorage.getItem('loggedIn') === 'true') {
        loginLink.textContent = 'Logout';
        loginLink.href = '#';
        loginLink.onclick = function() {
            localStorage.removeItem('loggedIn');
            updateNavbar();
            window.location.href = 'index.html'; // Redirect to home page after logout
        };
    } else {
        loginLink.textContent = 'Login';
        loginLink.href = 'login.html';
        loginLink.onclick = null; // Remove the click event for login link
    }
}

// Update the navbar when the page loads
document.addEventListener('DOMContentLoaded', updateNavbar);
