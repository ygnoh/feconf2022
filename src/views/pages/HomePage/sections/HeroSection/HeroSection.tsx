import { FC } from 'react';
import styled from '@emotion/styled';
import { DATE, LOCATION } from '~/resources/meta';
import { Earth } from '../../components/Earth';
import {
  useWindowScrollTop,
  useWindowHeight,
} from '../../hooks/useWindowScroll';
import { StarCanvas } from '../../components/StarCanvas';
import { mobile } from '~/views/pages/HomePage/styles/media-query';
import useTicketButton from '~/views/pages/HomePage/hooks/useTicketButton';

const HeroSection: FC = () => {
  const { text, props } = useTicketButton();
  const scrollTop = useWindowScrollTop();
  const height = useWindowHeight();

  return (
    <Container>
      <StarContainer>
        <StarCanvas />
      </StarContainer>
      <TitleArea
        style={{
          // transform: `translateY(${scrollTop / 2}px)`,
          opacity: height ? Math.max(0, height - scrollTop * 5) / height : 1,
        }}
      >
        <Title>올해도 가보자고!</Title>
        <Info>
          {DATE} {LOCATION}
        </Info>
        <Button {...props}>{text}</Button>
      </TitleArea>
      <Earth />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  height: 150vh;
  text-align: center;

  .three-canvas {
    position: absolute;
    z-index: 0;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;
const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  padding-bottom: 56.25%;
  box-sizing: content-box;
  pointer-events: none;
  //background: linear-gradient(#000000, #0a132a);

  .star-canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
const TitleArea = styled.div`
  position: relative;
  width: 100%;
  top: 266px;
  z-index: 1;
  ${mobile`
    top: 160px;
  `}
`;

const Title = styled.h2`
  color: white;
  font-size: 100px;
  font-weight: 900;
  letter-spacing: -1px;
  ${mobile`
    font-size: 48px;
  `}
`;

const Info = styled.h4`
  margin-top: 32px;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.3;
  color: #b5b5b7;
  ${mobile`
    margin-top: 24px;
    font-size: 18px;
  `}
`;

const Button = styled.a`
  margin-top: 80px;
  display: inline-flex;
  align-items: center;
  padding: 0 48px;
  height: 100px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  border: 3px solid white;
  border-radius: 100px;
  background-color: transparent;
`;

export default HeroSection;
