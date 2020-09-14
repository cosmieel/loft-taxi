import React from 'react'

export const FormSignup = (props) => {
    return (
      <form>
        <label htmlFor="email">Адрес электронной почты</label>
        <input id="email" type="email" name="email" placeholder="email" />

        <label htmlFor="name">Имя</label>
        <input id="name" type="text" name="name" placeholder="Имя" />

        <label htmlFor="surname">Фамилия</label>
        <input id="surname" type="text" name="surname" placeholder="Фамилия" />

        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" name="password" placeholder="Пароль" />

        <button type="submit" onClick={props.setSubmit}>Войти</button>
      </form>
    );
  };