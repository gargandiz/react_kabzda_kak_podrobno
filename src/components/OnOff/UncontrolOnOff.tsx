import React, {useState} from "react";

type PropsType = {
    onChange: (onOffValue: boolean) => void
}


export function UncontrolOnOff (props: PropsType) {

    const [valueONOff, setValueOnOff] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: valueONOff ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !valueONOff ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: valueONOff ? "green" : "red"
    }

    const onClicked = () => {
        setValueOnOff(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setValueOnOff(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>On</div>
            <div style={offStyle}
                 onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}