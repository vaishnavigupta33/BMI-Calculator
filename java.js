const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please provide a valid height.';
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide a valid weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let range = '';

        if (bmi < 18.6) {
            range = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            range = 'Normal weight';
        } else {
            range = 'Overweight';
        }

        results.innerHTML = `<span>Your BMI is ${bmi} (${range})</span>`;
    }
});
