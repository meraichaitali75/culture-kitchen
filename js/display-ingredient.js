displayIngredients();
function displayIngredients() {
  const ingredientCardsContainer = document.getElementById("ingredientCards");

  // Retrieve ingredient data from local storage
  let ingredients = JSON.parse(localStorage.getItem("ingredients")) || [];

  ingredientCardsContainer.innerHTML = "";

  // Populate the container with ingredient cards
  ingredients.forEach((ingredient, index) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-4"); // Bootstrap grid classes

    const cardContent = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${ingredient.title}</h5>
          <p class="card-text">${ingredient.description}</p>
          <button class="btn btn-danger delete-button">Delete</button>
        </div>
      </div>
    `;
    card.innerHTML = cardContent;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      // Remove the ingredient from localStorage
      ingredients.splice(index, 1);
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
      // Remove the card fr/om the view

      card.remove();
    });

    ingredientCardsContainer.appendChild(card);
  });
}
