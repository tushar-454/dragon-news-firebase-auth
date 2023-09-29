/* eslint-disable no-useless-escape */
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase/firebase.init';
import Button from '../UI/Button';
import Input from '../UI/Input';
const loginInit = {
  email: '',
  password: '',
};
const errorInit = { email: '', password: '' };
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email) {
      setError(() => ({ email: 'Email must be required', password: '' }));
      return;
    } else if (password.length < 6) {
      setError(() => ({
        email: '',
        password: 'Password must be 6 Cherecters',
      }));
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log(credential.user);
        swal('Login Successfull!', '', 'success');
        setLogin({ ...loginInit });
        setError({ ...errorInit });
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
        console.log(error.message);
      });
  };
  return (
    <div className='grid justify-center'>
      <div className='loginWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16 shadow-lg'>
        <h1 className='text-4xl font-semibold mb-12'>Login your account</h1>
        <form className='w-full' onSubmit={handleLogin}>
          <Input
            displayName='Email'
            id='email'
            name='email'
            type='email'
            placeholder='example@gmail.com'
            value={login.email}
            handleChange={handleChange}
            error={error.email}
          />
          <Input
            displayName='Password'
            id='password'
            name='password'
            type='password'
            placeholder='T5gat[D%f4.&G4Q'
            toggle={true}
            value={login.password}
            handleChange={handleChange}
            error={error.password}
          />
          <Link to='/forgot-password' state='forgot-password'>
            <p className='text-[#9F9F9F] mb-5 cursor-pointer underline underline-offset-4'>
              Forgot Password?
            </p>
          </Link>
          <Button displayName='Login' isBlock={true} bg='bg-green-500' />
        </form>
        <div className='gotoRegister my-10'>
          <p className='font-semibold'>
            Dont’t Have An Account ?{' '}
            <Link to='/register' state='Register' className='text-[#F75B5F]'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
