import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select
};


export const SelectWithValue = () => {
    const [value, setValue] = useState("2");

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: "1", title: "Kharkiv"},
                        {value: "2", title: "Kyiv"},
                        {value: "3", title: "Kherson"},
                    ]}
            />
        </>
    )
}


export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: "1", title: "Kharkiv"},
                        {value: "2", title: "Kyiv"},
                        {value: "3", title: "Kherson"},
                    ]}
            />
        </>
    )
}