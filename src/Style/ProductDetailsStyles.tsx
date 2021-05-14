import { makeStyles } from "@material-ui/core";

const productDetailsStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "85vh",
  },
  specificProductContainer: {
    height: "45rem",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  image: {
    width: "50%",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sizeBtn: {
    margin: ".5rem",
    padding: "1rem",
    borderRadius: ".4rem",
    background: "#28c7fa",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "#20A5CF",
    },
  },
  activeBtn: {
    width: "13rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    padding: "1rem",
    borderRadius: ".4rem",
    background: "#13D79B",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      background: "#18B988",
    },
  },
  nonActiveBtn: {
    width: "13rem",
    margin: "2rem",
    padding: "1rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    borderRadius: ".4rem",
    background: "grey",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      background: "grey",
    },
  },
}));

export default productDetailsStyles;
