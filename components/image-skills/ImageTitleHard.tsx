import Image from "next/image";
import style from './style/style.module.css'
interface prop {
    pack: {
        image: string
        title: string
    }[]
}

export default function ImageTitleHardUl({ pack }: prop) {
    const myList = pack.map((elem, index) => (<div className={style.container} key={index}>
        <p className={style.title}>{elem.title}</p>
        <Image
            className={style.image}
            src={elem.image}
            alt={elem.title}
            width='100'
            height='100'
        />
    </div>))

    return myList

}

