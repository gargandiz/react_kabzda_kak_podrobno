import React, {useState} from 'react';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
};


export const SelectStory = () => {

    const [value, setValue] = useState(2);



    const items = [
        {title: "Kharkiv", value: 1},
        {title: "Kyiv", value: 2},
        {title: "Kherson", value: 3},
    ]

    return <Select
        value={value}
        items={items}
        onChange={setValue}
    />
};