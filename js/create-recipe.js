$(document).ready(function () {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  console.log("recipes", recipes);
  let recipe = {
    id: recipes.length + 1 || 1,
    title: "",
    recipeImage: "",
    type: "",
    ingredients: [],
    steps: [],
    currentStepImage: "",
    stepsCount: 1,
  };

  const renderIngredientOptions = () => {
    // Retrieve array from local storage
    let ingredients = JSON.parse(localStorage.getItem("ingredients")) || [];

    // Preload select options
    let selectOptions = $("#ingredientName");
    ingredients.forEach(function (ingredient) {
      selectOptions.append(
        $("<option>", {
          value: ingredient.title,
          text: ingredient.title,
        })
      );
    });
  };

  renderIngredientOptions();

  $("#stepImageInput").on("change", function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function (evt) {
      $("#stepImage").attr("src", evt.target.result);
      recipe.currentStepImage = evt.target.result;
    });
    reader.readAsDataURL(file);
  });

  $("#recipeImage").on("change", function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function (evt) {
      $("#recipeImg").attr("src", evt.target.result);
      recipe.recipeImage = evt.target.result;
    });
    reader.readAsDataURL(file);
  });

  // Function to handle adding ingredients
  $(".recipe-form").on("click", ".add-ingredient", function () {
    const ingredient = {
      name: $("#ingredientName").val(),
      type: $("#ingredientType").val(),
      quantity: $("#ingredientQuantity").val(),
      unit: $("#ingredientUnit").val(),
    };
    console.log("ingredient", ingredient);
    // Add ingredient to the recipe
    recipe.ingredients.push(ingredient);

    // Display ingredient in the HTML
    const ingredientItem = $("<div>").text(
      `${ingredient.quantity} ${ingredient.type} ${ingredient.unit} ${ingredient.name}`
    );
    $("#ingredientList").append(ingredientItem);

    // Clear input fields
    $("#ingredientName").val("default");
    $("#ingredientType").val("default");
    $("#ingredientQuantity").val("");
    $("#ingredientUnit").val("default");
  });

  // Function to handle adding steps
  $(".recipe-form").on("click", ".add-step", function () {
    let step = {
      image: recipe.currentStepImage, // You may need to handle file upload differently
      description: $("#stepDescription").val(),
    };

    // Add step to the recipe
    recipe.steps.push(step);

    // Display step in the HTML

    let stepImg = new Image();
    stepImg.setAttribute("src", step.image);
    stepImg.setAttribute("height", "200px");
    stepImg.setAttribute("width", "200px");
    console.log("step.image", step.image);

    const stepItem = $("<div>").html(`
        <h4 class="my-2">
        Step - ${recipe.stepsCount}: 
        </h4>
`);

    $("#stepList").append(stepImg);

    stepItem.append(
      $("<div>").html(`
    <p>
    ${step.description}
    </p>
`)
    );

    $("#stepList").append(stepItem);

    recipe.stepsCount = recipe.stepsCount + 1;
    $("#stepCount").text(recipe.stepsCount);

    // Clear input & Img field
    $("#stepDescription").val("");
    $("#stepImageInput").val("");
    $("#stepImage").attr(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="
    );
  });

  // Function to handle saving the recipe to local storage
  $("#saveRecipeBtn").click(function () {
    // Get title and type of the recipe
    recipe.title = $("#title").val();
    recipe.type = $("input[name='options-outlined']:checked").val();
    console.log("recipe", recipe);

    // Save recipe to local storage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    // Optionally, display a message to indicate that the recipe has been saved
    alert("Recipe saved successfully!");
    window.location.href = `/recipe-detail.html?id=${recipe.id}`;
  });
});
