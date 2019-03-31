import axios from "axios";

export const login = (user) => ({
  type: 'LOGIN',
  user
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const FETCHUSERS = (users) => ({
  type: 'FETCHUSERS',
  users
})

export const FETCHWORKS = (works) => ({
  type: 'FETCHWORKS',
  works
})



const baseURL = `https://muangapi.herokuapp.com/admin/`

export const authentication = (user,dispatch) => {
    axios.post(`${baseURL}login`,user)
      .then((response) =>{
          console.log(response);
          dispatch(login(response.data));
      })
      .catch((error) => {
          console.log(error);
    })
}

export const fetchUsers = (dispatch) => {
  axios.post(`${baseURL}get_user`)
    .then((response) =>{
        console.log(response);
        dispatch(FETCHUSERS(response.data));
    })
    .catch((error) => {
        console.log(error);
  })
}

export const fetchWorks = (dispatch) => {
  axios.post(`${baseURL}get_works`)
    .then((response) =>{
        console.log(response);
        dispatch(FETCHWORKS(response.data));
    })
    .catch((error) => {
        console.log(error);
  })
}

export const removeUser = (parm) => {
  // console.log(parm);
  return axios.post(`${baseURL}remove_user`,parm)
    .then((response) =>{
      return (response.data);
    })
    .catch((error) => {
      return (error);
  })
}