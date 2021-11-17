import React, { useState, useEffect } from "react";
import { Theme } from "./Theme";




function Themes() {
    const [state, setstate] = useState({
        color: "#8A2BE2"
    })

    function handleClick() {
        setstate({
            // color: "#32CD32"
            color: "#8A2BE2"
        })

    }
    // useEffect(function () {
    //     Theme.color = "#00FF00"
    // })
    return <div onClick={handleClick}>
        Theme {state.color}
    </div>
}
export default Themes