
export default (state = `` ,action) => {
    switch (action.type) {
      case 'FETCHUSERS':
        console.log(`users from action `,action.users)
        // localStorage.setItem("user", JSON.stringify(action.user))
        return state = JSON.stringify(action.users)
      default:
        return state 
    }
  }