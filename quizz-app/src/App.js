import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddQuestion from './Components/AddQuestion'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav  from './Components/Nav';
import Get from './Components/Get';



function App() {

  // var questions = [
  //   {qid:"1" , category:"First" ,question:"What is today's date ?" ,answers:["2nd Jan","3rd Jan","2nd Feb","3rd feb"],correct:"3rd Feb"},
  //   {qid:"2" , category:"First" , question:"What is today's day ?" ,answers:["Monday","Tuesday","Wednesday","Thursday"],correct:"Wednesday"},
  //   {qid:"3" , category:"Second" , question:"Who is founder of iPhone ?" ,answers:["Apple","Samsung","Google","Microsoft"],correct:"Apple"},
  //   {qid:"4" , category:"Second" , question:"Who owns AWS ?" ,answers:["Myntra","snapdeal","Flipkart","Amazon"],correct:"Amazon"}]

  return (
    <div >
      <Header></Header>
      <Nav></Nav>
      {/* <Main questions={questions} x={questions.length}></Main> */}


      <Route path="/quizz/:category" component={Main}></Route>
      <Route path="/addquestion" component={AddQuestion}></Route>
      <Route path="/get" component={Get}></Route>


      <Footer></Footer>
    </div>
  );
}

export default App;
