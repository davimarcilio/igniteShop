import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  AvatarImage,
  ImageContainer,
  MultiImagesContainer,
  SuccessContainer,
} from "../styles/pages/success";
interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
  images: string[];
}

export default function Success({
  customerName,
  product,
  images,
}: SuccessProps) {
  if (!customerName) {
    return (
      <SuccessContainer>
        <h1>ERRO</h1>
      </SuccessContainer>
    );
  }
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      {images.length === 1 ? (
        <SuccessContainer>
          <h1>Compra efetuada!</h1>
          <ImageContainer>
            <Image width={120} height={110} src={product.imageUrl} alt="" />
          </ImageContainer>

          <p>
            Uhuul <strong>{customerName}</strong> , sua{" "}
            <strong>{product.name}</strong> já está a caminho da sua casa.
          </p>
          <Link href={"/"}>Voltar ao catálogo</Link>
        </SuccessContainer>
      ) : (
        <SuccessContainer>
          <h1>Compra efetuada!</h1>
          <MultiImagesContainer>
            {images.map((image) => (
              <AvatarImage key={image} width={120} height={120} src={image} />
            ))}
          </MultiImagesContainer>
          {/* <ImageContainer>
            <Image width={120} height={110} src={product.imageUrl} alt="" />
          </ImageContainer> */}

          <p>
            Uhuul <strong>{customerName}</strong> , sua compra de{" "}
            <strong>{images.length}</strong> camisetas já está a caminho da sua
            casa.
          </p>
          <Link href={"/"}>Voltar ao catálogo</Link>
        </SuccessContainer>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  // const product = session.line_items?.data[0].price?.product as Stripe.Product;
  const allProductsArray = session.line_items!.data.map(
    (allData) => allData.price?.product as Stripe.Product
  );
  const allProductsImages = allProductsArray.map(
    (product) => product.images[0]
  );

  const oneProduct = allProductsArray[0];

  return {
    props: {
      customerName,
      product: {
        name: oneProduct.name,
        imageUrl: oneProduct.images[0],
      },
      images: allProductsImages,
    },
  };
};
