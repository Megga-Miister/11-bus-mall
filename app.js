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
  //Shannon helped me change to a while loop as I was trying to run this as an if...else if 
  while (displayProduct1 === displayProduct2 || displayProduct2 === displayProduct3 || displayProduct1 === displayProduct3){
    displayProduct1 = products[getRandomIndex()].src;
    displayProduct2 = products[getRandomIndex()].src;
    displayProduct3 = products[getRandomIndex()].src;
  }

  threeProductDisplay.push(displayProduct1, displayProduct2, displayProduct3);
  return threeProductDisplay; 
}

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
         displayProduct1.removeEventListener('click', getRandomIndex);
         displayProduct2.removeEventListener('click', getRandomIndex)
         displayProduct3.removeEventListener('click', getRandomIndex)
         var resultsButtonEl = document.getElementById("results");
         resultsButtonEl.label = "Results";
     } 
   }
 };

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
  mainEl.appendChild(productsChart);
}

renderImages();

displayProduct1.addEventListener('click',clickTracker);
displayProduct2.addEventListener('click',clickTracker);
displayProduct3.addEventListener('click',clickTracker);

// var ctx = document.getElementById("productsChart").getContext('2d');

// var chartConfig = {
//   type: 'bar',
//   data: {
//     labels: colors,
//     datasets: [{
//       label: 'Product Preference Tracker',
//       data: new Array(products.length).fill(0),
//       backgroundColor: [
//         '#0B132B',
//         '#1c2541',
//         '#3A506B',
//         '#5BC0BE',
//         '#6FFFE9',
//         '#78C9E6',
//         '#12A6D8',
//         '#005189',
//         '#54BDE1',
//         '#8ACEE5',
//         '#880D1E',
//         '#DD2D4A',
//         '#F26A8D',
//         '#F49CBB',
//         '#CBEEF3',
//         '#FA558B',
//         '#F97BA6',
//         '#FEFFBB',
//         '#FFF779',
//         '#FBDE18',
//       ],
//            borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// };

// return new chartConfig(ctx, chartConfig);


console.log(products);

function saveresults(){
  localStorage.setItem('name', JSON.stringify(name));
  localStorage.setItem('name', JSON.stringify(src));
  localStorage.setItem('name', JSON.stringify(timesClicked));
  localStorage.setItem('name', JSON.stringify(timesShown));
  localStorage.setItem('name', JSON.stringify(totalClicks));
}