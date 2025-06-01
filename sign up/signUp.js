document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const signupForm = document.querySelector('form');

    // Add submit event listener
    signupForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Get form inputs
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        // Basic validation
        if (nameInput.value.trim() === '' || 
            emailInput.value.trim() === '' || 
            passwordInput.value === '' || 
            confirmPasswordInput.value === '') {
            alert('Please fill in all fields');
            return;
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match');
            return;
        }
        
        // Save email to localStorage (to display in verification page)
        localStorage.setItem('userEmail', emailInput.value);
        
        // Redirect to email verification page
        window.location.href = 'verify-email.html';
    });
});