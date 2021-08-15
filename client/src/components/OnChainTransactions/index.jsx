import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import BtnTransact from './TransactionButton';
import ListsTransactions from './Transactions'

import dataMock from '../../OffChainData.json'

//call the style
import "normalize.css/normalize.css";
import './styles/styles.scss'

//styling
import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes';

//modal component
import Modal from "react-modal";
import ModalAppOnChain from '../ui-component/cards/OnChainTransactions/StepModal';

//data handler wirh redux
import {useSelector, useDispatch} from 'react-redux';
import { loadOnChainTransactions } from '../../redux/actions/channel';



const ContainerDash = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const loadLocaleData = (locale) => {
    switch (locale) {
        default:
            return import('../utils/locals/en.json');
    }
};

console.log(dataMock)

const OnChainTransactionMain = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const customization = useSelector((state) => state.customization);
    const [messages, setMessages] = useState();

    //redux load data off chain transactions
    const dispatch = useDispatch()
    const onChainLists = useSelector(state => state.onChainLists)

    console.log(onChainLists)

    useEffect(() => {
        loadLocaleData(customization.locale).then((d) => {
            setMessages(d.default);
        });
    }, [customization]);

    if (customization.rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }

    useEffect(() => {
        loadOnChainTransactions(dispatch)
    }, [])

   
    return (
        <ContainerDash> 
            <ThemeProvider theme={theme(customization)}>
                <CssBaseline>
                    <Modal 
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Dialog"
                    style={{
                        content:{
                            width:'50%',
                            margin: 'auto',
                            borderRadius: '15px',
                            height: '70%'
                        }
                    }}
                >
                    {/* <ModalAppOffChain show={isOpen}/> */}
                    <ModalAppOnChain show={isOpen} close={toggleModal}/>
                    {/* <OnChainTransactions show={isOpen}/> */}
                </Modal>
                <button onClick={toggleModal}>
                    <BtnTransact/>
                </button>
                {/* <ListsTransactions title="Off-Chain Transaction" data={dataMock}/> */}
                <ListsTransactions title="On-Chain Transaction" data={onChainLists}/>
            
                </CssBaseline>
            </ThemeProvider>
        </ContainerDash>
    )
}

export default OnChainTransactionMain
