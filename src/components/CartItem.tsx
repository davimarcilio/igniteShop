import Image from "next/image";
import { useContext } from "react";
import { CartContext, Product } from "../context/CartContext";
import {
  CardItemContainer,
  ImageContainer,
} from "../styles/components/CardItem";
interface CartItemProps {
  product: Product;
}
export function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useContext(CartContext);

  function handleRemoveFromCart() {
    removeFromCart(product.id);
  }

  return (
    <CardItemContainer>
      <ImageContainer>
        <Image width={102} height={93} src={product.imageUrl} alt="" />
      </ImageContainer>

      <div>
        <h1> {product.name} </h1>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price / 100)}
        </strong>
        <button onClick={handleRemoveFromCart}>Remover</button>
      </div>
    </CardItemContainer>
  );
}
