import React from "react";

type  OnOffPropsType = {
    status: boolean
}

type ButtonTitleType = {
    title?: string
    backgroundColor: "green" | "red" | ""
}


const Rectangle = (props: ButtonTitleType) => {
    return (
        <div style={{
            width: "50px",
            height: "20px",
            borderStyle: "solid",
            borderWidth: "2px",
            textAlign: "center",
            backgroundColor: props.backgroundColor,
        }}>{props.title}
        </div>
    )
}
const Circle = (props: ButtonTitleType) => {
    return (
        <div style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "2px",
            marginLeft: "20px",
            backgroundColor: props.backgroundColor,
        }}>
        </div>
    )
}

export function OnOff(props: OnOffPropsType) {
    if (props.status) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Rectangle title={"ON"} backgroundColor={"green"}/>
                <Rectangle title={"OFF"} backgroundColor={""}/>
                <Circle backgroundColor={"green"}/>
            </div>
        )
    } else {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Rectangle title={"ON"} backgroundColor={""}/>
                <Rectangle title={"OFF"} backgroundColor={"red"}/>
                <Circle backgroundColor={"red"}/>
            </div>

        )
    }
}