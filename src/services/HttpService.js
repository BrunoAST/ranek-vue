import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: "http://localhost:3000"
});

export default class HttpService {
    static get(endpoint) {
        return axiosConfig.get(endpoint);
    }

    static post(endpoint, body) {
        return axiosConfig.post(endpoint, body);
    }

    static getCep(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}
