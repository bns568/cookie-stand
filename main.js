//create cookie store object constructor
let CookieStore = function(name, location, minCustomersPerHour, maxCustomersPerHour, cookieSalesArray, cookiesSoldToday, avgCookiesPerCustomer){
    this.name = name;
    this.location = location;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.cookieSalesArray = cookieSalesArray;
    this.cookiesSoldToday = cookiesSoldToday;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
};

//method for object constructor that randomly calculates how many customers there were per hour
CookieStore.prototype.customersDuringHour = function () {
    let answer = Math.floor(this.minCustomersPerHour + (Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)));
        return answer;
}

//stores the number of cookies sold per hour in an array
CookieStore.prototype.logCookieSalesPerHourFunc = function () {
    for (let i =0; i < 15; i++){
        this.cookieSalesArray[i] = this.customersDuringHour() * this.avgCookiesPerCustomer;
    }
}

//calculates the total number of customers that day
CookieStore.prototype.cookieDailySalesFunction = function() {
    for (let i = 0; i < this.cookieSalesArray.length; i++) {
        this.cookiesSoldToday += this.cookieSalesArray[i]; 
    }
}

//creates instances for each of the three cookie stores
let levainBakery = new CookieStore("Levain Bakery", "New York, NY", 20, 200, [], 0, 3);
let milkBar = new CookieStore("Milk Bar", "New York, NY", 15, 150, [], 0, 2);
let tiffsTreats = new CookieStore("Tiff's Treats", "Austin, TX", 10, 120, [], 0, 5);

//put all three stores in an array so we can loop through and make a table
let storeArray = [levainBakery, milkBar, tiffsTreats];
let hoursArray = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

let tableLocation = document.getElementById('tableLocation');

//create table
let elTable = document.createElement('table');

//give the table element we just created an id
elTable.setAttribute('id', 'id-table');

//append table to the body
tableLocation.appendChild(elTable);

//creates a header for table
let createHeader = function () {
    //create row for header
    let elRow = document.createElement('tr');
    //append row to the already existing table
    elTable.appendChild(elRow);
    let elTh = document.createElement('th');
    elRow.appendChild(elTh);
    let elTd = document.createElement('td');
    elTd.innerText = " ";
    elTh.appendChild(elTd);

    for (let i = 0; i < hoursArray.length; i++) {
        let elTh = document.createElement('th');
        elRow.appendChild(elTh);
        let elTd = document.createElement('td');
        elTd.innerText = hoursArray[i];
        elTh.appendChild(elTd);
    };
};

//creates a footer for table
let createFooter = function () {
    let elRow = document.createElement('tr');
    //append row to the already existing table
    elTable.appendChild(elRow);
    //give total row an id so I can removeChild as necessary
    elRow.setAttribute('id', 'total-row');
    //move from cell to cell left to right, inputting text
    let thName = document.createElement('th');
    thName.innerText = "Total";
    elRow.appendChild(thName);

    for (let i = 0; i < hoursArray.length; i++) {
        //create row for totals
        let elTd = document.createElement('td');

        let total = 0;

        //add numbers from each store at specific hour
        for (let j = 0; j < storeArray.length; j++) {
           total += storeArray[j].cookieSalesArray[i];
        };

        elTd.innerText = total;
        elRow.appendChild(elTd);
    };
}

//creates a table of info provided
CookieStore.prototype.render = function (store) {
    let elRow = document.createElement('tr');
    //append row to the already existing table
    elTable.appendChild(elRow);
    //move from cell to cell left to right, inputting text
    let thName = document.createElement('th');
    thName.innerText = store.name;
    elRow.appendChild(thName);
    //Input name and location
    // let tdLocation = document.createElement('td');
    // tdLocation.innerText = store.location;
    // thName.appendChild(tdLocation);

    for(let i = 0; i < store.cookieSalesArray.length; i++) {
         let tdCustPH = document.createElement('td');
         tdCustPH.innerText = store.cookieSalesArray[i];
         elRow.appendChild(tdCustPH);
     }
}

//Run methods to display table; 1. create header
createHeader();

//Add row for Levain Bakery (first create customer array for instance)
levainBakery.logCookieSalesPerHourFunc();
levainBakery.render(levainBakery);

//Add row for Milk Bar
milkBar.logCookieSalesPerHourFunc();
milkBar.render(milkBar);

//Add row for Tiffs Treats
tiffsTreats.logCookieSalesPerHourFunc();
tiffsTreats.render(tiffsTreats);

let form = document.getElementById("newLocation");
console.log(form);

//START HERE: THESE VARIABLES ARE NOT WORKING AND THEREFORE ARE NOT PASSING INTO THE STORE ARRAY
let newName = form.storeName.value;
console.log(newName);
let newLocation = form.location.value;
console.log(newLocation);
let newMinCustomersPerHour = form.minCustomersPerHour.value; 
console.log(newMinCustomersPerHour);
let newMaxCustomersPerHour = form.maxCustomersPerHour.value; 
console.log(newMaxCustomersPerHour);
let newAvgCookiesPerCustomer = form.avgCookiesPerCustomer.value;
console.log(newAvgCookiesPerCustomer);


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let newStore = new CookieStore(form.storeName.value, form.location.value, form.minCustomersPerHour.value, form.maxCustomersPerHour.value, [], 0, form.avgCookiesPerCustomer.value);
    storeArray.push(newStore);
    let totalRow = document.getElementById("total-row");
    console.log(totalRow);
    elTable.removeChild(totalRow);
    newStore.logCookieSalesPerHourFunc();
    newStore.render(newStore);
    createFooter();
})

//Create footer to include the total sales
createFooter();