import Link from "next/link"
import Image from "next/image"
interface prop {
    image: string
    url: string
    alt: string
}

export default function ButtonLinkImage({ image, url, alt }: prop): JSX.Element {
    return (
        <a href={url} target='_black'>
            <Image
                src={`${image}`}
                alt={alt}
                width='40'
                height='40'
            />
        </a>
    )
}