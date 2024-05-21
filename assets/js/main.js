// Scrolling behavior of the navigation bar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const offset = 200; // Adjust the offset value as needed

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > navbar.clientHeight + offset) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up or at the top
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// Add CSS transition for smooth animation
navbar.style.transition = 'transform 0.3s ease-in-out';

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

// Line by Line Printing at Home
(function() {
    // Function to start typing effect line by line
    function startTyping() {
        const lines = document.querySelectorAll('#typing-text .typing-line');
        const speed = 5; // Adjust typing speed (milliseconds)
        let delay = 1000; // Initial delay before starting typing (milliseconds)

        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.width = 'auto'; // Set width to 'auto' to show full line
                line.style.opacity = 1; // Show the text with opacity transition
            }, delay);
            delay += (line.textContent.length * speed) + 300; // Adjust delay between lines (milliseconds)
        });
    }

    // Start typing effect when the document content is loaded
    document.addEventListener('DOMContentLoaded', startTyping);

    // Flash the last line after typing animation
    setTimeout(() => {
        document.querySelector('#typing-text .typing-line:last-child').classList.add('flash-once');
    }, 1); // Adjust the delay based on your typing animation duration
})();


// Button

// JavaScript code to show button after a delay

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var button = document.getElementById('scroll-to-services');
        button.style.opacity = '1'; // Set opacity to fully visible
    }, 5000); // Adjust the delay (in milliseconds)
});

// JavaScript code for smooth scrolling animation
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('scroll-to-services');
    var targetSection = document.getElementById('our_services');

    button.addEventListener('click', function() {
        scrollTo(targetSection.offsetTop, 1000); // Adjust the duration (in milliseconds)
    });

    function scrollTo(to, duration) {
        if (duration <= 0) return;
        var difference = to - window.scrollY;
        var perTick = difference / duration * 50;

        setTimeout(function() {
            window.scrollTo(0, window.scrollY + perTick);
            if (window.scrollY === to) return;
            scrollTo(to, duration - 10);
        }, 10);
    }
});

// JavaScript code to hide and show elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.querySelector('.delayed')) {
                setTimeout(() => {
                    entry.target.querySelector('.delayed').classList.add('show');
                }, 1000); // 2000 milliseconds = 2 seconds delay
            }
            if (entry.target.querySelector('.delayed-chart1')) {
                setTimeout(() => {
                    entry.target.querySelector('.delayed-chart1').classList.add('show');
                }, 2000); // 2000 milliseconds = 2 seconds delay
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));