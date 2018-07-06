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
            //console.log('customers:' + this.levainCustomers[i]);
            this.cookiesSoldToday += this.levainCustomers[i]; 
            //console.log('cookies sold today: ' + this.cookiesSoldToday);
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
        return Math.floor(10 + (Math.random() * 110));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            this.tiffsTreatsCustomers[i] = this.customersPerHour() * this.averageCookiesPerCustomer;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.tiffsTreatsCustomers.length; i++) {
            this.cookiesSoldToday += this.tiffsTreatsCustomers[i]; 
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
        return Math.floor(15 + (Math.random() * 135));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            this.milkBarCustomers[i] = this.customersPerHour() * this.averageCookiesPerCustomer;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.milkBarCustomers.length; i++) {
            this.cookiesSoldToday += this.milkBarCustomers[i]; 
        }
    }
};

document.getElementById('levainBakeryName').innerText = levainBakery.name;
levainBakery.customerLog();
//console.log('Customer Log: ' + levainBakery.levainCustomers);
//console.log('Customers per hour: ' + levainBakery.customersPerHour());
//console.log('Average cookies per customer: ' + levainBakery.averageCookiesPerCustomer);
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
//console.log(levainBakery.cookiesSoldToday);
document.getElementById('levainBakeryTotal').innerText = levainBakery.cookiesSoldToday;


document.getElementById('milkBarName').innerText = milkBar.name;
milkBar.customerLog();
document.getElementById('milkBar6am').innerText = milkBar.milkBarCustomers[0];
document.getElementById('milkBar7am').innerText = milkBar.milkBarCustomers[1];
document.getElementById('milkBar8am').innerText = milkBar.milkBarCustomers[2];
document.getElementById('milkBar9am').innerText = milkBar.milkBarCustomers[3];
document.getElementById('milkBar10am').innerText = milkBar.milkBarCustomers[4];
document.getElementById('milkBar11am').innerText = milkBar.milkBarCustomers[5];
document.getElementById('milkBar12pm').innerText = milkBar.milkBarCustomers[6];
document.getElementById('milkBar1pm').innerText = milkBar.milkBarCustomers[7];
document.getElementById('milkBar2pm').innerText = milkBar.milkBarCustomers[8];
document.getElementById('milkBar3pm').innerText = milkBar.milkBarCustomers[9];
document.getElementById('milkBar4pm').innerText = milkBar.milkBarCustomers[10];
document.getElementById('milkBar5pm').innerText = milkBar.milkBarCustomers[11];
document.getElementById('milkBar6pm').innerText = milkBar.milkBarCustomers[12];
document.getElementById('milkBar7pm').innerText = milkBar.milkBarCustomers[13];
document.getElementById('milkBar8pm').innerText = milkBar.milkBarCustomers[14];
milkBar.cookieDailySalesFunction();
//console.log(milkBar.cookiesSoldToday);
document.getElementById('milkBarTotal').innerText = milkBar.cookiesSoldToday;


document.getElementById('tiffsTreatsName').innerText = tiffsTreats.name;
tiffsTreats.customerLog();
document.getElementById('tiffsTreats6am').innerText = tiffsTreats.tiffsTreatsCustomers[0];
document.getElementById('tiffsTreats7am').innerText = tiffsTreats.tiffsTreatsCustomers[1];
document.getElementById('tiffsTreats8am').innerText = tiffsTreats.tiffsTreatsCustomers[2];
document.getElementById('tiffsTreats9am').innerText = tiffsTreats.tiffsTreatsCustomers[3];
document.getElementById('tiffsTreats10am').innerText = tiffsTreats.tiffsTreatsCustomers[4];
document.getElementById('tiffsTreats11am').innerText = tiffsTreats.tiffsTreatsCustomers[5];
document.getElementById('tiffsTreats12pm').innerText = tiffsTreats.tiffsTreatsCustomers[6];
document.getElementById('tiffsTreats1pm').innerText = tiffsTreats.tiffsTreatsCustomers[7];
document.getElementById('tiffsTreats2pm').innerText = tiffsTreats.tiffsTreatsCustomers[8];
document.getElementById('tiffsTreats3pm').innerText = tiffsTreats.tiffsTreatsCustomers[9];
document.getElementById('tiffsTreats4pm').innerText = tiffsTreats.tiffsTreatsCustomers[10];
document.getElementById('tiffsTreats5pm').innerText = tiffsTreats.tiffsTreatsCustomers[11];
document.getElementById('tiffsTreats6pm').innerText = tiffsTreats.tiffsTreatsCustomers[12];
document.getElementById('tiffsTreats7pm').innerText = tiffsTreats.tiffsTreatsCustomers[13];
document.getElementById('tiffsTreats8pm').innerText = tiffsTreats.tiffsTreatsCustomers[14];
tiffsTreats.cookieDailySalesFunction();
document.getElementById('tiffsTreatsTotal').innerText = tiffsTreats.cookiesSoldToday;
