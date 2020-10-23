import React from "react"
import "./custome-button.styles.scss"

const CustomeButton =({github, viewDemo, children, ...otherProps})=>(
 <button 
 className={`${github?"github-button":""} ${viewDemo? "view-demo-button":""} btn` }{...otherProps}  >
 {children}
 </button>
 )


export default CustomeButton;
