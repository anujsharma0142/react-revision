import React from 'react'
import "./style.css"
import style from "./custom.module.css"
import {Button} from 'react-bootstrap'



const ColorCss = () => {
  return (
    <>
    <div className='primary'>External css</div>
    <h1 style={{color:"blue"}}>Inline Css</h1>
    <h2 className={style.success}>Modular Css</h2>
    
    <Button onClick={()=>alert("hello")} >Click Me!</Button>
    </>
    
    
  )
}

export default ColorCss