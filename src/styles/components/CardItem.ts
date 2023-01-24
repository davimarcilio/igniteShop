import { styled } from "..";

export const CardItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    h1: {
      fontSize: "1.125rem",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
  height: 93,
  background: "linear-gradient(180deg, #1ea463 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
