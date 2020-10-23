import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Awesome Title Goes Here</CoverH1>
        <CoverP>Sign up for a new account today and consume awesome features from our website.</CoverP>
        <CoverBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
