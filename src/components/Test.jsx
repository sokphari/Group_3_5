import { useState } from "react"
export const Test = () => {
    const [name,setName] = useState("seyha")
    const [like,setLike] = useState(0);

    const HandleClick = () =>{
        setLike(like + 1)
    }

    const HandleChnage = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }
  return (
    <div>
        <input 
        type="text"
        value={name}
        onChange={HandleChnage}
        />
        <h1>Name : {name} </h1>
        <h3>Total Like : {like} </h3>
        <button onClick={HandleClick} className="btn-primary" > Click like </button>
    </div>
  )
}
