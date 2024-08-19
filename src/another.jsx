/*import React, {useState} from "react";

const FuncInput =({name})=>{
    const [todo, setTodo]= useState(["we here", "weew"]);
    const [inVal, setInVal] = useState("");

    const handleClick= (ex)=>{
        setInVal(ex.target.value);

    }
    const handleChange = (ex)=>{
        ex.prevent.default;
        setTodo((ex)=>[...ex, inVal]);
        setInVal("");


    }
    return (
        <>
        <h3>{name}</h3>
        <form onSubmit={handleChange}>
            <label htmlFor="task-entry">Enter task: </label>
            <input
            
            value={inVal}
            onChange={handleClick}/>
            <button type="submit">Submit</button>
        </form>
        <h3>list</h3>
        <ol>
            {todo.map((ex)=>(<li key={ex}>{ex}</li>))}
        </ol>
        </>
    )
}*/
import React, {Component} from "react";

class FuncInput extends Component{
    constructor(props){
        super(props);
        this.state ={
            todos : ["here"],
            inputVal : "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIt =this.handleIt.bind(this);
    }
    handleClick(e){
       e.preventDefault();
       this.setState((state)=>({
        todos: state.todos.concat(state.inputVal),
        inputVal:"",
       }))
    }
    handleChange(e){
        this.setState((state)=>({
            ...state, inputVal: e.target.value,
        }))
    }
    handleIt(index){
      this.setState(({
        //todos: state.todos.unshift("another"),
        inputVal:'e',
        todos: this.state.todos.filter((item)=> item !== index)
      }))
      alert("here")
    };
      
    render(){
        return(<>
            <h3>data</h3>
            <form onSubmit={this.handleClick}>
                <label>Enter task: </label>
                <input
                value={this.state.inputVal}
                onChange={this.handleChange}
                />
                <button type="submit" >Submit</button>
            </form>
            <h3>available tasks</h3>
            <ul>
                {this.state.todos.map((exa, index)=>(<><li key={exa}>{exa} 
                 {index} <button onClick={(index)=>this.handleIt({index})}>delete</button></li></>
                ))}
            </ul>
            <p>{this.state.todos}</p>
            <button onClick={this.handleIt}>delete</button>
           

        </>)
    }
}

/*import React, { Component } from "react";

class FuncInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    );
  }
}*/



export default FuncInput;