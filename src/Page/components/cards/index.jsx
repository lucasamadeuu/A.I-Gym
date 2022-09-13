import { StructureCard } from "./style";

export default function Cards({ text, image }) {
    return (
        <StructureCard>
            {image}
            <p> {text} </p>
        </StructureCard>
    )
}