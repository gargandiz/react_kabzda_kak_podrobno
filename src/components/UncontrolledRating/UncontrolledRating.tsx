import React, {useState} from "react";

export function UncontrolledRating() {

    const [Stars, setStars] = useState(0);

    let changeStars = (starID: number) => {
        setStars(starID)
    }

    return (
        <div>
            <Star selected={Stars >= 1} id={1} changeStars={changeStars}/>
            <Star selected={Stars >= 2} id={2} changeStars={changeStars}/>
            <Star selected={Stars >= 3} id={3} changeStars={changeStars}/>
            <Star selected={Stars >= 4} id={4} changeStars={changeStars}/>
            <Star selected={Stars >= 5} id={5} changeStars={changeStars}/>
        </div>
    )
}

type StarPropsType = {
    //type of props of type
    selected: boolean
    id: number
    changeStars: (id: number) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.changeStars(props.id)}>
            {props.selected ? <b> * </b> : " * "}
        </span>
    )
}