# Recipe App - culture kitchen

## Description

Culture Kitchen is a web application designed to manage and explore a variety of recipes from different cultures. Users can navigate through the website to find recipes, create new dishes, and explore culinary options.

# File Structure

- `file-name.html`: Main HTML file for the application.
- `css/file-name.css`: CSS file for styling the HTML content.
- `js/file-name.js`: JavaScript file for adding interactivity to the application.
- `assets/images`: Directory for storing images used in the application.
- `components/`
  - `footer.html`: HTML file for the footer component.
  - `header.html`: HTML file for the header component.
- `libs/`
  - `common`: Common libraries used in the application.
  - `bootstrap`: Bootstrap library for styling.
  - `jquery`: jQuery library for JavaScript functionalities.

## User Navigation

1. **Login Page (login.html)**
   - Users can log in using their email address and password.
   - After successful login we are navigated to the index.html page

2. **Home Page (index.html)**
   - Displays all recipes available.
   - Includes options to filter recipes:
     - 'Show All': Displays all recipes.
     - 'Veg': Displays vegetarian recipes only.
     - 'Non-Veg': Displays non-vegetarian recipes only.
   - Search Bar:
     - Users can search for recipes using any text. Matching recipes will be displayed.

3. **Recipe Detail Page (recipe-detail.html)**
   - Clicking on a recipe on the Home Page navigates the user to the Recipe Detail Page.
   - Details displayed include:
     - Preparation steps.
     - Ingredients list.
     - Ratings: Users can rate recipes out of 5 stars.

4. **About Us Page (aboutus.html)**
   - Provides information about the project's story and purpose.
   - Offers options for users interested in:
     - Takeout.
     - Catering services.
     - Franchise opportunities.

5. **Create Ingredient Page (createingredient.html)**
   - Users can add new ingredients to the system for use in creating recipes.
   - Features include:
     - Upload ingredient photos.
     - Title and description entry.
     - Saving ingredients to local storage for future recipe creation.

6. **Create Recipe Page (create-recipe-detail.js)**
   - Allows users to create new recipes:
     - Choose a recipe image.
     - Enter a title for the recipe.
     - Specify if the recipe is vegetarian or non-vegetarian.
     - Select ingredients from a dropdown list.
     - Submitting a new recipe adds it to the local storage and displays it on the main recipe list on the Home Page.

## Usage

1. Clone the repository using URL : https://github.com/99arya/culture-kitchen.git.
2. Open the project in your preferred code editor.
3. Run the application on a local server or deploy it to a web hosting service.

## Technologies Used

- HTML
- CSS
- JavaScript
- Jqeury
- Bootstrap
- Local Storage for data persistence

## Author
- Ajay Odedara
- Chaitali Merai
- Sumit Arya
- Susheela Hegde

## License

This project is licensed under the [License Name] License - see the LICENSE.md file for details.