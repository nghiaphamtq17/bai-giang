async function getList() {
    try {
        let divDS = document.getElementById('ds');

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const result = await res.json();

        result.forEach((item, index) => {
            if (index > 5) {
                
            } else {
                const itemElement = document.createElement("div");
                itemElement.innerHTML = `<h2> title: ${item?.title}, body: ${item?.body}</h2>`;
                divDS.appendChild(itemElement);
            }
        });
    } catch (error) {

    }

}

getList();