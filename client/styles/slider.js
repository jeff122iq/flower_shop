import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';

export const PageCarousel = styled(Carousel)`
  width: 100%;
`

export const SliderItem = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-image: url('${props => props?.url}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`