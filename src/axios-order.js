import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-a4715.firebaseio.com/'
})

export default instance;