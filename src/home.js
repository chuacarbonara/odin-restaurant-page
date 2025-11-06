const contentDiv = document.getElementById("content");

function createHome(){
    const homeContainer = document.createElement("div");
    contentDiv.textContent = "";
    homeContainer.classList.add("container");

    const homeTitleContainer = document.createElement("div");
    homeTitleContainer.classList.add("title-container");
    homeTitleContainer.innerHTML = "<h1>TIPSY CAKES</h1>";
    homeContainer.appendChild(homeTitleContainer);

    const homeDescription = document.createElement("div");
    homeDescription.classList.add("desc-container");
    homeDescription.innerHTML = "<h2>Indulge in our selection of decadent cakes while sipping on the sweetest liquor you will ever taste. Our menu will send you to sucrose and alcohol heaven!</h2>"
    homeContainer.appendChild(homeDescription);

    const homeTime = document.createElement("div");
    homeTime.classList.add("time-container");
    homeTime.innerHTML = "<p>We are open to serve you <strong>every day</strong> from <strong>2pm</strong> to <strong>2am</strong>.</p>"
    homeContainer.appendChild(homeTime);

    const homeLocation = document.createElement("div");
    homeLocation.classList.add("loc-container");
    homeLocation.innerHTML = "<p>We are located at <strong>777 Euphoria Road, Divine Town.</strong></p>"
    homeContainer.appendChild(homeLocation);

    return homeContainer;
}

export function homeTab(){
    contentDiv.appendChild(createHome());
}
