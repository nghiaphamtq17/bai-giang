const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 700 },
    { id: 3, name: "Tablet", price: 900 }
];

const ev = products.filter(item => item.price > 800);
console.log(ev);
