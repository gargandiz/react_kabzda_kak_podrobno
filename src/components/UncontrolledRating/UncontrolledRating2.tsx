import React, {useState} from "react";

type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
}



export function UncontrolledRating2(props: RatingPropsType) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    let changeValue = (starId: RatingValueType) => {
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
    changeValue: (id: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.changeValue(props.id)}>
            {props.selected ? <b> * </b> : " * "}
        </span>
    )
}