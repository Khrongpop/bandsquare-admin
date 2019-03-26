export default (state = `false`,action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log(`user from action `,action.user)
        localStorage.setItem("adminBSuser", JSON.stringify(action.user))
        return state = `true`
      case 'LOGOUT':
        localStorage.removeItem("adminBSuser")
        return state = `false`
      default:
        return state 
    }
  }