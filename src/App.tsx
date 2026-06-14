import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionCollapsedType} from "./components/Accordion/Accordion1";
import {Rating, RatingValueType} from "./components/Rating/Rating";
// import {OnOff} from "./components/OnOff/OnOff";
import {AccordionPropsType, UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion2} from "./components/UncontrolledAccordion/UncontrolledAccordion2";
import {UncontrolledRating2} from "./components/UncontrolledRating/UncontrolledRating2";
import {OnOff, OnOffStatusType} from "./components/OnOff/OnOff-contr";


//function declaration
function App() {

let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
let [accordionCollapsed, setAccordionCollapsed] = useState<AccordionCollapsedType>(false);
let [statusOn, setStatusOn] = useState<OnOffStatusType>(false);

    return (
        <div>
            {/*<PageTitle  title={"This is APP component"}/>*/}
            {/*<UncontrolledAccordion titleValue={"title_1"} />*/}
            {/*<UncontrolledAccordion2 titleValue={"title_2"} />*/}
            {/*<Accordion titleValue={"title_1"} collapsed={true}/>*/}
            <Accordion titleValue={"title_1"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<Accordion titleValue={"title_2"} collapsed={false}/>*/}
            <UncontrolledRating/>
            {/*<UncontrolledRating2/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff status={statusOn} onClick={setStatusOn}/>
            {/*<OnOff />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1> { props.title } </h1>
}



export default App;
