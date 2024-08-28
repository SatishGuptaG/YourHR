document.getElementById('signupForm').addEventListener('submit', function(event) {
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault(); // Prevent form submission
    }
});
