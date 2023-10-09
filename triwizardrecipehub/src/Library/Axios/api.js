import axios from "axios";


const username = 'max';
const password = '1811321';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};


const URI = 'http://localhost:8808/recipehub'


//endpoint 1
const getRecipe = () => axios.get(`${URI}/recipe/get`, { headers })
const getRecipebyId = (id) => axios.get(`${URI}/recipe/find/${id}`, { headers })
const addRecipe = (Recipe) => axios.post(`${URI}/recipe/add`, Recipe, { headers })
const editRecipe = (id, Recipe) => axios.put(`${URI}/recipe/edit/${id}`, Recipe, { headers })
const deleteRecipe = (id) => axios.delete(`${URI}/recipe/delete/${id}`, { headers })

const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
const editUser = (id, Recipe) => axios.put(`${URI}/user/edit/${id}`, Recipe, { headers })
const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/user/signin`, signin, { headers })
const userRegister = (register) => axios.post(`${URI}/user/signup`, register, { headers })
const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers })


export { getRecipe, getRecipebyId, addRecipe, editRecipe, deleteRecipe, getUser, getUserbyId, editUser, deleteUser, adminLogin,userLogin,userRegister }
