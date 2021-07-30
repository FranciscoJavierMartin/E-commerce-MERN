import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { EMAIL_FOR_REGISTRATION } from '../../constants/localStorageKeys';

const RegisterComplete: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {}, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              className='form-control'
              value={email}
              disabled
            />
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              autoFocus
              placeholder='Password'
            />
            <button type='submit' className='btn btn-raised'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
