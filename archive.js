// 'use strict';

'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//functions: cookiesPerHour, predictedCustomers, renderHTMLSales
function Location(Location, minCust , maxCust, avgCookieSales){
  this.storeName = Location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];
  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  //build table within this function
  // table.appendChild(thead);
    // console.log('tr: ', tr);
  // creates the table header with the hours row at top

  // create table body to house the tr that the store names live in

  // create the td cells that hold the daily cookies sales results

  this.forEachHour = function forEachHour (){
    var trBlankLocation = document.createElement('tr');//this builds the tr (blank) that will house the tds for shopname and numb of cookies
    var attachTrToTable = document.getElementById('table');
    trBlankLocation.textContent = '';
    table.appendChild(trBlankLocation);
    var tdFirst = document.createElement('td');
    // trBlankLocation = document.getElementById('trBlankLocation');
    tdFirst.textContent = this.storeName;
    trBlankLocation.appendChild(tdFirst);
    for (var i = 0; i < hours.length; i++) {
      var tdDailySalesPerHour = document.createElement('td');
      // trBlankLocation = document.getElementById('trBlankLocation');
      console.log('this.dailyCookieSalesPerHour: ', this.dailyCookieSalesPerHour);
      tdDailySalesPerHour.textContent = this.dailyCookieSalesPerHour[i];
      trBlankLocation.appendChild(tdDailySalesPerHour);
    };

 //    var li = document.createElement('li');
 // li.innerText = 'Total Sales: ' + totalSales + ' cookies';
 // ul.appendChild(li);
  };
//generate randomCookiesSalesPerHour, needs to be entered in td
  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      // console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
    }
  };
};

var allLocations = [
  new Location('first-and-pike', 23, 65, 6.3),
  new Location('Seatac', 3, 24, 1.2),
  new Location('Seattle Center', 11, 38, 3.7),
  new Location('Capitol Hill', 20, 38, 2.3),
  new Location('Alki', 2, 16, 4.6),

];
//create header row for hours
function createHeaderForHours(){
  var trHours = document.createElement('tr');
  var table = document.getElementById('table');
  table.appendChild(trHours);
  var thBlankHour = document.createElement('th');
  trHours.appendChild(thBlankHour);
  for (var i = 0; i < hours.length; i++) {
    var thHours = document.createElement('th');
    thHours.textContent = hours[i];
    trHours.appendChild(thHours);
  };
};
// this is what runs the data from the location array and enters it into the tr
function forEachLocation() {
  createHeaderForHours();
  for (var i = 0; i < allLocations.length; i++){
    console.log(allLocations[i]);
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  };
};
forEachLocation();

// var makeNewElement = function(elementTag, elementContent, target){
//   var newEl = document.createElement(elementTag);
//   newEl.innerText = elementContent;
//   target.appendChild(newEl);
// };
// forEachHour();
// Other way to do the same thing:
// var location1 = new Location();
// var location2 = new Location();
// var allLocations = [
//   location1,
//   location2
// ];

// console.log('allLocations: ', allLocations);

// for (var i = 0; i < hours.length; i++){
//   console.log('this: ');
//   console.log('hours[i]: ', hours[i]);
//   console.log('this.dailyCookieSalesPerHour: ', this.dailyCookieSalesPerHour);
//   console.log('this.dailyCookieSalesPerHour[i]: ', this.dailyCookieSalesPerHour[i]);
  // (hours[i] + this.dailyCookieSalesPerHour[i]);
  // hours[i].cookiesPerHour();
  // hours[i].randomCookieSalesPerHour();
