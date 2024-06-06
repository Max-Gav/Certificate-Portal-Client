import axios from "axios";
import { HOST_BASE_URL } from "../../common/constant";

export default axios.create({
    baseURL: HOST_BASE_URL,
    withCredentials: true,
})
