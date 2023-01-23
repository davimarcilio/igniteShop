import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Logo from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Link href={"/"}>
        <Header>
          <Image src={Logo} alt="" />
        </Header>
      </Link>
      <Component {...pageProps} />
    </Container>
  );
}
