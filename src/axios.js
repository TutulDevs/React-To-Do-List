import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-3470-default-rtdb.firebaseio.com/',
});

export default instance;