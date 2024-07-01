document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Dummy login validation
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'user@example.com' && password === 'password') {
        localStorage.setItem('loggedIn', true);
        updateNavbar();
        window.location.href = 'index.html'; // Redirect to home page after login
    } else {
        alert('Invalid email or password');
    }
});
