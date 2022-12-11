import Link from "next/link"
import { LinkStyle } from "./style"
interface prop {
    link: string
    title: string
    target: string
}
export default function LinkComp({ link, title, target }: prop): JSX.Element {
    return <LinkStyle href={link} target={target}>{title}</LinkStyle>
}