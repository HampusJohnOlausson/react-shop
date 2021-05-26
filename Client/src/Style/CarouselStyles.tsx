import { makeStyles } from "@material-ui/core";

const carouselStyles = makeStyles((theme) => ({
  slider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
  },
  image: {
    borderRadius: ".5rem",
    height: "45rem",
    margin: "3rem 2rem 10rem",
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.5)",
  },
  arrowRight: {
    fontSize: "5rem",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "-5rem",
    zIndex: 10,
    userSelect: "none",
  },
  arrowLeft: {
    fontSize: "5rem",
    cursor: "pointer",
    position: "absolute",
    left: "-5rem",
    top: "50%",
    zIndex: 10,
    userSelect: "none",
  },
}));

export default carouselStyles;
