import { FC } from 'react';
import styled from '@emotion/styled';
import { mobile } from '~/views/pages/HomePage/styles/media-query';

const NoticeSection: FC = () => {
  return (
    <Container>
      <Title>Notice</Title>
      <ButtonWrap>
        <Button href="#">Facebook</Button>
        <Button href="#">YouTube</Button>
        <Button href="#">Email</Button>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.section`
  padding: 120px 0 160px 0;
  text-align: center;
  ${mobile`
    padding: 60px 0 80px 0;
  `}
`;

const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.4;
  color: white;
  ${mobile`
    font-size: 28px;
  `}
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  ${mobile`
    margin-top: 48px;
    flex-direction: column;
  `}
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 116px;
  color: #d7d7d7;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #20232c;
  text-align: center;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
  ${mobile`
    margin: 0 20px;
    padding: auto;
    &:not(:first-of-type) {
      margin-left: 20px;
      margin-top: 24px;
    }
  `}
`;

export default NoticeSection;
