import { makeStyles } from "@material-ui/core";

const paymentStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    background: "#13D79B",
    color: "#fff",
    width: "10rem",
    margin: ".5rem 0rem",
    borderRadius: ".5rem",
    padding: ".5rem 2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    transitionDuration: "0.4s",
    "&:hover": {
      background: "#18B988",
    },
  },
}));

export default paymentStyles;
