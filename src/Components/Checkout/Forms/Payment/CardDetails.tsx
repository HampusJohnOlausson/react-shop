import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import React, { useState, ChangeEvent } from 'react'
import paymentStyles from '../../../../Style/PaymentStyles'

const CardDetails = () => {

    const classes = paymentStyles()
    const [errorName, setErrorName] = useState('');
    const [errorNumber, setErrorNumber] = useState('');
    const [errorExpiration, setErrorExpiration] = useState('');
    const [errorCvc, setErrorCvc] = useState('');

    const handleNameError = (e: ChangeEvent<HTMLInputElement>) => {
      if (!/^[a-öA-Ö\s,'-]+$/.test(e.target.value)) {
        setErrorName("Cardname is not valid");
      } else {
        setErrorName("");
      }
      console.log(e.target.value);
      // payment.addCardName(e);
    };

    const handleNumberError = (e: ChangeEvent<HTMLInputElement>) => {
      if (!/^(?:[0-9]{16}|[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})$/.test(e.target.value)
      ) {
        setErrorNumber("Cardnumber is not valid");
      } else {
        setErrorNumber("");
      }
      console.log(e.target.value);
      // payment.addCardNumber(e);
    };

    const handleExpirationError = (e: ChangeEvent<HTMLInputElement>) => {
      if (!/^(?:[0-9]{4}|[0-9]{2}-[0-9]{2})$/.test(e.target.value)) {
        setErrorExpiration("Expiration date is not valid");
      } else {
        setErrorExpiration("");
      }
      console.log(e.target.value);
      // payment.addExpiration(e);
    };

    const handleCvcError = (e: ChangeEvent<HTMLInputElement>) => {
      if (!/^(?:[0-9]{3}|[0-9]{3})$/.test(e.target.value)) {
        setErrorCvc("CVC is not valid");
      } else {
        setErrorCvc("");
      }
      console.log(e.target.value);
      // payment.addCvc(e);
    };



    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <strong className={classes.title}>Creditcard</strong>
          </AccordionSummary>
          <AccordionDetails className={classes.container}>
            <TextField
              onChange={handleNameError}
              helperText={errorName}
              error={Boolean(errorName)}
              variant="outlined"
              required
              label="Creditcard Name"
              margin="normal"
              fullWidth
              placeholder="Fullname"
              id="cardName"
              key="cardName"
              autoComplete="cardName"
              autoFocus
            />
            <TextField
              onChange={handleNumberError}
              helperText={errorNumber}
              error={Boolean(errorNumber)}
              variant="outlined"
              required
              label="Creditcard Number"
              margin="normal"
              fullWidth
              placeholder="0000 0000 0000 0000"
              id="cardNumber"
              key="cardNumber"
              autoComplete="cardNumber"
              autoFocus
            />
            <TextField
              onChange={handleExpirationError}
              helperText={errorExpiration}
              error={Boolean(errorExpiration)}
              variant="outlined"
              required
              label="Expiration Date"
              margin="normal"
              fullWidth
              placeholder="00/00"
              id="expires"
              key="expires"
              autoComplete="expires"
              autoFocus
            />
            <TextField
              onChange={handleCvcError}
              helperText={errorCvc}
              error={Boolean(errorCvc)}
              variant="outlined"
              required
              label="CVC"
              margin="normal"
              fullWidth
              placeholder="CVC"
              id="cvc"
              key="cvc"
              autoComplete="cvc"
              autoFocus
            />
          </AccordionDetails>
          <Button className={classes.btn}>Complete Payment</Button>
        </Accordion>
      </div>
    );
}

export default CardDetails
