let levainBakery = {
    name: "Levain Bakery",
    location: "New York, NY",
    cookieType: "chocolate chip walnut",
    currentPrice: 4,
    rating: "5/5",
    minCustomersPerHour: 20,
    maxCustomersPerHour: 200,
    levainCustomers: [],
    averageCookiesPerCustomer: 2.5,
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(20 + (Math.Random * 180));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            levainCustomers[i] = levainBakery.customersPerHour * levainBakery.customersPerHour;
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
    averageCookiesPerCustomer: 5,
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(10 + (Math.Random * 110));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            tiffsTreatsCustomers[i] = tiffsTreats.customersPerHour * tiffsTreats.customersPerHour;
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
    averageCookiesPerCustomer: 2,
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    },
    customersPerHour: function () {
        return Math.floor(15 + (Math.Random * 135));
    },
    customerLog: function() {
        for (let i =0; i < 15; i++){
            milkBarCustomers[i] = milkBar.customersPerHour * milkBar.customersPerHour;
        }
    }
}
