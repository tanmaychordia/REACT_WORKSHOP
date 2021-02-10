import React from 'react';

import axios from 'axios';

export default class Get extends React.Component{


    constructor(){
      super();
      this.state={
        users:[]
      }
    }

  componentDidMount(){
    axios.get('https://reqres.in/api/users').then((res)=>{
      const users=res.data.data;
      this.setState({users})
    });
  }

  render(){
    return(
      <div >
        <ul>
          {this.state.users.map(user=><li>{user.first_name}</li>)}
        </ul>

      </div>
    );
  }//render
}//class
