import Link from "next/link"
import style from "./style/style.module.css"
interface prop {
    link: string
    title: string
    target: string
}
export default function LinkComp({ link, title, target }: prop): JSX.Element {

    return  <Link className={style.link} href={link} target={target}><span className={style.span_link}>{title}</span></Link>

}