/* eslint-disable no-useless-escape */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
const loginInit = {
  email: '',
  password: '',
};
const errorInit = { email: '', password: '' };
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });

  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async (e) => {
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

    // console.log(await user?.emailVerified);

    loginUser(email, password)
      .then(() => {
        swal('Login Successfull!', '', 'success');
        setLogin({ ...loginInit });
        setError({ ...errorInit });
        navigate('/');
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
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
          <div className='loginFeature flex items-center justify-between'>
            <div>
              <Checkbox displayName='Remember me' name='remember' />
            </div>
            <Link to='/forgot-password' state='forgot-password'>
              <p className='text-[#9F9F9F] mb-5 cursor-pointer underline underline-offset-4'>
                Forgot Password?
              </p>
            </Link>
          </div>
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
