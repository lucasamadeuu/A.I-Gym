import { StructureCard } from "./style";

export default function Cards({ text, image }) {
    return (
        <StructureCard>
            <img src={image} alt="" />
            <p> {text} </p>
        </StructureCard>
    )
}