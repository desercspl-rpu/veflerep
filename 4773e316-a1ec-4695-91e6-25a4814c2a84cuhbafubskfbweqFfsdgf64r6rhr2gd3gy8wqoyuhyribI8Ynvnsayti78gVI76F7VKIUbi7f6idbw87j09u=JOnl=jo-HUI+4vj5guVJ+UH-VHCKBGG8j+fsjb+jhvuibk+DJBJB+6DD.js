document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation (replace with actual authentication in a real application)
    if (username === 'checkmate_ops' && password === 'Cspl@#!3692') {
        window.location.href = '9b00f522-3ea8-4c9a-b0e5-b85869db5585cuhbafubskfbweqFfsdgf64r6rhr2gd3gy8wqoyuhyribI8Ynvnsayti78gVI76F7VKIUbi7f6idbw87j09u=JOnl=jo-HUI+4vj5guVJ+UH-VHCKBGG8j+fsjb+jhvuibk+DJBJB+6DD.html'; 
    }
    // else if (username === '0' && password === '0') {
    //     window.location.href = '#'; }
       
    else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});