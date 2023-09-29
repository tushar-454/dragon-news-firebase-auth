import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Login = () => {
  return (
    <div className='grid justify-center'>
      <div className='loginWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16 shadow-lg'>
        <h1 className='text-4xl font-semibold mb-12'>Login your account</h1>
        <form className='w-full'>
          <Input
            displayName='Email'
            id='email'
            name='email'
            type='email'
            placeholder='example@gmail.com'
          />
          <Input
            displayName='Password'
            id='password'
            name='password'
            type='password'
            placeholder='T5gat[D%f4.&G4Q'
            toggle={true}
          />
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
