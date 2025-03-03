import React, {useState}from 'react'
// import './text.css';



export default function TextForm(props) {

  const[text, setText]=useState('text');

  const handleUpClick= ()=>{
 
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to upperCase","success");
    
  }

  const handleLowerClick= ()=>{
    // console.log('UpperCase was Clicked' + text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to lowerCase","success");
    
  }

  const clearOnClick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Text Cleared","success");
  }

  const clickOnDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
     element.href = URL.createObjectURL(file);
     element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("Download","success");
  };//function to download the text. 

  const handleOnChange= (event)=>{
    // console.log("On change");
    setText(event.target.value); //it is way to change state(text).
  }
  return (
    <>
    
   
        
    <div className= "d-flex justify-content-center align-items-center text-center fixed-bottom my-3 " >
    
  <div className=' border border-dark  rounded-2 p-2 bg-warning w-50  ' style={{color:props.mode==='dark'?'white':'#042743'}}> 

    <h1>{props.heading}</h1>
   
     <div className="contain2  ">
  
  <textarea className= "form-control  "
  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="4"></textarea>
  </div>
  <button className="btn btn-primary my-2  " onClick={handleUpClick}>UPPER CASE</button>

  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>lower case</button>

<button className='btn btn-primary mx-2' onClick={clearOnClick}>clear</button>

<button className='btn btn-primary my-1'
onClick={clickOnDownload}>Download</button>


  <div className='container my-4' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <hr />
    <h1>Text Summary:</h1>

    <p className='border border-success bg-info rounded-2 px-2  '>{text.split("").length} Words and {text.length} characters</p>

    <p  className='write border  border-success bg-info rounded-2 px-2  '>{0.008 * text.split("").length} Min to read</p>

    <p className='write border  -success container-fluid bg-info  rounded-2 px-2  '>{text.trim() ? (0.060 * text.trim().split(/\s+/).length).toFixed(2) : 0} Seconds to write</p>


    <h2><hr />Preview:</h2>

    <p>{text}</p>
    

  </div>

    </div>
    </div>
   
   
    </>
  )
}




