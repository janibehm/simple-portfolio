import Head from "next/head";
import styles from "../styles/About.module.css";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>Technologies</title>
        <meta name="Technologies" content="Technologies" />
      </Head>
      <div>
        <h1>Technologies</h1>
      </div>
      <div flex-container>
        <h3>Wordpress</h3>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit
          mauris quis odio tempor, a cursus eros dapibus. Nam nisl arcu,
          venenatis id felis et, eleifend pharetra velit. Maecenas aliquet
          viverra sollicitudin. Sed at pretium justo. Fusce velit sem, faucibus
          nec nisl ut, ullamcorper imperdiet lorem.
        </p>
        <div>
          <Image
            src="/wordpress_logo.jpg"
            alt="wp_logo"
            width={470}
            height={270}
          />
        </div>
        <div>
          <h3>React and NextJs</h3>
          <p className={styles.about}>
            {" "}
            Proin pulvinar gravida augue eget commodo. Etiam pulvinar vulputate
            neque, convallis feugiat urna efficitur vitae. Nunc placerat at
            justo eget laoreet. Donec quis pellentesque erat, vitae rutrum
            augue. Praesent dapibus, leo non consectetur sollicitudin, nulla
            lectus aliquam enim, eget lacinia ante diam eget enim. Vestibulum
            rhoncus nulla eu bibendum semper. Donec sem orci, dapibus in velit
            vitae, blandit laoreet lectus.
          </p>
          <div className="logo-container">
            <Image
              src="/react_logo.png"
              alt="reactjs_logo"
              width={240}
              height={240}
            />
            <div className="next-js-logo">
              <Image
                src="/next-js_logo.png"
                alt="nextjs_logo"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default about;
