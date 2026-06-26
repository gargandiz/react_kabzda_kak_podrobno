
import React from 'react';
import {UncontrolledRating2} from './UncontrolledRating2';
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating2
};

const callBack = action('rating changed');

export const EmptyRating = ()=>  <UncontrolledRating2 defaultValue={0} />
export const Rating1 = ()=>  <UncontrolledRating2 defaultValue={1} />
export const Rating2 = ()=>  <UncontrolledRating2 defaultValue={2} />
export const Rating3 = ()=>  <UncontrolledRating2 defaultValue={3} />
export const Rating4 = ()=>  <UncontrolledRating2 defaultValue={4} />
export const ChangeRating = ()=>  {

}