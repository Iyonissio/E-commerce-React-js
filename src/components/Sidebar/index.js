import React from 'react';
import { SidebarContainer
    , Icon 
    , CloseIcon 
    , SidebarMenu 
    , SidebarLink
    , SidebarRoute 
    , SidebarWrap } 
       from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Menu Completo</SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to="/">Pedir Agora</SidebarRoute>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;