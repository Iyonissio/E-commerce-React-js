import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroItems, HeroH1,HeroContent,HeroP, HeroBtn } from './HeroElements';

const  Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>As Melhores Pizzas Sempre</HeroH1>
                    <HeroP>Pronto em Minutos</HeroP>
                    <HeroBtn>Efectuar Pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default  Hero;
