import { makeStyles } from "@material-ui/core";


const deliveryDetailsStyles = makeStyles(() => ({
   title: {
    textAlign: 'center',
  },
  btn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "2rem",
    alignItems: "center",
    background: "#28c7fa",
    color: "#fff",
    margin: "1rem 0rem",
    borderRadius: ".5rem",
    padding: "1rem 10rem",
    fontWeight: "bold",
    transitionDuration: "0.4s",
    cursor: "pointer",
    "&:hover": {
      background: "#20A5CF",
    },
  },
  span: {
    fontSize: "1.2rem",
    fontWeight: 400,
  },
}));

export default deliveryDetailsStyles;