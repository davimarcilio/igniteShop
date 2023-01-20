import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return <h1>{query.id}</h1>;
}
