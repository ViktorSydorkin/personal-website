const form = document.getElementById('form');
document.querySelector('button').onclick = check;

function retrieveFromValue(event) {
    event.preventDefault();

    const fields = document.querySelectorAll('input, textarea');
    const values = {};

    fields.forEach(field => {
        const {name, value} = field;
        values[name] = value;
    });
    sendEmail(values["address"], values["message"]);
}

function check() {
    if (document.querySelector('.small').value !== "") {
        form.addEventListener('submit', retrieveFromValue);
    } else {
        alert("Type in your email!")
    }
}

function sendEmail(address, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "the.dark.brightness.com@gmail.com",
        Password: "gdjdigbhnqqypvkc",
        To: "the.dark.brightness.com@gmail.com",
        From: "the.dark.brightness.com@gmail.com",
        Subject: `${address} залишив заявку`,
        Body: `From: ${address} <br/> Message:${message}`,
    }).then(
    );
}