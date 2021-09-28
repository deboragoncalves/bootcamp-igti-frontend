import axios from 'axios';

let baseUrl = "https://jsonplaceholder.typicode.com/albums";

let getAlbumsList = async () => {
    let response = await axios.get(baseUrl);
    return response.data;
}

let getPhotosAlbum = async id => {
    let response = await axios.get(baseUrl + "/" + id + "/photos");
    return response.data;
}

export {
    getAlbumsList,
    getPhotosAlbum
}