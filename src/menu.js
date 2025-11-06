const contentDiv = document.getElementById("content");

function createMenu(){
    const homeContainer = document.createElement("div");
    contentDiv.textContent = "";
    homeContainer.classList.add("container");

    const menuTitleContainer = document.createElement("div");
    menuTitleContainer.classList.add("title-container");
    menuTitleContainer.innerHTML = "<h1>MENU</h1>";
    homeContainer.appendChild(menuTitleContainer);

    const menuCakesTitle = document.createElement("div");
    menuCakesTitle.classList.add("menucategory-container");
    menuCakesTitle.innerHTML = "<h2>CAKES</h2><p>Available in whole and per slice</p>";
    homeContainer.appendChild(menuCakesTitle);

    const menuCakes = document.createElement("div");
    menuCakes.classList.add("desc-container");
    menuCakes.innerHTML = "<p><strong>I Love You Very Matcha</strong><br>Matcha-flavored cake with matcha cream filling, topped with azuki beans and sprinkled all over with our high-grade matcha powder.<br><br><strong>Strawberry Bliss</strong><br>Strawberry-flavored cake bathed and coated with our special strawberry syrup that has a mix of vodka, topped with candied strawberries and candy sprinkles.<br><br><strong>Cake By The Ocean</strong><br>Coconut-flavored cake bathed and coated with our special pina colada syrup, and with pandan icing on the sides.</p>";
    homeContainer.appendChild(menuCakes);

    const menuDrinksTitle = document.createElement("div");
    menuDrinksTitle.classList.add("menucategory-container");
    menuDrinksTitle.innerHTML = "<h2>DRINKS</h2>";
    homeContainer.appendChild(menuDrinksTitle);

    const menuDrinks = document.createElement("div");
    menuDrinks.classList.add("desc-container");
    menuDrinks.innerHTML = "<p><strong>Minty Matcha Mojito<br>Creamy Strawberry Cocktail<br>Dreamy Peach Soju and Baileys Mix<br>Matcha and Strawberry Tequila Shangri-la</strong></p>";
    homeContainer.appendChild(menuDrinks);

    return homeContainer;
}

export function menuTab(){
    contentDiv.appendChild(createMenu());
}