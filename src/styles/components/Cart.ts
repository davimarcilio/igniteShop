import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";
export const ModalContent = styled(Dialog.Content, {
  position: "fixed",
  right: 0,
  top: 0,
  backgroundColor: "$gray800",
  padding: "3rem",
  height: "100%",
  minWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ModalTitleAndItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const ModalTitle = styled(Dialog.Title, {
  marginTop: "calc(3rem - 1.5rem)",
});

export const ModalClose = styled(Dialog.Close, {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  lineHeight: 0,
  backgroundColor: "transparent",
  border: "none",
  color: "#8D8D99",
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": {
    color: "#e1e1e9",
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.275rem",
  width: "100%",
  color: "$gray100",
  "div:first-child": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
    alignItems: "center",
  },
  "div:not(:first-child):not(:last-child)": {
    fontSize: "1.125rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    alignItems: "center",
    "strong:last-child": {
      fontSize: "1.5rem",
    },
  },
  button: {
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    fontSize: "1.125rem",
    marginTop: "3rem",
    fontWeight: "bold",
    backgroundColor: "$green500",
    borderRadius: 6,
    border: "none",
    color: "$white",
    cursor: "pointer",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});
