
import React, {useEffect, Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

//redux
import { useDispatch, useSelector } from "react-redux";
import { makeOffChainTransactions } from '../../../../redux/actions/channel';

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

const OffChainModal = ({formData, navigation, close}) => {
  const classes = useStyles();
  const { handleSubmit, control} = useForm();
  
  //redux
  const dispatch = useDispatch()

  const {channel, lastKey} = formData

  const onSubmit = (data) => {
    // dispatch(openChannel(data))
    makeOffChainTransactions(dispatch, data)
  }

  const { previous, next } = navigation;

  const a = lastKey.toString()
  console.log(a)
  
  return (
    <Fragment>
  
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
     <Controller
        name="addressFromPk"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Private key Sender"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: 'Sender Address Private Key required' }}
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
      rules={{ required: 'Receiver Address required' }}
      />
      <Controller
        name="amountTransfer"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Amount Transfer"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Amount Transfer required' }}
      />
      <Controller
        name="channelKey"
        control={control}
        defaultValue={channel}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Channel Key"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Channel Key required' }}
      />
      <Controller
        name="lastKey"
        control={control}
        defaultValue={a}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Last Key"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <div>
        <Button onClick={previous} variant="contained" color="primary">
          Back to Channel
        </Button>
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
          Make Transaction
        </Button>
      </div>
    </form>
    </Fragment>
  );
};

export default OffChainModal