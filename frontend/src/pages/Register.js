import React, {useState} from 'react'

const Register = () => {
    const [formData, setFormData] = useState({name: "", email: "", password: ""})
    // update state when user types in the input fields
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("registering user:", formData);
    };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} required/>
        <input type='email' name='email' placeholder='Email' onChange={handleChange} required/>
        <input type='password' name='password' placeholder='Password' onChange={handleChange} required/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
