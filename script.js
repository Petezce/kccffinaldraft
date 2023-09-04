
    window.addEventListener('scroll', function() {
        const infoBlock = document.querySelector('.info-block');
        const infoSection = document.querySelector('.info-section');
        const infoSectionPosition = infoSection.getBoundingClientRect().top;

        if (infoSectionPosition < window.innerHeight / 1.5) {
            infoBlock.classList.add('slide-in-animation');
        }
    });

    // Calculate the time remaining for the limited-time offer
function calculateCountdown(endTime) {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;
    
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the countdown every second
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date().getTime() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000; // 2 hours and 30 minutes
    
    setInterval(() => {
        countdownElement.textContent = calculateCountdown(endTime);
    }, 1000);
}

updateCountdown();

