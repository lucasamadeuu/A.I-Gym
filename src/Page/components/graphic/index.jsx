import { FrequencyContainer, GraphicContainer } from "./style";
import Frequency from '../../../assets/graphic.svg'

export default function Graphic() {
    return (
        <GraphicContainer>
            <h1>Gráfico de frequência<span>.</span></h1>
            <FrequencyContainer>
                <img src={Frequency} alt="" />
            </FrequencyContainer>
        </GraphicContainer>
    )
}