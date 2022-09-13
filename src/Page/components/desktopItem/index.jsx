import { Item } from "./style";

export default function DesktopItem({ title, path }) {
    return (
            <Item href={path}> {title} </Item>
    )
}