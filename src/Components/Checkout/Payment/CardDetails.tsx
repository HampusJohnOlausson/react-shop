import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import React from 'react'
import paymentStyles from '../../../Style/PaymentStyles'

const CardDetails = () => {

    const classes = paymentStyles()
    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <strong className={classes.title}>Creditcard</strong>
          </AccordionSummary>
          <AccordionDetails className={classes.container}>
            <TextField
              variant="outlined"
              required
              label="Creditcard Name"
              margin="normal"
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
