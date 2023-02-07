
import { ChangeEvent } from "react"
import { body } from "../controller/validateEmail"
import { status, Ierror } from "../models"
import style from './style/style.module.css'
interface Istatus {
    data: status
    setData: Function
}

interface IerrorV {
    data: Ierror
    setData: Function
}

interface Iprop {
    status: Istatus
    error: IerrorV
    name: 'body' | "feedBack"
}

export default function Body({ status, error, name }: Iprop) {
    const { data, setData } = status
    const { data: dataError, setData: setError } = error
    const handleOnChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [name]: target.value })
        !body(data[name]) ? setError({ ...dataError, [name]: 'fail' }) : setError({ ...dataError, [name]: '' })
    }

    return <div className={style.content_textarea}>
        <textarea
            className={style.input_textarea}
            value={data[name]}
            onChange={handleOnChange}
            placeholder={name === 'body' ? ' Contenido' : ' Feedback'}
        />
        {dataError[name] && <p className={style.error_textarea}>3 palabras como minimo</p>}
    </div>

}
