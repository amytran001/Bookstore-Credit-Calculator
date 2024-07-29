document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('creditForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const studentName = document.getElementById('studentName').value.trim();
        const gpa = parseFloat(document.getElementById('gpa').value);
        
        if (!studentName || isNaN(gpa)) {
            resultDiv.textContent = 'Please enter valid data.';
            return;
        }

        const credit = calculateCredit(gpa);
        resultDiv.textContent = `${studentName}, your bookstore credit is $${credit.toFixed(2)}.`;
    });

    function calculateCredit(gpa) {
        if (gpa >= 3.5) {
            return 100; // High GPA, more credit
        } else if (gpa >= 3.0) {
            return 75;
        } else if (gpa >= 2.5) {
            return 50;
        } else {
            return 25; // Low GPA, minimal credit
        }
    }
});
