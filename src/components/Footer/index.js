import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaVoicemail, FaWeebly, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <FooterConteiner>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
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
                            <SocialIconLink href="iyonissio01@gmail.com" target="_blank" arial-label="Voicemail">
                                <FaVoicemail rel="noopener noreferrer"/>
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
