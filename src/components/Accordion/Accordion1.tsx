import React from "react";

export type AccordionCollapsedType = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    onClick: (collapsedValue: AccordionCollapsedType) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} valueCollapsed={props.collapsed} changeCollapsed={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    valueCollapsed: AccordionCollapsedType
    changeCollapsed: (collapsedValue: AccordionCollapsedType) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.changeCollapsed(!props.valueCollapsed)}}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}