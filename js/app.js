'use strict';




function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiePerHour: 6.3,
    customerPerHour: [0],
    cookiesPurchased: [0],
    totalCookies: 0,

    randomCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            this.customerPerHour[index] = randomNumber(this.minCust, this.maxCust);
        }
        console.log(this.customerPerHour);
        return this.customerPerHour;
    }
    ,
    amountOfCookiesPerHour: function (cust) {
        let customers = cust;
        for (let index = 0; index < customers.length; index++) {
            this.cookiesPurchased[index] = customers[index] * this.avgCookiePerHour;
        }
        console.log(this.cookiesPurchased);
        return this.cookiesPurchased
    }
    ,
    totalCookiesPerDay: function (cookies) {
        for (let index = 0; index < cookies.length; index++) {
            this.totalCookies += cookies[index];
        }
        console.log(this.totalCookies);
        return this.totalCookies
    }
}
//////////////////////SEATTLE////////////////////////////////////////////////////////////////////
//set HTML structure////////////////////////////////
let parent = document.getElementById('seattleDiv');
console.log(parent);

let articleElement = document.createElement('article');
seattleDiv.appendChild(articleElement);
articleElement.setAttribute('id', 'seattleArt');

let header = document.createElement('h2');
seattleArt.appendChild(header);
header.textContent = 'Seattle';
header.setAttribute('id', 'seattleHead');


let unSortedList = document.createElement('ul');
seattleArt.appendChild(unSortedList);
unSortedList.setAttribute('id', 'seattleUl');

//render features////////////////////////////////

let customers = seattle.randomCustPerHour();
let cookiePerHour = seattle.amountOfCookiesPerHour(customers);
let total = seattle.totalCookiesPerDay(cookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let li = document.createElement('li');
    seattleUl.appendChild(li);
    li.innerHTML = hours[index] + ' :' + Math.round(cookiePerHour[index]) + ' cookies';
}
let li = document.createElement('li');
seattleUl.appendChild(li);
li.innerHTML = 'Total :' + total + ' cookies';




//////////////////////Tokyo////////////////////////////////////////////////////////////////////
let tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiePerHour: 1.2,
    customerPerHour: [0],
    cookiesPurchased: [0],
    totalCookies: 0,

    randomCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            this.customerPerHour[index] = randomNumber(this.minCust, this.maxCust);
        }
        console.log(this.customerPerHour);
        return this.customerPerHour;
    }
    ,
    amountOfCookiesPerHour: function (cust) {
        let customers = cust;
        for (let index = 0; index < customers.length; index++) {
            this.cookiesPurchased[index] = customers[index] * this.avgCookiePerHour;
        }
        console.log(this.cookiesPurchased);
        return this.cookiesPurchased
    }
    ,
    totalCookiesPerDay: function (cookies) {
        for (let index = 0; index < cookies.length; index++) {
            this.totalCookies += cookies[index];
        }
        console.log(this.totalCookies);
        return this.totalCookies
    }
}
//set HTML structure////////////////////////////////
let tokyoparent = document.getElementById('tokyoDiv');
console.log(tokyoparent);

let tokyoarticle = document.createElement('article');
tokyoDiv.appendChild(tokyoarticle);
tokyoarticle.setAttribute('id', 'tokyoArt');

let tokyoheader = document.createElement('h2');
tokyoArt.appendChild(tokyoheader);
tokyoheader.textContent = 'Tokyo';
tokyoheader.setAttribute('id', 'tokyoHead');


let tokyounSortedList = document.createElement('ul');
tokyoArt.appendChild(tokyounSortedList);
tokyounSortedList.setAttribute('id', 'tokyoUl');

//render features////////////////////////////////

let tokyocustomers = tokyo.randomCustPerHour();
let tokyocookiePerHour = tokyo.amountOfCookiesPerHour(tokyocustomers);
let totokyotal = tokyo.totalCookiesPerDay(cookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let tokyoli = document.createElement('li');
    tokyoUl.appendChild(tokyoli);
    tokyoli.innerHTML = hours[index] + ' :' + Math.round(cookiePerHour[index]) + ' cookies';
}
let tokyoli = document.createElement('li');
tokyoUl.appendChild(tokyoli);
tokyoli.innerHTML = 'Total :' + total + ' cookies';


//////////////////////Dubai////////////////////////////////////////////////////////////////////
let dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookiePerHour: 3.7,
    customerPerHour: [0],
    cookiesPurchased: [0],
    totalCookies: 0,

    randomCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            this.customerPerHour[index] = randomNumber(this.minCust, this.maxCust);
        }
        console.log(this.customerPerHour);
        return this.customerPerHour;
    }
    ,
    amountOfCookiesPerHour: function (cust) {
        let customers = cust;
        for (let index = 0; index < customers.length; index++) {
            this.cookiesPurchased[index] = customers[index] * this.avgCookiePerHour;
        }
        console.log(this.cookiesPurchased);
        return this.cookiesPurchased
    }
    ,
    totalCookiesPerDay: function (cookies) {
        for (let index = 0; index < cookies.length; index++) {
            this.totalCookies += cookies[index];
        }
        console.log(this.totalCookies);
        return this.totalCookies
    }
}
//set HTML structure////////////////////////////////
let Dparent = document.getElementById('DDiv');
console.log(Dparent);

let Darticle = document.createElement('article');
DDiv.appendChild(Darticle);
Darticle.setAttribute('id', 'DArt');

let Dheader = document.createElement('h2');
DArt.appendChild(Dheader);
Dheader.textContent = 'DUBAI';
Dheader.setAttribute('id', 'DHead');


let DunSortedList = document.createElement('ul');
DArt.appendChild(DunSortedList);
DunSortedList.setAttribute('id', 'DUl');

//render features////////////////////////////////

let Dcustomers = dubai.randomCustPerHour();
let DcookiePerHour = dubai.amountOfCookiesPerHour(tokyocustomers);
let Dtotal = dubai.totalCookiesPerDay(cookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let Dli = document.createElement('li');
    DUl.appendChild(Dli);
    Dli.innerHTML = hours[index] + ' :' + Math.round(cookiePerHour[index]) + ' cookies';
}
let Dli = document.createElement('li');
DUl.appendChild(Dli);
Dli.innerHTML = 'Total :' + total + ' cookies';