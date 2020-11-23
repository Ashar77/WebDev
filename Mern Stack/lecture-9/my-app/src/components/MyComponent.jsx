import React from 'react';

const MyComponent = (props) => {
    console.log(props)
    return <>
        <div>this is my component</div>
        {props.text}
        {props.children}

        

    </>
}
export default MyComponent;