$(document).ready(function () {
  const urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    return results[1] || 0;
  };

  let searchParams = urlParam("id");

  // Initialize a bxSlider for the related product slider element with specific configurations
  $(".relatedProdSlider").bxSlider({
    minSlides: 3, // Minimum number of slides to display
    maxSlides: 4, // Maximum number of slides to display
    slideWidth: 170, // Width of each slide in pixels
    slideMargin: 10, // Margin between slides in pixels
  });

  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  let currentRecipe = recipes.find((item) => item.id == searchParams);

  const renderRecipe = () => {
    $("#recipeTitle").text(currentRecipe.title);
    $("#type").text(currentRecipe.type);

    $(".recipe-img").attr("src", currentRecipe.recipeImage);

    currentRecipe.ingredients.map((ingredient, index) => {
      let numberOfPeople = $("#people").find(":selected").val();
      console.log("numberOfPeople", numberOfPeople);
      let quantityForPeople = numberOfPeople != 2 ? (ingredient.quantity * numberOfPeople) / 2 : ingredient.quantity;
      let ingredientHTML = `
    <p>
    ${index + 1}: ${quantityForPeople} ${ingredient.unit} ${ingredient.name} (${ingredient.type})
    <p>
    `;
      $(".ingredients-list").append(ingredientHTML);
    });

    currentRecipe.steps.map((step, index) => {
      let stepHTML = `
    <div class="card-row">
    <h6 class="card-title">Step ${index + 1}</h6>
    <p>
     ${step.description}
    </p>
    <img
      src=${step.image}
      class="ingredient-img"
      alt="Butter Chicken" />
  </div>`;

      $(".ingredient-body").append(stepHTML);
    });
  };

  //INIT
  renderRecipe();

  //CHANGE QUANTITY OF INGREDIENTS
  $("#people").on("change", (e) => {
    $(".ingredients-list").empty();
    renderRecipe();
  });
  console.log("searchParams", searchParams);
  console.log("currentRecipe", currentRecipe);
});
