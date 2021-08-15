import { LOAD_TRANSACTION_OFF_CHAIN } from "../types";

const offLists = []

const offChainLists = (state=offLists, action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_TRANSACTION_OFF_CHAIN:
      return payload
    default:
      return state
  }
}

export default offChainLists