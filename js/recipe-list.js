"use strict";

$(document).ready(function () {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.map((recipe) => {
    let recipeHTML = `

    <div class="col-sm-4 col-md-3 recipe-card-item ${recipe.type}">
<div class="card recipe-custom-card">
  <a href="recipe-detail.html?id=${recipe.id}"
    ><img
      class="recipe-card-img animate__animated animate__lightSpeedInRight"
      src=${recipe.recipeImage}
      alt="Recipe Image"
  /></a>
  <div class="card-body">
    <h5 class="card-title">${recipe.title}</h5>
    <p class="card-text">${recipe.type}</p>
  </div>
</div>
</div>
    `;

    $(".recipeCards").append(recipeHTML);
  });

  $("#searchbar").on("keyup", searchRecipe);
  $("#show-all").on("click", showAllRecipes);
  $("#show-veg").on("click", showVegRecipes);
  $("#show-non-veg").on("click", showNonVegRecipes);

  // Function to filter recipes based on search input
  function searchRecipe() {
    var input, filter, cardContainers, cards, title, i, j;
    // Get the input element and its value (search filter)
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    // Get all containers that hold recipe cards
    cardContainers = document.getElementsByClassName("recipeCards");

    // Loop through each recipe card container
    for (i = 0; i < cardContainers.length; i++) {
      // Get all recipe cards within the container
      cards = cardContainers[i].getElementsByClassName("recipe-custom-card");
      // Loop through each recipe card
      for (j = 0; j < cards.length; j++) {
        // Get the title of the recipe card
        title = cards[j].getElementsByTagName("h5")[0];
        // Check if the title matches the search filter
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[j].style.display = ""; // Show the card
        } else {
          cards[j].style.display = "none"; // Hide the card
        }
      }
    }
  }

  // Function to show all recipes
  function showAllRecipes() {
    var cards = document.getElementsByClassName("recipe-custom-card");
    // Loop through all recipe cards
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = ""; // Show all cards
    }
  }

  // Function to show only vegetarian recipes
  function showVegRecipes() {
    var cards = document.getElementsByClassName("recipe-custom-card");
    // Loop through all recipe cards
    for (var i = 0; i < cards.length; i++) {
      // Get the type of the recipe (vegetarian or non-vegetarian)
      var cardType = cards[i].getElementsByClassName("card-text")[0].innerText;
      // Check if the recipe is vegetarian
      if (cardType === "veg") {
        cards[i].parentNode.style.display = ""; // Show vegetarian card
      } else {
        console.log(cards[i].parentNode);
        cards[i].parentNode.style.display = "none"; // Hide non-vegetarian card
      }
    }
  }

  // Function to show only non-vegetarian recipes
  function showNonVegRecipes() {
    var cards = document.getElementsByClassName("recipe-custom-card");
    // Loop through all recipe cards
    for (var i = 0; i < cards.length; i++) {
      // Get the type of the recipe (vegetarian or non-vegetarian)
      var cardType = cards[i].getElementsByClassName("card-text")[0].innerText;
      // Check if the recipe is non-vegetarian
      if (cardType !== "veg") {
        cards[i].parentNode.style.display = ""; // Show non-vegetarian card
      } else {
        console.log(cards[i].parentNode);
        cards[i].parentNode.style.display = "none"; // Hide vegetarian card
      }
    }
  }
});
