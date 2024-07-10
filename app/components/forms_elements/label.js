import React from 'react'

export function Label({text, htmlFor, className}) {
  return (
   <label 
   className={className}
   htmlFor={htmlFor}
   >{text}</label>
  )
}
