async function getListUser() {
    const res = await fetch('https://api.mockapi.com/api/learn-js/users', {
        method: 'GET',
        headers: {
            'x-api-key': '26994883d45843b29f77bf9cd426c0a8'
        }
    });

    const result = await res.json()
}

getListUser()