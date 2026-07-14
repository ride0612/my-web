// ========== script.js – external JavaScript ==========

// ----- 1. Contact form validation (right sidebar) -----
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // basic validation
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            feedback.textContent = '⚠️ All fields are required.';
            feedback.style.color = '#dc2626';
            return;
        }

        // simple email format check (contains @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            feedback.textContent = '⚠️ Please enter a valid email address.';
            feedback.style.color = '#dc2626';
            return;
        }

        // success
        feedback.textContent = '✅ Message sent! (demo)';
        feedback.style.color = '#16a34a';
        contactForm.reset();
    });
});


// ----- 2. Trivia: BMI calculator (JavaScript logic) -----
document.addEventListener('DOMContentLoaded', function() {
    const calcBtn = document.getElementById('bmiCalcBtn');
    if (!calcBtn) return;  // only on trivia page

    const heightInput = document.getElementById('heightCm');
    const weightInput = document.getElementById('weightKg');
    const bmiValueSpan = document.getElementById('bmiValue');
    const bmiCategorySpan = document.getElementById('bmiCategory');

    calcBtn.addEventListener('click', function() {
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);

        // validation
        if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
            bmiValueSpan.textContent = '⚠️ Invalid input';
            bmiCategorySpan.textContent = '—';
            return;
        }

        // BMI = weight (kg) / (height in meters)^2
        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        const bmiRounded = bmi.toFixed(1);

        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal';
        else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
        else category = 'Obese';

        bmiValueSpan.textContent = bmiRounded;
        bmiCategorySpan.textContent = category;

        // optional: change color feedback
        bmiCategorySpan.style.color = 
            category === 'Normal' ? '#16a34a' : 
            category === 'Underweight' ? '#f59e0b' : 
            category === 'Overweight' ? '#f97316' : '#dc2626';
    });
});


// ----- 3. Extra: small dynamic update for homepage (optional) -----
// we can also add a little interactive touch, but it's not required.
// However we keep it minimal and clean.
console.log('✨ External JS loaded: BMI + form validation ready.');