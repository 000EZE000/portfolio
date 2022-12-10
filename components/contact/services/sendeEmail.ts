
import axios from 'axios'
import { status } from '../models'
export default async function SendFormServer(form: status) {
    try {
        const { data } = await axios({
            method: 'post',
            url: 'api/sendeEmail',
            data: form
        })
        return data
    } catch (error) {
        return JSON.stringify(error)
    }
}