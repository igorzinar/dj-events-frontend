import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Neuton";
      src: local("Neuton"),
      url("https://fonts.gstatic.com/s/neuton/v13/UMBTrPtMoH62xUZCz4g6.woff2") format("woff2");
    }
  
    @font-face {
      font-family: "Nunito Sans";
      src: local("Nunito Sans"),
      url("https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I9s.woff2") format("woff2");
      font-display: swap;
    }
  
  
    @font-face {
      font-family: "Nunito Sans";
      src: local("Nunito Sans"),
      url("https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc9iB85tU1E.woff2") format("woff2");
      font-weight: 600;
      font-display: swap;
    }
   
    @font-face {
      font-family: 'Nunito Sans';
      font-style: italic;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4GwZuY1MIUg.woff2) format('woff2');
    }
  
    @font-face {
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: bold;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8GBs5tU1E.woff2) format('woff2');
    }
  
    @font-face {
      font-family: 'Nunito Sans';
      font-style: italic;
      font-weight: bold;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G2JvY1MIUg.woff2) format('woff2');
    }
    
  
    @font-face {
      font-family: "Nunito Sans";
      src: local("Nunito Sans"),
      url("https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1E.woff2") format("woff2");
      font-weight: 800;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Nunito Sans';
      font-style: italic;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe01MImSLYBIv1o4X1M8cce4G35sY1MIUg.woff2) format('woff2');
    }
    
    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }
  
    body, button, h1, h2, h3, h4, h5, h6, a, span, p, div, select, option {
      font-family: 'Nunito Sans', -apple-system, 'Neuton', sans-serif;
      line-height: normal;
    }
  
    p {
      margin: 0;
    }
    
    a:focus {
      outline: none !important;
    }

  
  



`;
export default GlobalStyle;
