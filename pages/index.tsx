import Head from "next/head";
import type { ReactElement } from "react";
import Layout from "./components/layout";
import NestedLayout from "./components/nestedLayout";

export default function Page() {
  return (
    <>
      <Head>
        <title>dnhyxc</title>
      </Head>
      <main>hello dnhyxc</main>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
