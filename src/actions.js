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

export const authentication = (user,dispatch) => {
    axios.post(`https://muangthesisapi.herokuapp.com/auth/login`,user)
      .then((response) =>{
          console.log(response);
          dispatch(login(response.data));
      })
      .catch((error) => {
          console.log(error);
    })
}