// }
// // CODE - Wednesday-forms
// var th = document.createElement('th');
// var table = document.getElementById('buildTable');
// th.textContent = hours;
// table.appendChild(th);
//
// for (var i = 0; i < hours.length; i++) {
//   console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
//   var td = document.createElement('td');
//   td.textContent = hours[i] + this.dailyCookieSalesPerHour[i];
//   console.log('td after textContent: ', td);
//   th.appendChild(td);
//   var tr = document.createElement('tr');
//   var table = document.getElementById('buildTable');
//   th.textContent = this.storeName;
//   table.appendChild(tr);
//   // thead.appendChild(tr);
// }
//
//
//
//
// // located here as a global value that can be used for all locations
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// //functions: cookiesPerHour, predictedCustomers, renderHTMLSales
// function Location(storeName, minCust , maxCust, avgCookieSales){
//   this.storeName = storeName;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSales = avgCookieSales;
//   this.dailyCookieSalesPerHour = [];
//   this.locationTotals = 0;
//   this.locationLog = [];
//   this.randomCustPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   };
//   //build table within this function
//   this.forEachHour = function forEachHour (){
//     for (var i = 0; i < hours.length; i++) {
//       console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
// // this.locationTotals += this.dailySales [i];
//     }
//   };
// //generate randomCookiesSalesPerHour
//   this.randomCookieSalesPerHour = function (){
//     for (var i = 0; i < hours.length; i++){
//       this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
//       // console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
//     }
//   };
// };
//
// var allLocations = [
//   new Location('Sea Tac', 23, 59, 4),
//   new Location('Pike', 34, 87, 9),
// ];
//
// function forEachLocation() {
//   for (var i = 0; i < allLocations.length; i++){
//     console.log(allLocations[i]);
//     allLocations[i].randomCookieSalesPerHour();
//     allLocations[i].forEachHour();
//   }
// }
// forEachLocation();
//
// // forEachHour();
// // Other way to do the same thing:
// // var location1 = new Location();
// // var location2 = new Location();
// // var allLocations = [
// //   location1,
// //   location2
// // ];
//
// console.log('allLocations: ', allLocations);
//
// for (var i = 0; i < hours.length; i++){
//   console.log('this: ');
//   console.log('hours[i]: ', hours[i]);
//   console.log('this.dailyCookieSalesPerHour: ', this.dailyCookieSalesPerHour);
//   console.log('this.dailyCookieSalesPerHour[i]: ', this.dailyCookieSalesPerHour[i]);
//   // (hours[i] + this.dailyCookieSalesPerHour[i]);
//   // hours[i].cookiesPerHour();
//   // hours[i].randomCookieSalesPerHour();
// }
//
// // var allMeals = [
// //   new Meal(['eggs', 'bacon', 'bacon', 'bacon', 'bacon', 'bacon', 'pancakes'], 'Breakfast'),
// //   new Meal(['rice noodles', 'chicken', 'onions', 'hoisin sauce', 'hot sauce'], 'Pho'),
// //   new Meal(['steak', 'potatoes', 'sweet corn', 'broccoli', 'carrots'], 'Steak and Potatoes')
// // ];
// //
// // for (var i = 0; i < allMeals.length; i++) {
// //   allMeals[i].renderMeal();
// //   allMeals[i].renderCalories();
// // }
// // located here as a global value that can be used for all locations
// var hours = ['6am' ,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//
// var Pike = {
//   name: 'first-and-pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSales: 6.3,
//   cookiesPerHour: [],
// // calculate and store the avg number of customers per hour
//   predictedCustomers: function() {
//     return Math.Floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     console.log('hello');
//     // randomNumCust: function()
//   }
// // calculate and store the avg number of cookie sales per hour
// calcCookiesPerHour: function() {
//     for (var i = 0; i < hours.length ; i++) {
//       var cookies = Math.Floor(this.avgCookieSales * this.predictedCustomers());
//       this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.cookies));
//     }
//   }
// };
//
//
// renderHTMLSales: fucnction(){
//   this.calcCookiesPerHour():
//   var h2 = document.createElement('h2')
//   h2.innerText = this.name;
//   var ul = document.createElement('ul');
//   main.appendChild(ul);
//   for (var i = 0; i < hours.length; i++)
//   var li = document.createElement('li');
//   li.innerText = hours[i] + ': ' + this.calcCookiesPerHour[i] + 'cookies';
//   ul.appendChild(li);
//
// }
//
// for var = 0; i < dailySales.lenth; i++){
//   totalSales += this.dailySales[i];
//   ul.appendChild(li);
// }
//
// function createHtml(){
//   var h1 = document.createElement('h1');
//   h1.innerText = "All Cookie Stores";
//   main.appendChild(h1);
//   var h2 = document.createElement('h2');
//   h2.innerText = 'Pike';
//   var main = document.getElementsByTagName('main')[0];
//   main.appendChild(h2);
//   var ul = document.createElement('ul');
//   var hourlySales = calcCookiesPerHour();
//   var li = document.createElement(hourlySales[i]);
//   ;
// }
// pike.predictedCustomers();
// pike.calcCookiesPerHour();
// pike.renderHTMLSales();
