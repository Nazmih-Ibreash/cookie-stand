'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let shopLocations = [];
let addedLocation = [];
let totalOfTotals = 0;

function Shop(shopName, minCust, MaxCust, avgCookiePerHour) {
    this.shopName = shopName;
    this.minCust = minCust;
    this.maxCust = MaxCust;
    this.avgCookiePerHour = avgCookiePerHour;
    this.customerPerHour = [];
    this.cookiesPurchased = [];
    this.totalCookies = 0;
    this.totalsOfHours = 0;

    shopLocations.push(this);

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
        this.totalCookies = Math.round(this.totalCookies);
        console.log(this.totalCookies);
        //return this.totalCookies
    };

    this.render = function () {
        //set HTML structure////////////////////////////////
        this.row = document.createElement('tr');
        table.appendChild(this.row);

        //for (let i = 0; i < shopLocations.length; i++) {
        this.row = document.createElement('tr');
        table.appendChild(this.row);

        this.rowElement = document.createElement('td');
        this.row.appendChild(this.rowElement);
        this.rowElement.textContent = this.shopName;

        totalOfTotals += this.totalCookies;

        for (let j = 0; j < hours.length; j++) {
            this.rowElement = document.createElement('td');
            this.row.appendChild(this.rowElement);
            this.rowElement.textContent = Math.round(this.cookiesPurchased[j]);
        }
        this.rowElement = document.createElement('td');
        this.row.appendChild(this.rowElement);
        this.rowElement.textContent = this.totalCookies;
        // }
    };
}
let parent = document.getElementById('seattleDiv');
let table = document.createElement('table');
parent.appendChild(table);
let makeHeader = function () {
    console.log(parent);

    let headRow = document.createElement('tr');
    table.appendChild(headRow);

    let cell = document.createElement('th');
    headRow.appendChild(cell);
    cell.textContent = [];

    for (let i = 0; i < hours.length; i++) {
        let cell = document.createElement('th');
        headRow.appendChild(cell);
        cell.textContent = hours[i];
    }
    cell = document.createElement('th');
    headRow.appendChild(cell);
    cell.textContent = 'Daily LocationTotals';

}
makeHeader();

let makeBottom = function () {
    let headRow = document.createElement('tr');
    table.appendChild(headRow);

    let cell = document.createElement('th');
    headRow.appendChild(cell);
    cell.textContent = 'Totals';

    for (let i = 0; i < hours.length; i++) {
        Shop.totalsOfHours = 0;
        for (let j = 0; j < shopLocations.length; j++) {
            Shop.totalsOfHours += shopLocations[j].cookiesPurchased[i];
        }
        cell = document.createElement('th');
        headRow.appendChild(cell);
        Shop.totalsOfHours = Math.round(Shop.totalsOfHours);
        cell.textContent = Shop.totalsOfHours;
        console.log(Shop.totalsOfHours);
    }
    cell = document.createElement('th');
    headRow.appendChild(cell);
    //this.totalsOfHours=Math.round(this.totalsOfHours);
    cell.textContent = totalOfTotals;
    console.log(totalOfTotals);
}


let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);

//form
let form = document.getElementById('locationForm');
console.log(form);

form.addEventListener("submit", addLocation);

function addLocation(event) {
    event.preventDefault();

    let name = event.target.shopName.value;
    console.log(name);

    let minC = event.target.minCust.value;
    console.log(minC);

    let maxC = event.target.maxCust.value;
    console.log(maxC);

    let avg = event.target.avgCookies.value;
    console.log(avg);
    console.log(event);
    addedLocation = new Shop(name, minC, maxC, avg);
    console.log(addedLocation);

    //let container = document.getElementById('seattleDiv');
    table.textContent = '';

    makeHeader();
    for (let i = 0; i < shopLocations.length; i++) {
        shopLocations[i].totalCookiesPerDay();
        shopLocations[i].render();
    }
    makeBottom();
}

for (let i = 0; i < shopLocations.length; i++) {
    shopLocations[i].totalCookiesPerDay();
    shopLocations[i].render();
}

makeBottom();



//Seattle.render();

