import { ContainerAbout, ContainerAboutInfo, ContainerAboutInfoText } from "./style";
import Gym from '../../../assets/gym.png'

export default function About() {
    return (
        <ContainerAbout id="about">
            <h1>A academia mais <span> inovadora </span> do momento<span>.</span></h1>
            <ContainerAboutInfo>
                <img src={Gym} alt="gym" />
                <ContainerAboutInfoText>
                    <p>É novo na academia e não sabe como usar os aparelhos? Nós da A.I Gym temos a solução para você. Nós desenvolvemos um software que fica alocado em cada aparelho por nossa academia. Esse software serve para te auxiliar na excecução dos movimentos.</p>
                </ContainerAboutInfoText>
            </ContainerAboutInfo>
        </ContainerAbout>
    )
}