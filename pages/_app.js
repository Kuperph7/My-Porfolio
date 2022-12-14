import "../styles/globals.scss";
import "../styles/components/UIhomeCard.scss";
import { Roboto } from "@next/font/google";
import "../styles/components/UImenu.scss";
import "../styles/components/UIworkCard.scss";
import "../styles/components/cursor.scss";

const roboto = Roboto({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
