import React from 'react'

import SideBar from '../components/Sidebar/Sidebar'
import SimpleTransaction from '../components/SimpleTransaction/SimpleTransaction'
import StateChannel from '../components/StateChannel/StateChannel'
// import Homepage from '../components/Homepage/Homepage'
import Nav from './Nav';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SystemConfigBoard from '../components/StateChannel/SystemConfigBoard';
import TransactionChannel from '../components/StateChannel/TransactionChannel';
import UnderDevelopment from '../components/StateChannel/UnderDevelopment';
import OnChainTransactionMain from '../components/OnChainTransactions';

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <StateChannel/>
    },
    {
      path: "/statechannels",
      main: () => <TransactionChannel/>
    },
    {
      path: "/onchain",
      // main: () => <SimpleTransaction/>
      main: () => <OnChainTransactionMain />
      // main: () => <UnderDevelopment />
    },
    {
      path: "/systemconfig",
      main: () => <SystemConfigBoard />
    }
  ];

const Dashboard = () => {
    return (
        <React.Fragment>
             <Router basename="/">
                <SideBar />
                <Nav />
                <Route path="/"/>
                <Route path="/statechannels" />
                <Route path="/onchain" />
                <Route path="/systemconfig" />

                <Switch>
                    {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                    ))}
                </Switch>
            </Router>
            
        </React.Fragment>
       
    )
}

export default Dashboard
