import type { ReactElement } from "react";
import styles from "@/styles/nextedLayout.module.css";

export default function NestedLayout({ children }: { children: ReactElement }) {
  return <main className={styles.container}>{children}</main>;
}
