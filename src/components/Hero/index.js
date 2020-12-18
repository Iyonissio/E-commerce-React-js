import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroItems, HeroH1,HeroContent,HeroP, HeroBtn } from './HeroElements';

const  Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>As Melhores Pizzas </HeroH1>
                    <HeroP>Ficam Prontas em Minutos</HeroP>
                    <HeroBtn>Efectuar Pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default  Hero;
