import axios from "axios";
import { API_SERVER_URL } from "../../common/constants";

export default axios.create({
    baseURL: API_SERVER_URL,
    withCredentials: true,
})
