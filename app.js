'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(location, minCust , maxCust, avgCookieSales){
  this.storeName = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.dailyCookieSalesPerHour = [];

  this.randomCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.forEachHour = function forEachHour (){
    this.randomCookieSalesPerHour();
    var attachTrToTable = document.getElementById('buildTable');
    var trBlankLocation = document.createElement('tr');
    trBlankLocation.textContent = '';
    attachTrToTable.appendChild(trBlankLocation);

    var tdFirst = document.createElement('th');
    tdFirst.textContent = this.storeName;
    tdFirst.setAttribute('class' , 'tdStyle');
    trBlankLocation.appendChild(tdFirst);
    for (var i = 0; i < hours.length; i++) {
      var tdDailySalesPerHour = document.createElement('td');
      tdDailySalesPerHour.textContent = this.dailyCookieSalesPerHour[i];
      tdDailySalesPerHour.setAttribute('class' , 'tdStyle');
      trBlankLocation.appendChild(tdDailySalesPerHour);
    }
    var totalSalesDaily = 0;
    for (var i = 0; i < this.dailyCookieSalesPerHour.length; i++) {
      totalSalesDaily += this.dailyCookieSalesPerHour[i];
    }

    var tdTotalSalesDaily = document.createElement('td');
    tdTotalSalesDaily.innerText = totalSalesDaily;
    tdTotalSalesDaily.setAttribute('class' , 'tdStyle');
    trBlankLocation.appendChild(tdTotalSalesDaily);

  };
  this.randomCookieSalesPerHour = function (){
    for (var i = 0; i < hours.length; i++){
      this.dailyCookieSalesPerHour.push(Math.floor(this.randomCustPerHour() * this.avgCookieSales));
      this.DailyTotal += this.randomCookieSalesPerHour;
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
function createHeaderForHours(){
  var trHours = document.createElement('tr');
  var table = document.getElementById('buildTable');
  table.appendChild(trHours);
  var thBlankHour = document.createElement('th');
  trHours.appendChild(thBlankHour);
  for (var i = 0; i < hours.length; i++) {
    var thHours = document.createElement('th');
    thHours.textContent = hours[i];
    thHours.setAttribute('class' , 'tdStyle');
    trHours.appendChild(thHours);

  };
  for (var i = 0; i < allLocations.length; i++);
  var totalRow = document.createElement('th');
  totalRow.textContent = 'Total/Location';
  totalRow.setAttribute('class' , 'tdStyle');
  trHours.appendChild(totalRow);

};
var table = document.getElementById('buildTable');
var trTwo = document.createElement('tr');
table.appendChild(trTwo);
for (var i = 0; i < hours.length; i++);
function forEachLocation() {
  var grabTable = document.getElementById('buildTable');
  grabTable.innerHTML = '';
  createHeaderForHours();
  for (var i = 0; i < allLocations.length; i++){
    allLocations[i].randomCookieSalesPerHour();
    allLocations[i].forEachHour();
  };
};

var form = document.getElementById('formId');

function cookieSalesFormSubmitHandler(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minHourlyCustomers = parseInt(event.target.minCust.value);
  var maxHourlyCustomers = parseInt(event.target.maxCust.value);
  var averageCookies = parseInt(event.target.avgCookieSales.value);

  var store = new Location(name,minHourlyCustomers,maxHourlyCustomers,averageCookies);

  allLocations.push(store);
  for (var i = 1; i < fieldset.children.length - 1; i++) {
    document.getElementById('formId').reset();
    event.target[i].value = '';
    forEachLocation();

    var submit = getElementById('submit');
  };
}
forEachLocation();
form.addEventListener('submit', cookieSalesFormSubmitHandler);
