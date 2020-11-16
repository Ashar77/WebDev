import React,{Fragment} from 'react';

const MyComponent = ({text,text2:another_text}) => {

    //console.log(props)

    return (

    <Fragment>
        <h2>
            this is my MyComponent
        </h2>

        {/*
            props.text && <div>{props.text}</div>*/
        } 

        {   
            another_text&&<div>{another_text}</div>
        }

        {
             text&&<div>{text}</div>
        }
        

    </Fragment>    

    )
}

export default MyComponent;