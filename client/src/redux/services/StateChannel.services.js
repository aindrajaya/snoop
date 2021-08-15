import http from "../http";

class StateChannelService {
  openChannel(data){
    return http.post("/channel", data)
  }

  makeDeposit(data){
    return http.post("/deposit", data)
  }

  transferOffChain(data){
    return http.post("/transferOffChain", data)
  }
}