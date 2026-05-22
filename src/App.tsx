import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


//function declaration
function App() {
    return (
        <div>
            <PageTitle  title={"This is APP component"}/>
            <Accordion titleValue={"title_1"} collapsed={false}/>
            <Accordion titleValue={"title_2"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff status={true}/>
            <OnOff status={false}/>
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
