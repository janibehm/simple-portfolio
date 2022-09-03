import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="web-kehitys" content="web-kehitys" />
      </Head>
      <h1 className={styles.title}>Home</h1>

      <div className="textContainer">
        <p className={styles.text}>
          Proin pulvinar gravida augue eget commodo. Etiam pulvinar vulputate
          neque, convallis feugiat urna efficitur vitae. Nunc placerat at justo
          eget laoreet. Donec quis pellentesque erat, vitae rutrum augue.
          Praesent dapibus, leo non consectetur sollicitudin, nulla lectus
          aliquam enim, eget lacinia ante diam eget enim. Vestibulum rhoncus
          nulla eu bibendum semper. Donec sem orci, dapibus in velit vitae,
          blandit laoreet lectus.
        </p>
      </div>
      <div>
        <div className={styles.container}>
          <Link href="/contact">
            <a className={styles.btn}>Contact</a>
          </Link>
        </div>
      </div>
    </>
  );
}
