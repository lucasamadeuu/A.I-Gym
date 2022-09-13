import React from 'react'
import Header from "./components/header"
import Banner from "./components/banner"
import About from "./components/about"
import Plans from "./components/plans"
import PlansWhite from './components/plansWhite'
import Graphic from './components/graphic'
import Fotter from './components/fotter'
import { ReactComponent as Include } from "../assets/include.svg"
import { ContainerCard, MainContent, TitlePlan } from "../../style"
import { ReactComponent as ArtMarcial } from "../assets/art-marcial.svg"
import { ReactComponent as Whey } from "../assets/whey.svg"
import { ReactComponent as Lift } from "../assets/lift.svg"
import Cards from "./components/cards"

export default function LandingPage() {

    const cards = [
        { text: 'aulas de artes marciais', image: <ArtMarcial /> },
        { text: 'aparelhagem moderna', image: <Lift /> },
        { text: 'melhores nutricionistas', image: <Whey /> },
    ]

    const plans = [
        {
            title: 'BASIC', price: '100',
            topics: ['Acesso livre em todas unidades', 'Acesso à musculação '],
            sign: 'assinar',
            include: <Include />,
            white: true,
        },
        {
            title: 'STANDARD', price: '130',
            topics: ['Acesso livre em todas unidades', 'Acesso à musculação', 'Periodização de treino completa', 'Nutricionistas para dúvidas gerais'],
            sign: 'assinar',
            include: <Include />,
            white: false,
        },
        {
            title: 'PREMIUM', price: '200',
            topics: ['Acesso livre em todas unidades', 'Acesso à musculação', 'Periodização de treino completa', 'Nutricionistas para dúvidas gerais', 'Cadeira de Massagem', 'Acesso as aulas de artes marciais'],
            sign: 'assinar',
            include: <Include />,
            white: true,
        },
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
                <About />
                <TitlePlan id="plans">
                    <h1>Planos<span>.</span></h1>
                    <ContainerCard>
                        {plans.map((plan, index) => {
                            if (plan.white === true) {
                                return (
                                    <PlansWhite
                                        title={plan.title}
                                        price={plan.price}
                                        topics={plan.topics}
                                        assinar={plan.sign}
                                        icon={plan.include}
                                    />
                                )
                            } else {
                                return (
                                    <Plans
                                        title={plan.title}
                                        price={plan.price}
                                        topics={plan.topics}
                                        assinar={plan.sign}
                                        icon={plan.include}
                                    />
                                )
                            }
                        })}
                    </ContainerCard>
                </TitlePlan>
                <Graphic />
            </MainContent>
            <Fotter />
        </>
    )
}