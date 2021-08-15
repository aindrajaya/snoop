import { LOAD_CHANNEL } from "../types";

const lists = []

const channelLists = (state=lists, action) => {
  const {type, payload} = action

  switch (type) {
    case LOAD_CHANNEL:
      return payload
    default:
      return state
  }
}

export default channelLists