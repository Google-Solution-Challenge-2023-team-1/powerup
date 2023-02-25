import Head from "next/head";

export default function HeadContent({content}) {
  return (
    <Head>
        <title>powerup | {content}</title>
        <meta name="description" content={"powerup - " + {content}} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}