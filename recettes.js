var plates = ["Apple Pie", "Chocolate Mousse", "Meringue"];

var applePieIngredients = {
  ingredients: [
    { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
    { name: "flour", image: "./images/farine.jpg" },
    { name: "butter", image: "./images/beurre.jpg" },
    { name: "milk", image: "./images/lait.jpg" },
    { name: "baking powder", image: "./images/levure.jpg" },
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
  response: [1, 2, 6, 7, 10, 12]
};

var chocolateMousseIngredients = {
  ingredients: [
    { name: "hazelnut", image: "./images/noisettes.jpg" },
    { name: "dark chocolate", image: "./images/chocolat-noir.jpg" },
    { name: "butter", image: "./images/beurre.jpg" },
    { name: "gelatin", image: "./images/gélatine.jpg" },
    { name: "milk", image: "./images/lait.jpg" },
    { name: "eggs", image: "./images/oeufs.jpg" },
    { name: "sugar", image: "./images/sucre.jpg" },
    { name: "almonds powder", image: "./images/poudre-amandes.jpg" },
    { name: "chocolate chips", image: "./images/pépites-chocolat.jpg" },
    { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
    { name: "flour", image: "./images/farine.jpg" },
    { name: "baking powder", image: "./images/levure.jpg" },
    { name: "chocolate powder", image: "./images/chocolat-poudre.jpg" },
    { name: "vanilla pod", image: "./images/gousse-vanille.jpg" },
    { name: "cottage cheese", image: "./images/fromage-blanc.jpg" }
  ],
  response: [1, 5, 6, 9, 13]
};

var meringueIngredients = {
  ingredients: [
    { name: "vanilla pod", image: "./images/gousse-vanille.jpg" },
    { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
    { name: "flour", image: "./images/farine.jpg" },
    { name: "hazelnut powder", image: "./images/poudre-noisettes.jpg" },
    { name: "butter", image: "./images/beurre.jpg" },
    { name: "milk", image: "./images/lait.jpg" },
    { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
    { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
    { name: "eggs white", image: "./images/blanc-oeuf.jpg" },
    { name: "baking powder", image: "./images/levure.jpg" },
    { name: "gelatin", image: "./images/gélatine.jpg" },
    { name: "cornstarch", image: "./images/fécule-maïs.jpg" },
    { name: "caster sugar", image: "./images/sucre-semoule.jpg" },
    { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
    { name: "eggs yolk", image: "./images/jaune-oeuf.jpg" }
  ],
  response: [8, 12]
};

var flanIngredients = {
  ingredients: [
    { name: "flour", image: "./images/farine.jpg" },
    { name: "milk", image: "./images/lait.jpg" },
    { name: "eggs", image: "./images/oeufs.jpg" },
    { name: "yoghurt", image: "./images/yahourt.jpg" },
    { name: "sugar", image: "./images/sucre.jpg" },
    { name: "almonds powder", image: "./images/poudre-amandes.jpg" },
    { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
    { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
    { name: "cornstarch", image: "./images/fécule-maïs.jpg" },
    { name: "rhum", image: "./images/rhum.jpg" },
    { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
    { name: "hazelnut powder", image: "./images/poudre-noisettes.jpg" },
    { name: "gelatin", image: "./images/gélatine.jpg" },
    { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
    { name: "vanilla pod", image: "./images/gousse-vanille.jpg" }
  ],
  response: [1, 2, 4, 8, 11, 15]
};

var crepesIngredients = {
  ingredients: [
    { name: "flour", image: "./images/farine.jpg" },
    { name: "eggs", image: "./images/oeufs.jpg" },
    { name: "fresh liquid cream", image: "./images/crème-liquide.jpg" },
    { name: "milk", image: "./images/lait.jpg" },
    { name: "cottage cheese", image: "./images/fromage-blanc.jpg" },
    { name: "peanut oil", image: "./images/huile-arachide.jpg" },
    { name: "cinnamon", image: "./images/cannelle.jpg" },
    { name: "rhum", image: "./images/rhum.jpg" },
    { name: "baking powder", image: "./images/levure.jpg" },
    { name: "vanilla sugar", image: "./images/sucre-vanillé.jpg" },
    { name: "sugar", image: "./images/sucre.jpg" },
    { name: "salt", image: "./images/sel.jpg" },
    { name: "sunflower oil", image: "./images/huile-tournesol.jpg" },
    { name: "butter", image: "./images/beurre.jpg" },
    { name: "cornstarch", image: "./images/fécule-maïs.jpg" }
  ],
  response: [0, 1, 3, 7, 9, 10, 11, 14]
};

function displayPlate(plate) {
  const h3 = document.querySelector("#plat h3");
  h3.innerHTML = "";
  h3.innerHTML += `<h3>${plate}</h3>`;
}

displayPlate(plates[0]);
