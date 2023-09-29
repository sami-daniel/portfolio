var btn = document.querySelector('input[type="submit"]')
btn.addEventListener('click',sendEmail());


function sendEmail() {
    const from = document.getElementById('insertEmail')
    const subject = document.getElementById('insertSubject')
    const message = document.getElementById('mensagem')

    Email.send({
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: 'samidaniel125@gmail',
        From: from.value,
        Subject: subject.value,
        Body: message.value
    }).then(
        message => alert(message)
    );
}
