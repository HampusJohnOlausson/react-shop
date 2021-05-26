import { makeStyles } from "@material-ui/core";

const personalDetailsStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50rem",
    color: "white",
    padding: "1rem",
  },
  label: {
    color: "#28c7fa",
  },
  input: {
    color: "#fff",
  },
  confirmBtn: {
    background: "#13D79B",
    color: "#fff",
    width: "10rem",
    margin: "1rem 0rem",
    borderRadius: ".5rem",
    padding: ".5rem 2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transitionDuration: "0.4s",
    "&:hover": {
      background: "#18B988",
    },
  },
  nonActiveBtn: {
    background: "grey",
    color: "#fff",
    width: "10rem",
    margin: "1rem 0rem",
    borderRadius: ".5rem",
    padding: ".5rem 2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transitionDuration: "0.4s",
    "&:hover": {
      background: "grey",
    },
  },
}));

export default personalDetailsStyles;
