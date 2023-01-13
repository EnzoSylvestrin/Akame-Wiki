import axios from 'axios';

export default axios.create({
    baseURL: 'https://akame-api.vercel.app'
});