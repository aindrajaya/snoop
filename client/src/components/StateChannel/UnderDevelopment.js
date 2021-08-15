import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

// import "normalize.css/normalize.css";   
// import "./ModalStateChannel/styles/styles.scss"

import ConfigDashboard from './ContentBoard/dashboard/ConfigDashboard'

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
    
const UnderDevelopment = () => {
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
            
          
            {/* <Deposits title="State Channel" count={2} data={depositData.active} />
            <Deposits title="History" count={8} data={depositData.closed} /> */}
          
          <ThemeProvider theme={theme(customization)}>
                <CssBaseline>
                    UNDER DEVELOPMENT
                </CssBaseline>
            </ThemeProvider>
            

        </ContainerDash>
    )
}

export default UnderDevelopment
