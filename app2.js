'use strict';

// located here as a global value that can be used for all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor: one function to rule them all!
function Location(Location, minCust , maxCust, avgCookieSales){
  this.storeName = Location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];
  console.log(this.dailyCookieSalesPerHour);

  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };

  this.forEachHour = function forEachHour (){
    console.log(this.storeName + 'forEachHour');
    this.randomCookieSalesPerHour();
    var trBlankLocation = document.createElement('tr');//blank tr to attach tds
    var attachTrToTable = document.getElementById('table');
    trBlankLocation.textContent = '';
    attachTrToTable.appendChild(trBlankLocation);
    var tdFirst = document.createElement('td');
    tdFirst.textContent = this.storeName;
    trBlankLocation.appendChild(tdFirst);
    for (var i = 0; i < hours.length; i++) {
      var tdDailySalesPerHour = document.createElement('td');
      tdDailySalesPerHour.textContent = this.dailyCookieSalesPerHour[i];
      trBlankLocation.appendChild(tdDailySalesPerHour);
    };

    var totalSalesDaily = 0;
    for (var i = 0; i < this.dailyCookieSalesPerHour.length; i++) {
      totalSalesDaily += this.dailyCookieSalesPerHour[i];
    }

    var tdTotalSalesDaily = document.createElement('td');
    tdTotalSalesDaily.innerText = totalSalesDaily;
    trBlankLocation.appendChild(tdTotalSalesDaily);
  };

  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      console.log(hours[i] + this.dailyCookieSalesPerHour[i]);
    };

  };
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
  var table = document.getElementById('table');
  table.appendChild(trHours);
  var thBlankHour = document.createElement('th');
  // assigning id to blank hour row to give submit button more space
  trHours.appendChild(thBlankHour);
  for (var i = 0; i < hours.length; i++) {
    var thHours = document.createElement('th');
    thHours.textContent = hours[i];
    trHours.appendChild(thHours);
  };
};

// this is what runs the data from the location array and enters it into the tr
function forEachLocation() {
  console.log('forEachLocation');
  var grabTable = document.getElementById('table');
  console.log(grabTable);
  grabTable.innerHTML = '';
  createHeaderForHours();
  for (var i = 0; i < allLocations.length; i++){
    console.log('allLocations[i]: ', allLocations[i]);
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  };
};

// Start of Event Code

var form = document.getElementById('formId');
function cookieSalesFormSubmitHandler(event) {
  event.preventDefault();
  var name = event.target.storeName.value;
  var minHourlyCustomers = parseInt(event.target.minCust.value);
  var maxHourlyCustomers = parseInt(event.target.maxCust.value);
  var averageCookies = parseInt(event.target.avgCookieSales.value);

  var store = new Location(name,minHourlyCustomers,maxHourlyCustomers,averageCookies);

  allLocations.push(store);
  console.log('allLocations: ', allLocations);

  // for (var i = 1; i < event.target.length - 1; i++) {
  //   event.target[i].value = '';
  for (var i = 1; i < fieldset.children.length - 1; i++) {
    event.target[i].value = '';
  };
}

forEachLocation();

form.addEventListener('submit', cookieSalesFormSubmitHandler);
