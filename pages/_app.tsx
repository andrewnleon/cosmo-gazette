import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import { SWRConfig } from "swr";
import ToolBar from "../components/Toolbar";
import "../styles/app.css";

const CosmoApp = ({ Component, pageProps }) => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <ParallaxProvider>
          <ToolBar />
          <Component {...pageProps} />
        </ParallaxProvider>
      </SWRConfig>
    </>
  );
};
export default CosmoApp;
