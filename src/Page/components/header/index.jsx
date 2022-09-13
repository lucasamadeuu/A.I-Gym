import { DesktopItem, HeaderContainer, MobileContainer, MobileItem } from "./styles";
import Hamburger from 'hamburger-react'
import HeaderItem from "../desktopItem";
import HeaderItemMobile from '../mobileItem'
import { useState } from "react";

export default function navBar() {
    const [isOpen, setOpen] = useState(false)

    const items = [
        { title: 'Home', path: '#home' },
        { title: 'Sobre', path: '#about' },
        { title: 'Contato', path: '#contact' },
    ]

    return (
        <HeaderContainer id="home">
            <div>
                <p> <span>A.I</span> Gym </p>
                <nav>
                    <DesktopItem>
                        {items.map((item, index) => {
                            return (
                                <HeaderItem key={index} title={item.title} path={item.path} />
                            )
                        })}
                    </DesktopItem>
                </nav>

                <MobileContainer>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </MobileContainer>
            </div>

            {isOpen ? (
                <MobileItem>
                    {items.map((item, index) => {
                        return (
                            <HeaderItemMobile key={index} title={item.title} path={item.path} close={setOpen}/>
                        )
                    })}
                </MobileItem>
            ) : ''}

        </HeaderContainer>
    )
}