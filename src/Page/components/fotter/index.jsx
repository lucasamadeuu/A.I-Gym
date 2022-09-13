import { FotterContainer, FotterContainerAuthor, FotterContainerAuthorName, FotterContainerContent, FotterContainerLogo, FotterContainerMedias, FotterContainerPadding } from "./style";
import Figma from '../../../assets/figma.svg'
import Github from '../../../assets/github.svg'
import Linkedin from '../../../assets/linkedin.svg'

export default function Fotter() {

    const links = [
        { title: 'Home', path: '#home' },
        { title: 'Sobre', path: '#about' },
        { title: 'Planos', path: '#plans' },
    ]

    const media = [
        { image: Figma, path: 'https://www.figma.com/file/hMScgiq0kmwbDr4zG7jnfz/A.I-GYM?node-id=0%3A1' },
        { image: Github, path: 'https://github.com/lucasamadeuu' },
        { image: Linkedin, path: 'https://www.linkedin.com/in/lucas-amadeuu/' },
    ]

    return (
        <FotterContainer id="contact">
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
                <FotterContainerMedias>
                    {media.map((social, index) => {
                        return (
                            <div>
                                <a href={social.path}><img src={social.image} alt="" /></a>
                            </div>
                        )
                    })}
                </FotterContainerMedias>
                <FotterContainerAuthorName>
                    <p>by <span>Lucas Amadeu</span></p>
                </FotterContainerAuthorName>
            </FotterContainerAuthor>
        </FotterContainer>
    )
}