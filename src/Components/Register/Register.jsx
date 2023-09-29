/* eslint-disable no-useless-escape */
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase/firebase.init';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
const registerInit = {
  displayName: '',
  photoUrl: '',
  email: '',
  password: '',
};
const errorInit = {
  displayName: '',
  photoUrl: '',
  email: '',
  password: '',
  terms: false,
};
const Register = () => {
  const [register, setRegister] = useState({ ...registerInit });
  const [error, setError] = useState({ ...errorInit });
  const [terms, setTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { displayName, photoUrl, email, password } = register;
    if (!displayName) {
      setError(() => ({
        displayName: 'Name must be required!',
        photoUrl: '',
        email: '',
        password: '',
        terms: false,
      }));
      return;
    } else if (displayName.length < 4) {
      setError(() => ({
        displayName: 'Name must be at lest 4 charecters!',
        photoUrl: '',
        email: '',
        password: '',
        terms: false,
      }));
      return;
    } else if (!photoUrl) {
      setError(() => ({
        displayName: '',
        photoUrl: 'Photo Url must be required!',
        email: '',
        password: '',
        terms: false,
      }));
      return;
    } else if (
      !/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim.test(photoUrl)
    ) {
      setError(() => ({
        displayName: '',
        photoUrl: 'Invalid Photo Url !',
        email: '',
        password: '',
        terms: false,
      }));
      return;
    } else if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError(() => ({
        displayName: '',
        photoUrl: '',
        email: 'Invalid Email !',
        password: '',
        terms: false,
      }));
      return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(() => ({
        displayName: '',
        photoUrl: '',
        email: '',
        password:
          'Password must be 8 Cherecters and mixed with uppercase,lowecase and number',
        terms: false,
      }));
      return;
    } else if (!terms) {
      setError(() => ({
        displayName: '',
        photoUrl: '',
        email: '',
        password: '',
        terms: true,
      }));
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        updateProfile(credential.user, {
          displayName: displayName,
          photoURL: photoUrl,
        });
        console.log(credential.user);
        swal(
          'Account Registation Successfull!',
          'Now go to login page.',
          'success'
        );
        setRegister({ ...registerInit });
        setError({ ...errorInit });
        setTerms(false);
      })
      .catch((error) => {
        swal('There was an error occur!', error.message, 'error');
        setError(error.message);
      });
  };
  return (
    <div className='grid justify-center'>
      <div className='registerWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16 mb-12 shadow-lg'>
        <h1 className='text-4xl font-semibold mb-12'>Register your account</h1>
        <form className='w-full' onSubmit={handleSubmit}>
          <Input
            displayName='Name'
            id='displayName'
            name='displayName'
            type='text'
            placeholder='Jone Dou'
            value={register.displayName}
            handleChange={handleChange}
            error={error.displayName}
          />
          <Input
            displayName='Photo Url'
            id='photoUrl'
            name='photoUrl'
            type='url'
            placeholder='https://www.profileimage.com/myimage.jpg'
            value={register.photoUrl}
            handleChange={handleChange}
            error={error.photoUrl}
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
          <Checkbox
            name='terms'
            displayName='Accept our Terms and Condition'
            checked={terms}
            error={error.terms}
            handleChange={() => setTerms(!terms)}
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
