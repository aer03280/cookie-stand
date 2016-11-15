
'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(Location, minCust , maxCust, avgCookieSales){
  this.storeName = Location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];
  console.log(this.dailyCookieSalesPerHour);

  // this.DailyTotal = 0;
  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.forEachHour = function forEachHour (){
    console.log(this.storeName + 'forEachHour');
    this.randomCookieSalesPerHour();
    var trBlankLocation = document.createElement('tr');//this builds the tr (blank) that will house the tds for shopname and numb of cookies
    var attachTrToTable = document.getElementById('buildTable');
    trBlankLocation.textContent = '';
    attachTrToTable.appendChild(trBlankLocation);
    var tdFirst = document.createElement('td');
    // trBlankLocation = document.getElementById('trBlankLocation');
    tdFirst.textContent = this.storeName;
    trBlankLocation.appendChild(tdFirst);
    for (var i = 0; i < hours.length; i++) {
      var tdDailySalesPerHour = document.createElement('td');
      // trBlankLocation = document.getElementById('trBlankLocation');
      // tdDailySalesPerHour.textContent = this.randomCookieSalesPerHour[i];
      tdDailySalesPerHour.textContent = this.dailyCookieSalesPerHour[i];
      trBlankLocation.appendChild(tdDailySalesPerHour);
    }
    // for (var i = 0; i < allLocations.length; i++) {
    //   var totalD = document.createElement('td');
    // };
    // var totalRow = document.createElement('tr');
    // totalRow.textContent = 'Total';
    // tdFirst.appendChild(totalRow);

// Total Sales for the Day
    var totalSalesDaily = 0;
    for (var i = 0; i < this.dailyCookieSalesPerHour.length; i++) {
      totalSalesDaily += this.dailyCookieSalesPerHour[i];
    }

    var tdTotalSalesDaily = document.createElement('td');
    tdTotalSalesDaily.innerText = totalSalesDaily;
    trBlankLocation.appendChild(tdTotalSalesDaily);

 //    var li = document.createElement('li');
 // li.innerText = 'Total Sales: ' + totalSales + ' cookies';
 // ul.appendChild(li);
  };
//generate randomCookiesSalesPerHour, needs to be entered in td
  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      this.DailyTotal += this.randomCookieSalesPerHour;
      console.log('this.DailyTotal += this.randomCookieSalesPerHour' , this.DailyTotal += this.randomCookieSalesPerHour);
    };
  };
    // var totalLocationSales = 0;
    // for (var j = 0; j < this.dailyCookieSalesPerHour.length; j++){
    //   totalLocationSales += this.
    // };
};

var allLocations = [
  new Location('First-and-Pike', 23, 65, 6.3),
  new Location('Seatac', 3, 24, 1.2),
  new Location('Seattle Center', 11, 38, 3.7),
  new Location('Capitol Hill', 20, 38, 2.3),
  new Location('Alki', 2, 16, 4.6),

];
//create header row for hours
function createHeaderForHours(){
  var trHours = document.createElement('tr');
  var table = document.getElementById('buildTable');
  table.appendChild(trHours);
  var thBlankHour = document.createElement('th');
  // assigning id to blank hour row to give submit button more space
  // thBlankHour.setAttribute('thBlankHour' , ID);
  trHours.appendChild(thBlankHour);
  for (var i = 0; i < hours.length; i++) {
    var thHours = document.createElement('th');
    thHours.textContent = hours[i];
    trHours.appendChild(thHours);
  };

  // function createTotals() {
  //   var thDailyTotal = document.createElement('th');
  //   thDailyTotal.textContent = 'Daily Location Total';
  //   trHours.appendChild(thDailyTotal);
  //   tdDailySalesPerHourTotal.createElement('td');
  //   tdDailySalesPerHourTotal.textContent = this.DailyTotal;
  //   trBlankLocation.appendChild(tdDailySalesPerHourTotal);
  // };

};
// this is what runs the data from the location array and enters it into the tr
function forEachLocation() {
  var grabTable = document.getElementById('buildTable');
  grabTable.innerHTML = '';
  createHeaderForHours();
  for (var i = 0; i < allLocations.length; i++){
    // allLocations[i].randomCustPerHour();
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  };
};
// Start of Event Code
//
// var form = document.getElementById('getCookieSalesPerDay');
// function cookieSalesFormSubmitHandler(event) {
//   event.preventDefault();
//   // var name = event.target[name].value;
//   var name = event.target.name.value;
//   var minHourlyCustomers = event.target.minHourlyCustomers.value;
//   var maxHourlyCustomers = event.target.maxHourlyCustomers.value;
//   var averageCookies = event.target.averageCookies.value;
//   var tBody = document.getElementById('store-body');
//
//   var store = new Store(name,minHourlyCustomers,maxHourlyCustomers,averageCookies);
//
//   locationArray.push(store);
//   tBody.innerHTML = '';
//   for (var i = 0; i < locationArray.length; i++){
//     locationArray[i].renderSales();
//   };
//
//   for (var i = 0; i < fieldset.children.length + 1; i++) {
//     event.target[i].value = '';
//   };
// }
// Start of Event Code

// var form = document.getElementById('formId');
// function cookieSalesFormSubmitHandler(event) {
//   event.preventDefault();
//   // var name = event.target[name].value;
//   var name = event.target.name.value;
//   var minHourlyCustomers = parseInt(event.target.minCust.value);
//   var maxHourlyCustomers = parseInt(event.target.maxCust.value);
//   var averageCookies = parseInt(event.target.avgCookieSales.value);
//   // var table = document.getElementById('table');
//
//   var store = new Location(name,minHourlyCustomers,maxHourlyCustomers,averageCookies);
//   allLocations.push(store);
//   console.log('allLocations: ', allLocations);
// }

forEachLocation();
