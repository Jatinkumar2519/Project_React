import React,{use, useState} from 'react'

export default function TextFile(props){
    const [text,setText] = useState("Enter text Here");
    const handleUpCase = () =>{
        setText(text.toUpperCase());
    }
    const handleDownCase = () =>{
        setText(text.toLowerCase());
    }
    const handleCamelCase = () =>{
        let str = "";
        for(let i = 0;i < text.length;i++){
            if(i === 0 || text[i - 1] === ' '){
                str += text[i].toUpperCase();
            }
            else{
                str += text[i];
            }
        }
        setText(str);
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
                <button style={{marginTop : "10px",marginLeft : "7px"}}  type="button" onClick={handleDownCase}  className="btn btn-primary">Convert to lower case</button>
                <button style={{marginTop : "10px",marginLeft : "7px"}}  type="button" onClick={handleCamelCase}  className="btn btn-primary">Convert to Camel case</button>
            </div>
        </div>
    )
}
