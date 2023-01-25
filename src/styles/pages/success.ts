import { styled } from "..";
import * as Avatar from "@radix-ui/react-avatar";
export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },
  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    color: "$green500",
    fontSize: "$lg",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "$green300",
    },
  },
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1ea463 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  maxWidth: 145,
  height: 145,
  background: "linear-gradient(180deg, #1ea463 0%, #7465d4 100%)",
  borderRadius: 9999,
  "-webkit-box-shadow": "-8px 11px 25px 5px rgba(0,0,0,0.64)",
  boxShadow: "-8px 11px 25px 5px rgba(0,0,0,0.64)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:not(:first-child)": {
    marginLeft: "-50px",
  },
  img: {
    objectFit: "cover",
  },
});

export const MultiImagesContainer = styled(Avatar.Root, {
  width: "100%",
  maxWidth: 145,
  height: 145,
  // background: "linear-gradient(180deg, #1ea463 0%, #7465d4 100%)",
  // borderRadius: 9999,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
