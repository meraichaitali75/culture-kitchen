// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("ingredientForm");
  // Get the input element for the photo
  const photoInput = document.getElementById("photo");
  // Get the container where the image will be displayed
  const container = document.querySelector(".container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // Serialize form data into JSON
    const ingredient = {
      title: title,
      description: description,
    };

    console.log(ingredient);

    // Save ingredient data to local storage
    saveToLocalStorage(ingredient);

    // Reset form after submission
    form.reset();
  });
});

function saveToLocalStorage(ingredient) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    // Retrieve existing data from local storage or initialize an empty array
    let ingredients = JSON.parse(localStorage.getItem("ingredients")) || [];

    // Add the new ingredient to the array
    ingredients.push(ingredient);

    // Save the updated array back to local storage
    localStorage.setItem("ingredients", JSON.stringify(ingredients));

    alert("Ingredient saved successfully!");
    window.location.href = "display-ingredient.html";
  } else {
    alert("Sorry, your browser does not support web storage. Ingredient could not be saved.");
  }
}
