import { makeStyles } from "@material-ui/core";

const productCardStyles = makeStyles((theme) => ({
  productContainer: {
    width: "15rem",
    height: "35rem",
    boxShadow: "0 15px 25px #000000",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "4rem",
    padding: "1rem",
  },
  image: {
    borderRadius: ".5rem .5rem 0rem 0rem",
    width: "15rem",
    height: "25rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.4rem",
    color: "white",
  },
  price: {
    textAlign: "center",
    color: "#28c7fa",
    fontSize: "1.2rem",
    margin: ".7rem 0rem",
  },
  button: {
    borderRadius: ".4rem",
    background: "#28c7fa",
    width: "10rem",
    padding: ".5rem 2rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "#20A5CF",
    },
  },
  icon: {
    color: "#fff",
  },
  link: {
    textDecoration: "none",
  },
}));

export default productCardStyles;
