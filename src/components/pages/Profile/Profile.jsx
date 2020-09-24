import React from 'react'
import { Header } from '../../common/Header/Header'

export const Profile = (props) => {
    return (
        <section>
            <Header />
            <div data-testid='Profile'>Профиль</div>
        </section>
    )
}