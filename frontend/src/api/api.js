import axios from "axios";


const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

const getDataSelic = axios.create({
    baseURL: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11"
})

export const apiService = {
    getAllUsers: () => {
        return instance.get('/users');
    },

    getUser: (data) => {
        return instance.get('/users/' + data);
    },

    createUser: (data) => {
        return instance.post('/users', data)
    },

    login: (data) => {
        return instance.post('/login', data);
    },

    getSpents: (data) => {
        return instance.get('/spents/'+ data);
    },

    getDataToChart: (data) => {
        return instance.get('/spents/date/' + data);
    },

    postSpents: (data) => {
        return instance.post('/spents/create', data)
    }

};

export const SelicApi = {
    getSelicData: (data) => {
      return getDataSelic.get('dados?formato=json&dataInicial={'+ data.start +'}&dataFinal={'+ data.end +'}');
    }
}
