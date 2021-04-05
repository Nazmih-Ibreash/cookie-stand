'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Shop(shopName, minCust, MaxCust, avgCookiePerHour) {
    this.shopName = shopName;
    this.minCust = minCust;
    this.maxCust = MaxCust;
    this.avgCookiePerHour = avgCookiePerHour;
    this.customerPerHour = [];
    this.cookiesPurchased = [];
    this.totalCookies = 0;

    this.randomCustPerHour = function () {
        for (let index = 0; index < hours.length; index++) {
            this.customerPerHour[index] = randomNumber(this.minCust, this.maxCust);
        }
        console.log(this.customerPerHour);
        return this.customerPerHour;
    };

    this.amountOfCookiesPerHour = function () {
        //let customers = cust;
        this.customers = this.randomCustPerHour();
        for (let index = 0; index < this.customers.length; index++) {
            this.cookiesPurchased[index] = this.customers[index] * this.avgCookiePerHour;
        }
        console.log(this.cookiesPurchased);
        return this.cookiesPurchased
    };

    this.totalCookiesPerDay = function () {
        this.cookies = this.amountOfCookiesPerHour();
        for (let index = 0; index < this.cookies.length; index++) {
            this.totalCookies += this.cookies[index];
        }
        console.log(this.totalCookies);
        //return this.totalCookies
    };

    this.render = function () {
        //set HTML structure////////////////////////////////
        this.parent = document.getElementById('seattleDiv');
        console.log(this.parent);

        this.articleElement = document.createElement('article');
        seattleDiv.appendChild(this.articleElement);
        //articleElement.setAttribute('id', 'seattleArt');

        this.header = document.createElement('h2');
        this.articleElement.appendChild(this.header);
        this.header.textContent = this.shopName;
        //header.setAttribute('id', 'seattleHead');


        this.unSortedList = document.createElement('ul');
        this.articleElement.appendChild(this.unSortedList);
        //unSortedList.setAttribute('id', 'seattleUl');

        //render features////////////////////////////////

        this.customers = this.randomCustPerHour();
        this.cookiePerHour = this.amountOfCookiesPerHour(this.customers);
        this.total = this.totalCookiesPerDay(this.cookiePerHour);

        for (let index = 0; index < hours.length; index++) {
            this.li = document.createElement('li');
            this.unSortedList.appendChild(this.li);
            this.li.innerHTML = hours[index] + ' :' + Math.round(this.cookiePerHour[index]) + ' cookies';
        }
        this.li = document.createElement('li');
        this.unSortedList.appendChild(this.li);
        this.li.innerHTML = 'Total :' + Math.round(this.total) + ' cookies';

    };
}
let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);

console.log(Seattle.totalCookiesPerDay());
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
