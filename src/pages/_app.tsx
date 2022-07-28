import "../../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL =
  "https://auth-test-api-techinnover.herokuapp.com/api/v1/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 5000,
          style: {
            color: "#ffffff",
            fontSize: "0.875rem",
            padding: "12px 18px",
            borderRadius: "5px",
            maxWidth: "initial",
            fontWeight: 600,
          },
          success: {
            style: {
              background: "#10b981",
            },
            icon: <img src="/icons/success-icon.svg" alt="Success Icon" />,
          },
          error: {
            style: {
              background: "#ef4444",
            },
            icon: <img src="/icons/error-icon.svg" alt="Error Icon" />,
          },
        }}
      />
    </>
  );
}

export default MyApp;
