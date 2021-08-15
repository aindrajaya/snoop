import {combineReducers} from 'redux';
import customizationReducer from './reducers/customizationReducer';
import snackbarReducer from './reducers/snackbarReducer';
import channelReducer from './reducers/Channel'
import channelLists from './reducers/ChannelList';
import depositReducer from './reducers/depositChannel';
import lastKeyReducer from './reducers/GetLastKey';
import offChainReducer from './reducers/OffChain';
import onChainReducer from './reducers/OnChain';
import offChainLists from './reducers/OffChainLists';
import onChainLists from './reducers/OnChainLists';

const reducer = combineReducers({
    customization: customizationReducer,
    snackbar: snackbarReducer,
    channel: channelReducer,
    listsChannel: channelLists,
    deposit: depositReducer,
    lastKey: lastKeyReducer,
    offChain: offChainReducer,
    onChain: onChainReducer,
    offChainLists: offChainLists,
    onChainLists: onChainLists
});

export default reducer;
