import React from 'react';
import styled from 'styled-components';
import './ListItem.css';

const data = [
  "0x Protocol",
  "Polygon Technology",
  "Alchemy",
  "Family-Connect Kit",
  "AWS-Amazon",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 2;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;



const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <li className="list-item" data-text={item} key={item}>{item}</li>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default AboutUs;