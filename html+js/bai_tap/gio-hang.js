async function getShoppingCart() {
  try {
    const shoppingCart = JSON.parse(localStorage.getItem("shopping_cart"));
    console.log("shoppingCart", shoppingCart);
    const listElement = document.getElementById("list");
    for (let i = 0; i < shoppingCart.shopping_cart.length; i++) {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `<h2> Ten: ${shoppingCart.shopping_cart[i].name}, So luong: ${shoppingCart.shopping_cart[i].quantity}, Gia: ${shoppingCart.shopping_cart[i].price}   </h2>`;

      listElement.appendChild(itemElement);
    }
    let sum = 0;
    for (let i = 0; i < shoppingCart.shopping_cart.length; i++) {
      sum +=
        shoppingCart.shopping_cart[i].price *
        shoppingCart.shopping_cart[i].quantity;
    }
    console.log("sum", sum);
    const sumElement = document.getElementById("sum");
    sumElement.innerText = sum;
  } catch (error) {}
}

async function updateShoppingCart() {
  try {
    const shoppingCart = JSON.parse(localStorage.getItem("shopping_cart"));
    console.log("shoppingCart", shoppingCart);
    const res = await fetch(
      "https://67bc66f0ed4861e07b3a5e78.mockapi.io/gio_hang/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoppingCart),
      }
    );

    const result = await res.json();
    if (result) {
      alert("Cap nhat gio hang thanh cong");
    }
  } catch (error) {}
}

getShoppingCart();
