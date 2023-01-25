import { styled } from "..";
export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",
});

export const CartButton = styled("button", {
  backgroundColor: "$gray800",
  padding: "0.75rem",
  borderRadius: 6,
  position: "relative",
  border: "none",
  cursor: "pointer",
  color: "$gray300",
  "&:disabled": {
    color: "#8D8D99",
    cursor: "not-allowed",
    span: {
      display: "none",
    },
  },
  span: {
    position: "absolute",
    backgroundColor: "$green500",
    borderRadius: 99999,
    width: "1.5rem",
    height: "1.5rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "bold",
    fontSize: "0.875rem",
    color: "$white",

    right: "calc(-1.5rem / 2)",
    top: "calc(-1.5rem / 2)",

    "&::after": {
      content: "",
      position: "absolute",
      top: "-3px",
      left: "-3px",
      bottom: "-3px",
      right: "-3px",
      border: "3px $gray900 solid",
      borderRadius: 999,
    },
  },
});
