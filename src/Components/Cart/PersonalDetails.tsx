import { makeStyles, TextField } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const PersonalDetails = () => {

    const classes = useStyles(makeStyles);
    const [firstName, setFirstName] = useState('');

    const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
        console.log(firstName);
    }

    return (
      <div>
        <form className={classes.form}>
          <TextField label="Firstname" required fullWidth id="firstName" key="firstName" autoComplete="firstName" autoFocus type="text" value={firstName} onChange={handleFirstName} />
          <TextField label="Lastname" type="text"/>
          <TextField label="E-mail" type="text" />
          <TextField label="Phone Number"/>
          <TextField label="Adress" />
          <TextField label="Zip Code"/>
          <TextField label="City"/>
        </form>
      </div>
    );
}

export default PersonalDetails
