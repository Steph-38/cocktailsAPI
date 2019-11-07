document.getElementsByTagName("img")[0].addEventListener('click', callAPInamePara1);
document.getElementsByTagName("img")[1].addEventListener('click', callAPInamePara2);
document.getElementsByTagName("img")[2].addEventListener('click', callAPInamePara3);
document.getElementsByTagName("img")[3].addEventListener('click', callAPInamePara4);
document.getElementsByTagName("img")[4].addEventListener('click', callAPInamePara5);


function callAPInamePara1() {

    let name =document.getElementsByTagName("img")[0].getAttribute("title");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            response.json().then((data) => {

                // Nettoyage du tableau
                cleanTag("#cocktailDetails");
                cleanTag("#IngredientsCocktails");
                cleanTag("#imagesIngredients");


                let tdImage = document.createElement("img");
                tdImage.src = data.drinks[0].strDrinkThumb;
                tdImage.height = 300;
                tdImage.width = 300;
                document.querySelector("#cocktailDetails").appendChild(tdImage);

                let tdName = document.createElement("td");
                tdName.innerHTML = data.drinks[0].strDrink;
                document.querySelector("#cocktailDetails").appendChild(tdName);


                let tdPreparation = document.createElement("td");
                tdPreparation.innerHTML = data.drinks[0].strInstructions;
                document.querySelector("#cocktailDetails").appendChild(tdPreparation);

                getIngredient(data.drinks[0].strIngredient1);
                getIngredient(data.drinks[0].strIngredient2);
                getIngredient(data.drinks[0].strIngredient3);
                getIngredient(data.drinks[0].strIngredient4);
                getIngredient(data.drinks[0].strIngredient5);
                getIngredient(data.drinks[0].strIngredient6);
                getIngredient(data.drinks[0].strIngredient7);
                getIngredient(data.drinks[0].strIngredient8);
                getIngredient(data.drinks[0].strIngredient9);
                getIngredient(data.drinks[0].strIngredient10);
                getIngredient(data.drinks[0].strIngredient11);
                getIngredient(data.drinks[0].strIngredient12);
                getIngredient(data.drinks[0].strIngredient13);
                getIngredient(data.drinks[0].strIngredient14);
                getIngredient(data.drinks[0].strIngredient15);

            }).catch((error) => {
                alert(`Ce cocktail : ${cocktailName} n'existe pas, drink with moderation !`);
            });
        })
}

function callAPInamePara2() {

    let name = document.getElementsByTagName("img")[1].getAttribute("title");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            response.json().then((data) => {

                // Nettoyage du tableau
                cleanTag("#cocktailDetails");
                cleanTag("#IngredientsCocktails");
                cleanTag("#imagesIngredients");


                let tdImage = document.createElement("img");
                tdImage.src = data.drinks[0].strDrinkThumb;
                tdImage.height = 300;
                tdImage.width = 300;
                document.querySelector("#cocktailDetails").appendChild(tdImage);

                let tdName = document.createElement("td");
                tdName.innerHTML = data.drinks[0].strDrink;
                document.querySelector("#cocktailDetails").appendChild(tdName);


                let tdPreparation = document.createElement("td");
                tdPreparation.innerHTML = data.drinks[0].strInstructions;
                document.querySelector("#cocktailDetails").appendChild(tdPreparation);

                getIngredient(data.drinks[0].strIngredient1);
                getIngredient(data.drinks[0].strIngredient2);
                getIngredient(data.drinks[0].strIngredient3);
                getIngredient(data.drinks[0].strIngredient4);
                getIngredient(data.drinks[0].strIngredient5);
                getIngredient(data.drinks[0].strIngredient6);
                getIngredient(data.drinks[0].strIngredient7);
                getIngredient(data.drinks[0].strIngredient8);
                getIngredient(data.drinks[0].strIngredient9);
                getIngredient(data.drinks[0].strIngredient10);
                getIngredient(data.drinks[0].strIngredient11);
                getIngredient(data.drinks[0].strIngredient12);
                getIngredient(data.drinks[0].strIngredient13);
                getIngredient(data.drinks[0].strIngredient14);
                getIngredient(data.drinks[0].strIngredient15);

            }).catch((error) => {
                alert(`Ce cocktail : ${cocktailName} n'existe pas, drink with moderation !`);
            });
        })
}

