export default (state = `false`,action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log(`user from action `,action.user)
        return state = `true`
      case 'LOGOUT':
        return state = `false`
      default:
        return state 
    }
  }