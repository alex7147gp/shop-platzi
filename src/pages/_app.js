import Script from "next/script";
import Header from "components/Header";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PZ99Y7KNEL"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PZ99Y7KNEL');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
