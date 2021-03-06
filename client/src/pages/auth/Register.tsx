import React, { ChangeEvent, FormEvent, useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { EMAIL_FOR_REGISTRATION } from '../../constants/localStorageKeys';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL || '',
      handleCodeInApp: true,
    };

    try {
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration`
      );

      localStorage.setItem(EMAIL_FOR_REGISTRATION, email);

      setEmail('');
    } catch (error) {
      console.log(error);
    }
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
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
              autoFocus
              placeholder='Email'
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

export default Register;
