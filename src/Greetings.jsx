
/*function List(props){
    return(<>
   {!props.animal ? (<di>Loading...</di>): props.animal.length === 0? (<div>nothing</div>): 
    (<ul>
    {props.animal.map((animalz)=>{ return animalz.startsWith("c") && <li>{animalz}</li>})}
    </ul>)}
    </>)
}
function Greeting(){
    const animal=["chicken", "cow", "goat", "cat", "dog"]
    return(<>
    
    <List animal={animal}/>
        </>)
}*/
/*const todos = [
{task:"what", id:uuid()},
{task:"is", id:uuid()},
{task:"your", id:uuid()},
{task:"your problem", id:uuid()}];

function Greeting(){
return(<ul>
    {todos.map((todo)=>(<li key={todo.id}>{todo.task}</li>))} 
</ul>);
}*/

//import { useState } from "react";

/*function App({ color="orangered", fontSize="78", text="go", handleClick }){
    const buttonStyle={
        color:color,
        fontSize:fontSize + "px"
    }
    return(
    <button onClick={handleClick} style={buttonStyle}>{text}</button>)
}


export default function Greeting(){
    const handleClicks=()=>{
        alert("you clicked")
    }
    return (
    <>
    <App text ="here" color="blue" handleClick={handleClicks}/>
    <App text="no here" color="red" fontSize="56"/>
    <App  color="cyan" fontSize="70"/>
    
    </>)
};*/
/*function Greeting(){
    
    const [text , setText]=useState(array.map((ex)=>ex));
    const handleClick =()=>{
        setText("clicked");
    }
    return(<>
        <button>{text}</button>
    </>)*/

    //return  <>
        //{array.map((ex)=> <button>{ex}</button>)}
    //</>;
    /*const handleClick=()=>{
        setText("there");
   
    }*/
    //return <button onClick={handleClick}>{text}</button>
//}
/*function Greeting(){
    const array = ["here", "therer", "went", "boys", "girls"];
    const handleClick = ()=>{
       array.push("3") 
    }
    return  <>
        {array.map((ex)=> <button onClick={handleClick}>{ex}</button>)}
    </>;
}*/
import React, {useState, useEffect} from "react";
export default function Greeting(){

    /*const [counter, setCounter]= useState(0);
    useEffect(()=>{
    const key = setInterval(()=>{
        setCounter(count=>count + 1)}, 1000);

        return()=>{
            clearInterval(key);
        }
    }, [])
    return(<p>{counter} has elapsed</p>)*/
    //const [number1, setNumber1]=useState(0);
    //const [number2, setNumber2] = useState(0);
    //const sum = number1 + number2;
    //return <p>{number1} + {number2} = {sum}</p>
    let dataArray = [];
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res)=> res.json())
    .then((data)=>{
        dataArray = data;
    })
    .catch((er)=>{
        <p>noo</p>
    })
    return (<>
        <p>ww</p>
        <div>
            {dataArray.forEach(({ author, image})=>{<p>{author}</p>})}
        </div>
    </>)
};