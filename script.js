let items = [
    {
        Name: "Doritos",
        Price: 1.75
    },
    {
        Name: "Red Bull",
        Price: 4.25
    },
    {
        Name: "Sourpatch Kids",
        Price: 2.00 
    },
    {
        Name: "Mountain Dew",
        Price: 2.25
    },
    {
        Name: "KitKat",
        Price: 0.99
    },
    {
        Name: "Skittles",
        Price: 0.75
    }

]

let cart = [];


function addToCart(name, price)
{
    let addItem = {Name: name, Price: price};
    cart.push(addItem);
    console.log(`${addItem.Name} added for $${roundToTwo(addItem.Price)}`);
}

function viewCart(){
    if (cart.length > 0){
    let total = 0;
    console.log("");
    console.log("Receipt:");
    cart.forEach((i) => 
    console.log(i.Name,`$${roundToTwo(i.Price)}`)
    ); 
    cart.forEach((i) =>
    total += i.Price
    );
    console.log(`Sales tax: $${roundToTwo(total * .06)}`);
    console.log(`Total: $${roundToTwo(total * 1.06)}`);
    cart = cart.splice(0, cart.Length);
    console.log("");
    }
    else
    {
        console.log("Cart is empty")
    }
}

function roundToTwo(num) {
    let round = +(Math.round(num + "e+2")  + "e-2");
    return round.toFixed(2);
}