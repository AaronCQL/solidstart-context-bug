import { Title } from "solid-start";
import Counter from "~/components/Counter";

import { useCount } from "../context";

export default function Home() {
  const { count } = useCount();
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>Count: {count()}</p>
    </main>
  );
}
