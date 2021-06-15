import Layout from "../components/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <Wrapper>
        <Title>
          <FaExclamationTriangle />
          404
        </Title>
        <Text>Sorry, there is nothing here</Text>
        <Link href="/">Go Back Home</Link>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  text-align: center;
  margin: 100px 0 200px;
  > h1 {
    font-size: 50px;
  }
`;

const Title = styled.h1``;

const Text = styled.h4``;
