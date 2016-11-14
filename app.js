'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Pike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],
  predictedCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  randomCookieSalesPerHour: function() {
    var start = document.getElementById('pike');
    var result = document.createElement('ul');
    start.appendChild(result);
    for (var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.avgCookieSales));
      var result2 = document.createElement('li');
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      result.appendChild(result2);
    }
    var totalSalesDaily = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      totalSalesDaily += this.cookiesPerHour[i];
    }
    var liTotalCookies = document.createElement('li');
    liTotalCookies.innerText = 'Total: ' + totalSalesDaily + ' cookies';
    result.appendChild(liTotalCookies);
  }
};

var Seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  cookiesPerHour: [],
  predictedCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  randomCookieSalesPerHour: function() {
    var start = document.getElementById('seatac');
    var result = document.createElement('ul');
    start.appendChild(result);
    for (var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.avgCookieSales));
      var result2 = document.createElement('li');
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      result.appendChild(result2);
    }
    var totalSalesDaily = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      totalSalesDaily += this.cookiesPerHour[i];
    }
    var liTotalCookies = document.createElement('li');
    liTotalCookies.innerText = 'Total: ' + totalSalesDaily + ' cookies';
    result.appendChild(liTotalCookies);
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 3.7,
  cookiesPerHour: [],
  predictedCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  randomCookieSalesPerHour: function() {
    var start = document.getElementById('seaCenter');
    var result = document.createElement('ul');
    start.appendChild(result);
    for (var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.avgCookieSales));
      var result2 = document.createElement('li');
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      result.appendChild(result2);
    }

    var totalSalesDaily = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      totalSalesDaily += this.cookiesPerHour[i];
    }
    var liTotalCookies = document.createElement('li');
    liTotalCookies.innerText = 'Total: ' + totalSalesDaily + ' cookies';
    result.appendChild(liTotalCookies);
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSales: 2.3,
  cookiesPerHour: [],
  predictedCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  randomCookieSalesPerHour: function() {
    var start = document.getElementById('capHill');
    var result = document.createElement('ul');
    start.appendChild(result);
    for (var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.avgCookieSales));
      var result2 = document.createElement('li');
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      result.appendChild(result2);
    }
    var totalSalesDaily = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      totalSalesDaily += this.cookiesPerHour[i];
    }
    var liTotalCookies = document.createElement('li');
    liTotalCookies.innerText = 'Total: ' + totalSalesDaily + ' cookies';
    result.appendChild(liTotalCookies);
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSales: 4.6,
  cookiesPerHour: [],
  predictedCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  randomCookieSalesPerHour: function() {
    var start = document.getElementById('Alki');
    var result = document.createElement('ul');
    start.appendChild(result);
    for (var i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.floor(this.predictedCustomers() * this.avgCookieSales));
      var result2 = document.createElement('li');
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      result.appendChild(result2);
    }
    var totalSalesDaily = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      totalSalesDaily += this.cookiesPerHour[i];
    }
    var liTotalCookies = document.createElement('li');
    liTotalCookies.innerText = 'Total: ' + totalSalesDaily + ' cookies';
    result.appendChild(liTotalCookies);
  }
};

Pike.randomCookieSalesPerHour();
Seatac.randomCookieSalesPerHour();
seattleCenter.randomCookieSalesPerHour();
capitolHill.randomCookieSalesPerHour();
alki.randomCookieSalesPerHour();
