"use strict";

var products = [];
var displayProduct1 = 0;
var displayProduct2 = 0;
var displayProduct3 = 0;
var threeProductDisplay = [];

function Product(name, src) {
 this.name = name;
 this.src = src;
 this.timesClicked = 0; 
 this.timesShown = 0;
 this.totalClicks = 0;

 products.push(this);
}

var bag = new Product ("Bag", "assets/bag.jpg"); 
var banana = new Product ("Banana", "assets/banana.jpg");
var bathroom = new Product ("Bathroom", "assets/bathroom.jpg");
var boots = new Product ("Boots", "assets/boots.jpg");
var breakfast = new Product ("Breakfast", "assets/breakfast.jpg");
var bubblegum = new Product ("Bubblegum", "assets/bubblegum.jpg");
var chair = new Product ("Chair", "assets/chair.jpg");
var cthulhu = new Product ("Cthulhu", "assets/cthulhu.jpg");
var dogduck = new Product ("Dog-Duck", "assets/dog-duck.jpg");
var dragon = new Product ("Dragon", "assets/dragon.jpg");
var pen = new Product ("Pen", "assets/pen.jpg");
var petsweep = new Product ("Pet-Sweep", "assets/pet-sweep.jpg");
var scissors = new Product ("Scissors", "assets/scissors.jpg");
var shark = new Product ("Shark", "assets/shark.jpg");
var sweep = new Product ("Sweep", "assets/sweep.jpg");
var tauntaun = new Product ("Tauntaun", "assets/tauntaun.jpg");
var unicorn = new Product ("Unicorn", "assets/unicorn.jpg");
var usb = new Product ("USB", "assets/usb.jpg");
var watercan = new Product ("Water-Can", "assets/water-can.jpg");
var wineglass = new Product ("Wine-Glass", "assets/wine-glass.jpg");

function getRandomIndex() {
    var randomIndex = Math.floor(Math.random() * products.length);
    return randomIndex;
}

function getUniqueImages() {
  displayProduct1 = 0;
  displayProduct2 = 0;
  displayProduct3 = 0;

  //Shannon helped me change to a while loop as I was trying to run this as an if...else if 
  while (displayProduct1 === displayProduct2 || displayProduct2 === displayProduct3 || displayProduct1 === displayProduct3){
    displayProduct1 = products[getRandomIndex()].src;
    displayProduct2 = products[getRandomIndex()].src;
    displayProduct3 = products[getRandomIndex()].src;
  }

  threeProductDisplay.push(displayProduct1, displayProduct2, displayProduct3);
  return threeProductDisplay; 
}

function renderImages() {
  getUniqueImages();

  var mainEl = document.getElementById("main-content");
  var divEl = document.createElement("div"); //create element for div
  var leftImgEl = document.createElement("img"); //create elements for three imagies
  leftImgEl.id = "leftImg";
  var centerImgEl = document.createElement("img");
  centerImgEl.id = "centerImg";
  var rightImgEl = document.createElement("img");
  rightImgEl.id = "rightImg";

  leftImgEl.src = threeProductDisplay[0];
  centerImgEl.src = threeProductDisplay[1];
  rightImgEl.src = threeProductDisplay[2];

  mainEl.appendChild(divEl);  //append div to mainEl
  divEl.appendChild(leftImgEl);  //append images to div
  divEl.appendChild(centerImgEl);
  divEl.appendChild(rightImgEl);
}

renderImages();

function clickTracker(event) {
 var displayImgId = event.target.id;
 var diplayImgName = event.target.name;

  //if user does not click on an image run alert
  if (displayImgId != leftImgEl || displayImgId != centerImgEl || displayImgId != rightImgEl) {
   alert ("Be sure to click on a product image to make your selection.");
  //otherwise as long as total clicks are less that 26, find the corresponding product object in array and add a vote
  } else if (totalClicks < 26) {
    for (i = 0; i < products.length; i++)
      if (diplayImgName === products[i].name) {
        products[i].timesClicked++;
        totalClicks++;
      } else {
        var resultsButtonEl = document.getElementById("results");
        resultsButtonEl.label = "Results";
    } 
  }
};

displayProduct1.addEventListener('click',clickTracker);
displayProduct2.addEventListener('click',clickTracker);
displayProduct3.addEventListener('click',clickTracker);

//   clickHandler: function(event) {

//   };
// },


console.log(products);
