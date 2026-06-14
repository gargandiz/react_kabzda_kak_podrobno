import React from "react";

export type OnOffStatusType = boolean

type OnOffPropsType = {
    status: OnOffStatusType
    onClick: (changeStatus: OnOffStatusType) => void

}
export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.status ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !props.status ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.status ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {props.onClick(!props.status)}}>On</div>
            <div style={offStyle} onClick={() => {props.onClick(!props.status)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}