
const fetch = require('node-fetch');

async function fetchPetDetails(petId) {
    const apiKey = 'hg4nsv85lppeoqqixy3tnlt3k8lj6o0c'; // 自分のAPIキーをここに入力
    const url = `https://api-staging.adoptapet.com/search/limited_pet_details?key=${apiKey}&v=3&output=json&pet_id=${petId}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // データをコンソールに表示
    } catch (error) {
        console.error('Error fetching pet details:', error);
    }
}

// 例: ペットID 24127578の詳細を取得
fetchPetDetails(24127578);
