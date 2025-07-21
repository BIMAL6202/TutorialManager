import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,  // Use env variable here
    headers: {
        "Content-Type": "application/json",
    },
});

// rest of your functions remain same...

const getAll = () => {
    return http.get("/tutorials");
};

const get = (id) => {
    return http.get(`/tutorials/${id}`);
};

const create = (data) => {
    return http.post("/tutorials", data);
};

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return http.delete("/tutorials");
};

const findByTitle = (title) => {
    return http.get(`/tutorials?title=${title}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
};
