import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWeebly, FaYoutube } from 'react-icons/fa';
import { FooterConteiner , FooterWrap ,SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {
    return (
        <FooterConteiner>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Menu Hut</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" arial-label="Facebook">
                                <FaFacebook rel="noopener noreferrer"/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/iyonissio_daniel" target="_blank" arial-label="Instagram">
                                <FaInstagram rel="noopener noreferrer"/>
                            </SocialIconLink>
                            <SocialIconLink href="https://iyonissio.github.io/BeautifulCorpPage-Bootstrap4/" target="_blank" arial-label="Weebly">
                                <FaWeebly rel="noopener noreferrer"/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter rel="noopener noreferrer"/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                                <FaYoutube rel="noopener noreferrer"/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConteiner>
    )
}

export default Footer;
