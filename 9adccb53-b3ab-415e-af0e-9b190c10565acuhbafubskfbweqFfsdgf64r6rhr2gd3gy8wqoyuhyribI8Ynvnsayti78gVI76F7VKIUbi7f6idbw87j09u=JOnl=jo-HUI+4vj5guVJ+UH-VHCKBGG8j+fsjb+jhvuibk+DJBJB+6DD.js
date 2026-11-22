    var timeoutID;
    // Set inactivity time in milliseconds (e.g., 5 minutes = 300000 ms)
    var inactivityTime = 60000; 
    var redirectURL = '1baf1f89-7864-48af-a5e5-2e2c8ba97a29cuhbafubskfbweqFfsdgf64r6rhr2gd3gy8wqoyuhyribI8Ynvnsayti78gVI76F7VKIUbi7f6idbw87j09u=JOnl=jo-HUI+4vj5guVJ+UH-VHCKBGG8j+fsjb+jhvuibk+DJBJB+6DD.html'; 
    // The page to redirect to

    function startTimer() {
        // Clear any existing timer
        clearTimeout(timeoutID);
        // Set a new timer
        timeoutID = setTimeout(redirectToPage, inactivityTime);
    }

    function resetTimer() {
        startTimer();
    }

    function redirectToPage() {
        // The alert must occur before the redirect, as the page unloads afterwards.
        alert("Session expired. Please log in again.");
        // Redirect to the specified URL.
        window.location.href = redirectURL;
    }

    // Add event listeners to detect user activity.
    // These events will call resetTimer() to restart the timeout.
    window.onload = startTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onclick = resetTimer;
    document.ontouchstart = resetTimer; // For touch devices
    document.onscroll = resetTimer;