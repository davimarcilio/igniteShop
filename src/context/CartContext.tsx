import axios from "axios";
import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  children: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

export interface ProductForCheckout {
  price: string;
  quantity: number;
}

interface Context {
  products: Product[];
  isAddingToCart: boolean;
  placeOnCart: (product: Product) => void;
  buyProducts: (allProductsInCart: ProductForCheckout[]) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = createContext({} as Context);

export function CartContextProvider({ children }: CartContextProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  function placeOnCart(product: Product) {
    setProducts((state) => [...state, product]);
  }

  function removeFromCart(productId: string) {
    setProducts((state) => state.filter((product) => product.id !== productId));
  }

  async function buyProducts(allProductsInCart: ProductForCheckout[]) {
    try {
      setIsAddingToCart(true);
      const response = await axios.post("/api/checkout", {
        priceIds: allProductsInCart,
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      //Conectar com uma ferramenta de observabilidade(datadog/sentry)
      setIsAddingToCart(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        isAddingToCart,
        placeOnCart,
        buyProducts,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
