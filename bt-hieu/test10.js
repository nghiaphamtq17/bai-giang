const cart = [
    { name: "Laptop", price: 1500, quantity: 1 },
    { name: "Phone", price: 700, quantity: 2 },
    { name: "Tablet", price: 900, quantity: 1 }
];

function calculateTotal(cart){
    return cart.reduce((sum, item) => sum + item.price* item.quantity, 0);

}

console.log(calculateTotal(cart));