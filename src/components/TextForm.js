import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText= " ";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#606060':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-2 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-2 mb-2" onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2 mb-2" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2 mb-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>

     <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008*text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
     </div>
       </> 
    )
}
