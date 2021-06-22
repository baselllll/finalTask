import axios from "axios"
const baseURL = "http://localhost:3333/api/user/all-user"
export const GetAllUsers  = async ()=>{
    let response;
    try {
        response = await axios.get(`${baseURL}`)
    } catch (err) {
        console.log(err)
    }
    return{
        type:"User-List",
        payload:response
    }
}
export const SearchByName  = async (name)=>{
    let response;
    try {
        response = await axios.get(`${baseURL}/${name}`)
    } catch (err) {
        console.log(err)
    }
    return{
        type:"User-List",
        payload:response
    }
}
const baseURLById = "http://localhost:3333/api/user/get-user"
export const GetById  = async (id)=>{
    let response;
    try {
        response = await axios.get(`${baseURLById}/${id}`)
    } catch (err) {
        console.log(err)
    }
    return{
        type:'Detail-User',
        payload:response
    }
}

const DeleteURLById = "http://localhost:3333/api/user/delete-user"
export const DeleteById  = async (id)=>{
    let response;
    try {
        response = await axios.delete(`${DeleteURLById}/${id}`)
    } catch (err) {
        console.log(err)
    }
    return{
        type:'Delete-User',
        payload:response
    }
}

const UpdateURLById = "http://localhost:3333/api/user/update-user"
export const UpdateById  = async (id,user)=>{
    console.log(user)
    let response;
    try {
        response = await axios.put(`${UpdateURLById}/${id}`,user)
    } catch (err) {
        console.log(err)
    }
    return{
        type:'Update-User',
        payload:response
    }
}


const AddURL = "http://localhost:3333/api/user/add-user"
export const AddNewUser  = async (user)=>{
    let response;
    try {
        response = await axios.post(`${AddURL}`,user)
    } catch (err) {
        console.log(err)
    }
    return{
        type:'Add-User',
        payload:response
    }
}


