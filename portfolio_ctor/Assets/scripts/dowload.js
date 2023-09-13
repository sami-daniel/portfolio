const dowloadButton = document.querySelectorAll('.dowload_button');
const pdfUrl = 'https://samidanieldesigns.netlify.app/Assets/locked/Currículo.pdf'

dowloadButton.forEach(e => {
  e.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.click();
  });
});
