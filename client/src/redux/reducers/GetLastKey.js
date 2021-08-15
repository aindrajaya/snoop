import { GET_LAST_KEY } from "../types";

const lastKeys = []

const lastKeyReducer = (state=lastKeys, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_LAST_KEY:
      return [...state, payload]    
    default:
      return state;
  }
}

export default lastKeyReducer