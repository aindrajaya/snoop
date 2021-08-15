
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import TableChannel from '../../table';

//redux integration
import { useDispatch, useSelector } from "react-redux";
import { loadChannel } from '../../../../redux/actions/channel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const ListModalOpen = () => {
  const classes = useStyles();

   //data from redux
   const dispatch = useDispatch()
   const data = useSelector(state => state.listsChannel)
   const [lists, setLists] = useState([])
   for(let i=0; i<data.length; i++){
     const a = data[i].listsTransactions
     setLists(a)
   }   
  console.log(lists)

  useEffect(() => {
    loadChannel(dispatch)
  }, [])

  return (
    // <TableChannel lists={lists}/>
    <TableChannel/>
  );
};

export default ListModalOpen