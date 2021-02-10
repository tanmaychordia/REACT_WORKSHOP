import React from 'react';
import './Main.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

// Class Component

export default class Main extends React.Component{

  questions = [
    {qid:"1" , category:"First" ,question:"What is today's date ?" ,answers:["2nd Jan","3rd Jan","2nd Feb","3rd feb"],correct:"3rd Feb"},
    {qid:"2" , category:"First" , question:"What is today's day ?" ,answers:["Monday","Tuesday","Wednesday","Thursday"],correct:"Wednesday"},
    {qid:"3" , category:"Second" , question:"Who is founder of iPhone ?" ,answers:["Apple","Samsung","Google","Microsoft"],correct:"Apple"},
    {qid:"4" , category:"Second" , question:"Who owns AWS ?" ,answers:["Myntra","snapdeal","Flipkart","Amazon"],correct:"Amazon"},
    {qid:"4" , category:"First" , question:"What is the capital of India? ?" ,answers:["Indore","Delhi","Goa","Mumbai"],correct:"Delhi"},
    {qid:"4" , category:"First" , question:"When did Sachin Tendulkar make his first Test debut?" ,answers:["15 nov 1989","10 oct 1988","11 nov 1988","20 oct 1989"],correct:"15 nov 1989"},
    {qid:"4" , category:"Second" , question:"what is the capital of Maharashtra ?" ,answers:["Pune","Nagpur","Nasikh","Mumbai"],correct:"Mumbai"},
    {qid:"4" , category:"Second" , question:"What is the capital of United Kingdom?" ,answers:["Manchester","London","Birmingham","Mumbai"],correct:"Amazon"}
  ]


  getQuizWithCategory(){
    var quizwithid=this.questions.find((question)=>{
      // console.log(this.props.match.params.category);
      return question.category == this.props.match.params.category;
    })
    return quizwithid;
  }

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment=()=>{
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement=()=>{
    this.setState({
      count: this.state.count - 1
    });
  };
  render(){
    return(
      <div id="main">

        {/* This work deals with development of android-based multiple-choice question examination system, namely: Quizzy.
        This application is developed for educational purpose, allowing the users to prepare the multiple choice questions for different examinations conducted on provincial and national level.
        The main goal of the application is to enable users to practice for subjective tests conducted for admissions and recruitment, with focus on Computer science field.
        This quiz application includes three main modules, namely (i) computer science, (ii) verbal, and (iii) analytical.
        The computer science and verbal modules contains various types of sub categories.
        This quiz includes three functions: (i) Hint, (ii) Skip, and (iii) Pause, which are collectively named as life lines that help users to answer questions correctly.
        These functions can be used only once by a user.
        It shows progress feedback during quiz play, and at the end, the app also shows the result. */}

        {/* <div id = 'deck'>
        <Card bg="dark" center text="white" style={{ width: '18rem' }}>
				<Card.Header>Quizz Question 1</Card.Header>
				<Card.Body>
				<Card.Text>
				The iPhone was created by which Company ?
        </Card.Text>
        <Button variant="danger">Apple</Button><br></br><br></br>
        <Button variant="danger">Intel</Button><br></br><br></br>
        <Button variant="danger">Amazon</Button><br></br><br></br>
        <Button variant="danger">Microsoft</Button><br></br><br></br>
				</Card.Body>
				</Card>
        </div>
        <div id="res">
        <Card bg="dark" center text="white" style={{ width: '18rem' }}>
        <Card.Title>Result</Card.Title>
				<Card.Text>Your Score is 2 out of 4</Card.Text>
        </Card>
        </div> */}

        {/* Without Filtering */}

        {/* <div className="card" style={{width:"35rem"}}>
            <div className="card-body">
              <h5 className="card-title">Question: {this.state.count+1}/{this.questions.length}</h5>
              <p className="card-text">{this.questions[this.state.count].question}</p>

              <button type="button">{this.questions[this.state.count].answers[0]}</button><br/>
              <button type="button">{this.questions[this.state.count].answers[1]}</button><br/>
              <button type="button">{this.questions[this.state.count].answers[2]}</button><br/>
              <button type="button">{this.questions[this.state.count].answers[3]}</button><br/>
              <br/><br/>

              <button className='inc' onClick={this.increment}>Next</button>
              <button className='dec' onClick={this.decrement}>Previous</button>
            </div>
        </div> */}

        {/* With Filtering */}

        <div className="card" style={{width:"35rem"}}>
            <div className="card-body">
              <h5 className="card-title">Question: {this.state.count+1}/{this.questions.length}</h5>
              <p className="card-text">{this.getQuizWithCategory().question}</p>

              <button type="button">{this.getQuizWithCategory().answers[0]}</button><br/>
              <button type="button">{this.getQuizWithCategory().answers[1]}</button><br/>
              <button type="button">{this.getQuizWithCategory().answers[2]}</button><br/>
              <button type="button">{this.getQuizWithCategory().answers[3]}</button><br/>
              <br/><br/>

              <button className='inc' onClick={this.increment}>Next</button>
              <button className='dec' onClick={this.decrement}>Previous</button>
            </div>
        </div>

        {/* <div>
          {this.questions.filter(question=>question.category=="Second").map(filterQuestion =>(
            <li>
              {filterQuestion.question}
            </li>
          ))}
        </div> */}


      </div>
    );
  }
}
