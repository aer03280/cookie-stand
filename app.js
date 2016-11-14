'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Pike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHour: [],
  hourlyCookies: 0,
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
      result2.innerText = hours[i] + ': ' + this.cookiesPerHour[i];
      result.appendChild(result2);
      console.log(hours[i] , this.cookiesPerHour[i]);
      // console.log(this.hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    }
  }
};

Pike.randomCookieSalesPerHour();
