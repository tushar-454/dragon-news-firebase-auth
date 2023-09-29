/* eslint-disable no-useless-escape */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase/firebase.init';
import Button from '../UI/Button';
import Input from '../UI/Input';
const registerInit = {
  email: '',
  password: '',
};
const errorInit = { email: '', password: '' };
const Register = () => {
  const [register, setRegister] = useState({ ...registerInit });
  const [error, setError] = useState({ ...errorInit });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = register;
    if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError(() => ({ email: 'Invalid Email', password: '' }));
      return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(() => ({
        email: '',
        password:
          'Password must be 8 Cherecters and mixed with uppercase,lowecase and number',
      }));
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log(credential.user);
        swal(
          'Account Registation Successfull!',
          'Now go to login page.',
          'success'
        );
        setRegister({ ...registerInit });
        setError({ ...errorInit });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className='grid justify-center'>
      <div className='registerWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16 mb-12 shadow-lg'>
        <h1 className='text-4xl font-semibold mb-12'>Register your account</h1>
        <form className='w-full' onSubmit={handleSubmit}>
          <Input
            displayName='Name'
            id='name'
            name='name'
            type='text'
            placeholder='Jone Dou'
          />
          <Input
            displayName='Photo Url'
            id='photoUrl'
            name='photoUrl'
            type='url'
            placeholder='https://www.profileimage.com/myimage.jpg'
          />
          <Input
            displayName='Email'
            id='email'
            name='email'
            type='email'
            placeholder='example@gmail.com'
            value={register.email}
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
            value={register.password}
            handleChange={handleChange}
            error={error.password}
          />
          <Button
            displayName='Register'
            isBlock={true}
            bg='bg-purple-600'
            color='text-white'
            type='submit'
            value='Register'
          />
        </form>
        <div className='gotoRegister my-10'>
          <p className='font-semibold'>
            If You Have An Account ?{' '}
            <Link to='/login' state='Login' className='text-[#F75B5F]'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
