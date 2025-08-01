import React, {useState } from 'react'

export default function TextFile(props) {
    const [text, setText] = useState("Enter text Here");
    const handleUpCase = () => {
        setText(text.toUpperCase());
    }
    const handleDownCase = () => {
        setText(text.toLowerCase());
    }
    const handleCamelCase = () => {
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || text[i - 1] === ' ') {
                str += text[i].toUpperCase();
            }
            else {
                str += text[i];
            }
        }
        setText(str);
    }
    const handleClearText = () =>{
        setText("");
    }
    const getCountWords = () => {
        return text.split(" ").length - 1;
    }
    const getLengthOfText = () => {
        return text.length;
    }
    const getTimeToRead = () => {
        return text.length * 0.008;
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 style={{ fontFamily: "cursive" }}>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="TextFile" rows="5"></textarea>
                    <button style={{ marginTop: "10px", fontFamily: "cursive" }} type="button" onClick={handleUpCase} className="btn btn-primary">Convert to upper case</button>
                    <button style={{ marginTop: "10px", marginLeft: "7px", fontFamily: "cursive" }} type="button" onClick={handleDownCase} className="btn btn-primary">Convert to lower case</button>
                    <button style={{ marginTop: "10px", marginLeft: "7px", fontFamily: "cursive" }} type="button" onClick={handleCamelCase} className="btn btn-primary">Convert to Camel case</button>
                    <button style={{ marginTop: "10px", marginLeft: "7px", fontFamily: "cursive" }} type="button" onClick={handleClearText} className="btn btn-primary">Clear Text</button>
                </div>
            </div>
            <div className='container'>
                <h1 style={{ fontFamily: "cursive" }}>Text Summery</h1>
                <h5 style={{ fontFamily: "cursive" }}>Number Of Words : {getCountWords()}</h5>
                <h5 style={{ fontFamily: "cursive" }}>Length Of words : {getLengthOfText()}</h5>
                <h5 style={{ fontFamily: "cursive" }}>Approx. Time To Read : {getTimeToRead()} sec.</h5>
            </div>
        </>
    )
}
