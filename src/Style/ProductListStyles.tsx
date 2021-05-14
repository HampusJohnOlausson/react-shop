import { makeStyles } from "@material-ui/core";

const productListStyles = makeStyles((theme) => ({
  list: {
    padding: "4rem 2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default productListStyles;
