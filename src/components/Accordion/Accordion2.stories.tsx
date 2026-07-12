
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {Accordion} from './Accordion2';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

export const MenuCollapsed = () => <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
/>
export const MenuUncollapsed = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback}
    items={[{title: "aaa", value: "1"}, {title: "bbb", value: "2"}, {title: "ccc", value: "3"}]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true);

    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => {setValue(!value);}}
        items={[{title: "aaa", value: "1"}, {title: "bbb", value: "2"}, {title: "ccc", value: "3"}]}
        onClick={onClickCallback}
    />
};