import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Logo from "../assets/Logo.svg";
import { CartButton, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cart } from "../components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <Handbag color="#c4c4cc" size={24} />
              <span>1</span>
            </CartButton>
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
