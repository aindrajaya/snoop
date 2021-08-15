import { LOADING } from "../types";

const setLoading = (false)

const loadingHandle = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case LOADING:
      return {
        state: payload
      }
      
  
    default:
      return state;
  }
}