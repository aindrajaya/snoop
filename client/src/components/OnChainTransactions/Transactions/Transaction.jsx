import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }

`

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #B2BFE1;
    margin-top: 2px;
`

const Property = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const PropertyImg = styled.img`
    height: 35px;
    width: 35px;
`
const PropertyStreet = styled(Text)`
    font-size: 1rem;
`
const MoveInDate = styled(Text)`
    width: 15%;
`
const Rent = styled(Text)`
    width: 10%;
`
const DepositWrapper = styled.div`
    width: 15%;
`
const Status = styled.div`
    display: flex;
    align-items: center;
`
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`

const OnChainTransaction = ({ data }) => {
    // const { property, moveInDate, rent, deposit, status } = data;
    const { addressTo, addressFrom, amountTransfer, state, status, trxHashTransfer } = data;
    // const property = "string5" 
    // const moveInDate = "string4" 
    // const rent ="string3" 
    // const deposit = "string2"
    // const status = "string"
    const today = new Date();

    return (
        <Container>
            <Property>
                <PropertyImg src={require(`../../../assets/images/transact4.png`)} />
                <PropertyText>
                    <PropertyStreet>
                        <Link
                        style={{textDecoration: 'none'}}
                        target="_blank" 
                        to={{pathname: `https://rinkeby.etherscan.io/tx/${trxHashTransfer}`}}
                        >
                             {trxHashTransfer.slice(0, 20)+'...'}
                        </Link>
                    </PropertyStreet>
                    <Subtitle>TO  {addressTo.slice(0, 35)+'...'}</Subtitle>
                </PropertyText>
            </Property> 
            <MoveInDate>
                {"August 2021"}
            </MoveInDate>
            <Rent>Ξ {amountTransfer}</Rent>
            <DepositWrapper>
                <Text>FROM {addressFrom.slice(0, 10)+'...'}</Text>
                <Subtitle>{state}</Subtitle>
            </DepositWrapper>
            <Status>
                <Text>{status}</Text>
                {/* {(() => {
                    switch (status.level) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()} */}
            </Status>

        </Container>
    )
}

export default OnChainTransaction
