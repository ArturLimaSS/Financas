import axios from "axios";

const apiSelic = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&dataInicial={01/01/2023}&dataFinal={02/08/2023}";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

export const apiService = {
    getAllUsers: () => {
        return instance.get('/users');
    },

    getUser: () => {
        return instance.get('/user/1');
    },

    createUser: (data) => {
        return instance.post('/users', data)
    },

    login: (data) => {
        return instance.post('/login', data);
    },

    getSpents: () => {
        return instance.get('/spents');
    },

    getDataToChart: () => {
        return instance.get('/spents/date');
    },

    postSpents: (data) => {
        return instance.post('/spents/create', data)
    }

}
