// let array = []

async function layGiaTri() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let ketQua = await data.json();
    const divDS = document.getElementById("ds");
    array = ketQua;

    ketQua.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `<h2>index: ${index}, Ten: ${item?.name}, username: ${item.username},phone: ${item.phone}</h2>`;
      //innerHTML để in ra thẻ
      //innerText chỉ in ra chữ
      divDS.appendChild(itemElement);
    });
  } catch (error) {
    const divDS = document.getElementById("ds");
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `<p>API dang loi ${error}</p>`;
    divDS.appendChild(errorElement);
  } finally {
    console.log("thanh cong");
  }
}

// async function layGiaTriKieu2() {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then(async (data) => {
//       const result = await data.json();
//       console.log("result", result);
//       const divDS = document.getElementById("ds");
//       result.forEach((item) => {
//         const itemElement = document.createElement("div");
//         itemElement.innerHTML = `<h2>Ten: ${item?.name}, username: ${item.username},phone: ${item.phone}</h2>`;
//         divDS.appendChild(itemElement);
//       });
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       console.log("api da hoan thanh");
//     });
// }

layGiaTri();

// layGiaTriKieu2();




