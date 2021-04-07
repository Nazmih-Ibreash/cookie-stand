'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let shopLocations = [];
let addedLocation=[];

function Shop(shopName, minCust, MaxCust, avgCookiePerHour) {
    this.shopName = shopName;
    this.minCust = minCust;
    this.maxCust = MaxCust;
    this.avgCookiePerHour = avgCookiePerHour;
    this.customerPerHour = [];
    this.cookiesPurchased = [];
    this.totalCookies = 0;
    this.totalsOfHours = 0;
    this.totalOfTotals = 0;
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
        this.parent = document.getElementById('seattleDiv');
        console.log(this.parent);


        this.table = document.createElement('table');
        this.parent.appendChild(this.table);

        this.headRow = document.createElement('tr');
        this.table.appendChild(this.headRow);

        this.cell = document.createElement('th');
        this.headRow.appendChild(this.cell);
        this.cell.textContent = [];

        for (let i = 0; i < hours.length; i++) {
            this.cell = document.createElement('th');
            this.headRow.appendChild(this.cell);
            this.cell.textContent = hours[i];
        }
        this.cell = document.createElement('th');
        this.headRow.appendChild(this.cell);
        this.cell.textContent = 'Daily LocationTotals';

        this.row = document.createElement('tr');
        this.table.appendChild(this.row);


        for (let i = 0; i < shopLocations.length; i++) {
            this.row = document.createElement('tr');
            this.table.appendChild(this.row);

            this.rowElement = document.createElement('td');
            this.row.appendChild(this.rowElement);
            this.rowElement.textContent = shopLocations[i].shopName;

            this.totalOfTotals += shopLocations[i].totalCookies;

            for (let j = 0; j < hours.length; j++) {
                this.rowElement = document.createElement('td');
                this.row.appendChild(this.rowElement);
                this.rowElement.textContent = Math.round(shopLocations[i].cookiesPurchased[j]);
            }
            this.rowElement = document.createElement('td');
            this.row.appendChild(this.rowElement);
            this.rowElement.textContent = shopLocations[i].totalCookies;



        }

        this.headRow = document.createElement('tr');
        this.table.appendChild(this.headRow);

        this.cell = document.createElement('th');
        this.headRow.appendChild(this.cell);
        this.cell.textContent = 'Totals';


        for (let i = 0; i < hours.length; i++) {
            this.totalsOfHours = 0;
            for (let j = 0; j < shopLocations.length; j++) {
                this.totalsOfHours += shopLocations[j].cookiesPurchased[i];
            }
            this.cell = document.createElement('th');
            this.headRow.appendChild(this.cell);
            this.totalsOfHours = Math.round(this.totalsOfHours);
            this.cell.textContent = this.totalsOfHours;
            console.log(this.totalsOfHours);
        }

        this.cell = document.createElement('th');
        this.headRow.appendChild(this.cell);
        //this.totalsOfHours=Math.round(this.totalsOfHours);
        this.cell.textContent = this.totalOfTotals;
        console.log(this.totalOfTotals);



    };
   
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

    let minC = event.target.min.value;
    console.log(minC);

    let maxC = event.target.max.value;
    console.log(maxC);

    let avg = event.target.avg.value;
    console.log(avg);

    addedLocation = new Shop(name, minC, maxC, avg);
    
    addedLocation.totalCookiesPerDay();addedLocation.render();
}




for (let i = 0; i < shopLocations.length; i++) {
    shopLocations[i].totalCookiesPerDay();
}


console.log(shopLocations);

Seattle.render();

