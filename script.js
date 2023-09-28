document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2 + window.scrollX;
        const eyeY = eyeRect.top + eyeRect.height / 2 + window.scrollY;
        const angle = Math.atan2(event.clientX - eyeX, eyeY - event.clientY); // Note the inversion here
        const rotation = angle * (180 / Math.PI) + 90; // Adjust the rotation angle
        eye.style.transform = `rotate(${rotation}deg)`;
    });
});

const button = document.getElementById('toggleButton');
const eyes = document.querySelectorAll('.eye');
const passwordInput = document.getElementById('passwordInput');

let eyesHidden = false;
let passwordMode = false;

button.addEventListener('click', function () {
    eyesHidden = !eyesHidden;

    // Toggle the visibility of the eyes with a fade-out effect
    eyes.forEach(function (eye) {
        if (eyesHidden) {
            gsap.to(eye, {
                opacity: 0, duration: 0.5, onComplete: () => {
                    eye.style.visibility = 'hidden';
                }
            });
        } else {
            eye.style.visibility = 'visible';
            gsap.to(eye, { opacity: 1, duration: 0.5 });
        }
    });

    // Toggle between text and password input
    if (passwordMode) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    passwordMode = !passwordMode;
});

// JavaScript (script.js)
const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    // Update the position of the custom cursor based on mouse movements
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});
