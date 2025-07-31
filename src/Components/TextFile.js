import React,{use, useState} from 'react'

export default function TextFile(props){
    const [text,setText] = useState("Enter text Here");
    const handleUpCase = () =>{
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return(
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="TextFile" rows="5"></textarea>
            <button style={{marginTop : "10px"}}  type="button" onClick={handleUpCase}  className="btn btn-primary">Convert to upper case</button>
            </div>
        </div>
    )
}
