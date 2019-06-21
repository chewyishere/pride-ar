import React from 'react';
import 'App.css';
import HomeHero from 'components/molecules/HomeHero';
import HomeText from 'components/molecules/HomeText';
import ButtonRefresh from 'components/atoms/ButtonRefresh';
import Number from 'components/atoms/Number';
import Header from 'components/molecules/Header';

function App() {
  return (
    <div className="home">
      <Header text="1969-2019" />
      <HomeHero />

      <HomeText
        title={
          <span>
            ONCE UPON
            <br /> A PROTEST
          </span>
        }
        text={[
          `Fifty years ago, the Stonewall Uprising sparked the modern day LGBTQ+ liberation movement — creating a blaze of activism and awareness. To shine a light on the milestones and sacrifices that brought us to this moment, we created a way for the community and its allies to bring the story of NYC Pride to life.`,
          `Please enjoy our immersive AR experience, narrated by Gerald Busby who witnessed the movement first hand, and rally with our cast of colorful Icons — each representing pivotal moments from the past. So show some love, join the march and let the world know, the only direction we’re moving is forward.`
        ]}
      />

      <HomeText
        title={
          <span>
            1969
            <br /> MAKING HERSTORY!
          </span>
        }
        text={[
          `During the early morning of June 28th1969 hundreds of brave souls stood up against police who were raiding the Stone Wall Inn. Regardless of who threw the first brick and who formed the kickline, the uprising is considered the catylst to the modern fight for LGBTQ+ rights.`
        ]}
      />
      <ButtonRefresh>Refresh</ButtonRefresh>
      <Number>{3}</Number>
    </div>
  );
}

export default App;
