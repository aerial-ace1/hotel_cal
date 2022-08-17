const landing = document.querySelector("#landing");

document.addEventListener("DOMContentLoaded", () => {
  const pics = document.querySelectorAll(".dishimg");
  arra = ["pasta", "pizza", "Escovitch Fish", "Cajun spiced fish tacos"];
  for (let i = 0; i < arra.length; i++) {
    dish(arra[i], document.querySelector(`#img${i + 1}`));
  }

  /* landing.width = screen.width
    landing.height = screen.height/3 */
});

function dish(name, img) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  request.onload = () => {
    const val = JSON.parse(request.responseText);
    mealName = val.meals[0].strMeal;
    mealCuisine = val.meals[0].strArea;
    mealImg = val.meals[0].strMealThumb;
    img.src = mealImg;
  };
  const data = new FormData();
  request.send(data);
}
