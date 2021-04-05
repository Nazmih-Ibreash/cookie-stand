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
li.innerHTML = 'Total :' + Math.round(total) + ' cookies';




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
let tokyototal = tokyo.totalCookiesPerDay(tokyocookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let tokyoli = document.createElement('li');
    tokyoUl.appendChild(tokyoli);
    tokyoli.innerHTML = hours[index] + ' :' + Math.round(tokyocookiePerHour[index]) + ' cookies';
}
let tokyoli = document.createElement('li');
tokyoUl.appendChild(tokyoli);
tokyoli.innerHTML = 'Total :' + Math.round(tokyototal) + ' cookies';


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
let dubaiParent = document.getElementById('dubaiDiv');
console.log(dubaiParent);

let dubaiArticle = document.createElement('article');
dubaiDiv.appendChild(dubaiArticle);
dubaiArticle.setAttribute('id', 'dubaiArt');

let dubaiHeader = document.createElement('h2');
dubaiArt.appendChild(dubaiHeader);
dubaiHeader.textContent = 'Dubai';
dubaiHeader.setAttribute('id', 'dubaiHead');


let dubaiUnSortedList = document.createElement('ul');
dubaiArt.appendChild(dubaiUnSortedList);
dubaiUnSortedList.setAttribute('id', 'dubaiUl');

//render features////////////////////////////////

let dubaiCustomers = dubai.randomCustPerHour();
let dubaiCookiePerHour = dubai.amountOfCookiesPerHour(dubaiCustomers);
let dubaiTotal = dubai.totalCookiesPerDay(dubaiCookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let dubaiLi = document.createElement('li');
    dubaiUl.appendChild(dubaiLi);
    dubaiLi.innerHTML = hours[index] + ' :' + Math.round(dubaiCookiePerHour[index]) + ' cookies';
}
let dubaiLi = document.createElement('li');
dubaiUl.appendChild(dubaiLi);
dubaiLi.innerHTML = 'Total :' + Math.round(dubaiTotal) + ' cookies';



//////////////////////Paris////////////////////////////////////////////////////////////////////
let paris = {
    minCust: 20,
    maxCust: 38,
    avgCookiePerHour: 2.3,
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
let parisParent = document.getElementById('parisDiv');
console.log(parisParent);

let parisArticle = document.createElement('article');
parisDiv.appendChild(parisArticle);
parisParent.setAttribute('id', 'parisArt');

let parisHeader = document.createElement('h2');
parisArt.appendChild(parisHeader);
parisHeader.textContent = 'Paris';
parisHeader.setAttribute('id', 'parisHead');


let parisUnSortedList = document.createElement('ul');
parisArt.appendChild(parisUnSortedList);
parisUnSortedList.setAttribute('id', 'parisUl');

//render features////////////////////////////////

let parisCustomers = paris.randomCustPerHour();
let parisCookiePerHour = paris.amountOfCookiesPerHour(parisCustomers);
let parisTotal = paris.totalCookiesPerDay(parisCookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let parisLi = document.createElement('li');
    parisUl.appendChild(parisLi);
    parisLi.innerHTML = hours[index] + ' :' + Math.round(parisCookiePerHour[index]) + ' cookies';
}
let parisLi = document.createElement('li');
parisUl.appendChild(parisLi);
parisLi.innerHTML = 'Total :' + Math.round(parisTotal) + ' cookies';



//////////////////////Lima////////////////////////////////////////////////////////////////////
let lima = {
    minCust: 20,
    maxCust: 38,
    avgCookiePerHour: 2.3,
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
let limaParent = document.getElementById('limaDiv');
console.log(limaParent);

let limaArticle = document.createElement('article');
limaDiv.appendChild(limaArticle);
limaParent.setAttribute('id', 'limaArt');

let limaHeader = document.createElement('h2');
limaArt.appendChild(limaHeader);
limaHeader.textContent = 'lima';
limaHeader.setAttribute('id', 'limaHead');


let limaUnSortedList = document.createElement('ul');
limaArt.appendChild(limaUnSortedList);
limaUnSortedList.setAttribute('id', 'limaUl');

//render features////////////////////////////////

let limaCustomers = paris.randomCustPerHour();
let limaCookiePerHour = paris.amountOfCookiesPerHour(limaCustomers);
let limaTotal = paris.totalCookiesPerDay(limaCookiePerHour);

for (let index = 0; index < hours.length; index++) {
    let limaLi = document.createElement('li');
    limaUl.appendChild(limaLi);
    limaLi.innerHTML = hours[index] + ' :' + Math.round(limaCookiePerHour[index]) + ' cookies';
}
let limaLi = document.createElement('li');
limaUl.appendChild(limaLi);
limaLi.innerHTML = 'Total :' + Math.round(limaTotal) + ' cookies';