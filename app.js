'use strict';

var products = [];

function Product(name, src) {
 this.name = name;
 this.src = src;
}

var tracker = {
  totalClicks: 0, 
  timesShown: 0,
  percentageOfTimesSelected:0,

  mainEl: document.getElementById('main-content'),

  getRandomIndex: function(productsArrayLength) {
      var randomIndex = Math.floor(Math.random() * productsArrayLength-1);
      return randomIndex;
  },

  getUniqueImages: function() {
    var displayProduct1 = this.products[getRandomIndex].src;
    var displayProduct2 = this.products[getRandomIndex].src;
    var displayProduct3 = this.products[getRandomIndex].src;
    var threeProductDisplay = [displayProduct1, displayProduct2, displayProduct3];
    return threeProductDisplay;

    // if (displayProduct1 != displayProduct2 && displayProduct2 != displayProduct3){
    //   threeProductDisplay.push(displayProduct1, displayProduct2, displayProduct3);
    //   return threeProductDisplay;
    // } else {
    //     do {getRandomIndex

    //     } while (displayProduct1 === displayProduct2);
    // }
  },

  renderImages: function() {
    divEl: document.createElement('div'); //create element for div
    leftImgEl: document.createElement('img'); //create elements for three imagies
    leftImgEl.id = 'leftImg';
    centerImgEl: document.createElement('img');
    centerImgEl.id = 'leftImg';
    rightImgEl: document.createElement('img');
    rightImgEl.id = 'leftImg';

    leftImgEl.src = this.products[0].src;
    centerImgEl.src = leftImgEl.src;
    rightImgEl.src = leftImgEl.src;

    divEl.appendChild(leftImgEl);  //append images to div
    divEl.appendChild(centerImgEl);
    divEl.appendChild(rightImgEl);
      
    mainEl.appendChild(divEl);  //append div to mainEl
  };

//   addClickTracker: function() {

//   };

//   clickHandler: function(event) {

//   };
// },

//not sure of use for this createProducts function call
// (function createProducts() {

// })()

new Product ('Bag', '/assets/bag.jpg'),
new Product ('Banana', '/assets/banana.jpg'),
new Product ('Bathroom', '/assets/bathroom.jpg'),
new Product ('Boots', '/assets/boots.jpg'),
new Product ('Breakfast', '/assets/breakfast.jpg'),
new Product ('Bubblegum', '/assets/bubblegum.jpg'),
