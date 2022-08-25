import axios from 'axios';

export default axios.create({
    baseURL: 'https://akameapi.herokuapp.com'
});