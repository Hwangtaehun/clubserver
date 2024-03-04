function getDinnerPrice(){
    const RICE = 10000;
    const COKE = 2000;
    return RICE + COKE;
    //return 10000 + 2000;
}

enum ShoesBrand{
    Nike,
    Adidas,
    NewBalance
}

var myShoes = ShoesBrand.Nike;
var yourShoes = ShoesBrand.NewBalance;

console.log(myShoes);
console.log(yourShoes);