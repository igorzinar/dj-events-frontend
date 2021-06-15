import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Copyright>Copyright &copy; JD Igor 2021 </Copyright>
      <Copyright>
        <Link href="/about"> About This Project</Link>
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 40px;
  text-align: center;
  > p {
    margin: 5px 10px;
  }
`;

const Copyright = styled.p``;
