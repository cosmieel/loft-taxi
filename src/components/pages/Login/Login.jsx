import React from 'react'
import { FormLogin } from '../../common/form/FormLogin'

export const Login = ({ setFormLink, setSubmit }) => {
    return (
        <>
            <div className="">Войти</div>
            <div className="">Новый пользователь? <button onClick={setFormLink}>Зарегистрируйтесь</button></div>
            <FormLogin setSubmit={setSubmit} />
        </>
    )
}
