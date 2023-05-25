import React,{ useState } from 'react'



export default function TextForm(props) {
    const handelUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnchange = (event) =>{
          console.log("changed");
          setText(event.target.value);
          
    }
    const handellpClick = () =>{
      let newlptext = text.toLowerCase();
      setText(newlptext);
      props.showAlert("Converted to lowercase","success");
    }
    const clearText = () =>{
      setText("");
      props.showAlert("Text cleared","success")
    }
    const copyText= () =>{
      var tex = document.querySelector("#exampleFormControlTextarea1");
      tex.select();
      navigator.clipboard.writeText(tex.value);
      props.showAlert("Text copied to clipboard","success");
    }
    const clearExtraSpaces= ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed","success");
    }
    let [text , setText] = useState('');
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1> 
    <div className="form-group">
    
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
     </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}  >ConvertTOUppercase</button>
      <button className="btn btn-primary mx-2" onClick={handellpClick}  >ConvertTOLowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={copyText}>CopyText</button>
      <button className="btn btn-primary mx-2" onClick={clearExtraSpaces}>ClearExtraSpaces</button>
    </div> 
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} chacracters</p>
       <p>{0.08 * text.length} minutes to read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something text in the box to preview"}</p>
    </div>
    </>
  )
}
