import React, { Fragment } from 'react'

export default function saved() {
  return (
    <Fragment>
      <div>
        <h2
          style={{
            backgroundColor: "#ffc107"
          }}
        >
          {/* {listsChain.statusMessage} */}
        </h2>
        <div
          style={{
          backgroundColor: "aliceblue",
          width: "90%",
          borderRadius: "10px",
          padding: "5%"
         }}  
        >
          <h3>This is your channel Key, please save for the next transaction</h3>
          <div
            style={{
              backgroundColor: "#fff8e1",
              width: "100%",
              borderRadius: "5px",
              padding: "5%",
              marginBottom: "5%",
              marginTop:"5%",
              wordBreak: "break-all"
            }}
            >
              {/* <p>{listsChain.channelKey}</p> */}
          </div>
          
          {/* <h3>You can see on Ropsten networks too</h3> */}
          <h3>You can see on Rinkeby networks too</h3>
          {/* <Button target="_blank" href={`https://ropsten.etherscan.io/address/${dataTrx.tokenAddress}`}> */}
          {/* <Button target="_blank" href={`https://rinkeby.etherscan.io/address/${listsChain?.dataTrx?.tokenAddress}`}>
            Token
          </Button>
          <Button target="_blank" href={`https://rinkeby.etherscan.io/tx/${listsChain?.dataTrx?.trxHashNewChannel}`}>
            Trx Address
          </Button>                */}
        </div>
      </div>
    </Fragment>
  )
}
