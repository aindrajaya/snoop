
import React, {useEffect, Fragment, useState} from 'react';
import { FormGroup,  makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

//redux
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ModalChooseChannel = ({ setForm, formData, navigation }) => {
  const classes = useStyles();


  const {channel } = formData;

  //redux
  const dispatch = useDispatch()
  const listsChannel = useSelector(state => state.listsChannel)

  useEffect(() => {
    loadChannel(dispatch)
  }, [])

  useEffect(() => {
    //
  }, [dispatch])


  const dummy = 
    {
      dataTrx:{
        channelAddress: "Please choose Channel lists Below",
        lastKey: "Please choose Key lists Below"
      },
      key:"nothing"
    }

  const lists = [dummy, ...listsChannel]

  const ListChannels = ({ ...others }) => (
    <>
      <Select 
        labelId="demo-simple-select-outlined-label"
        {...others}>
        {lists.map((item, idx) => (
          <MenuItem value={item.key}>
            {item?.dataTrx?.channelAddress.slice(0, 20)}
            {` => Key : (${item.key.slice(0, 20)}...)`}
          </MenuItem>
        ))}
      </Select>
    </>
  );
  
  const { previous, next } = navigation;

  return (
    <Fragment>
       <FormGroup variant="outlined" >
       <InputLabel id="demo-simple-select-outlined-label">Choose one of The Channel</InputLabel>
        <ListChannels label="Channel" name="channel" value={channel} onChange={setForm}/>  
        <Button style={{marginTop: '1em'}} onClick={next} variant="contained" color="primary">
          Next
        </Button>
      </FormGroup>
    </Fragment>
  );
};

export default ModalChooseChannel