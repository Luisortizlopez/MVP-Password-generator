import React from 'react';
import generator from 'generate-password';

class GeneratePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randompassword:''
    }

  this.handleClick = this.handleClick.bind(this);

}


handleClick() {
     generator.generate({
      length: 10,
      numbers: true
  });
}


render () {
  return (<div>
  <button onClick={this.handleClick}>GeneratePassword</button>
  </div>);
    }
}

export default GeneratePassword;
