import { ContainerButton, ContainerPlan, ContainerPrice, ContainerTopics } from "./style";
import Include from '../../../assets/include.svg'
import { ButtonCustomWhite } from "../../../components/button/style";

export default function Plan({ title, price, topics, assinar, icon }) {
    return (
        <ContainerPlan>
            <h1> {title} </h1>
            <ContainerPrice>
                <div>
                    <h5>R$</h5>
                </div>
                <p> {price} </p>
                <ul>
                    <h5>/mês</h5>
                </ul>
            </ContainerPrice>
            <ContainerTopics>
                {topics.map((topic, index) => {
                    return (
                        <div>
                            {icon}
                            <p> {topic} </p>
                        </div>
                    )
                })}
            </ContainerTopics>
            <ContainerButton>
                <ButtonCustomWhite> {assinar} </ButtonCustomWhite>
            </ContainerButton>
        </ContainerPlan>
    )
}