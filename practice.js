// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var result = 0;
  _.each(numbers, function(number, index, collection) {
    if (parseInt(number) % 5 === 0) {
      result++;
    }
  });
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
 //  console.log([targetFruit, fruits]);
  fruits = _.filter(fruits, function(fruit) {
    return targetFruit === fruit;
  });
  // console.log(fruits);
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert) {
    return _.indexOf(dessert, 'cookie') !== -1;
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var prices = [];
  _.each(products, function(product, index, collection1) {
    // console.log(product);
    _.each(product, function(value, key, collection2) {
      // console.log(key);
      if (key === 'price') {
        // console.log(key);
        // console.log(value);
        prices.push(parseFloat(value.slice(1)));
      }
    });
  });
  // console.log(prices);
  return _.reduce(prices, function(total, number) {
    return total + number;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  // _.each(desserts, function(dessert, index, collection) {
    // console.log(dessert);
  // });
  var results = {};
  _.reduce(desserts, function(counts, dessert) {
    // console.log(dessert.type);
    if (results[dessert.type] === undefined) {
      results[dessert.type] = 1;
    } else {
      results[dessert.type] ++;
    }
  }, results);
  // _.each(results, function (result, index, collection) {
  //   console.log(results);
  //   console.log(result);
  // });
  return results;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // _.each(movies, function(movie, index, collection) {
    // console.log(movie);
  // });
  var results = [];
  _.reduce(movies, function(ninetiesMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      // console.log(movie.title);
      results.push(movie.title);
    }
  }, results);
  return results;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // _.each(movies, function(movie, index, collection) {
  //   console.log(movie);
  // });
  var doesExist = false;
  _.reduce(movies, function(underLimitMovies, movie) {
    if (movie.runtime < timeLimit) {
      doesExist = true;
      underLimitMovies++;
    }
  }, 0);
  return doesExist;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  fruits = _.map(fruits, function(fruit, index, collection) {
    // console.log(fruit);
    return fruit.toUpperCase();
  });
  // console.log(fruits);
  return fruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  // _.each(desserts, function(dessert, index, collection) {
  //   console.log(dessert.ingredients);
  // });
  var glutenFreeDesserts = _.map(desserts, function(dessert,
  index, collection) {
    if (_.indexOf(dessert.ingredients, 'flour') === -1) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
  return glutenFreeDesserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  // _.each(groceries, function(grocery, index, collection) {
  //   console.log(grocery);
  //   console.log(coupon);
  // }
  var groceriesWithSales = _.map(groceries, function(grocery, index, collection) {
    var priceInCents = parseInt(parseFloat(grocery.price.slice(1)) * 100);
    console.log(priceInCents);
    var saleInCents = priceInCents - priceInCents * coupon;
    var sale = parseInt(saleInCents) * Math.pow(10, -2);
    grocery.salePrice = '$' + sale;
    console.log(grocery);
    return grocery;
  });
  return groceriesWithSales;
};
