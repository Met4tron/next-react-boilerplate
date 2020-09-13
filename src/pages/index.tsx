import Head from "next/head";

type Props = {
  title: string;
};

export default function Home({ title }: Props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
