document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); //prevents default submission

        const username = form.elements.username.value;
        const password = form.elements.password.value;

        // server-side authentication 
        const authenticated = authenticate(username, password);

        if (authenticated) {
            window.location.href = 'premium.html'; // Redirect to premium page
        } else {
            alert('Incorrect username or password');
        }
    });

    // server-side authentication
    function authenticate(username, password) {
        // Send credentials to server, receive authentication response
        // Return true if valid, false otherwise
        if (username === "admin" && password === "password") {
            return true;
        } else {
            return false;
        }
    }
});
