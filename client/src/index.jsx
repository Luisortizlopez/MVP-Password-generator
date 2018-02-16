import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GeneratePassword from './components/GeneratePassword.jsx';
import PasswordList from './components/PasswordList.jsx';

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

    this.setState({
      passwords: passwords.push(window.data)
    })
   //  $.ajax({
   //    method: "POST",
   //    url: '/',
   //    contentType: 'application/json',
   //    data: JSON.stringify({
   //      password: ''
   //    })
   //
   //  }).done(() => {
   //  this.getPassword();
   // });
  }

  getPassword(){ window.data
   // $.ajax({
   //   url: '/',
   //   method: 'GET',
   //   success: (results) => {
   //     this.setState({passwords: results});
   //   },
   //
   //  error: (xhr, err) => {
   //    console.log('error', err);
   //  }
   // })
  }

  componentDidMount(){
      this.getPassword();
  }

  render() {
    return(<div className="headingone" >
      <h1>GenPassIt!</h1>
      <PasswordList passwords={this.state.passwords}/>
    </div>
  )}
}


ReactDOM.render(<App />, document.getElementById('app'));
