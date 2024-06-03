import logo from './logo.svg';
import './App.css';
import validator from 'validator'
import { useState } from 'react';

function App() {

  const [pass,SetPass]= useState('');
  const [isValidPassword, SetIsValidPassword]= useState(false); 
  const [mensaje,SetMensaje] = useState('');

  const validatePassword= (value) => {
    // const isValid= validator.isStrongPassword(value);
    const isValid= validator.isStrongPassword(value,{minLength:8, minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1});
    SetMensaje('')
    if(isValid)
      SetPass(value);
    else if(pass !== '')
      SetPass('');
    SetIsValidPassword(isValid);
  }

  const validateForm= (e) =>{
    e.preventDefault();
    if(isValidPassword){
      SetMensaje('Contraseña valida '+ pass);
      return
    }
    SetMensaje("Contraseña no valida");
  }

  return (
    <div className="App">
      <form style={{padding:'10px'}} onSubmit={(e) => validateForm(e)} >
        <input type='text' name='password' onChange={(e) => validatePassword(e.target.value)} placeholder='Set a password' />
        <input type='submit' value='Validar' />
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
