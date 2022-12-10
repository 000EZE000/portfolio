import Image from "next/image";
interface prop {
    pack: {
        image: string
        title: string
    }[]
}

export default function ImageTitleHardUl({ pack }: prop): JSX.Element {
    return <ul>
        {pack.map((elem, index) => <li key={index}>
            <p>{elem.title}</p>
            <Image
                src={`${elem.image}`}
                alt={elem.title}
                width='100'
                height='100'
            />
        </li>)}
    </ul>
}

