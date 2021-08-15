import React, {useState, useEffect} from 'react';
import {Avatar, Button, Card, CardContent, Grid, makeStyles, MenuItem, Typography} from '@material-ui/core';

import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import PageviewIcon from '@material-ui/icons/Pageview';
import SearchIcon from '@material-ui/icons/Search';

import Modal from "react-modal";
import ChannelModal from './channelModal'
// import ChannelModal from './channelModalDev'
import ListModalOpen from './listModal'

import {Link} from 'react-router-dom'

//redux integration
import { useDispatch, useSelector } from "react-redux";
import { loadChannel } from '../../../../redux/actions/channel';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            // backgroundColor: theme.palette.primary.dark,
            borderRadius: '50%',
            top: '-85px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            // backgroundColor: theme.palette.primary.dark,
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: 0.7,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
        marginTop: '15px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary[200],
        zIndex: 1
    },
    cardHeading: {
        // fontSize: '2.125rem',
        fontSize: '1.5rem',
        fontWeight: 500,
        marginLeft: '8px',
        marginTop: '20px',
        marginBottom: '5px'
    },
    subHeading: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: theme.palette.primary[200]
    },
    avatarCricle: {
        ...theme.typography.smallAvatar,
        cursor: 'pointer',
        backgroundColor: theme.palette.primary[200],
        color: theme.palette.primary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    },
    webIcon: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
        marginTop: '14px',
        marginLeft: '20px',
    },
}));




const TotalChannel = () => {
    const classes = useStyles();

    //data from redux
    const dispatch = useDispatch()
    const listsChannel = useSelector(state => state.listsChannel)
    console.log(listsChannel)

    //modal section
    const [isOpen, setIsOpen] = useState(false)
    const [openList, setOpenList] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const listModal = () => {
        setOpenList(!openList)
    }

    useEffect(() => {
        loadChannel(dispatch)
    }, [])

    return (
        <React.Fragment>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Dialog"
                style={{
                    content:{
                        width:'40%',
                        margin: 'auto',
                        borderRadius: '15px',
                        height: '70%'
                    }
                }}
                appElement={document.getElementById('app')}
            >   
                {/* This modal is show when + button is clicked */}
                <ChannelModal show={isOpen} close={toggleModal}/>
            </Modal>

            {/* List Channel Modal */}
            <Modal
                isOpen={openList}
                onRequestClose={listModal}
                contentLabel="Dialog"
                style={{
                    content:{
                        width:'90%',
                        margin: 'auto',
                        borderRadius: '15px',
                        height: '70%'
                    }
                }}
                appElement={document.getElementById('app')}
            >
                 <ListModalOpen />
            </Modal>
        
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-between">
                                <Typography className={classes.subHeading}>Channel Lists</Typography>
                            </Grid>
                            {/* OnClick will show the Modal */}
                            <Avatar className={classes.avatarCricle} onClick={toggleModal}>
                                <AddIcon fontSize="inherit" />    
                            </Avatar>
                            
                            {/* <Modals>
                                <Avatar className={classes.avatarCricle}>
                                    <AddIcon fontSize="inherit" />    
                                </Avatar>
                            </Modals> */}
                        
                        </Grid>
                        {listsChannel.map((item, idx) => (
                            // eslint-disable-next-line no-unused-expressions
                            <Grid item key={idx}>
                                <Grid container alignItems="flex-start">
                                    <Grid item>                                    
                                        {/* <Avatar variant="rounded" className={classes.avatar} onClick={listModal}> */}
                                        <Avatar variant="rounded" className={classes.avatar}>
                                            <ListIcon fontSize="inherit" />
                                        </Avatar>                                    
                                    </Grid>
                                    <Grid item>
                                        
                                        <Typography className={classes.cardHeading} noWrap={true}>
                                            {/* {item?.dataTrx?.depositMinimum}                                                            */}
                                            {item.dataTrx?.channelAddress}
                                        </Typography>
                                        
                                    </Grid>
                                    <Grid item>
                                        <Link 
                                            style={{color:'white'}}
                                            target="_blank" 
                                            to={{pathname: `https://rinkeby.etherscan.io/tx/${item?.dataTrx?.trxHashNewChannel}`}}
                                            // className={classes.webIcon}
                                            //render={() => (window.location = `https://rinkeby.etherscan.io/tx/${item?.dataTrx?.trxHashNewChannel}`)}
                                        >
                                            <SearchIcon className={classes.webIcon} alt="Go to Rinkeby "/>
                                            {/* {item.statusCode} */}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>  

                        ))}
                                         
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default TotalChannel;
