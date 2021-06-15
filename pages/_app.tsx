import GlobalStyle from "../styles/GlobalStyle";
import { DefaultSeo } from "next-seo";
import { FC, useEffect } from "react";
import { AppProps } from "next/app";
import { styledTheme } from "../styles/styled-theme";
import { ThemeProvider } from "styled-components";
import { ResetStyle } from "../styles/ResetStyle";
import SEO from "../next-seo.config";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <ResetStyle />
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
