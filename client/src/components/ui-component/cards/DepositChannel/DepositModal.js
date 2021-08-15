
import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

//redux
import { useDispatch, useSelector } from "react-redux";
import { deposit } from '../../../../redux/actions/channel';

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

const DepositModal = ({formData, navigation,close}) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  //redux
  const dispatch = useDispatch()
  const dataChannel = useSelector(state => state.channel)

  console.log(dataChannel.length)

  const {channel} = formData

  const onSubmit = (data) => {
    // dispatch(openChannel(data))
    deposit(dispatch, data)
  }

  const { previous, next } = navigation;

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
      /><Controller
      name="tokenAddress"
      control={control}
      defaultValue="0x43dfb791e46a4b0f432609a2bc6647801bae3585"
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="Token Address"
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
      <Controller
        name="addressTo"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Address Member"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Member address required' }}
      />
      <Controller
        name="amountDeposit"
        control={control}
        defaultValue="1"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Amount"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Amount Token required' }}
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
          Make Deposit
        </Button>
      </div>
    </form>
    </Fragment>
  );
};

export default DepositModal