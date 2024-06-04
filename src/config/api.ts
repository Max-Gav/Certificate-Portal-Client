import axios from "axios";
import { host_base_url } from "../common/constant";

export default axios.create({
    baseURL: host_base_url,
    withCredentials: true,
})
