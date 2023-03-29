import React, {useState} from 'react'


export default function TextForm(props) {

  const [text,setText] = useState('Enter text here');

  const handleUpperCase = () => {
    //console.log("Upper Case was clicked:"+ text);
    let newText = text.toUpperCase();
    setText(newText );
    props.showAlert("Converted to UpperCase" , "success");
    }

    const handleLowerCase = () =>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to LowerCase" , "success");
    }

    const handleClearText = () =>{
    let clearText = '';
    setText(clearText);
    props.showAlert("Text Cleared" , "success");
    }

    // broken - see if you can find code for this
    const handleCopy = () =>{
      //below lines not required if we are using navigator API
      // let copyText = document.getElementById("myBox");
      // copyText.select();
      // navigator.clipboard.writeText(copyText.value);
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied" , "success");
    }


    const handleRemoveExtraSpaces = () =>{
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "));
      console.log(text);

      let newText2 = newText.split(/\n+/);
      setText(newText2.join("\n"));
      props.showAlert("Extra spaces removed" , "success");
    }


    const handleRemoveExtraLineBreaks = () =>{
     
      // setText(newText.replace("/[\n]+/", "\n"));
      let newText = text.split(/\n+/);
      setText(newText.join("\n"));
    }

  // event will enable us to write in the text box
    const handleOnChange = (event)=>{
      //console.log("On Change");
      setText(event.target.value);
  }

    
  //text = "new text"; //wrong way to change a state
  //setText("new text"); //wrong way to change a state
  return (
    <>
    <div className='container' style={{color:props.mode ==='light'?'#042743':'white'}}  >
         <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white' , color:props.mode ==='light'?'#042743':'white'}}  value =  {text} rows="8"></textarea>
        <button className = "btnUppercase mx-1 my-1"  onClick = {handleUpperCase} >Convert to Uppercase</button>
        <button className = "btnLowercase  mx-1 my-1"  onClick = {handleLowerCase} >Convert to Lowercase</button>
        <button className = "btnClearText  mx-1 my-1"  onClick = {handleClearText} >Clear Text</button>
        <button className = "btnCopyText  mx-1 my-1"  onClick = {handleCopy} >Copy Text</button>
        <button className = "btnCopyText  mx-1 my-1"  onClick = {handleRemoveExtraSpaces} >Remove Extra Spaces</button>
        
        </div>
    </div>
    <div className="container" style={{color:props.mode ==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>

      {/* \s is for white spaces ,+ fpr new lines */}
      <p>Your text has length : {text.length}  and words : {text.split(/\s+/).filter((element)=>{return element.length !==0}).length}    </p>
      <p>Estimated time to read : { (0.008 )* text.split(" ").filter((element)=>{return element.length !==0}).length}    </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to preview"}</p>
    </div>
    </>
  )
}
