import Layout from "@/components/Layout";
import { StyledH1, StyledH3 } from "@/styles/Styled";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import styled from "styled-components";

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
};

const Home = ({ events }) => {
  console.log(events);
  return (
    <Layout>
      <StyledH1>Upcoming Events</StyledH1>
      {events?.lenght === 0 && <StyledH3>No events to show</StyledH3>}
      <EventsList>
        {events?.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </EventsList>
    </Layout>
  );
};

export default Home;

const EventsList = styled.div`
  flex: 1;
`;
