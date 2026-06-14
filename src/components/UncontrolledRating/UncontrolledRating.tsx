import React, {useState} from "react";

export function UncontrolledRating() {

    const [stars, setStars] = useState(0);

    // let changeStars = (starID: number) => {
    //     setStars(starID)
    // }

    return (
        <div>
            <Star selected={stars >= 1} value={1} changeStars={() => {setStars(1)}}/>
            <Star selected={stars >= 2} value={2} changeStars={() => {setStars(2)}}/>
            <Star selected={stars >= 3} value={3} changeStars={() => {setStars(3)}}/>
            <Star selected={stars >= 4} value={4} changeStars={() => {setStars(4)}}/>
            <Star selected={stars >= 5} value={5} changeStars={() => {setStars(5)}}/>
        </div>
    )
}

type StarPropsType = {
    //type of props of type
    selected: boolean
    value: number
    changeStars: (value: number) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.changeStars(props.value)}>
            {props.selected ? <b> * </b> : " * "}
        </span>
    )
}