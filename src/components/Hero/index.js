import React, {useState} from 'react';
import { FaFire, FaHamburger } from 'react-icons/fa';
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
                    <HeroH1>Os Melhores Pratos <FaHamburger rel="noopener noreferrer"/></HeroH1>
                    <HeroP> Restaurante Hut <FaFire rel="noopener noreferrer"/> </HeroP>
                    <HeroBtn>Fazer Pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default  Hero;
