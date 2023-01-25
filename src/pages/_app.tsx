import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Logo from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Cart } from "../components/Cart";
import { CartContextProvider } from "../context/CartContext";
import { CartTriggerButton } from "../components/CartTriggerButton";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Link href={"/"}>
            <Image src={Logo} alt="" />
          </Link>
          <Dialog.Root>
            <CartTriggerButton />
            <Cart />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  );
}
