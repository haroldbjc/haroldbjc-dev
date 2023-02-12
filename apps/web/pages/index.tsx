import Head from "next/head";

export default function Web() {
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <h1>May all the beauty be blessed.</h1>
      <button onClick={() => alert("Hello from Web")}>Click me</button>
    </div>
  );
}
