import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext, Product as ProductType } from "../context/CartContext";

interface HomeProps {
  products: ProductType[];
}

export default function Home({ products }: HomeProps) {
  const { placeOnCart } = useContext(CartContext);

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const { innerWidth: width } = window;

    setWindowSize(width);
  }, []);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: windowSize <= 668 ? 1 : 3,
      spacing: 48,
    },
  });

  return (
    <>
      <HomeContainer ref={sliderRef} className={"keen-slider"}>
        {products.map((product) => {
          function handlePlaceOnCart() {
            placeOnCart(product);
          }
          return (
            <Product
              prefetch={false}
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
            >
              <Image
                placeholder="blur"
                blurDataURL={product.imageUrl}
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
              />

              <footer>
                <div>
                  <strong> {product.name} </strong>
                  <span>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price / 100)}
                  </span>
                </div>
                <button type="button" onClick={handlePlaceOnCart}>
                  <Handbag size={24} />
                </button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
