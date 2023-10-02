/* eslint-disable no-useless-escape */
import { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaSquareXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
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

  const {
    loginUser,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    loginWithTwitter,
  } = useContext(AuthContext);
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
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        swal('Login Successfull!', '', 'success');
        navigate('/');
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
      });
  };
  const handleFacebookLogin = () => {
    loginWithFacebook()
      .then((re) => {
        console.log(re);
        swal('Login Successfull!', '', 'success');
        navigate('/');
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
      });
  };
  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        swal('Login Successfull!', '', 'success');
        navigate('/');
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
      });
  };
  const handleTwitterLogin = () => {
    loginWithTwitter()
      .then(() => {
        swal('Login Successfull!', '', 'success');
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
        <div className='divided w-full relative mt-5 z-50'>
          <p className='text-center font-semibold text-[#9F9F9F] bg-white'>
            Or login with
          </p>
        </div>
        <div className='loginWithBtn flex gap-6 justify-center mt-5'>
          <button
            onClick={handleGoogleLogin}
            className='p-3 rounded-lg border border-sky-100 bg-gray-100'
          >
            <FcGoogle className='text-4xl' />
          </button>
          <button
            onClick={handleFacebookLogin}
            className='p-3 rounded-lg border border-sky-100 bg-gray-100'
          >
            <FaFacebook className='text-4xl text-[#0866FF]' />
          </button>
          <button
            onClick={handleTwitterLogin}
            className='p-3 rounded-lg border border-sky-100 bg-gray-100'
          >
            <FaSquareXTwitter className='text-4xl' />
          </button>
          <button
            onClick={handleGithubLogin}
            className='p-3 rounded-lg border border-sky-100 bg-gray-100'
          >
            <FaGithub className='text-4xl' />
          </button>
        </div>
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
