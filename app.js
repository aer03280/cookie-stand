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
    var thead = document.createElement('thead');
    var table = document.getElementByID('table');
    thead.textContent = 'test';
    table.appendChild(thead);
    var tr = document.createElement('tr');
    var thead = document.getElementById('thead');
    tr.textContent = hours;
    thead.appendChild(tr);
    for (var i = 0; i < hours.length; i++) {
      var th = document.createElement('th');
      var tr = document.getElementByTag('tr');
      th.textContent = ' ' + this.storeName;
      tr.appendChild(th);
      var td = document.createElement('td');
      var th = document.getElementByTag('th');
      td.textContent = this.dailyCookieSalesPerHour;
      th.appendChild(td);
      // th.appendChild(tr);
      // console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
      // var td = document.createElement('td');
      // var tr = document.getElementByTag('tr');
      // td.textContent = this.dailyCookieSalesPerHour[i];
      // var thead = document.createElement('thead');
      // console.log('td after textContent: ', td);
      // tr.appendChild(td);
      // var tr = document.createElement('tr');
      // var table = document.getElementById('buildTable');
      // th.textContent = this.storeName;
      // table.appendChild(tr);
      // thead.appendChild(tr);
    }

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
// this is what runs the data from the location array and enters it into the tr
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