function callAPInamePara3() {

    let name = document.getElementsByTagName("img")[2].getAttribute("title");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            response.json().then((data) => {

                // Nettoyage du tableau
                cleanTag("#cocktailDetails");
                cleanTag("#IngredientsCocktails");
                cleanTag("#imagesIngredients");


                let tdImage = document.createElement("img");
                tdImage.src = data.drinks[0].strDrinkThumb;
                tdImage.height = 300;
                tdImage.width = 300;
                document.querySelector("#cocktailDetails").appendChild(tdImage);

                let tdName = document.createElement("td");
                tdName.innerHTML = data.drinks[0].strDrink;
                document.querySelector("#cocktailDetails").appendChild(tdName);


                let tdPreparation = document.createElement("td");
                tdPreparation.innerHTML = data.drinks[0].strInstructions;
                document.querySelector("#cocktailDetails").appendChild(tdPreparation);

                getIngredient(data.drinks[0].strIngredient1);
                getIngredient(data.drinks[0].strIngredient2);
                getIngredient(data.drinks[0].strIngredient3);
                getIngredient(data.drinks[0].strIngredient4);
                getIngredient(data.drinks[0].strIngredient5);
                getIngredient(data.drinks[0].strIngredient6);
                getIngredient(data.drinks[0].strIngredient7);
                getIngredient(data.drinks[0].strIngredient8);
                getIngredient(data.drinks[0].strIngredient9);
                getIngredient(data.drinks[0].strIngredient10);
                getIngredient(data.drinks[0].strIngredient11);
                getIngredient(data.drinks[0].strIngredient12);
                getIngredient(data.drinks[0].strIngredient13);
                getIngredient(data.drinks[0].strIngredient14);
                getIngredient(data.drinks[0].strIngredient15);

            }).catch((error) => {
                alert(`Ce cocktail : ${cocktailName} n'existe pas, drink with moderation !`);
            });
        })
}

function callAPInamePara4() {

    let name = document.getElementsByTagName("img")[3].getAttribute("title");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            response.json().then((data) => {

                // Nettoyage du tableau
                cleanTag("#cocktailDetails");
                cleanTag("#IngredientsCocktails");
                cleanTag("#imagesIngredients");


                let tdImage = document.createElement("img");
                tdImage.src = data.drinks[0].strDrinkThumb;
                tdImage.height = 300;
                tdImage.width = 300;
                document.querySelector("#cocktailDetails").appendChild(tdImage);

                let tdName = document.createElement("td");
                tdName.innerHTML = data.drinks[0].strDrink;
                document.querySelector("#cocktailDetails").appendChild(tdName);


                let tdPreparation = document.createElement("td");
                tdPreparation.innerHTML = data.drinks[0].strInstructions;
                document.querySelector("#cocktailDetails").appendChild(tdPreparation);

                getIngredient(data.drinks[0].strIngredient1);
                getIngredient(data.drinks[0].strIngredient2);
                getIngredient(data.drinks[0].strIngredient3);
                getIngredient(data.drinks[0].strIngredient4);
                getIngredient(data.drinks[0].strIngredient5);
                getIngredient(data.drinks[0].strIngredient6);
                getIngredient(data.drinks[0].strIngredient7);
                getIngredient(data.drinks[0].strIngredient8);
                getIngredient(data.drinks[0].strIngredient9);
                getIngredient(data.drinks[0].strIngredient10);
                getIngredient(data.drinks[0].strIngredient11);
                getIngredient(data.drinks[0].strIngredient12);
                getIngredient(data.drinks[0].strIngredient13);
                getIngredient(data.drinks[0].strIngredient14);
                getIngredient(data.drinks[0].strIngredient15);

            }).catch((error) => {
                alert(`Ce cocktail : ${cocktailName} n'existe pas, drink with moderation !`);
            });
        })
}

function callAPInamePara5() {

    let name = document.getElementsByTagName("img")[4].getAttribute("title");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
            response.json().then((data) => {

                // Nettoyage du tableau
                cleanTag("#cocktailDetails");
                cleanTag("#IngredientsCocktails");
                cleanTag("#imagesIngredients");


                let tdImage = document.createElement("img");
                tdImage.src = data.drinks[0].strDrinkThumb;
                tdImage.height = 300;
                tdImage.width = 300;
                document.querySelector("#cocktailDetails").appendChild(tdImage);

                let tdName = document.createElement("td");
                tdName.innerHTML = data.drinks[0].strDrink;
                document.querySelector("#cocktailDetails").appendChild(tdName);


                let tdPreparation = document.createElement("td");
                tdPreparation.innerHTML = data.drinks[0].strInstructions;
                document.querySelector("#cocktailDetails").appendChild(tdPreparation);

                getIngredient(data.drinks[0].strIngredient1);
                getIngredient(data.drinks[0].strIngredient2);
                getIngredient(data.drinks[0].strIngredient3);
                getIngredient(data.drinks[0].strIngredient4);
                getIngredient(data.drinks[0].strIngredient5);
                getIngredient(data.drinks[0].strIngredient6);
                getIngredient(data.drinks[0].strIngredient7);
                getIngredient(data.drinks[0].strIngredient8);
                getIngredient(data.drinks[0].strIngredient9);
                getIngredient(data.drinks[0].strIngredient10);
                getIngredient(data.drinks[0].strIngredient11);
                getIngredient(data.drinks[0].strIngredient12);
                getIngredient(data.drinks[0].strIngredient13);
                getIngredient(data.drinks[0].strIngredient14);
                getIngredient(data.drinks[0].strIngredient15);

            }).catch((error) => {
                alert(`Ce cocktail : ${cocktailName} n'existe pas, drink with moderation !`);
            });
        })
}


