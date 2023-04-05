import React, {useState} from "react";
//hook
const App=()=>{
  const [color, setColor] = useState('red')
const[width,setWidth]= useState(10)
const[height,setHeight]=useState(10)
const changeWidth = (e)=>{
  //setWidth(e.target.value)\
 setWidth(e.target.value)

}
const changeHeight = (e)=>{
  setHeight(e.target.value)
}
  const changeColor =(e) =>{
    setColor(e.target.value)
  }
  return (
    <div>
      
     <input onChange={changeColor} placeholder="change color"/>
     <input onChange={changeHeight} placeholder="Change height"/>
     <input onChange={changeWidth} placeholder="Change width"/>

     <div style={{height:height+'px', width:width+'px', backgroundColor:color}}>

       

     </div>
     

    </div>
    )
}
export default App

xxxxxxxxxxxxxxxxxxxx LIKE BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

import React, {useState} from "react";
//hook
const App=()=>{
  const [color, setColor] = useState('yellow')
const[likeCount,setlikeCount]=useState(0)
const[reactOptions, setReactOptions]=useState(false)

  const changeColor =(e) =>{
    if(likeCount===1){
    setColor(e.target.value)
    setlikeCount(likeCount-1)
    } else{
      setColor(e.targetvalue)
      setlikeCount(likeCount+1)
    }
  }

  const showReactionDiv=(e)=>{
    setReactOptions(true)
  }

  return (
    <div>
      {reactOptions?(
        <div>
      <button> Love </button>
      <button> Haha </button>
      </div> ):
      null
      }
      
      <button onClick={changeColor} onMouseEnter={showReactionDiv} style={{backgroundColor:color}} > Like </button>
 {likeCount}


 
      </div>
     
     
     )
 }
 export default App