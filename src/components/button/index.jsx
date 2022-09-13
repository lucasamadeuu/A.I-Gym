import { ButtonCustom, ButtonCustomWhite } from "./style";

export default function Button({ children, path }) {
    return (
        <ButtonCustom href={path}> { children } </ButtonCustom>
    )
}

export function ButtonWhite({ children, path }) {
    return (
        <ButtonCustomWhite href={path}> { children } </ButtonCustomWhite>
    )
}