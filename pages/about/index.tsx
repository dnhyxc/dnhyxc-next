import Head from "next/head";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "../components/nestedLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <main>about dnhyxc</main>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
