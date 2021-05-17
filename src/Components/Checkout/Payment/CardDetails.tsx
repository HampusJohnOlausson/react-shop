import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import React, { useState, ChangeEvent } from 'react'
import paymentStyles from '../../../Style/PaymentStyles'

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
      // payment.addName(e);
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
              id="lastName"
              key="lastName"
              autoComplete="lastName"
              autoFocus
            />
            <TextField
              variant="outlined"
              required
              label="Creditcard Number"
              margin="normal"
            />
            <TextField
              variant="outlined"
              required
              label="Expiration Date"
              margin="normal"
            />
            <TextField
              variant="outlined"
              required
              label="CVC"
              margin="normal"
            />
          </AccordionDetails>
          <Button className={classes.btn}>Complete Payment</Button>
        </Accordion>
      </div>
    );
}

export default CardDetails
