var game1 = {
    name: "God of war",
    price: 59.99
};
var game2 = {
    name: "Last of Us",
    price: 34.59
};
var game3 = {
    name: "Crash Bandicoot",
    price: 29.99
};
var products = [game1, game2, game3];
function calcAveProdPrice(arrayP) {
    var total = 0;
    for (var _i = 0, arrayP_1 = arrayP; _i < arrayP_1.length; _i++) {
        var p = arrayP_1[_i];
        total += p.price;
    }
    return (total / arrayP.length);
}
var averagePrice = calcAveProdPrice(products);
console.log(averagePrice);
var prod1 = {
    name: "motor",
    price: 10.00
};
var prod2 = {
    name: "sensor",
    price: 12.50
};
var prod3 = {
    name: "led",
    price: 1.00
};
var inventory1 = {
    product: prod1,
    quantity: 10
};
var inventory2 = {
    product: prod2,
    quantity: 4
};
var inventory3 = {
    product: prod3,
    quantity: 20
};
var inventoryProducts = [inventory1, inventory2, inventory3];
function calcInvenVal(arrI) {
    var total = 0;
    for (var _i = 0, arrI_1 = arrI; _i < arrI_1.length; _i++) {
        var i = arrI_1[_i];
        total += (i.product.price * i.quantity);
    }
    return total;
}
var totalInventory = calcInvenVal(inventoryProducts);
console.log(totalInventory);
