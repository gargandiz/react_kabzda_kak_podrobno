import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string
    // collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    const changeCollapsed = () => {
        let newCollapsed;
        !collapsed ? newCollapsed = true : newCollapsed = false
        setCollapsed(newCollapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}  changeCollapsed={changeCollapsed}/>
            {!collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.changeCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    return <ul >
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}