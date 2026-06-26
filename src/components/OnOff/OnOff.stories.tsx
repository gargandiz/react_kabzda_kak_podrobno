import { action } from '@storybook/addon-actions';
import React, {useState} from 'react';
import {OnOff} from './ControlOnOff';

export default {
    title: 'OnOff',
    component: OnOff
};

const callBack = action('on or off clicked');

export const OnMode =() => <OnOff status={true} onClick={callBack}/>
export const OffMode =() => <OnOff status={false} onClick={callBack}/>

export const ChangeMode = ()=>  {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff status ={value} onClick={ setValue } />
}