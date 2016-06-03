var fs = require('fs');

module.exports = function(filePath){
  this.productNames = function(callback){

    var myProducts = [];

    var filesInFolder = fs.readFileSync(filePath,'utf-8');
    var lines = filesInFolder.split("\n");

    lines.forEach(function(line){
      var productNames = line.split(",")[1];

      if(myProducts.indexOf(productNames)=== -1){
      myProducts.push(productNames);
      }
    });

    console.log(myProducts);
    callback(null,myProducts);

  };

  this.productsSold = function(callback){

    var sold = {};

    var filesInFolder = fs.readFileSync(filePath,'utf-8');
    var lines = filesInFolder.split("\n");

    lines.forEach(function(line){
      var productsSold = line.split("")[2];
console.log(line);
      var products = productsSold[1];
      var quantity = Number(productsSold[2]);

    if(sold[products]=== undefined){
    sold[products] = 0;
  };

   sold[products] = sold[products] + Number(quantity);

    });

console.log(sold);
callback(null,sold);
  };
};
