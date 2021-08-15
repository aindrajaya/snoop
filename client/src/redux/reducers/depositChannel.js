import { ADD_DEPOSIT } from '../types';

const depositRes = [];

const depositReducer = (data = depositRes, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_DEPOSIT:
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

export default depositReducer