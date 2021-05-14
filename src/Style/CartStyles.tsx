import { makeStyles } from "@material-ui/core";

const cartStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  productContainer: {
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-around",
    margin: "1rem auto",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  image: {
    borderRadius: "50%",
    width: "7rem",
    height: "7rem",
  },
  title: {
    fontSize: "1.4rem",
  },
  price: {
    fontSize: "2rem",
  },
  quantityConatainer: {},
  empty: {
    textAlign: "center",
  },
  total: {
    textAlign: "center",
    fontSize: "2rem",
  },
}));

export default cartStyles;
