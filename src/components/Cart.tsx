import * as Dialog from "@radix-ui/react-dialog";
import {
  InfoContainer,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTitleAndItems,
} from "../styles/components/Cart";
import { X } from "phosphor-react";
import { CartItem } from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext, ProductForCheckout } from "../context/CartContext";
export function Cart() {
  const { products, isAddingToCart, buyProducts } = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      return setIsEmpty(true);
    }
    return setIsEmpty(false);
  }, [products]);

  function handleBuyProducts() {
    const allProductsInCart: ProductForCheckout[] = products.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: 1,
      };
    });

    buyProducts(allProductsInCart);
  }

  const totalPriceInArray = products.map((product) => product.price / 100);

  const totalPriceInCart = isEmpty
    ? 0
    : totalPriceInArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

  return (
    <Dialog.Portal>
      {isEmpty ? (
        <ModalContent>
          <ModalTitleAndItems>
            <ModalTitle>Sua sacola está vazia, Adicione produtos!</ModalTitle>
          </ModalTitleAndItems>
          <ModalClose>
            <X size={24} />
          </ModalClose>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalTitleAndItems>
            <ModalTitle>Sacola de compras</ModalTitle>
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </ModalTitleAndItems>
          <ModalClose>
            <X size={24} />
          </ModalClose>
          <InfoContainer>
            <div>
              <span>Quantidade</span>
              <span>{products.length} itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPriceInCart)}
              </strong>
            </div>
            <button disabled={isAddingToCart} onClick={handleBuyProducts}>
              Finalizar compra
            </button>
          </InfoContainer>
        </ModalContent>
      )}
    </Dialog.Portal>
  );
}
