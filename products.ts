interface Product {
    name:string;
    price:number;
}

let game1:Product = {
    name:"God of war",
    price:59.99
}

let game2:Product = {
    name:"Last of Us",
    price:34.59
}

let game3:Product = {
    name:"Crash Bandicoot",
    price:29.99
}



let products:Product[] = [game1, game2, game3];

function calcAverProdPrice(arrayP:Product[]):number {
    let total:number = 0;

    for (let p of arrayP) {
        total += p.price;
    }

    return (total/arrayP.length);
}

let averagePrice:number = calcAverProdPrice(products);

console.log(averagePrice);


interface InventoryItem {
    product: Product;
    quantity:number;
}

let prod1:Product = {
    name:"motor",
    price:10.00
}

let prod2:Product = {
    name:"sensor",
    price:12.50
}

let prod3:Product = {
    name:"led",
    price:1.00
}

let inventory1:InventoryItem = {
    product: prod1,
    quantity: 10,
}
let inventory2:InventoryItem = {
    product: prod2,
    quantity: 4,
}
let inventory3:InventoryItem = {
    product: prod3,
    quantity: 20,
}

let inventoryProducts:InventoryItem[] = [inventory1, inventory2, inventory3];

function calcInvenVal(arrI:InventoryItem[]):number {
    let total:number = 0;

    for (let i of arrI) {
        total += (i.product.price * i.quantity);
    }

    return total;
}

let totalInventory:number = calcInvenVal(inventoryProducts);

console.log(totalInventory);