// pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: justify;
  height: 100vh;  // this makes sure the content takes up the full height of the page
`;

const PortraitImage = styled.img`
  border-radius: 50%; // This makes the image round
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

const AboutText = styled.div`
  max-width: 800px;
`;

const AboutPage = () => {
  const randomImage = "https://source.unsplash.com/random?portrait";

  return (
    <AboutContainer>
      <PortraitImage src={randomImage} alt="Portrait of Andy Chen" />
      <AboutText>
        <h1>Andy Chen</h1>
        <p>
          Stedify was created in 2021 to help struggling STEM students find a better approach to solving challenging problems. This new method
          of STEM education prepares students for college, and further down the line in their careers. Instead of taking the textbook 
          approach to STEM, at Stedify we prioritize the method students take to solving challenging problems, rather than making them
          blindlessly memorizing formulas without understanding how they are applied. In 2023, we transformed Stedify into a global non-profit
          organization to partner with schools in areas where access to basic education is limited.
        </p>
        <p>
          Outside of academics and quadball, I have a broad range of interests. I love staying 
          active and working out, but I also enjoy downtime playing video games and watching TV. 
          I've also found joy in cooking and experimenting with different recipes. If you'd 
          like to learn more about my projects or experience, feel free to explore this site.
        </p>
      </AboutText>
    </AboutContainer>
  );
};

export default AboutPage;
