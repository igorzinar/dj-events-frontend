import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

import styled from "styled-components";
import { useRouter } from "next/router";

interface IProp {
  title?: string;
  keywords?: string;
  description?: string;
  children?: any;
}

const defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

const Layout = (data: IProp = defaultProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <Container>{data.children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const Container = styled.div`
  margin: 60px auto;
  max-width: 960px;
  padding: 0 30px;
`;
