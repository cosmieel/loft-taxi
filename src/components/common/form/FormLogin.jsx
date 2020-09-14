import React from 'react'

export const FormLogin = ({ setSubmit }) => {
    return (
      <form>
        <label htmlFor="email">Имя пользователя*</label>
        <input id="email" type="email" name="email" placeholder="Имя пользователя" />

        <label htmlFor="password">Пароль*</label>
        <input id="password" type="password" name="password" placeholder="Пароль" />

        <button type="submit" onClick={setSubmit}>Войти</button>
      </form>
    );
  };