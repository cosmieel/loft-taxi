  
import React from 'react';
import Header from '../../common/Header/Header';
import { Profile } from './Profile';
import ProfileForm from '../../common/ProfileForm/ProfileForm';

export const ProfilePage = () => (
    <section>
        <Header />
        <Profile>
            <div data-testid="Profile">
                <ProfileForm />
            </div>
        </Profile>
    </section>
)