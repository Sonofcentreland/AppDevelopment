import axios from "axios";

const recipeAxios = axios.create({
    baseURL: 'http://localhost:8080/Recipes/'
});

const userAxios = axios.create({
    baseURL: 'http://localhost:8080/Users/'
});

export {
    recipeAxios,
    userAxios,
};