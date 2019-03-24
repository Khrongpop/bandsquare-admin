import  { useReducer} from 'react';
export const initialState = {
  isFetching: false,
  cat: {},
  count: 0
}


export const reducer = (state, { type, payload }) => {
    switch(type) {
      case 'FETCH_CAT_PENDING':
        return {
          ...state,
          isFetching: true
        }
      case 'FETCH_CAT_SUCCESS':
        return {
          ...state,
          isFetching: false,
          cat: payload
        }
      case 'COUNTER_CLICK':
        return {
          ...state,
          isFetching: false,
          count: payload
        }
      default:
        return state
    }
  }

  // export const store = useReducer(reducer, initialState);