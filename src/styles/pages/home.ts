import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  marginLeft: "auto",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  minHeight: 656,
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea463 0%, #7465d4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  minWidth: 540,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    padding: "2rem",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0,0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },
  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
