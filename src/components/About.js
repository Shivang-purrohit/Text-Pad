import React, { useState } from 'react'


export default function About(props) {
/* const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
}) */

/* const toggleStyle = () => {
    console.log('hello')
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        }) 
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
              
            })
  } }  */

let myStyle = {
  color: props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode === 'dark'?'#2c3e59':'white'
}



  return (
    <>
    
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={myStyle}>
      <div className="accordion-body">
      <strong>Analyze Your text</strong>,
TextPad gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
     <strong> Free to use</strong>,
TextPad is a free character counter tool that provides instant character count & word count statistics for a given
text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
limit.

      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
     Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Browser Compatible</strong>,
 This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
 suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

      </div>
    </div>
  </div>
</div>



    </div>
    </>
  )
}
