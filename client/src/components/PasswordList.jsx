//this file will return PasswordGenerated
import React from 'react';
import PasswordGiven from './PasswordGiven.jsx';

const PasswordList = (props) => (
  <div className="passwords">
 {props.passwords.map((item) => <PasswordGiven item={item} key={item.id} />)}
 </div>

)



export default PasswordList;
