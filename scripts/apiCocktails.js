document.getElementById("selectCocktail").addEventListener("click", callAPI);


function getIngredient(ingredient) {
    if (ingredient) {

        let tdIngredient = document.createElement("td");
        let nameIngredient = ingredient;
        tdIngredient.innerHTML = nameIngredient;
        document.querySelector("#IngredientsCocktails").appendChild(tdIngredient);

        let imageIngredient = document.createElement("img");
        imageIngredient.src = `https://www.thecocktaildb.com/images/ingredients/${nameIngredient}-Small.png`;
        document.querySelector("#IngredientsCocktails").appendChild(imageIngredient);

    }
}

function cleanTag(tagName) {
    let cleanTagTr = document.querySelector(tagName);
    while (cleanTagTr.firstChild) {
        cleanTagTr.removeChild(cleanTagTr.firstChild);
    }
}

function callAPI() {
    let cocktailName = document.querySelector("input").value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
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

        }

        )
    // .catch((error) => {
    //     console.log(error.message)
    // })

}


/**
 * CAROUSEL
 */

imageCarousel(".image-carousel-1", ".texte-carousel-1");
imageCarousel(".image-carousel-2", ".texte-carousel-2");
imageCarousel(".image-carousel-3", ".texte-carousel-3");
imageCarousel(".image-carousel-4", ".texte-carousel-4");
imageCarousel(".image-carousel-5", ".texte-carousel-5");

// for (var i = 0; i < 5; i++) {
function imageCarousel(imageCarousel, texteCarousel) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
            if (response.ok) {
                response.json()
                    .then((data) => {

                        let image = document.querySelector(imageCarousel);
                        image.src = data.drinks[0].strDrinkThumb;
                        let texte = document.querySelector(texteCarousel);
                        texte.innerHTML = data.drinks[0].strDrink;



                        // let peakname = document.createElement('p')

                        // peakname.innerHTML = data.drinks[0].strDrink

                        // document.querySelector(".container2").appendChild(peakname)
                    })
            } else {
                console.log('Mauvaise réponse du réseau');
            }
        })
        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}



