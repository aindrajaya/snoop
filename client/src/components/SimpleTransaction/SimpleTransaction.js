import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './SimpleContent/Deposits'

import depositData from '../../DepositData.json'

import Modal from "react-modal";
import TransferModal from './TransferModal/TransferModal'

import "normalize.css/normalize.css";
import "./TransferModal/styles/styles.scss"

import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes';
import {useSelector} from 'react-redux';

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

const SimpleTransaction = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const customization = useSelector((state) => state.customization);
    const [messages, setMessages] = useState();

    useEffect(() => {
        loadLocaleData(customization.locale).then((d) => {
            setMessages(d.default);
        });
    }, [customization]);

    if (customization.rtlLayout) {
        document.querySelector('body').setAttribute('dir', 'rtl');
    }
   
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
                            width:'30%',
                            margin: 'auto',
                        }
                    }}
                >
                    {/* <TransferModal /> */}
                </Modal>
                
                <NewDepositBtn click={toggleModal}/>
                
                <Deposits title="Transactions" count={2} data={depositData.active} />
                <Deposits title="History" count={8} data={depositData.closed} />
                </CssBaseline>
            </ThemeProvider>
        </ContainerDash>
    )
}

export default SimpleTransaction
