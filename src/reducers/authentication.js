import axios from "axios";


// import axios from './axiosConfig';

export default (state = `false`,action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log(`user from action `,action.user)
        // let res = axios.post(`login`,action.user).then((result) => result.data)
        axios.get(`https://nameless-river-79098.herokuapp.com/books`,{headers: {
          'Access-Control-Allow-Origin': '*',
        }}).then((result) => { console.log(result.data)})
        // console.log(res);
        return state = `true`
      case 'LOGOUT':
        return state = `false`
      default:
        return state 
    }
  }