import Link from "next/link"
import Image from "next/image"
import style from './style/style.module.css'
interface prop {
    image: string
    url: string
    alt: string
}

export default function ButtonLinkImage({ image, url, alt }: prop): JSX.Element {
    return <Link href={url} target='_black'>
        <Image className={style.image_botton} src={image} alt={alt} width='50' height='50' />
    </Link>
}