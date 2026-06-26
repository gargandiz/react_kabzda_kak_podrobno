import { action } from '@storybook/addon-actions';
import React from 'react';
import {UncontrolOnOff} from './UncontrolOnOff';

export default {
    title: 'UncontrolOnOff',
    component: UncontrolOnOff
};

const callBack = action('on or off clicked');

export const OnMode =() => <UncontrolOnOff defaultOn={true} onChange={callBack}/>
export const OffMode =() => <UncontrolOnOff defaultOn={false} onChange={callBack}/>
export const DefaultInputValue =() => <input defaultValue={"xxx"} />
