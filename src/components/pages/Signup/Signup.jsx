import React from 'react'
import { FormSignup } from '../../common/form/FormSignup'

export const Signup = (props) => {
    return (
        <>
            <div className="">Регистрация</div>
            <div className="">Уже зарегистрированы? <button onClick={props.setFormLink}>Войти</button></div>
            <FormSignup setSubmit={props.setSubmit} />
        </>
    )
}
