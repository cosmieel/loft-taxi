import React from 'react'
import { FormSignup } from '../../common/form/FormSignup'

export const Signup = ({ setFormLink, setSubmit }) => {
    return (
        <>
            <div className="">Регистрация</div>
            <div className="">Уже зарегистрированы? <button onClick={setFormLink}>Войти</button></div>
            <FormSignup setSubmit={setSubmit} />
        </>
    )
}
