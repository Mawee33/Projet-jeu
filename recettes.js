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

function levels() {
  if (level === plates.length) {
  
    return  alert("end game"); // les points seront alors insérés
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
 <button class="button2">SUBMIT</button>
<h4 class="result"></h4>
</div>
</div>`;
  const btn2 = document.querySelector(".button2");
  btn2.onclick = function() {
    //levels();
    displayResult(plates[level].response);
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
  // return console.log("hey", plate)
  if (errors === 0 && responses.length ===  activeIngredients.length) {
    return "Yay, What a Chef!";
  } else {
    return "Oh no, you have to keep cooking!";
  }
}

function displayResult(plate) {
  const resultsDOM = document.getElementById("results");
  resultsDOM.innerHTML = "";
  resultsDOM.innerHTML += `<h4 class="result">${checkAnswer(plate)}</h4>`;

  setTimeout(() =>{
    
  const resultsDOM = document.getElementById("results");
  resultsDOM.innerHTML = "";
  levels();
  } ,3000)
}
