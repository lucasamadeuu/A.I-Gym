import { Item } from "./style";

export default function MobileItem({ title, path, close }) {
    return (
            <Item href={path} onClick={() => close(false)}> {title} </Item>
    )
}