import { makeStyles } from "@material-ui/core";

const productPageStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontFamily: "Mr Dafoe, cursive",
    color: "#28c7fa",
    fontWeight: "normal",
    fontSize: "3rem",
  },
}));

export default productPageStyles;
