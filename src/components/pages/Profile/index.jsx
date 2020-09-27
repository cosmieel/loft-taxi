  
import React from 'react';
import { Profile } from './Profile';
import ProfileForm from '../../common/ProfileForm/ProfileForm';

export const ProfilePage = () => (
    <section>
        <Profile>
            <div data-testid="Profile">
                <ProfileForm />
            </div>
        </Profile>
    </section>
)