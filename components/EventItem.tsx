import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { StyledH3 } from "@/styles/Styled";

const EventItem = ({ event }) => {
  return (
    <Wrapper>
      <ImgContainer>
        <Image
          src={event.image ? event.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </ImgContainer>
      <InfoBlock>
        <TextInfo>
          {event.date} at {event.time}
        </TextInfo>
        <StyledH3>{event.name}</StyledH3>
      </InfoBlock>
    </Wrapper>
  );
};

export default EventItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 13px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    &InfoBlock {
      margin-bottom: 20px;
    }
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  margin: 10px;
`;
const InfoBlock = styled.div``;
const TextInfo = styled.span`
  flex: 2;
`;
