const landing = document.querySelector("#landing")

document.addEventListener("DOMContentLoaded", () => {
    dish("pizza");
    /* landing.width = screen.width
    landing.height = screen.height/3 */
})

function dish(name){
    const request = new XMLHttpRequest();
    request.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    request.onload = () => {
      const val = JSON.parse(request.responseText);
      mealName = val.meals[0].strMeal
      mealCuisine = val.meals[0].strArea
      mealImg = val.meals[0].strMealThumb
      document.querySelector("#landing").src = mealImg
      document.querySelectorAll(".dishimg").forEach(pic => pic.src = mealImg);
      
    };
    const data = new FormData();
    request.send(data);
}