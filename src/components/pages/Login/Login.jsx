import React from 'react'

export const Login = (props) => {
    return (
        <>
            <div className="">Войти</div>
            <div className="">Новый пользователь? <button onClick={props.setFormLink}>Зарегистрируйтесь</button></div>
        </>
    )
}
