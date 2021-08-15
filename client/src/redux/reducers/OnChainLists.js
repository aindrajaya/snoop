import { LOAD_TRANSACTION_ON_CHAIN } from "../types";

const offLists = []

const onChainLists = (state=offLists, action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_TRANSACTION_ON_CHAIN:
      return payload
    default:
      return state
  }
}

export default onChainLists