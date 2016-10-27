'use strict';

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

    // console.log('tr: ', tr);
  // creates the table header with the hours row at top
  var th = document.createElement('th');
  var table = document.getElementById('buildTable');
  th.textContent = hours;
  table.appendChild(th);
  // create table body to house the tr that the store names live in
  var tBody = document.createElement('tbody');
  var tableTwo = document.getElementByID('buildTable');
  tbody.textContent = this.XXXX;
  tableTwo.appendChild(tBody);

  var tr = document.createElement('tr');
  var th = document.getElementByTag('th');
  tr.textContent = ' ' + storeName;
  th.appendChild(tr);
  // create the td cells that hold the daily cookies sales results
  var td = document.createElement('td');
  var tr = document.getElementByTag('tr');
  td.textContent = this.dailyCookieSalesPerHour;
  tr.appendChild(td);

  this.forEachHour = function forEachHour (){
    for (var i = 0; i < hours.length; i++) {
      var tr = document.createElement('tr');
      th.appendChild(tr);

      console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
      var td = document.createElement('td');
      var tr = document.getElementByTag('tr');
      td.textContent = hours[i] + this.dailyCookieSalesPerHour[i];
      // console.log('td after textContent: ', td);
      tr.appendChild(td);
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
//generate randomCookiesSalesPerHour
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
