import React, { useState } from "react";

export default function About() {
    const lightModeStyle = {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
        borderRadius: '5px'
    };

    const darkModeStyle = {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px'
    };

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [style, setStyle] = useState(darkModeStyle);
    const [btnText, setBtnText] = useState("Enable Light Mode");

    const handleOnClick = () => {
        if (isDarkMode) {
            setStyle(lightModeStyle);
            setBtnText("Enable Dark Mode");
        } else {
            setStyle(darkModeStyle);
            setBtnText("Enable Light Mode");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='container' style={style}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                {[1, 2, 3].map((item) => (
                    <div className="accordion-item" key={item} style={style}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target={`#collapse${item}`} aria-expanded="false" aria-controls={`collapse${item}`}>
                                Accordion Item #{item}
                            </button>
                        </h2>
                        <div id={`collapse${item}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is item #{item}’s accordion body.</strong> It’s hidden by default until expanded.
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="my-3">
                <button className='btn btn-primary' onClick={handleOnClick}>{btnText}</button>
            </div>
        </div>
    );
}
