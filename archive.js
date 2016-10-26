'use strict';
'use strict';


var th = document.createElement('th');
var table = document.getElementById('buildTable');
th.textContent = hours;
table.appendChild(th);

for (var i = 0; i < hours.length; i++) {
  console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
  var td = document.createElement('td');
  td.textContent = hours[i] + this.dailyCookieSalesPerHour[i];
  console.log('td after textContent: ', td);
  th.appendChild(td);
  var tr = document.createElement('tr');
  var table = document.getElementById('buildTable');
  th.textContent = this.storeName;
  table.appendChild(tr);
  // thead.appendChild(tr);
}




// located here as a global value that can be used for all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//functions: cookiesPerHour, predictedCustomers, renderHTMLSales
function Location(storeName, minCust , maxCust, avgCookieSales){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];
  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  //build table within this function
  this.forEachHour = function forEachHour (){
    for (var i = 0; i < hours.length; i++) {
      console.log(hours[i] + this.dailyCookieSalesPerHour[i]);

    }
  };
//generate randomCookiesSalesPerHour
  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      // console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
    }
  };
};

var allLocations = [
  new Location('Sea Tac', 23, 59, 4),
  new Location('Pike', 34, 87, 9),
];

function forEachLocation() {
  for (var i = 0; i < allLocations.length; i++){
    console.log(allLocations[i]);
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  }
}
forEachLocation();

// forEachHour();
// Other way to do the same thing:
// var location1 = new Location();
// var location2 = new Location();
// var allLocations = [
//   location1,
//   location2
// ];

console.log('allLocations: ', allLocations);

for (var i = 0; i < hours.length; i++){
  console.log('this: ');
  console.log('hours[i]: ', hours[i]);
  console.log('this.dailyCookieSalesPerHour: ', this.dailyCookieSalesPerHour);
  console.log('this.dailyCookieSalesPerHour[i]: ', this.dailyCookieSalesPerHour[i]);
  // (hours[i] + this.dailyCookieSalesPerHour[i]);
  // hours[i].cookiesPerHour();
  // hours[i].randomCookieSalesPerHour();
}

// var allMeals = [
//   new Meal(['eggs', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'pancakes'], 'Breakfast'),
//   new Meal(['rice noodles', 'chicken', 'onions', 'hoisin sauce', 'hot sauce'], 'Pho'),
//   new Meal(['steak', 'potatoes', 'sweet corn', 'broccoli', 'carrots'], 'Steak and Potatoes')
// ];
//
// for (var i = 0; i < allMeals.length; i++) {
//   allMeals[i].renderMeal();
//   allMeals[i].renderCalories();
// }
// located here as a global value that can be used for all locations
var hours = ['6am' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Pike = {
  name: 'first-and-pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],
// calculate and store the avg number of customers per hour
  predictedCustomers: function() {
    return Math.Floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log('hello');
    // randomNumCust: function()
  }
// calculate and store the avg number of cookie sales per hour
  calcCookiesPerHour: function() {
    for (var i = 0; i < hours.length ; i++) {
      var cookies = Math.Floor(this.avgCookieSales * this.predictedCustomers());
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.cookies));
    }
  }
};


renderHTMLSales: fucnction(){
  this.calcCookiesPerHour():
  var h2 = document.createElement('h2')
  h2.innerText = this.name;
  var ul = document.createElement('ul');
  main.appendChild(ul);
  for (var i = 0; i < hours.length; i++)
  var li = document.createElement('li');
  li.innerText = hours[i] + ': ' + this.calcCookiesPerHour[i] + 'cookies';
  ul.appendChild(li);

}

for var = 0; i < dailySales.lenth; i++){
  totalSales += this.dailySales[i];
  ul.appendChild(li);
}

function createHtml(){
  var h1 = document.createElement('h1');
  h1.innerText = "All Cookie Stores";
  main.appendChild(h1);
  var h2 = document.createElement('h2');
  h2.innerText = 'Pike';
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h2);
  var ul = document.createElement('ul');
  var hourlySales = calcCookiesPerHour();
  var li = document.createElement(hourlySales[i]);
  ;
}
pike.predictedCustomers();
pike.calcCookiesPerHour();
pike.renderHTMLSales();
