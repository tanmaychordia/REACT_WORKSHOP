// form handling controlled component
import React from 'react';
import './AddQuestion.css'


export default class AddQuestion extends React.Component{
  constructor(){
    super();
    this.state={
      Question:"",
      op1:"",
      op2:"",
      op3:"",
      op4:"",
      answer:""
    }
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit=(event)=>{
    // alert(this.state.answer+" Added !!")
    // alert("Question Added Successfully")
    const {Question,op1,op2,op3,op4,answer}=this.state
    event.preventDefault();
    alert(`
    Question: ${Question}
    Option 1: ${op1}
    Option 2: ${op2}
    Option 3: ${op3}
    Option 4: ${op4}
    Answer: ${answer}
    `)
    // alert( JSON.stringify(this.state))

  }
  render(){
    return(
      <div className="add">
        <form  onSubmit={this.handleSubmit}>
        <h3>Add Question</h3>

        Question: <input className="i1"  type="text"
          name="Question"
          value={this.state.Question}
          onChange={this.handleChange}></input><br/>


          Option 1:<input className="i1" type="text"
          name="op1"
          value={this.state.op1}
          onChange={this.handleChange}></input><br/>


          Option 2: <input className="i1" type="text"
          name="op2"
          value={this.state.op2}
          onChange={this.handleChange}></input><br/>


          Option 3: <input className="i1" type="text"
          name="op3"
          value={this.state.op3}
          onChange={this.handleChange}></input><br/>


          Option 4: <input className="i1" type="text"
          name="op4"
          value={this.state.op4}
          onChange={this.handleChange}></input><br/>


          Correct Answer: <input className="i1" type="text"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}></input><br/>

          <input type="submit"></input>
        </form>
      </div>
    );
  }//render
}//class
