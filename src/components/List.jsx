import React, { useState } from "react";

function List(props) {
    // const [isDone, setIsDone] = useState(false);
    // function handleClick() {
    //     setIsDone(!isDone);
    // }

    return (<div onClick={() => { props.onChecked(props.id) }}>
        <li>{props.listedItem}</li>
    </div>);
}

export default List;