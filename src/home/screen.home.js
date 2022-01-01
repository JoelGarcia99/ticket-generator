import React from 'react';
import { HeaderComponent } from '../components/component.header';
import { FormComponent } from './component.form';

const HomeScreen = () => {

    return (
        <div className='home'>
            <HeaderComponent />
            <FormComponent />
        </div>
    );

};

export {HomeScreen};