/* eslint-disable no-useless-escape */
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase/firebase.init';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleReset = (e) => {
    e.preventDefault();
    if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError('Invalid Email');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal('Please check your mail.', 'Reset your password', 'info');
        setError('');
      })
      .catch((error) => {
        swal('Thare was an error', error.massage, 'error');
      });
  };
  return (
    <div className='grid justify-center'>
      <div className='loginWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16 shadow-lg'>
        <h1 className='text-4xl font-semibold mb-12'>Reset your password</h1>
        <form className='w-full' onSubmit={handleReset}>
          <Input
            displayName='Email'
            id='email'
            name='email'
            type='email'
            placeholder='example@gmail.com'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Button displayName='Reset' isBlock={true} bg='bg-blue-500' />
        </form>
        <div className='gotoRegister my-10'>
          <p className='font-semibold'>
            After reset your password ?{' '}
            <Link to='/login' state='Register' className='text-[#F75B5F]'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
