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
  type: 'LOGIN',
})