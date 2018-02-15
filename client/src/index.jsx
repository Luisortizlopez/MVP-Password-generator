import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GeneratePassword from './components/GeneratePassword.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwords: []
    }

this.addPassword = this.addPassword.bind(this);
this.getPassword = this.getPassword.bind(this);
}
  addPassword(randompassword){
    $.ajax({
      method: "POST",
      url: '/passwords',
      contentType: 'application/json',
      data: JSON.stringify({
        randompassword: randompassword
      })

    }).done(() => {
    this.getPassword();
   });
  }

  getPassword(){
   $.ajax({
     url: '/passwords',
     method: 'GET',
     success: (results) => {
       this.setState({passwords: results});
     },

    error: (xhr, err) => {
      console.log('error', err);
    }
   })
  }

  componentDidMount(){
      this.getPassword();
  }

  render() {
    return(<div className="headingone" >
      <h1>GenPassIt!</h1>
      <GeneratePassword addItem={this.addPassword}/>
    </div>
  )}
}


ReactDOM.render(<App />, document.getElementById('app'));
