import React, {useState} from 'react'


export default function Textform(props) {

    // Function to make text in uppercase
    const handleUpClick = () =>{
        
        let newtext = text.toLocaleUpperCase()
        setText(newtext)
    }

    // Function to make text in lowercase
    const handleLowClick = () =>{
        let newtext = text.toLocaleLowerCase()
        setText(newtext)
    }

    // Function to clear text from text box
    const handleClearClick = () =>{
        let newtext = text.replace(text, '');
        setText(newtext)
    }

    // Function to remove extra space from text
    const handleExtraSpace = () => {
        let newtext = text.replace(/\s+/g, ' ').trim();
        setText(newtext);
    }


    // Function to copy text on clipboard
    const handleCopyText = () => {
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#252729'}}>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#252729':'white', color: props.mode ==='dark'?'white':'#252729'}}  id="myBox" rows="5"></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary " onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2 " onClick={handleCopyText}>Copy to clipboard</button>
                <button className="btn btn-primary " onClick={handleExtraSpace}>Remove Extra Spaces</button>

            </div>

            <div className ="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words ans {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Enter something to see preview"}</p>
            </div>
            </div>
    </>

)
}
