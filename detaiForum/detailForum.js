document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown target (30 hours, 20 minutes, 10 seconds from now)
    const now = new Date();
    const targetTime = new Date(now.getTime() + 30*60*60*1000 + 20*60*1000 + 10*1000);
    
    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial update
    updateCountdown();
    
    function updateCountdown() {
        const currentTime = new Date();
        const difference = targetTime - currentTime;
        
        // If countdown is finished
        if (difference <= 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = '<p>Maintenance complete!</p>';
            return;
        }
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update the display
        document.querySelector('.time-box:nth-child(1) .time-value').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.time-box:nth-child(2) .time-value').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.time-box:nth-child(3) .time-value').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Add functionality to the back button - redirecting to input page
    document.querySelector('.back-btn').addEventListener('click', function() {
        window.location.href = '../input/inputPage.html';
    });
});