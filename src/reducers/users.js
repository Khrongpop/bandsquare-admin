
export default (state = [] ,action) => {
    switch (action.type) {
      case 'FETCHUSERS':
        console.log(`users from action `,action.users)
        // return state = JSON.stringify(action.users)
        let users = []
        action.users.forEach(user => {
          user.key = `${user.id}`
          users.push(user)
        });
        return state = users
        // return state = action.users
      default:
        return state 
    }
  }