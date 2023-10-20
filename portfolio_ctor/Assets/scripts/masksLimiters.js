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

let lastName = "";

document.getElementById('insertName').addEventListener('input', () => {
    let input = document.getElementById('insertName');
    let value = input.value.trim(); // Remove espaços em branco no início e no fim

    if (value !== lastName) {
        lastName = value;

        // Dividir a entrada em palavras separadas por espaço
        let words = value.split(' ');

        // Capitalizar a primeira letra de cada palavra
        let capitalizedWords = words.map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word;
        });

        // Junte as palavras novamente com espaços
        let formattedName = capitalizedWords.join(' ');

        // Atualize o valor do campo de entrada com o nome formatado
        input.value = formattedName;
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