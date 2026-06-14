import React, {useState} from "react";


export function UncontrolledRating2() {

    const [value, setValue] = useState(0);

    let changeValue = (starId: number) => {
        setValue(starId)
    }

    return (
        <div>
            <Star id={1} selected={value >= 1} changeValue={changeValue}/>
            <Star id={2} selected={value >= 2} changeValue={changeValue}/>
            <Star id={3} selected={value >= 3} changeValue={changeValue}/>
            <Star id={4} selected={value >= 4} changeValue={changeValue}/>
            <Star id={5} selected={value >= 5} changeValue={changeValue}/>
        </div>
    )
}

type StarPropsType = {
    //type of props of type
    selected: boolean
    id: 1 | 2 | 3 | 4 | 5
    changeValue: (id: number) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.changeValue(props.id)}>
            {props.selected ? <b> * </b> : " * "}
        </span>
    )
}