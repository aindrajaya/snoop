import { MAKE_TRANSACTION_ON_CHAIN } from '../types';

const onTransactions = [];

const onChainReducer = (data = onTransactions, action) => {
  const {type, payload} = action;

  switch (type) {
    case MAKE_TRANSACTION_ON_CHAIN:
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

export default onChainReducer