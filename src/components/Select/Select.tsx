import React, {useState} from "react";

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: number
    onChange: (value: number) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [collapsed, setCollapsed] = useState(false);
    const selectedValue = props.items.find(el => el.value === props.value)
    return (
        <div>
            <div onClick={() => setCollapsed(!collapsed)}>{selectedValue?.title}</div>
            {!collapsed ? props.items.map((item) =>
                <div
                    key={item.value}
                    onClick={() => {
                        setCollapsed(false)
                        props.onChange(item.value)
                    }}
                >{item.title}</div>) : null}

        </div>
    )
}