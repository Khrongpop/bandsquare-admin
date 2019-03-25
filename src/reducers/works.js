
export default (state = [] ,action) => {
    switch (action.type) {
      case 'FETCHWORKS':
        console.log(`works from action `,action.works)
        // localStorage.setItem("user", JSON.stringify(action.user))
        // return state = JSON.stringify(action.users)
        let works = []
        action.works.forEach(work => {
          work.key = `${work.id}`
          works.push(work)
        });
        return state = works
        // return state = action.users
      default:
        return state 
    }
  }