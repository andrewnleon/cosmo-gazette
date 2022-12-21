import { ParallaxProvider } from "react-scroll-parallax";
// import { SWRConfig } from "swr";
import ToolBar from "../components/Toolbar";
import Footer from "../components/Footer";
import "../styles/app.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ParallaxProvider>
        <ToolBar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
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
