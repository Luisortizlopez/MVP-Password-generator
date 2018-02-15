//this file will return PasswordGenerated
import React from 'react';
import PasswordGiven from './PasswordGiven.jsx';

const PasswordList = (props) => (
  <div className="passwords">
 {props.passwords.map((i) => <Password item={i}/>)}
 </div>

)



export default PasswordGenerated;
