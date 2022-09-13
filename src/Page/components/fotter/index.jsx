import { FotterContainer, FotterContainerAuthor, FotterContainerAuthorName, FotterContainerContent, FotterContainerLogo, FotterContainerMedias, FotterContainerPadding } from "./style";
import Figma from '../../../assets/figma.svg'
import Github from '../../../assets/github.svg'
import Linkedin from '../../../assets/linkedin.svg'

export default function Fotter() {

    const links = [
        { title: 'Home', path: '/' },
        { title: 'Sobre', path: '/' },
        { title: 'Planos', path: '/' },
    ]

    const media = [
        { image: Figma, path: '/' },
        { image: Github, path: '/' },
        { image: Linkedin, path: '/' },
    ]

    return (
        <FotterContainer>
            <FotterContainerPadding>
                <FotterContainerLogo>
                    <p> <span>A.I</span> Gym </p>
                </FotterContainerLogo>
                <FotterContainerContent>
                    <h5>Informações</h5>
                    {links.map((link, index) => {
                        return (
                            <a href={link.path}> {link.title} </a>
                        )
                    })}
                </FotterContainerContent>
            </FotterContainerPadding>
            <FotterContainerAuthor>
                <FotterContainerAuthorName>
                    <p>by <span>Lucas Amadeu</span></p>
                </FotterContainerAuthorName>
                <FotterContainerMedias>
                    {media.map((social, index) => {
                        return (
                            <div>
                                <a href={social.path}><img src={social.image} alt="" /></a>
                            </div>
                        )
                    })}
                </FotterContainerMedias>
            </FotterContainerAuthor>
        </FotterContainer>
    )
}