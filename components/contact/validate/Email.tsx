
import React, { ChangeEvent } from "react"
import { email } from "../controller/validate"
import { status, Ierror } from "../models"
import style from './style/style.module.css'
interface Istatus {
    data: status
    setData: Function
}

interface IerrorV {
    dataError: Ierror
    setError: Function
}

interface Iprop {
    statusI: Istatus
    error: IerrorV
}

export default function Email({ statusI, error }: Iprop) {
    const { data, setData } = statusI
    const { dataError, setError } = error
    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, email: target.value })
        console.log(email(data.email));

        !email(data.email) ? setError({ ...dataError, email: 'fail' }) : setError({ ...dataError, email: '' })
    }
    const extraValidate = () => {
        !email(data.email) ? setError({ ...dataError, email: 'fail' }) : setError({ ...dataError, email: '' })
    }

    return <div className={style.content_input_email}>
        <input
            className={style.input_email}
            onBlur={() => { extraValidate() }}
            type="text" value={data.email}
            onChange={handleOnChange}
            placeholder="&nbsp;&nbsp;Email"
        />
        {dataError.email && <p className={style.error_email}>Formato de Email incorrecto</p>}
    </div>

}
