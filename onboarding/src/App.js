import React from 'react';
import 'App.css';
import HomeHero from 'components/molecules/HomeHero';
import H2 from 'components/atoms/H2';
import P from 'components/atoms/P';
import Section from 'components/atoms/Section';
import ButtonRefresh from 'components/atoms/ButtonRefresh';
import Number from 'components/atoms/Number';
import Header from 'components/molecules/Header';

function App() {
  return (
    <div className="home">
      <Header text="1969-2019" />
      <HomeHero />
      <Section>
        <H2>ONCE UPON A PROTEST</H2>
        <P>
          Fifty years ago, the Stonewall Uprising sparked the modern day LGBTQ+
          liberation movement — creating a blaze of activism and awareness. To
          shine a light on the milestones and sacrifices that brought us to this
          moment, we created a way for the community and its allies to bring the
          story of NYC Pride to life.
        </P>

        <P>
          Please enjoy our immersive AR experience, narrated by Gerald Busby who
          witnessed the movement first hand, and rally with our cast of colorful
          Icons — each representing pivotal moments from the past. So show some
          love, join the march and let the world know, the only direction we’re
          moving is forward.
        </P>

        <ButtonRefresh>Refresh</ButtonRefresh>

        <Number>{3}</Number>
      </Section>
    </div>
  );
}

export default App;
