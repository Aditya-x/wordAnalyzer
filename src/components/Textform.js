import React, {useState} from 'react'



export default function Textform(props) {


    // fonts
    let textFont = {
        fontFamily: 'Arial, sans-serif'
    }
    
    const [text, setText] = useState('');
    // Function to make text in uppercase
    const handleUpClick = () =>{
        
        let newtext = text.toLocaleUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase!", "success");
    }

    // Function to make text in lowercase
    const handleLowClick = () =>{
        let newtext = text.toLocaleLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase!", "success");
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
        props.showAlert("Copied to clipboard", "success");
        document.getSelection().removeAllRanges();

    }
    // count the number of words
    const countWords = (str) => {
        let words = str.trim().split(/\s+/);
        return words.length === 1 && words[0] === "" ? 0 : words.length;
      }

    // Minutes to read
    const readTime = (str) => {
        let timeToRead = 0.008 * str.length;
        return parseFloat(timeToRead.toFixed(2));
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#252729'}}>
        <div>
            <div className="mb-3">
            <h2>{props.heading}</h2></div>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#252729':'white', color: props.mode ==='dark'?'white':'# 252729', fontSize: '14px' ,...textFont}}  id="myBox" rows="5"></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{fontSize: '14px' ,...textFont}}  onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{fontSize: '14px' ,...textFont}}  onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{fontSize: '14px' ,...textFont}}  onClick={handleCopyText}>Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{fontSize: '14px' ,...textFont}}  onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-6 my-1" style={{float: 'right', fontSize: '14px', ...textFont}} onClick={handleClearClick}>Clear</button>

            </div>

            <div className ="my-3" style={{textFont}}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} words ans {text.length} characters</p>
                <p>{readTime(text)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text: "Nothing to preview"}</p>
            </div>
            <div style={{position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',...textFont}}>
            <p> made with ❤️ by Aditya</p>
        </div>
            </div>

            
    </>

)
}
