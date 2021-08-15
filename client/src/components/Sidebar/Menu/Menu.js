import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ContainerMenu = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <ContainerMenu>
            <Link to="/">
                <MenuLink title="Home" icon={'home'}/>
            </Link>
            <Link to="/statechannels">
                <MenuLink title="State Channels" icon={'file-multiple'}/>
            </Link>
            <Link to="/onchain" >
                <MenuLink title="on-Chain Transactions" icon={'file-multiple'}/>
            </Link>
            <Link to="/systemconfig">
                <MenuLink title="System Configurations" icon={'cog'}/>
            </Link>
            
            {/* <MenuLink title="Channels configuration" icon={'cog'}/> */}
        </ContainerMenu>
    )
}

export default Menu
