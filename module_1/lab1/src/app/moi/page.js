
"use client";
import {useInputHook} from "/Users/LENOVO/Documents/GitHub/bootcamp/module_1/lab1/src/app/hooks/use_input_hook";

export default function Lab1() {
  const title = <h1>Formulario de registro</h1>;
  const paragraph = <p>Por favor diligencie el formulario en totalidad</p>;
  
  const {value: valueName, bind: bindName, reset: resetbindName} = useInputHook();
  const {value: valueEmail, bind: bindEmail, reset: resetEmail} = useInputHook();
  const {value: valueUsername, bind: bindUsername, reset: resetUsername} = useInputHook();
  const {value: valuePassword, bind: bindPassword, reset: resetPassword} = useInputHook();
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(valueName, valueEmail, valueUsername, valuePassword);
  };
  return (
    <div>
      {title}
      {paragraph}
      <form onSubmit={handleSubmit}>
        <label>Nombre y apellido :</label>
        <input
          name="name"
          type="text"
          {...bindName}
        />
        <br/>
        <label>E-mail:</label>
        <input
          name="email"
          type="mail"
          {...bindEmail}
        />
        <br/>
        <label>Nombre de usuario:</label>
        <input
          name="username"
          type="text"
          {...bindUsername}
        />
        <br/>
        <label>Contraseña:</label>
        <input
          name="password"
          type="password"
          {...bindPassword}
        />
      <br/>
        <input type="submit" value="Enviar"/>
      </form>
      <h5>{valueName}</h5>
      <h5>{valueEmail}</h5>
      <h5>{valueUsername}</h5>
      <h5>{valuePassword}</h5>
    </div>
  )
}
    

  