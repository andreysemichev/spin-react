import axios from "./core";

export default {
    getById: id => axios.get(`/api/product/${id}`)
}