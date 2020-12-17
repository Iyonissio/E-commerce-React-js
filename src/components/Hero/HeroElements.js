import styled from 'styled-components';
import ImgBg from '../../images/pizza.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), 
    url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height:100%;
    width: 100vw;
    padding:0rem calc((100vw -1300px) /2);
`;

export const HeroItems = styled.div`
color: #fff;
flex-direction: column;
justify-content: center;
display: flex;
align-items: flex-star;
text-decoration: none;
cursor: pointer;
height:100vh
width: 60px;
padding:0 2rem;
text-transform: uppercase;
line-heigth: 1 ;
font-weight: bold;

@media screen and (max-width: 659px){
    width: 100%;
}
`;

export const HeroH1 = styled.h1`

`;

export const HeroP = styled.`

`;
