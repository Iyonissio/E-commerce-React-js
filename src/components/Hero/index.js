import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroItems, HeroH1,HeroContent,HeroP, HeroBtn } from './HeroElements';

const  Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <Sidebar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>As Melhores Pizzas </HeroH1>
                    <HeroP>Pronto em Minutos</HeroP>
                    <HeroBtn>Efectuar Pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default  Hero;
