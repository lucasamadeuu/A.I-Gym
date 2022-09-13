import Header from "./components/header"
import Banner from "./components/banner"
import { ContainerCard, MainContent } from "../../style"
import ArtMarcial from "../assets/art-marcial.svg"
import Whey from "../assets/whey.svg"
import Lift from "../assets/lift.svg"
import Cards from "./components/cards"

export default function LandingPage() {

    const cards = [
        { text: 'aulas de artes marciais', image: ArtMarcial },
        { text: 'aparelhagem moderna', image: Lift },
        { text: 'melhores nutricionistas', image: Whey },
    ]

    return (
        <>
            <Header />
            <MainContent>
                <Banner />
                <ContainerCard>
                    {cards.map((card, index) => {
                        return (
                            <Cards text={card.text} image={card.image} />
                        )
                    })}
                </ContainerCard>
            </MainContent>
        </>
    )
}