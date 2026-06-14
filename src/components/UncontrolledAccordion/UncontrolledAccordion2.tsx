import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion2(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    let changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} changeCollapsed={changeCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    changeCollapsed: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.changeCollapsed()}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}