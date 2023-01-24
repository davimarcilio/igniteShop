import {
  CardItemContainer,
  ImageContainer,
} from "../styles/components/CardItem";

export function CartItem() {
  return (
    <CardItemContainer>
      <ImageContainer></ImageContainer>

      <div>
        <h1>Camiseta Beyond the Limits</h1>
        <strong>R$ 79,90</strong>
        <button>Remover</button>
      </div>
    </CardItemContainer>
  );
}
