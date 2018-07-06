let levainBakery = {
    name: "Levain Bakery",
    location: "New York, NY",
    cookieType: "chocolate chip walnut",
    currentPrice: 4,
    rating: "5/5",
    minCustomersPerHour: 20,
    maxCustomersPerHour: 200,
    levainCustomers: [],
    cookiesSoldToday: 0,
    averageCookiesPerCustomer: 3,
    annualPriceIncrease: function () {
        this.currentPrice = this.currentPrice * 1.0175;  
        return this.currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return this.currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        let answer = Math.floor(20 + (Math.random() * 180));
        //console.log ('Math random: ' + answer);
        return answer; 
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            //console.log(this.customersPerHour() + ' ' + this.averageCookiesPerCustomer);
            this.levainCustomers[i] = this.customersPerHour() * this.averageCookiesPerCustomer;
            //console.log( this.levainCustomers[i]);
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.levainCustomers.length; i++) {
            console.log('customers:' + this.levainCustomers[i]);
            this.cookiesSoldToday += this.levainCustomers[i]; 
            console.log('cookies sold today: ' + this.cookiesSoldToday);
        }
    }
};

let tiffsTreats = {
    name: "Tiff's Treats",
    location: "Austin, TX",
    cookieType: "chocolate chip",
    currentPrice: 2,
    rating: "3/5",
    minCustomersPerHour: 10,
    maxCustomersPerHour: 120,
    tiffsTreatsCustomers: [],
    cookiesSoldToday: 0, 
    averageCookiesPerCustomer: 5,
    annualPriceIncrease: function () {
        this.currentPrice = this.currentPrice * 1.0175;  
        return this.currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return this.currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(10 + (Math.Random * 110));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            this.tiffsTreatsCustomers[i] = this.customersPerHour * this.averageCookiesPerCustomer;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.tiffsTreatsCustomers.length; i++) {
            this.cookiesSoldToday = this.cookiesSoldToday + this.tiffsTreatsCustomers[i]; 
        }
    }
};

let milkBar = {
    name: "Milk Bar",
    location: "New York, NY",
    cookieType: "compost cookie",
    currentPrice: 3.50,
    rating: "4/5",
    minCustomersPerHour: 15,
    maxCustomersPerHour: 150,
    milkBarCustomers: [],
    cookiesSoldToday: 0, 
    averageCookiesPerCustomer: 2,
    annualPriceIncrease: function () {
        this.currentPrice = this.currentPrice * 1.0175;  
        return this.currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return this.currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(15 + (Math.Random * 135));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            this.milkBarCustomers[i] = this.customersPerHour * this.averageCookiesPerCustomer;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.milkBarCustomers.length; i++) {
            this.cookiesSoldToday = this.cookiesSoldToday + this.milkBarCustomers[i]; 
        }
    }
};

document.getElementById('levainBakeryName').innerText = levainBakery.name;
levainBakery.customerLog();
console.log('Customer Log: ' + levainBakery.levainCustomers);
console.log('Customers per hour: ' + levainBakery.customersPerHour());
console.log('Average cookies per customer: ' + levainBakery.averageCookiesPerCustomer);
document.getElementById('levain6am').innerText = levainBakery.levainCustomers[0];
document.getElementById('levain7am').innerText = levainBakery.levainCustomers[1];
document.getElementById('levain8am').innerText = levainBakery.levainCustomers[2];
document.getElementById('levain9am').innerText = levainBakery.levainCustomers[3];
document.getElementById('levain10am').innerText = levainBakery.levainCustomers[4];
document.getElementById('levain11am').innerText = levainBakery.levainCustomers[5];
document.getElementById('levain12pm').innerText = levainBakery.levainCustomers[6];
document.getElementById('levain1pm').innerText = levainBakery.levainCustomers[7];
document.getElementById('levain2pm').innerText = levainBakery.levainCustomers[8];
document.getElementById('levain3pm').innerText = levainBakery.levainCustomers[9];
document.getElementById('levain4pm').innerText = levainBakery.levainCustomers[10];
document.getElementById('levain5pm').innerText = levainBakery.levainCustomers[11];
document.getElementById('levain6pm').innerText = levainBakery.levainCustomers[12];
document.getElementById('levain7pm').innerText = levainBakery.levainCustomers[13];
document.getElementById('levain8pm').innerText = levainBakery.levainCustomers[14];
levainBakery.cookieDailySalesFunction();
console.log(levainBakery.cookiesSoldToday);
document.getElementById('levainBakeryTotal').innerText = levainBakery.cookiesSoldToday;


document.getElementById('milkBarName').innerText = milkBar.name;
milkBar.cookieDailySalesFunction;

document.getElementById('tiffsTreatsName').innerText = tiffsTreats.name;
tiffsTreats.cookieDailySalesFunction;
