import axios from '../../api/axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAlerts from '../../hooks/alerts';

const REGISTER_URL = '/register';

const Register = () => {
  let navigate = useNavigate();
  const { addAlert } = useAlerts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    setName(name);
  }, [name]);

  useEffect(() => {
    setEmail(email);
  }, [email]);
  useEffect(() => {
    setPassword(password);
  }, [password]);

  useEffect(() => {
    setPassword2(password2);
  }, [password2]);

  const handleSubmit = async e => {
    e.preventDefault();
    const match = password === password2;
    if (!match) {
      return addAlert('Passwords must match', 'danger');
    }
    try {
      await axios.post(
        REGISTER_URL,
        { name, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      navigate('/login');
      addAlert('Account created! Please sign in.', 'success');
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => {
          addAlert(error.msg, 'danger');
        });
      }
    }
  };
  return (
    <section>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

export default Register;
