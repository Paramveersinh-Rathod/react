import React, { useState } from 'react'

const ObjectEdit = () => {
  const [info, setInfo] = useState({name:"Param", age: 20});
  function changeUser(){
    if (info.name=="Param"){
        setInfo({name:"Prince", age: 26})
    }
    if (info.name=="Prince"){
        setInfo({name:"Param", age: 20})
    }
  }
  return (
    <div>
      <h4>Hello I'm {info.name}, <br /> And I'm {info.age} years old</h4>
      <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default ObjectEdit
