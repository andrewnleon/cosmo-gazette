import { ParallaxProvider } from "react-scroll-parallax";
import { IKContext } from "imagekitio-react";
import { SWRConfig } from "swr";
// import { ReactElement, ReactNode } from "react";
// import App, { AppProps } from "next/app";
// import { NextPage } from "next/types";
// import { createContext } from "react";
import ToolBar from "../components/Toolbar";
import Footer from "../components/Footer";
import "../styles/app.css";
// import Head from "next/head";
// import { getStrapiMedia } from "../lib/media";
// import { fetchAPI } from "../lib/api";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <IKContext
          publicKey={process.env.NEXT_IMAGE_API_KEY}
          urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_URI}
        >
          <ParallaxProvider>
            <ToolBar />
            <Component {...pageProps} />
            <Footer />
          </ParallaxProvider>
        </IKContext>
      </SWRConfig>
    </>
  );
};
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   const global = await fetchAPI("/home");
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global } };
// };
export default MyApp;
