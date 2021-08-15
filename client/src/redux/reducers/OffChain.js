import { MAKE_TRANSACTION_OFF_CHAIN } from '../types';

const offTransactions = [];

const offChainReducer = (data = offTransactions, action) => {
  const {type, payload} = action;

  switch (type) {
    case MAKE_TRANSACTION_OFF_CHAIN:
      const {dataTrx, key, channelKey, statusCode, statusMessage} = payload
      return {
        dataChain : dataTrx,
        key: key,
        channelKey: channelKey,
        statusCode: statusCode,
        statusMessage: statusMessage,
      }
    default:
      return data;
  }
}

export default offChainReducer