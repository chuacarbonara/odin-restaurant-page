const contentDiv = document.getElementById("content");

function createContact(){
    const contactContainer = document.createElement("div");
    contentDiv.textContent = "";
    contactContainer.classList.add("container");

    const contactTitleContainer = document.createElement("div");
    contactTitleContainer.classList.add("title-container");
    contactTitleContainer.innerHTML = "<h1>CONTACT US</h1>";
    contactContainer.appendChild(contactTitleContainer);

    const contactDescription = document.createElement("div");
    contactDescription.classList.add("desc-container");
    contactDescription.innerHTML = "<p>You may reach us through our hotline <strong>7-777-777</strong> or through our email <strong>tipsycakes@7mail.com</strong>.<br><br>We value your comments and suggestions, and we hope to hear from you!</p>"
    contactContainer.appendChild(contactDescription);

    return contactContainer
}

export function contactTab(){
    contentDiv.appendChild(createContact());
}