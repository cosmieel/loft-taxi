import React from 'react'
import { FormLogin } from '../../common/form/FormLogin'

export const Login = (props) => {
    return (
        <>
            <div className="">Войти</div>
            <div className="">Новый пользователь? <button onClick={props.setFormLink}>Зарегистрируйтесь</button></div>
            <FormLogin setSubmit={props.setSubmit} />
        </>
    )
}
