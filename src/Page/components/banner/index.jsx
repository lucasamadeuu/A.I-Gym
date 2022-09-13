import BannerPhoto from '../../../assets/banner-gym.png'
import Button from '../../../components/button'
import { BannerContainer, BannerImage, BannerText, BannerTextContainer, BannerTitle } from './style'

export default function Banner() {
    return (
        <BannerContainer>
            <BannerTextContainer>
                <BannerTitle>
                    <h1>NO PAIN</h1>
                    <h2>NO GAIN</h2>
                </BannerTitle>
                <BannerText>
                    <p>Conheça a academia mais tecnológica de São Paulo.</p>
                </BannerText>
                <Button path='/'>ver planos</Button>
            </BannerTextContainer>
            <BannerImage>
                <img src={BannerPhoto} alt="banner" />
            </BannerImage>
        </BannerContainer>
    )
}