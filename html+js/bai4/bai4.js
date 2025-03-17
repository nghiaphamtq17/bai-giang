async function getListUser() {
  try {
    const divDS = document.getElementById("dssas");
    const res = await fetch(
      "https://67bc66f0ed4861e07b3a5e78.mockapi.io/users"
    );
    const result = await res.json();

    result.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `<h2> id: ${item?.id}, Ten: ${item?.name}, avatar: ${item.avatar}   </h2>`;
      divDS.appendChild(itemElement);
    });
  } catch (error) {}
}

async function taoNguoiMoi() {
  try {
    const name = document.getElementById("name").value;
    const avatar = document.getElementById("avatar").value;

    const temp = {
      name: name,
      avatar: avatar,
    };

    const res = await fetch(
      "https://67bc66f0ed4861e07b3a5e78.mockapi.io/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      }
    );

    const result = await res.json();
  } catch (error) {}
}

//PUT sửa toàn bộ,
//PATCH chỉ sửa 1 phần

async function chinhSua() {
  try {
    const id = document.getElementById("editId").value;
    const name = document.getElementById("editName").value;
    const avatar = document.getElementById("editAvatar").value;

    let temp = {
      name: name,
      avatar: avatar,
    };

    const res = await fetch(
      `https://67bc66f0ed4861e07b3a5e78.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      }
    );

    const result = await res.json();

    // console.log('result', result);
  } catch (error) {}
}

async function xoaNgDung() {
  try {
    const id = document.getElementById("deleteId").value;

    console.log("id", id);

    const res = await fetch(
      `https://67bc66f0ed4861e07b3a5e78.mockapi.io/users/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await res.json();
    console.log("result", result);
  } catch (error) {}
}

getListUser();
