// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let SubmitButton = document.getElementById('submit-button');
let ContactPage = document.getElementById('contact-page');

SubmitButton.addEventListener('click', () => {
    let msg = document.createElement('p');
    msg.textContent = "Thank you for your message";
    msg.style.fontSize = '24px';

    ContactPage.innerHTML = '';
    ContactPage.append(msg);
});