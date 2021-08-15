import api from '../api'
import apiJson from '../api/json'
import {
  OPEN_CHANNEL, 
  ADD_DEPOSIT, 
  LOAD_CHANNEL, 
  MAKE_TRANSACTION_OFF_CHAIN,
  LOAD_TRANSACTION_OFF_CHAIN,
  MAKE_TRANSACTION_ON_CHAIN,
  LOAD_TRANSACTION_ON_CHAIN,
  GET_LAST_KEY
} from '../types'

//OPEN CHANNEL
export const openChannel = async (dispatch, newChannel) => {
  try{
    const res = await api.post("channel", newChannel) //masukin data ke server
    const readData = await res.data
    await apiJson.post("channelLists", {
      //nambah data baru untuk menyimpan transactions lists nantinya
      ...readData, 
      listsTransactions:[]
    })
    dispatch({ //masukin data ke state/ui 
      type: OPEN_CHANNEL, 
      payload: readData
    })
  }catch(error){
    console.log(error);
  }
}

//load Channel Lists
export const loadChannel = async(dispatch) => {
  try{
    const res = await apiJson.get("channelLists")
    const dataAPI = res.data
    // console.log(dataAPI)
    dispatch({ //masukin data ke state/ui 
      type: LOAD_CHANNEL, 
      payload: dataAPI
    })
  }catch(error){
    console.log(error);
  }
}

//DEPOSIT CHANNEL
export const deposit = async (dispatch, addDeposit) => {
  try{
    const res = await api.post("deposit",addDeposit)
    const dataDeposit = await res.data
    const lastKey = await dataDeposit.key
    await apiJson.post("lastKeys", {lastKey})
    console.log(lastKey)
    dispatch({ 
      type: ADD_DEPOSIT,
      payload: dataDeposit
    })
  }catch(error){
    console.log(error);
  }
}
//Load Desposits history


//get last key from transactions and deposits
export const getLastKey = async(dispatch) => {
  try{
    const res = await apiJson.get("lastKeys")
    const dataAPI = res.data
    console.log(dataAPI)
    dispatch({ //masukin data ke state/ui 
      type: GET_LAST_KEY, 
      payload: dataAPI
    })
  }catch(error){
    console.log(error);
  }
}

//OFF-CHAIN Transactions
//make
export const makeOffChainTransactions = async (dispatch, addTransactions) => {
  try{
    const res = await api.post("transferDataStoreOffChain",addTransactions)
    const dataChain = res.data
    const lastKey = dataChain.key
    await apiJson.post("transactionsOffChainList", {dataChain})
    await apiJson.post("lastKeys",{lastKey})
    console.log(lastKey)
    dispatch({ 
      type: MAKE_TRANSACTION_OFF_CHAIN,
      payload: dataChain
    })
  }catch(error){
    console.log(error);
  }
}

//load
export const loadOffChainTransactions = async(dispatch) => {
  try{
    const res = await apiJson.get("transactionsOffChainList")
    const dataAPI = res.data
    console.log(dataAPI)
    dispatch({ //masukin data ke state/ui 
      type: LOAD_TRANSACTION_OFF_CHAIN, 
      payload: dataAPI
    })
  }catch(error){
    console.log(error);
  }
}


//ON-CHAIN Transactions
//make
export const makeOnChainTransactions = async (dispatch, addTransactions) => {
  try{
    const res = await api.post("transferOffChain",addTransactions)
    const dataChain = res.data
    await apiJson.post("transactionsOnChainList", {dataChain})
    dispatch({ 
      type: MAKE_TRANSACTION_ON_CHAIN,
      payload: dataChain
    })
  }catch(error){
    console.log(error);
  }
}

//load
export const loadOnChainTransactions = async(dispatch) => {
  try{
    const res = await apiJson.get("transactionsOnChainList")
    const dataAPI = res.data
    console.log(dataAPI)
    dispatch({ //masukin data ke state/ui 
      type: LOAD_TRANSACTION_ON_CHAIN, 
      payload: dataAPI
    })
  }catch(error){
    console.log(error);
  }
}