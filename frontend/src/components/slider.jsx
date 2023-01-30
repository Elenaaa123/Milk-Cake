import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data.js';
import { mobile, table, desktop } from './responsive.js';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })};

  ${desktop({ display: 'none' })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideInd * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 100px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  z-index: 2;
`;

const Slider = () => {
  const [slideInd, setSlideInd] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideInd(slideInd > 0 ? slideInd - 1 : 2);
    } else {
      setSlideInd(slideInd < 2 ? slideInd + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <i className="fas fa-arrow-left"></i>
      </Arrow>
      <Wrapper slideInd={slideInd}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick('right')}>
        <i className="fas fa-arrow-right"></i>
      </Arrow>
    </Container>
  );
};

export default Slider;
