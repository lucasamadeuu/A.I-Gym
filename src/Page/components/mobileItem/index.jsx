import { Item } from "./style";

export default function MobileItem({ title, path }) {
    return (
            <Item href={path}> {title} </Item>
    )
}