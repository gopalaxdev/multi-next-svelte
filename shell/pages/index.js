import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("URL NAME: ", process.env.NEXT_PUBLIC_URL_NAME);
  return <div className={styles.container}>Next Page</div>;
}
