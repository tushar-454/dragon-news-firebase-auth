import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Register = () => {
  return (
    <div className='grid justify-center'>
      <div className='loginWrap w-full md:w-[47rem] border border-[#d7d7d7] flex flex-col items-center p-16'>
        <h1 className='text-4xl font-semibold mb-12'>Register your account</h1>
        <form className='w-full'>
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
          />
          <Input
            displayName='Password'
            id='password'
            name='password'
            type='password'
            placeholder='T5gat[D%f4.&G4Q'
            toggle={true}
          />
          <Button displayName='Register' isBlock={true} bg='bg-green-500' />
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
