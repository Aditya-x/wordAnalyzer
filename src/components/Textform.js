import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        
        let newtext = text.toLocaleUpperCase()
        setText(newtext)
    }
    const handleLowClick = () =>{
        let newtext = text.toLocaleLowerCase()
        setText(newtext)
    }
    const handleClearClick = () =>{
        let newtext = text.replace(text, '');
        setText(newtext)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>

            <div className ="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words ans {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
    </>

)
}
