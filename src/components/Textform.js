import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
     //   console.log("Uppercase was clicked" + text);
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleCopy = ()=>
    {
       var text= document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard","success");
    }
    const handleextraspaces = ()=>
    {
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Removed extraspaces","success");
    }
    const handleLoClick = ()=>{
        //   console.log("Lowercase was clicked" + text);
           let newtext= text.toLowerCase();
           setText(newtext);
           props.showAlert("Converted to Lowercase","success");
       
       }
    const handleClear = ()=> {
        setText("");
        props.showAlert("Text Cleared","success");
    }   
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
  
const [text, setText]= useState("");


  return (
    <>
 <div className={`container text-${props.mode==='light'?'black':'white'}`}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} onChange= {handleOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase </button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase </button>
  <button className="btn btn-primary mx-1" onClick={handleClear}> Clear </button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy text </button>
  <button className="btn btn-primary mx-1" onClick={handleextraspaces}> Remove extra spaces </button>
  
  
  </div>

  <div className={`container my-3 text-${props.mode==='light'?'black':'light'}`}>
    <h2>
        Your text summary
    </h2>
       <p> {text.split(" ").length} words, {text.length} characters  </p>
       <p> {0.008*text.split(" ").length} minutes read  </p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
     </div>
  </>
  )
}
