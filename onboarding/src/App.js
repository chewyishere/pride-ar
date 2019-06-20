import React from 'react';
import 'App.css';
import { ReactComponent as Logo } from 'assets/img/pride-march-logo-white.svg';
import Eyebrow from 'components/atoms/Eyebrow';
import H1 from 'components/atoms/H1';
import H2 from 'components/atoms/H2';
import Year from 'components/atoms/Year';
import P from 'components/atoms/P';
import Section from 'components/atoms/Section';
import Button from 'components/atoms/Button';
import ButtonRefresh from 'components/atoms/ButtonRefresh';
import Number from 'components/atoms/Number';

function App() {
  const colors = getComputedStyle(document.documentElement);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Eyebrow>Eyebrow</Eyebrow>
        <H1>H1</H1>
        <H2>H2</H2>
        <Year>1969-2019</Year>
        <Section>
          <P>
            Fifty years ago, the Stonewall Uprising sparked the modern day
            LGBTQ+ liberation movement — creating a blaze of activism and
            awareness. To shine a light on the milestones and sacrifices that
            brought us to this moment, we created a way for the community and
            its allies to bring the story of NYC Pride to life.
          </P>

          <P>
            Please enjoy our immersive AR experience, narrated by Gerald Busby
            who witnessed the movement first hand, and rally with our cast of
            colorful Icons — each representing pivotal moments from the past. So
            show some love, join the march and let the world know, the only
            direction we’re moving is forward.
          </P>

          <Button
            href="/test"
            bgColor={colors.getPropertyValue('--pale-red')}
            color={colors.getPropertyValue('--silver')}
          >
            Let's go
          </Button>

          <ButtonRefresh>Test</ButtonRefresh>

          <Number>3</Number>
        </Section>
      </header>
    </div>
  );
}

export default App;
