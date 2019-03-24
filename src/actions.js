import axios from "axios";

export const increment = (score = 1) => ({
  type: 'INCREMENT',
  score
})

export const decrement = (score = -1) => ({
  type: 'DECREMENT',
  score
})

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


const baseURL = `https://muangthesisapi.herokuapp.com/admin/`

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