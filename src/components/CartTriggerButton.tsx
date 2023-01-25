import { CartContext } from "@/src/context/CartContext";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { CartButton } from "../styles/pages/app";
import * as Dialog from "@radix-ui/react-dialog";
export function CartTriggerButton() {
  const { products } = useContext(CartContext);
  return (
    <Dialog.Trigger asChild>
      <CartButton disabled={products.length === 0}>
        <Handbag size={24} />
        <span> {products.length} </span>
      </CartButton>
    </Dialog.Trigger>
  );
}
