import { LOADING } from "../types"

//load
export const setLoading = async(loadState) => {
  try{
    console.log(loadState)
    ({ //masukin data ke state/ui 
      type: LOADING, 
      payload: loadState
    })
  }catch(error){
    console.log(error);
  }
}