// Welcome message
console.log('JavaScript Project Loaded Successfully!');

// Get DOM elements
const container = document.querySelector('.container');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');

// Add some interactivity
heading.addEventListener('click', function() {
    heading.style.color = getRandomColor();
    console.log('Heading color changed!');
});

paragraph.addEventListener('click', function() {
    paragraph.textContent = 'You clicked me! Click again for surprise!';
    paragraph.style.fontSize = '1.5rem';
});

// Generate random color
function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add animation on load
window.addEventListener('load', function() {
    container.style.animation = 'fadeIn 1s ease-in';
});

console.log('All event listeners attached successfully!');
