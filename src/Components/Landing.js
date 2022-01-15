import React, { useState } from 'react'

export default function Landing(props) {

    const [mode, setmode] = useState("light");
    function toggleMode() {
        if (mode === "light") {
            setmode("dark")
            let body = document.body;
            body.style.background = "#222f3e";
            body.style.color = "aliceblue";
        }
        else {
            setmode("light")
            let body = document.body;
            body.style.background = "white";
            body.style.color = "#0c2461";

        }
    }
    
    return (
        <>
            <div className="container">
                <h1>The Seven Continents</h1>
                <button className={`mode-btn bg-${mode === 'light' ? 'dark' : 'light'}`} onClick={toggleMode}>{`Enable ${mode === 'light' ? 'dark' : 'light'} mode`}</button>
                <h3>A continent is one of Earth's seven main divisions of land. The continents are, from largest to smallest: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.</h3>
            </div>
        </>
    )
}
