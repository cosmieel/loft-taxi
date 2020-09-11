import React from 'react'

export const Signup = (props) => {
    return (
        <>
            <div className="">Регистрация</div>
            <div className="">Уже зарегистрированы? <button onClick={props.setFormLink}>Войти</button></div>
        </>
    )
}
