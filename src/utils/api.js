import axios from 'axios';

export default function () {

    return axios.create({
        baseURL: "https://lambda-anywhere-fitness.herokuapp.com",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}