document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation (replace with actual authentication in a real application)
    if (username === 'rohidas' && password === 'Shinde@20') {
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = 'dashboard.html'; 
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
