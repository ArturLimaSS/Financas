import axios from "axios";

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
