// PROP VALIDATION


import ReactDOM from 'react-dom';
import Proptypes from 'prop-types';

export default function Sum(props){
  return <h1>{props.a}+{props.b}={props.a+props.b}</h1>;
}
Sum.propTypes={
  a: Proptypes.number.isRequired,
  b: Proptypes.number.isRequired
};

ReactDOM.render(<Sum a={4} b={2}/>,document.getElementById('root'));
