import { Button, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import DelivaryDetails from './DelivaryDetails';
import PaymentDetails from './PaymentDetails';
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

function getSteps(){
      return [<PersonalDetails/>, <DelivaryDetails/>, <PaymentDetails/>];
    }

function getStepContent(stepIndex: number){
  switch(stepIndex){
    case 0:
      return <PersonalDetails/>
    case 1:
      return <DelivaryDetails/>
    case 2: 
      return <PaymentDetails/>
    default: 
      return 'unknown step';
  }
}

const Forms = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

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
        <h1 className={classes.formTitle}>Checkout</h1>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step>
              <StepLabel />
            </Step>
          ))}
        </Stepper>

        <br />
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps are completed</Typography>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
            </div>
          )}
        </div>
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
