import { createContext, useContext, useState } from "react";


let memory = createContext(null);

export function Level1(){
  let ref = useContext(memory);
    // parent ka data useKarne ke liye useContexthook

  return(
    <div className="bg-warning p-3">
      <h1>Level-1 {ref}</h1>
      <Level2/>
    </div>
  )
}

export function Level2(){

  let ref = useContext(memory);

  return(
    <div className="bg-danger p-3">
      <h2>Level-2 {ref}</h2>
      <Level3/>
    </div>
  )
}
export function Level3(){
  let ref = useContext(memory);
  return(
    <div className="bg-success p-4">
      <h2>Level-3 {ref}</h2>
    </div>
  )
}

export function ContextDemo(){
  const[name,setName] = useState('John');

  function handleNameChange(){
    setName(e.target.value)
  }

  return(
    <div className="container-fluid bg-dark text-white p-4">
      <h1>Main Component- <input type="text" onChange={handleNameChange} placeholder="username" /> </h1>
      <memory.Provider value={name}>
        <Level1/>
      </memory.Provider>
    </div>
  )
}