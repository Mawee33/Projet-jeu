var plates = [
  {
    title: "Apple Pie",
    picture: "./images/apple-pie.jpg",
    ingredients: [
      { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
      { name: "flour", image: "./images/farine.jpg" },
      { name: "butter", image: "./images/beurre.jpg" },
      { name: "milk", image: "./images/lait.jpg" },
      { name: "baking powder", image: "./images/levure.jpg" },
      { name: "cornstarch", image: "./images/fécule-maïs.jpg" },
      { name: "salt", image: "./images/sel.jpg" },
      { name: "sugar", image: "./images/sucre.jpg" },
      { name: "yoghurt", image: "./images/yahourt.jpg" },
      { name: "honey", image: "./images/miel.jpg" },
      { name: "apples", image: "./images/pommes.jpg" },
      { name: "eggs", image: "./images/oeufs.jpg" },
      { name: "cinnamon", image: "./images/cannelle.jpg" },
      { name: "gelatin", image: "./images/gélatine.jpg" },
      { name: "hazelnut powder", image: "./images/poudre-noisettes.jpg" }
    ],
    response: ["flour", "butter", "salt", "sugar", "apples", "cinnamon"]
  },
  {
    title: "Chocolate Mousse",
    picture: "./images/chocolate-mousse.jpg",
    ingredients: [
      { name: "hazelnut", image: "./images/noisettes.jpg" },
      { name: "dark chocolate", image: "./images/chocolat-noir.jpg" },
      { name: "butter", image: "./images/beurre.jpg" },
      { name: "gelatin", image: "./images/gélatine.jpg" },
      { name: "milk", image: "./images/lait.jpg" },
      { name: "eggs", image: "./images/oeufs.jpg" },
      { name: "sugar", image: "./images/sucre.jpg" },
      { name: "almonds powder", image: "./images/poudre-amandes.jpg" },
      { name: "chocolate chips", image: "./images/pépites-chocolat.jpg" },
      { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
      { name: "flour", image: "./images/farine.jpg" },
      { name: "baking powder", image: "./images/levure.jpg" },
      { name: "chocolate powder", image: "./images/chocolat-poudre.jpg" },
      { name: "vanilla pod", image: "./images/gousse-vanille.jpg" },
      { name: "cottage cheese", image: "./images/fromage-blanc.jpg" }
    ],
    response: [
      "dark chocolate",
      "eggs",
      "sugar",
      "fresh liquid cream",
      "vanilla pod"
    ]
  },
  {
    title: "Meringue",
    picture: "./images/meringue.jpg",
    ingredients: [
      { name: "vanilla pod", image: "./images/gousse-vanille.jpg" },
      { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
      { name: "flour", image: "./images/farine.jpg" },
      { name: "hazelnut powder", image: "./images/poudre-noisettes.jpg" },
      { name: "butter", image: "./images/beurre.jpg" },
      { name: "milk", image: "./images/lait.jpg" },
      { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
      { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
      { name: "eggs white", image: "./images/blanc-oeuf.jpg" },
      { name: "baking powder", image: "./images/levure.jpg" },
      { name: "gelatin", image: "./images/gélatine.jpg" },
      { name: "cornstarch", image: "./images/fécule-maïs.jpg" },
      { name: "caster sugar", image: "./images/sucre-semoule.jpg" },
      { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
      { name: "eggs yolk", image: "./images/jaune-oeuf.jpg" }
    ],
    response: ["eggs white", "caster sugar"]
  },
  {
    title: "Flan",
    picture: "./images/flan.jpg",
    ingredients: [
      { name: "flour", image: "./images/farine.jpg" },
      { name: "milk", image: "./images/lait.jpg" },
      { name: "eggs", image: "./images/oeufs.jpg" },
      { name: "yoghurt", image: "./images/yahourt.jpg" },
      { name: "sugar", image: "./images/sucre.jpg" },
      { name: "almonds powder", image: "./images/poudre-amandes.jpg" },
      { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
      { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
      { name: "cornstarch", image: "./images/fécule-maïs.jpg" },
      { name: "rhum", image: "./images/rhum.jpg" },
      { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
      { name: "hazelnut powder", image: "./images/poudre-noisettes.jpg" },
      { name: "gelatin", image: "./images/gélatine.jpg" },
      { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
      { name: "vanilla pod", image: "./images/gousse-vanille.jpg" }
    ],
    response: [
      "milk",
      "eggs",
      "sugar",
      "cornstarch",
      "vanilla sugar",
      "vanilla pod"
    ]
  },
  {
    title: "Crepes",
    picture: "./images/crepes.jpg",
    ingredients: [
      { name: "flour", image: "./images/farine.jpg" },
      { name: "eggs", image: "./images/oeufs.jpg" },
      { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
      { name: "milk", image: "./images/lait.jpg" },
      { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
      { name: "peanut oil", image: "./images/huile-arachide.jpg" },
      { name: "cinnamon", image: "./images/cannelle.jpg" },
      { name: "rhum", image: "./images/rhum.jpg" },
      { name: "baking powder", image: "./images/levure.jpg" },
      { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
      { name: "sugar", image: "./images/sucre.jpg" },
      { name: "salt", image: "./images/sel.jpg" },
      { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
      { name: "butter", image: "./images/beurre.jpg" },
      { name: "cornstarch", image: "./images/fécule-maïs.jpg" }
    ],
    response: [
      "flour",
      "eggs",
      "milk",
      "rhum",
      "vanilla sugar",
      "sugar",
      "salt",
      "butter"
    ]
  }
];
let level = 0;
let button2 = {};
let points = 0;

function levels() {
  if (level === plates.length) {
    return  displayFinal(plates);
  } else {
  displayPlate(plates[level]);
  displayTable(plates[level].ingredients);
  setIngredientsListener();
  return true;
}}


function displayPlate(plate) {
  console.log("displayPlate");
  const game = document.querySelector(".scenes");
  game.innerHTML = "";
  game.innerHTML += `<div><h2>${plate.title}</h2><div><img class="plate" src="${plate.picture}" /></div><div id="ingr">
 <h3>Pick the ${plate.response.length} good ingredients to make a great recipe!</h3>
 <ul  class="list">
 </ul>
 <button class="button2">SUBMIT<audio src="/images/Astrix et Clopatre_ Le gteau empoisonn.mp3"></audio></button>
<h4 class="result"></h4>
</div>
</div>`;
  const btn2 = document.querySelector(".button2");
  btn2.onclick = function() {
    //levels();
    displayResult(plates[level].response);
    var player = document.querySelector('audio');
  player.play();
  };
}


function displayTable(ingredientsArray) {
  console.log("displayTable");
  const listIngredients = document.querySelector("#ingr .list");
  listIngredients.innerHTML = "";
  ingredientsArray.forEach(ingredient => {
    listIngredients.innerHTML += `<li><div class="row">${ingredient.name}</div> <img class="ingredient" src="${ingredient.image}"  alt="${ingredient.name}" /></li>`;
  });
}

document.querySelector(".button1").onclick = function() {
  levels();
};

function setIngredientsListener() {
  console.log("setIngredients");
  document.querySelectorAll(".ingredient").forEach(ingredient => {
    ingredient.onclick = function(e) {
      e.target.classList.toggle("active");
      console.log(document.querySelectorAll(".ingredient.active"));
    };
  });
}


function checkAnswer(responses) {
  console.log("checkAnswer");
  let errors = 0;
  let activeIngredients = document.querySelectorAll(".ingredient.active");
  activeIngredients.forEach(answer => {
    if (!responses.includes(answer.getAttribute("alt"))) {
      errors += 1
      console.log(answer.getAttribute("alt"));
    }
  });
  console.log("level", level);
  level += 1;
  if (errors === 0 && responses.length ===  activeIngredients.length) {
    return "Yay, What a Chef!";
  } else {
    return "Oh no, you have to keep cooking!";
  }
}


function numberOfPoints(responses) {
  let errors = 0;
  let activeIngredients = document.querySelectorAll(".ingredient.active");
  activeIngredients.forEach(answer => {
    if (!responses.includes(answer.getAttribute("alt"))) {
      errors += 1
      console.log(answer.getAttribute("alt"));
      console.log("err", errors)
    }
  });
  console.log("level", level);
  if (errors === 0 && responses.length ===  activeIngredients.length) {
    points ++;
  } else {
     points;
  }
  return points
}


function displayResult(plate) {
  const resultsDOM = document.getElementById("results");
  resultsDOM.innerHTML = "";
  resultsDOM.innerHTML += `<h4 class="result">${checkAnswer(plate)} You have ${numberOfPoints(plate)} points.</h4>`;

  setTimeout(() =>{
 const resultsDOM = document.getElementById("results");
  resultsDOM.innerHTML = "";
  levels();
  } ,2000)
}

function displayFinal(plate) {
  const resultsDOM2 = document.querySelector(".scenes");
  resultsDOM2.innerHTML = "";
  resultsDOM2.innerHTML += `<h2 class="final">Your final result : ${numberOfPoints(plate)}/5</h2><div class="gifFinal"></div>
  <ul class="recipes">If you're hungry now, here's the recipes :
  <li><a href="https://lacuisinedannie.20minutes.fr/recette-tarte-aux-pommes-classique-318.html">Apple Pie</a></li>
  <li><a href="https://cuisine.journaldesfemmes.fr/recette/306049-mousse-au-chocolat">Chocolate Mousse</a></li>
  <li><a href="https://www.marmiton.org/recettes/recette_meringue-pour-les-nuls_36610.aspx">Meringue</a></li>
  <li><a href="https://cuisine.journaldesfemmes.fr/recette/1002906-flan-patissier-sans-pate">Flan</a></li>
  <li><a href="https://www.hervecuisine.com/recette/crepes-de-la-chandeleur/">Crepes</a></li>
  </ul>`;
  };


document.querySelector(".button2").onclick = function() {
  displayFinal(plate);
};