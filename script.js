// Initialize DOM elements
const preMessage = document.getElementById('pre-message');
const flowerContainer = document.getElementById('flowerContainer');
const messageBtn = document.getElementById('messageBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Event listeners
yesBtn.addEventListener('click', () => {
    preMessage.style.display = 'none';
    flowerContainer.style.display = 'block';
    setTimeout(() => {
        messageBtn.style.display = 'block';
    }, 2000);
});

noBtn.addEventListener('click', () => {
    document.querySelector('h2').textContent = "Sorry...";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

messageBtn.addEventListener('click', () => {
    window.location.href = "https://m.me/writtenbyjack?text=Hello%20ilikeyou%20po!";
});

// Start music on user interaction
document.body.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    audio.play();
}, {once: true});
