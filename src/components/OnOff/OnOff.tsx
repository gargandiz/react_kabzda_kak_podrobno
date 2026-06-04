import React, {useState} from "react";


export function OnOff() {

    const [statusOn, setStatusOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: statusOn ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !statusOn ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: statusOn ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {setStatusOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setStatusOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}