function getDinnerPrice() {
    var RICE = 10000;
    var COKE = 2000;
    return RICE + COKE;
    //return 10000 + 2000;
}
var ShoesBrand;
(function (ShoesBrand) {
    ShoesBrand[ShoesBrand["Nike"] = 0] = "Nike";
    ShoesBrand[ShoesBrand["Adidas"] = 1] = "Adidas";
    ShoesBrand[ShoesBrand["NewBalance"] = 2] = "NewBalance";
})(ShoesBrand || (ShoesBrand = {}));
var myShoes = ShoesBrand.Nike;
var yourShoes = ShoesBrand.NewBalance;
console.log(myShoes);
console.log(yourShoes);
