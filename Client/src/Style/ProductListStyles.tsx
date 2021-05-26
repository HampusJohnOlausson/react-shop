import { makeStyles } from "@material-ui/core";

const productListStyles = makeStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 2rem 0rem 2rem',
  },
  input: {
    fontSize: "1.2rem",
    padding: "1rem 5rem 1rem 1rem",
    outline: "none",
    borderRadius: ".4rem",
    border: 'none',
    color: 'black',
    "&::placeholder": {
      fontStyle: 'italic'
    },
  },
  list: {
    padding: "0rem 2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default productListStyles;
