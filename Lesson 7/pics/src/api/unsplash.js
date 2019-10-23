import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 09703a867d30f23244d078f7272a978ef2ac3dc58da40971eb4b9a44154741b4'
    }
});