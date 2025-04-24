import axios from 'axios';
import Cookies from "js-cookie";

const access_token = Cookies.get("access_token")
const refresh_token = Cookies.get("refresh_token")

const apiInstanceAuth = axios.create({
    baseURL: 'https://omjadhav.pythonanywhere.com/api/v1/',
    timeout: 10000,  // 100 seconds, typically 10 seconds is sufficient
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':`Bearer ${access_token}`,
    },
});

export default  apiInstanceAuth;
