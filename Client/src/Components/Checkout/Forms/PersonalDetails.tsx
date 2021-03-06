import { Button, TextField, makeStyles } from '@material-ui/core'
import React, { ChangeEvent, useContext, useState } from 'react'
import { UserContext } from '../../../Contexts/UserContext';
import personalDetailsStyles from '../../../Style/PersonalDetailsStyles'
import { useForm } from 'react-hooks-forms'

const PersonalDetails = () => {

  const classes = personalDetailsStyles(makeStyles);
  const user = useContext(UserContext);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [adressError, setAdressError] = useState("");
  const [zipError, setZipError] = useState('');
  const [cityError, setCityError] = useState("");

  const [active, setActive] = useState(false);

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setFirstNameError("Name is not valid");
    } else {
      setFirstNameError("");
    }
    user.addFirstName(e);

  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setLastNameError("Name is not valid");
    } else {
      setLastNameError("");
    }
    user.addLastName(e);
    setActive(true);
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
    user.addMail(e);
  };

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^\d{10}$/.test(e.target.value)) {
      setNumberError("Phonenumber is not valid");
    } else {
      setNumberError("");
    }
    console.log(e.target.value);
    user.addPhoneNumber(e);
  };

  const handleAdress = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö0-9\s,'-]*$/.test(e.target.value)) {
      setAdressError("adress is not valid");
    } else {
      setAdressError("");
    }
    console.log(e.target.value);
    user.addAdress(e);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>) => {
    if(!/^\d{5}$/.test(e.target.value)) {
      setZipError("zipcode is not valid");
    } else {
      setZipError("");
    }
    console.log(e.target.value);
    user.addZipCode(e);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
      setCityError("City is not valid");
    } else {
      setCityError("");
    }
    console.log(e.target.value);
    user.addCity(e);
  };

   const { register, handleSubmit, formState } = useForm({
     mode: "onChange",
   });

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
            onClick={user.addInfoToObject}
            className={classes.confirmBtn}
            type="submit"
            variant="contained"
            disabled={!formState.isValid}
          >
            Confirm
          </Button>
      </form>
    </div>
  );
};

export default PersonalDetails
