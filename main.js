let levainBakery = {
    name: "Levain Bakery",
    location: "New York, NY",
    cookieType: "chocolate chip walnut",
    currentPrice: 4,
    rating: "5/5",
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    }
}

let tiffsTreats = {
    name: "Tiff's Treats",
    location: "Austin, TX",
    cookieType: "chocolate chip",
    currentPrice: 2,
    rating: "3/5",
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    }
}

let milkBar = {
    name: "Milk Bar",
    location: "New York, NY",
    cookieType: "compost cookie",
    currentPrice: 3.50,
    rating: "4/5",
    annualPriceIncrease: function (currentPrice) {
        currentPrice = currentPrice * 1.0175;  
        return currentPrice;
    },
    futurePrice: function (numOfYearsFromNow) {
        return currentPrice * (1 + (.0175 * numOfYearsFromNow));
    }
}