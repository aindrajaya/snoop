//load root address

//load members address

//channel process
export const OPEN_CHANNEL = "OPEN_CHANNEL"
export const ADD_DEPOSIT = "ADD_DEPOSIT"
export const LOAD_DEPOSIT_HISTORY = "LOAD_DEPOSIT_HISTORY"
export const LOAD_CHANNEL = "LOAD_CHANNEL"
export const SAVE_CHANNEL = "SAVE_CHANNEL"

//state channel transaction
export const ACCOUNT_INITIALISE = 'ACCOUNT_INITIALISE';

//OFF-CHAIN
//Transaction Off-Chain -> to mediatorApi
export const MAKE_TRANSACTION_OFF_CHAIN = 'MAKE_TRANSACTION_OFF_CHAIN'
//Load off-chain transactions -> to json-server
export const LOAD_TRANSACTION_OFF_CHAIN = 'LOAD_TRANSACTION_OFF_CHAIN'

//ON-CHAIN
//Transaction On-Chain -> to mediatorApi
export const MAKE_TRANSACTION_ON_CHAIN = 'MAKE_TRANSACTION_ON_CHAIN'
//Load on-chain transactions -> to json-server
export const LOAD_TRANSACTION_ON_CHAIN = 'LOAD_TRANSACTION_ON_CHAIN'

//GET LAST KEY
export const GET_LAST_KEY = 'GET_LAST_KEY'

//LOADING
export const LOADING = 'LOADING'