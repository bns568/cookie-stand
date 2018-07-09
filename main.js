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
    //create and append table header onto row (onto table)
    let elTh = document.createElement('th');
    elRow.appendChild(elTh);
    //create blank data cell and rename, then append onto table header
    let elTd = document.createElement('td');
    elTd.innerText = " ";
    elTh.appendChild(elTd);

    //create data cell for each hour the stores are open
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

    //move across the table for each hour the stores are open, and for each column move down row by row to add the total number of cookies sold at each location per day
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
    //create a table-header data cell with store name
    let thName = document.createElement('th');
    thName.innerText = store.name;
    elRow.appendChild(thName);

    //move from cell to cell left to right, inputting text inside array of cookie sales per hour
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

//get user input from form
let form = document.getElementById("newLocation");

let newName = form.storeName.value;
let newLocation = form.location.value;
let newMinCustomersPerHour = form.minCustomersPerHour.value; 
let newMaxCustomersPerHour = form.maxCustomersPerHour.value; 
let newAvgCookiesPerCustomer = form.avgCookiesPerCustomer.value;

//if submit is clicked (with all required field), this adds a cookie store to the array of already existing locations, removes the current total row (by removing child), appends the new cookie store, and re-calls the footer function
form.addEventListener('submit', function(event) {
    //prevents rereshing
    event.preventDefault();
    //create new instance of cookie store
    let newStore = new CookieStore(form.storeName.value, form.location.value, form.minCustomersPerHour.value, form.maxCustomersPerHour.value, [], 0, form.avgCookiesPerCustomer.value);
    //push onto array of already existing locations
    storeArray.push(newStore);
    //create variable to remove the total row from existing table
    let totalRow = document.getElementById("total-row");
    //remove total row
    elTable.removeChild(totalRow);
    //find cookie sales per hour for new store
    newStore.logCookieSalesPerHourFunc();
    //add new store to existing table 
    newStore.render(newStore);
    //re-call the footer function
    createFooter();
})

//Create footer to include the total sales (in case user input hasn't been submitted)
createFooter();