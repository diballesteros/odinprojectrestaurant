function contactTab() {
    const headline = document.createElement('h2');
    headline.innerHTML = "Drop us a message";

    const fullname = document.createElement('input');
    fullname.type = "text";
    fullname.name = "Full Name";
    fullname.placeholder = "Full Name";

    const email = document.createElement('input');
    email.type = "text";
    email.name = "Email";
    email.placeholder = "Email";

    const company = document.createElement('input');
    company.type = "text";
    company.name = "Company";
    company.placeholder = "Company";

    const message = document.createElement('input');
    message.type = "text";
    message.name = "Message";
    message.placeholder = "Message";

    const submit = document.createElement('button');
    submit.innerText = 'Submit';

    document.getElementById('tab_content').appendChild(headline);
    document.getElementById('tab_content').appendChild(fullname);
    document.getElementById('tab_content').appendChild(email);
    document.getElementById('tab_content').appendChild(company);
    document.getElementById('tab_content').appendChild(message);
    document.getElementById('tab_content').appendChild(submit);
}

export { contactTab };