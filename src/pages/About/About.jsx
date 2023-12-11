import React from 'react';
import { StyledText, LowerStyledTextB, StyledTextSmallB, MainContainer, ColumnText, PositionedPrettyText, AbstandContainer, IconStripe, HeroContainer, HeroContent, HeroImage, HeroText, HeroButton, ThreeColumnContainer, Column, PositionedSmallImage, LargeImage, AboutContainer, ImageContainer, TextContainer, LowerStyledText } from './AboutStyles';

import { useNavigate } from 'react-router-dom';
import heroImage from '../../images/hero.jpg';
import smallImageOne from '../../images/0smallImg.jpg';
import smallImageTwo from '../../images/1smallImg.jpg';
import largeImage from '../../images/largeImg.jpg';
import finImage from '../../images/fin.jpg';
import PyIcon from '../../images/python.png';
import JavIcon from '../../images/java.png';
import ThreeIcon from '../../images/three.png';
import BlendIcon from '../../images/blender.png';
import ReactIcon from '../../images/react.png';
import TorchIcon from '../../images/pytorch.png';

function AboutPage() {

  const navigate = useNavigate(); // Hook for navigation

  const handleGitHubRedirect = () => {
    window.open('https://github.com/Shaychiuu', '_blank');
  };

  return (
    <MainContainer>

      <HeroContainer>
        <HeroImage src={heroImage} alt="Hero Image" />
        <HeroContent>
          <HeroText>
            <StyledText>Let's dream up the future</StyledText>
            <LowerStyledText>Discover more about me and what I do.</LowerStyledText>
          </HeroText>
          <HeroButton onClick={handleGitHubRedirect}>Take me to GitHub</HeroButton>
        </HeroContent>
      </HeroContainer>

      <ThreeColumnContainer>
        <PositionedSmallImage src={smallImageOne} alt="Small Image 1"top="67%" right="69%"/>
       
        <Column>
        
        </Column>

        <Column>
          <LargeImage src={largeImage} alt="Large Image" />
        </Column>
        <PositionedPrettyText bottom="-20%" left="15%"> Hi, I'm Isabella Petrache! </PositionedPrettyText>

        <PositionedSmallImage src={smallImageTwo} alt="Small Image 2"top="90%" right="16%"/>
        <Column></Column>
      </ThreeColumnContainer>

      <IconStripe>
        <img src={PyIcon} alt="Icon description" />
        <img src={JavIcon} alt="Icon description" />
        <img src={ThreeIcon} alt="Icon description" />
        <img src={BlendIcon} alt="Icon description" />
        <img src={ReactIcon} alt="Icon description" />
        <img src={TorchIcon} alt="Icon description" />

      </IconStripe>

      <AboutContainer>
        <ImageContainer>
          <img src={finImage} alt="Descriptive Alt Text" style={{ width: '100%', height: 'auto' }} />
        </ImageContainer>
        <TextContainer>
          <AbstandContainer><StyledTextSmallB>Data Scientist tinkering with Artificial Intelligence, Artist and Curious Learner. </StyledTextSmallB></AbstandContainer>
          <LowerStyledTextB>
            In an effort to broaden my horizon in the wide ranged discipline of Computer Science, I now pursue my Master studies in Business IT with special focus on Cybersecurity after obtaining my Bachelor's in AI.
            I enjoy combining the technical world with my passion for art, which now led me to the exploration of 3d websites. You are currently witnessing my first attempts!
          </LowerStyledTextB>
        </TextContainer>
      </AboutContainer>


    </MainContainer>
  );
}

export default AboutPage;
