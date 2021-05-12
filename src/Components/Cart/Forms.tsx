import { Button, makeStyles, Step, StepLabel, Stepper } from '@material-ui/core'
import React, { useState } from 'react'
import PersonalDetails from './PersonalDetails';

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    margin: "1rem auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  formTitle: {
  }
}));

const Forms = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);


    // function getSteps(){
    //   return [<PersonalDetails/>]
    // }

    const nextStep = () => {
        if(activeStep < 2){
        setActiveStep((currentStep) => currentStep + 1)
        }
    }
    const prevStep = () => {
      if (activeStep !== -1) {
        setActiveStep((currentStep) => currentStep - 1);
      }
    };

    return (
      <div className={classes.mainContainer}>
        <h1 className={classes.formTitle}>Form</h1>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Personal Details</StepLabel>
            <PersonalDetails/>
          </Step>
          <Step>
            <StepLabel>Shipping Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment Details</StepLabel>
          </Step>
        </Stepper>
        <br />
        <Button onClick={() => nextStep()} color="primary" variant="contained">
          Next Step
        </Button>
        <Button onClick={() => prevStep()} color="primary" variant="contained">
          Prev Step
        </Button>
      </div>
    );
}

export default Forms
