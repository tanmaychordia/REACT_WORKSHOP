import React from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends React.Component{

  render(){
    return(
      <div >
        <Link to="/">Home</Link><br></br>
        <Link to="/quizz/First">Quizz-1</Link><br></br>
        <Link to="/quizz/Second">Quizz-2</Link><br></br>
        <Link to="/addquestion">Add Question</Link><br></br>
        <Link to="/get">Get</Link><br></br>
        <Link to="/put">Put</Link><br></br>
        <Link to="/post">Post</Link><br></br>
        <Link to="/delete">Delete</Link><br></br>

      </div>
    );
  }//render
}//class
