import React from 'react';
import useInput from './useInput';

const LoginForm = () => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      email: email.value,
      password: password.value
    });
   
    email.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleSubmit} >
      <div style={{textAlign:"center"}}>
        <h1>Task5</h1>
        <label>Email:</label>
        <input 
          type="email" 
          value={email.value} 
          onChange={email.onChange} 
        />
      </div>
      <div style={{textAlign:"center"}}>
        <label>Password:</label>
        <input 
          type="password" 
          value={password.value} 
          onChange={password.onChange} 
        />
      </div>
      <button type="submit" style={{position:"relative",left:"700px"}} >Login</button>
    </form>
  );
};

export default LoginForm;