import styled from 'styled-components';
import destaque from '../../images/pizza3.jpg';

export const FeaturesConteiner = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), 
    url(${destaque});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);   
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);   
    }
`;

export const FeaturesButton = styled.button`
    font-size: 1.4rem;
    border: none;
    background: #ffc501;
    color: #fff;
    transition: 0.2s ease-out;
    padding: 0.6rem 3rem;

    &:hover{
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;
