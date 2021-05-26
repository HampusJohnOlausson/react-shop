import { makeStyles } from "@material-ui/core";

const navStyles = makeStyles(() => ({
  root: {
    minHeight: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "75%",
  },
  list: {
    width: "100%;",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    fontSize: "1.4rem",
  },
  home: {
    fontFamily: "Mr Dafoe, cursive",
    color: "#28c7fa",
    fontWeight: "normal",
    fontSize: "3rem",
  },
  icon: {
    fontSize: "2.5rem",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

export default navStyles;
