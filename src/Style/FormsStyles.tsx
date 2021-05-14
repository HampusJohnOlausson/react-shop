import { makeStyles } from "@material-ui/core";

const formsStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    margin: "1rem auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  stepper: {
    width: "100%",
    color: "red",
  },
  step: {
    color: "red",
  },
  formTitle: {},
  btn: {
    background: "#28c7fa",
    color: "#fff",
    width: "10rem",
    margin: ".5rem 0rem",
    borderRadius: ".5rem",
    padding: ".5rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    transitionDuration: "0.4s",
    "&:hover": {
      background: "#20A5CF",
    },
  },
}));

export default formsStyles;
