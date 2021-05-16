import { Button, TextField, makeStyles } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import personalDetailsStyles from '../../Style/PersonalDetailsStyles'

const PersonalDetails = () => {
  const classes = personalDetailsStyles(makeStyles);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [adressError, setAdressError] = useState("");
  const [zipError, setZipError] = useState('');
  const [cityError, setCityError] = useState("");

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setFirstNameError("Name is not valid");
    } else {
      setFirstNameError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setLastNameError("Name is not valid");
    } else {
      setLastNameError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      )
    ) {
      setMailError("E-mail is not valid");
    } else {
      setMailError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^\d{10}$/.test(e.target.value)) {
      setNumberError("Phonenumber is not valid");
    } else {
      setNumberError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleAdress = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö0-9\s,'-]*$/.test(e.target.value)) {
      setAdressError("adress is not valid");
    } else {
      setAdressError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>) => {
    if(!/^\d{5}$/.test(e.target.value)) {
      setZipError("zipcode is not valid");
    } else {
      setZipError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setCityError("City is not valid");
    } else {
      setCityError("");
    }
    console.log(e.target.value);
    // user.addName(e);
  };

  return (
    <div>
      <form className={classes.form}>
        <TextField
          label="Firstname"
          required
          fullWidth
          id="firstName"
          key="firstName"
          autoComplete="firstName"
          autoFocus
          type="text"
          helperText={firstNameError}
          onChange={handleFirstName}
          error={Boolean(firstNameError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="Lastname"
          type="text"
          required
          fullWidth
          id="lastName"
          key="lastName"
          autoComplete="lastName"
          autoFocus
          onChange={handleLastName}
          helperText={lastNameError}
          error={Boolean(lastNameError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="E-mail"
          type="text"
          required
          fullWidth
          id="mail"
          key="mail"
          autoComplete="mail"
          autoFocus
          onChange={handleMail}
          helperText={mailError}
          error={Boolean(mailError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="Phone Number"
          required
          fullWidth
          id="phone"
          key="phone"
          autoComplete="phone"
          autoFocus
          onChange={handleNumber}
          helperText={numberError}
          error={Boolean(numberError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="Adress"
          required
          fullWidth
          id="adress"
          key="adress"
          autoComplete="adress"
          autoFocus
          onChange={handleAdress}
          helperText={adressError}
          error={Boolean(adressError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="Zip Code"
          required
          fullWidth
          id="zip"
          key="zip"
          autoComplete="zip"
          autoFocus
          onChange={handleZip}
          helperText={zipError}
          error={Boolean(zipError)}
        />
        <TextField
          InputLabelProps={{ className: classes.label }}
          InputProps={{ className: classes.input }}
          label="City"
          required
          fullWidth
          id="city"
          key="city"
          autoComplete="city"
          autoFocus
          onChange={handleCity}
          helperText={cityError}
          error={Boolean(cityError)}
        />
        <Button
          className={classes.confirmBtn}
          type="submit"
          variant="contained"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default PersonalDetails
