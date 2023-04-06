import React,{useMemo,useRef,useState} from 'react'

function MemoRef() {
let inputref=useRef(0)
let[dark, setdark]=useState(false)

let handlechange=(e)=>{
    inputref.current=e.target.value
    console.log(e)
}

let btnclick=()=>{
    dark?setdark(false):setdark(true) 
}

let square=(num)=>{
    for(let i=0;i<1000000000;i++){}
  return num*num
}

let double= useMemo(()=>{return square(inputref.current)},[inputref.current]) 
let theme={
    height:'100vh',
    backgroundColor:dark?'black':'white',
    color:dark?"white":'black'
}


  return (
    <div style={theme}>
<input type="text" onChange={handlechange} ref={inputref} />
<button onClick={btnclick}>Change Theme</button>
<p>{double}</p>
    </div>
  )
}

export default MemoRef