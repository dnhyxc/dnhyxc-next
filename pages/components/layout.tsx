// components/layout.js
import useSWR from "swr";
import { ReactElement } from "react";
import styles from "@/styles/layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactElement }) {
  // const { data, error } = useSWR("/api/navigation", () => {
  //   console.log("load data ...");
  // });

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;
  return (
    <main className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
