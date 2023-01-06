
import Image from "next/image"
import style from "./style/style.module.css"

interface prop {
    openModal: Function
    image: string
    switchModal: boolean
}

export default function Modal({ openModal, image, switchModal }: prop): JSX.Element {
    return <div>{switchModal && <div className={style.container_modal}><div className={style.modal}>
        <div className={style.container_button_modal}><button className={style.button_modal} onClick={() => openModal()}>❌</button></div>
        <Image
            className={style.image_modal}
            src={image}
            width='900'
            height='400'
            alt='certificate'
        />
    </div>
    </div>}
    </div>
}