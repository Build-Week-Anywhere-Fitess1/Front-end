import axios from 'axios';

export function getToken() {
    localStorage.getItem("token");
}

export default function () {
    return axios.create({
        baseURL: "https://lambda-anywhere-fitness.herokuapp.com",
        headers: {
            Authorization: getToken()
        }
    })
}