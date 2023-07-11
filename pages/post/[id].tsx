// 动态路由
import Head from "next/head";
import type { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import NestedLayout from "../components/nestedLayout";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const toOtherPage = () => {
    router.push("/about");
  };

  return (
    <>
      <Head>
        <title>post</title>
      </Head>
      <main>
        <div>about post {id}</div>
        <button onClick={toOtherPage}>页面跳转</button>
      </main>
    </>
  );
}

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
