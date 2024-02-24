import React, {useState} from 'react'


export default function TextForm(props){

    const handleUpCick= ()=>{
       // console.log("Upper case was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handlelowCick= ()=>{
        // console.log("Upper case was clicked");
         let newtext = text.toLowerCase();
         setText(newtext)
     }


    const handleonchange= (event)=>{
      //  console.log("on change");
        setText(event.target.value);
    }
    //this event.target.value is used to update the value in text box

    const [text, setText] = useState('');

    return(
        <>
        <div className="container">
        <h1>{props.heading}</h1>
   <div class="mb-3">
  
  <textarea class="form-control" value= {text} onChange={handleonchange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpCick}>convert to upper case</button>
  <button className="btn btn-primary mx-1" onClick={handlelowCick}>convert to lower case</button>

        </div>
        <div className="container my-2">
            <h2>your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        

    </>
    )
}
