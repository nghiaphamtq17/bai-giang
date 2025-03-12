async function getListProduct() {
  const res = await axios.get(
    "https://67bc66f0ed4861e07b3a5e78.mockapi.io/products"
  );

  const getCart = await axios.get(
    "https://67bc66f0ed4861e07b3a5e78.mockapi.io/gio_hang/1"
  );
  localStorage.setItem("cart", JSON.stringify(getCart.data));
  const tagList = document.getElementById("list");

  if (res.data) {
    res?.data?.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
            <div class="item">
            <h2> Ten: ${item?.name}, gia: ${item?.price}   </h2>
            <button id=${index}>them vao gio hang</button>
            </div>
            `;

      tagList.appendChild(itemElement);

      const button = document.getElementById(index);
      button.addEventListener("click", () =>
        addToCart(item?.name, item?.price)
      );
    });
  }
}

async function addToCart(name, price) {
  console.log("name, price", name, price);

  const dataLocal = localStorage.getItem("cart");

  let cart = dataLocal ? JSON.parse(dataLocal) : {};

  const index = cart?.shopping_cart.findIndex((item) => item.name === name);
  console.log('index',index);
  

  if (index != -1) {
    // console.log('cart.shopping_cart[index]',cart.shopping_cart[index]);
    console.log('co ton tai');
    
    
    cart.shopping_cart[index].quantity += 1;
  } else {
    console.log('khong');
    
    cart.shopping_cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }
  console.log("cart", cart);

  localStorage.setItem("cart", JSON.stringify(cart));

  try {
    const res = await axios.put("https://67bc66f0ed4861e07b3a5e78.mockapi.io/gio_hang/1", {
        shopping_cart: cart?.shopping_cart
    })

    console.log('res', await res.data);
    
  } catch (error) {
    
  }


}

getListProduct();
