const searchBox = document.querySelector(".searchBox");
const btn = document.querySelector(".btn");
const recipeContainer = document.querySelector(".recipe-container");
const reicpeDetailsContent = document.querySelector(".reicpeDetailsContent");
const recipeCloseBtn = document.querySelector(".recipeCloseBtn");

// Function to get recipes
recipeContainer.innerHTML = "<h2>Fetching recipe......</h2>";
const fetchRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipeContainer.innerHTML = "";
    if (response.meals) {
        response.meals.forEach((meal) => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p><span>${meal.strArea}</span> Dish</p>
                <p>Belongs to <span>${meal.strCategory}</span> Category</p>
            `;
            const button = document.createElement("button");
            button.textContent = "View Recipe";
            recipeDiv.appendChild(button);

            // Adding EventListener to recipe button
            button.addEventListener("click", () => {
                opernRecipePopup(meal);
            });

            recipeContainer.appendChild(recipeDiv);
        });
    } else {
        recipeContainer.innerHTML = "<p>No recipes found. Try a different search!</p>";
    }
};

const fetchIngredients = (meal) => {
    let ingredientList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]; // Fixed property name
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientList += `<li>${measure} ${ingredient}</li>`;
        } else {
            break;
        }
    }
    return ingredientList;
};

const opernRecipePopup = (meal) => {
    reicpeDetailsContent.innerHTML = `
        <div>
            <h2 class="popup-title">${meal.strMeal}</h2>
            <h3 class="popup-subtitle">Ingredients:</h3>
            <ul class="popup-ingredients">${fetchIngredients(meal)}</ul>
            <div>
                <h3 class="popup-subtitle">Instructions:</h3>
                <p class="popup-instruction">${meal.strInstructions}</p>
            </div>
        </div>
    `;
    reicpeDetailsContent.parentElement.style.display = "block";
};

recipeCloseBtn .addEventListener("click",()=>{
    reicpeDetailsContent.parentElement.style.display="none"
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (searchInput) {
        recipeContainer.innerHTML = ""; // Clear previous results
        fetchRecipes(searchInput);
    }
});
