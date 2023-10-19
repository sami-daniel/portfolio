document.getElementById('insertNumber').addEventListener('input', () => {
    let telIn = document.getElementById('insertNumber');
    let telFormat = telIn.value;

    telFormat = telFormat.replace(/\D/g, '');

    if (telFormat.length > 0) {
        telIn.value = `(${telFormat.substring(0, 2)}`;

        if (telFormat.length > 2) {
            telIn.value += `) ${telFormat.substring(2, 7)}`;

            if (telFormat.length > 7) {
                telIn.value += `-${telFormat.substring(7, 11)}`;
            }
        }
    }
});


document.getElementById('insertName').addEventListener('input', () => {
    let input = document.getElementById('insertName');
    let value = input.value;

    if (value.length > 0) {
        input.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
});

const brightnessRange = document.getElementById('ranger');
brightnessRange.value = 100
brightnessRange.addEventListener('input', function() {
    const brightnessValue = brightnessRange.value;
    if (brightnessValue > 25) {
        document.body.style.filter = `brightness(${brightnessValue}%)`;
    }
});