import { OPEN_CHANNEL} from '../types';

const channelState = [{
  dataChain : {},
  key: "",
  channelKey: "",
  statusCode: "",
  statusMessage: "",
  listsTransactions: []
}];

const channelReducer = (data = channelState, action) => {
  const {type, payload} = action;

  switch (type) {
    case OPEN_CHANNEL:
      const {dataTrx, key, channelKey, statusCode, statusMessage} = payload
      return {
        dataChain : dataTrx,
        key: key,
        channelKey: channelKey,
        statusCode: statusCode,
        statusMessage: statusMessage,
        listsTransactions: []
      }
    default:
      return data;
  }
}

export default channelReducer