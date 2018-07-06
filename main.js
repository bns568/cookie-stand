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
    averageCookiesPerCustomer: 2.5,
    annualPriceIncrease: function () {
        this.currentPrice = this.currentPrice * 1.0175;  
        return this.currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return this.currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(20 + (Math.Random * 180));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            this.levainCustomers[i] = this.customersPerHour * this.customersPerHour;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.levainCustomers.length; i++) {
            this.cookiesSoldToday = this.cookiesSoldToday + this.levainCustomers[i]; 
        }
    }
}

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
            this.tiffsTreatsCustomers[i] = this.customersPerHour * this.customersPerHour;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.tiffsTreatsCustomers.length; i++) {
            this.cookiesSoldToday = this.cookiesSoldToday + this.tiffsTreatsCustomers[i]; 
        }
    }
}

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
            this.milkBarCustomers[i] = this.customersPerHour * this.customersPerHour;
        }
    },
    cookieDailySalesFunction: function() {
        for (let i = 0; i < this.milkBarCustomers.length; i++) {
            this.cookiesSoldToday = this.cookiesSoldToday + this.milkBarCustomers[i]; 
        }
    }
}
