import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [findword, setFindWord] = useState('')
    const [replaceword, setReplaceWord] = useState('')


    const handleUpClick = () => {
      /*   console.log("uppercase was clicked" + text) */
       
        let newText = text.toLocaleUpperCase()
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert('Converted to Lowercase', 'success')
    }

    const handleClearClick = () => {
        let newText = '' 
        setText(newText)
        props.showAlert('Cleared! ', 'success')
    }

    const handleReplaceClick = () => {
        let newText = text.replaceAll(findword,replaceword)
        setText(newText)
        props.showAlert('Replaced!', 'success')
    }

    const handleFindChange = (e) => {
        setFindWord(e.target.value)
    }
    const handleReplaceChange = (e) => {
        setReplaceWord(e.target.value)
    }

    const handleOnChange = (e) => {

        /* console.log("onChange") */
        setText(e.target.value)
       
    }

  return (
  <>
  <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
 <h1>{props.heading}</h1>

 {/* <textarea className="form-control smallbox" placeholder='Find Text' value={findword} onChange={handleFindChange} id="myBox" rows="3" ></textarea>
  <textarea className="form-control smallbox" placeholder='Replace text' value={replaceword} onChange={handleReplaceChange} id="myBox" rows="3" ></textarea>
 */}
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" placeholder='Enter text'  value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#8080803b':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
 
</div>
<button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
<button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
{/* <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleReplaceClick}>Replace text</button> */}






</div>
  <div className="container p-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and  {text.length} characters</p>
    <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>

  </div>
  </>
  )
}
