
async function getListProduct() {
  const res = await fetch(
    "https://67bc66f0ed4861e07b3a5e78.mockapi.io/products"
  );
  const result = await res.json();

  const divDS = document.getElementById("ds");

  result.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `<h2> id: ${item?.id}, Ten: ${item?.name}, gia: ${item.price}   </h2>`;
    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Them";
    addToCartButton.onclick = () => themVaoGioHang(item.name, item.price);
    itemElement.appendChild(addToCartButton);

    divDS.appendChild(itemElement);
  });
}

async function themVaoGioHang(name, gia) {
  // lay gio hang tu local storage
  const shoppingCart = JSON.parse(localStorage.getItem("shopping_cart"));
  console.log("shoppingCart", shoppingCart);
  // nếu name đã tồn tại trong giỏ hàng thì tăng số lượng lên 1
  const index = shoppingCart.shopping_cart.findIndex((item) => item.name === name);
  if (index !== -1) {
    shoppingCart.shopping_cart[index].quantity++;
  } else {
    shoppingCart.shopping_cart.push({
      name,
      quantity: 1,
      price: gia,
    });
  }
  console.log("shoppingCart", shoppingCart);
  // ghi giỏ hàng về local storage
  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
}

getListProduct();
