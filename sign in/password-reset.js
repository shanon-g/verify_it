document.addEventListener('DOMContentLoaded', function() {
    // Display the email from localStorage
    const emailElement = document.querySelector('.email');
    const userEmail = localStorage.getItem('userEmail') || 'your email';
    emailElement.textContent = userEmail;
    
    // Get all code input fields
    const codeInputs = document.querySelectorAll('.code-input');
    
    // Add focus and input handling
    codeInputs.forEach((input, index) => {
        // Auto-focus first input
        if (index === 0) {
            input.focus();
        }
        
        // Handle input - move to next field when digit entered
        input.addEventListener('input', function() {
            if (this.value.length === 1) {
                if (index < codeInputs.length - 1) {
                    codeInputs[index + 1].focus();
                }
                
                // Check if all inputs are filled
                checkAllFilled();
            }
        });
        
        // Handle backspace to go to previous field
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
                codeInputs[index - 1].focus();
            }
        });
    });
    
    // Form submission
    const verifyForm = document.querySelector('form');
    verifyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check if all fields are filled
        let allFilled = true;
        codeInputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            // Redirect to input page
            window.location.href = '../input/inputPage.html';
        } else {
            alert('Please enter the complete verification code');
        }
    });
    
    // Resend code link
    const resendLink = document.querySelector('.resend-link a');
    resendLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('A new verification code has been sent');
    });
    
    function checkAllFilled() {
        let allFilled = true;
        codeInputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            // Enable auto-submission after a short delay
            setTimeout(() => {
                window.location.href = '../input/inputPage.html';
            }, 500);
        }
    }
});