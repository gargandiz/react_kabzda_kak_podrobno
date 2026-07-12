// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React, {useState} from 'react';
import { Accordion } from './Accordion1';

export default {
    component: Accordion
};

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };

// export default meta;
// type Story = StoryObj<typeof Accordion>;

// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         collapsed: true,
//         onClick: () => {}
//     }
// }

// const onChangeHandler = action('on Change');
//
//
// export const CollapsedAccordion = () => {
//     return <Accordion
//         titleValue={"CollapsedAccordion"}
//         collapsed={true}
//         onClick={onChangeHandler}
//     />
// };
//
// export const OpenedAccordion = () => {
//     return <Accordion
//         titleValue={"Accordion"}
//         collapsed={false}
//         onClick={() => {}}
//     />
// };


const callback = action("accordion mode change event fired");
const onClickCallback = action("accordion mode change event fired");

export const MenuCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback} />
export const MenuUncollapsed = () => <Accordion titleValue={"Users"} collapsed={false} onClick={callback} />

export const NewAccordion = () => {

    const [collapsed, setCollapsed] = useState(false);

    return <Accordion
        titleValue={"NewAccordion"}
        collapsed={collapsed}
        onClick={() => {
            setCollapsed(!collapsed);
        }}
    />
};