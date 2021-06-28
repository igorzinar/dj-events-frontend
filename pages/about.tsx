import Link from "next/link";
import Layout from "@/components/Layout";
import { StyledH1 } from "@/styles/Styled";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <Layout title="About DJ events">
      <StyledH1> About</StyledH1>
      <Paragraph>This is an app to find the latest DJ and other musical events</Paragraph>
      <Paragraph>Version: 1.0.0</Paragraph>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default AboutPage;

const Paragraph = styled.p``;
