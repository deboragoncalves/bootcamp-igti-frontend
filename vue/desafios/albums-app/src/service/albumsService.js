import axios from 'axios';

let baseUrl = "https://jsonplaceholder.typicode.com/";

let getAlbumsList = async () => {
    let response = await axios.get(baseUrl + "albums");
    return response.data;
}

export {
    getAlbumsList
}