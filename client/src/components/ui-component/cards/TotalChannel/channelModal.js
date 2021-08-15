
import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

//data handling redux
import { useDispatch, useSelector } from "react-redux";
import { loadChannel, openChannel, saveChannel } from '../../../../redux/actions/channel';

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


const ChannelModal = ({show, close}) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  
  //redux
  const dispatch = useDispatch()
  const dataChain = useSelector(state => state.channel)
  const listsChain = useSelector(state => state.listsChannel)

  console.log(dataChain)
  console.log(listsChain)

  //loadNotification


  const onSubmit = async (data) => {
    openChannel(dispatch, data)
    // if(dataChain.statusCode === "01"){
    //   close()
    // }
  }

  useEffect((data) => {
    loadChannel(dispatch)
  }, [])
    
  return (
    <Fragment>  
      {show ? 
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <h2
          style={{
            backgroundColor: "#90caf9",
            fontSize: "1em"
          }}
          >
            Channel Key 
            {dataChain.key}
          </h2>
          <Controller
            name="addressFromPk"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Root Address Pkey"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
              />
            )}
            rules={{ required: 'Root Address Private Key required' }}
          />
          <Controller
            name="addressTo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Address To"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Second Address required' }}
          />
          <Controller
            name="addressAudit"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Audit Address"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Auditor/Third Address required' }}
          />
          <Controller
            name="depositMinimum"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Minimum Amount Deposit"
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Minimum deposit is required' }}
          />
          {/* Button */}
          <div>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              onClick={async () => {
                setInterval(function(){
                  close()
                  alert("Transactions Done");
                  window.location.reload()
                },3000);
              }}
              >
              Open Channel
            </Button>
        </div>
      </form>
      : null}
    </Fragment>
   );
};

export default ChannelModal