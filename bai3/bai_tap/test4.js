async function fetchData(url){
    try {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        
    } catch (error) {
        console.error("loi");
        
    }
}

fetchData("https://jsonplaceholder.typicode.com/users");
fetchData("https://invalid-url.com");