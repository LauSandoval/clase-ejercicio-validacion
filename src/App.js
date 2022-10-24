import './App.css';
import MyInput from './components/MyInput';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [nombre, setNombre ]= useState ("")
  const [password, setPassword ]= useState ("")
  return (
    <div>
 <MyInput nombre={nombre} setNombre={setNombre} password={password} setPassword={setPassword}/>
 <br></br>
  {password == "252525" && <Button />}
 </div>
  );
}

export default App;
