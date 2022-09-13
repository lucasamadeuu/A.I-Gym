import { ButtonCustom } from "./style";

export default function Button({ children, path }) {
    return (
        <ButtonCustom href={path}> { children } </ButtonCustom>
    )
}