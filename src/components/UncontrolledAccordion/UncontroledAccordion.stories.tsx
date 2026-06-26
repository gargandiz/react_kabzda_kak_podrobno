
import { action } from '@storybook/addon-actions';
import React from 'react';
import { UncontrolledAccordion } from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
};

const callBack = action('accordion mode change event fired');

export const ModeChanging =() => <UncontrolledAccordion titleValue={"--Menu--"}/>