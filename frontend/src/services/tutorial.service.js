import axios from "axios";

// ✅ For Vite, use import.meta.env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,  // Example: https://tutorialmanager-3.onrender.com/api
    headers: {
        "Content-Type": "application/json",
    },
});

// Your API methods remain unchanged
const getAll = () => http.get("/tutorials");
const get = (id) => http.get(`/tutorials/${id}`);
const create = (data) => http.post("/tutorials", data);
const update = (id, data) => http.put(`/tutorials/${id}`, data);
const remove = (id) => http.delete(`/tutorials/${id}`);
const removeAll = () => http.delete("/tutorials");
const findByTitle = (title) => http.get(`/tutorials?title=${title}`);

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};
