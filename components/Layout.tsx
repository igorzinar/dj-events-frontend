import React from "react";
import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";

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
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>
      <Header />
      <Container>{data.children}</Container>
    </div>
  );
};

export default Layout;

const Container = styled.div`
  margin: 60px auto;
  max-width: 960px;
  padding: 0 30px;
`;
