import { useContext, useEffect, useState } from 'react';
import { BsFacebook, BsFire, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';
import Button from '../UI/Button';
import ButtonIcon from '../UI/ButtonIcon';
const Home = () => {
  const [isSignoutShow, setIsSignoutShow] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState([]);
  const { user, logOutUser, loginWithGoogle, loginWithFacebook } =
    useContext(AuthContext);
  const menus = useLoaderData();
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        swal('Logout Successfully !', '', 'success');
      })
      .catch((error) => console.log(error.message));
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
  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((data) => setCategoriesMenu(data));
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <div className='navHeader flex justify-between items-center'>
        <ButtonIcon
          key='1'
          name='Tranding News'
          bg={'bg-red-500'}
          icon={<BsFire className='text-4xl text-white absolute left-2' />}
        />
        <div className='navWrap flex gap-8'>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              state={menu.name}
              className='text-lg text-[#706F6F]'
            >
              {({ isActive }) => (
                <span className={isActive ? 'font-semibold' : ''}>
                  {menu.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <div className='account'>
          {user ? (
            <div className='flex gap-3 items-center relative'>
              <p className='text-xl'>
                {user.displayName
                  ? user.displayName
                  : user.reloadUserInfo.providerUserInfo[0].screenName}
              </p>
              <img
                src={user.photoURL}
                className='w-[50px] h-[50px] object-cover cursor-pointer rounded-full'
                onClick={() => setIsSignoutShow(!isSignoutShow)}
              />
              {isSignoutShow && (
                <div className='absolute top-16 right-0'>
                  <Button
                    displayName='Signout'
                    type='button'
                    handleClick={handleSignOut}
                    bg={'bg-purple-700'}
                  />
                </div>
              )}
            </div>
          ) : (
            <ButtonIcon
              name='Login'
              bg={'bg-purple-700'}
              path={'/login'}
              icon={
                <FaUserCircle className='text-4xl text-white absolute left-2' />
              }
            />
          )}
        </div>
      </div>
      {/* three column layout  */}
      <div className='grid gap-4 grid-cols-1 md:grid-cols-4 my-10'>
        <div className='leftSide'>
          <h1 className='text-xl font-semibold'>All Caterogy</h1>
          {/* Caterogy list  */}
          <div className='mt-5'>
            {categoriesMenu.map((item, index) => (
              <NavLink
                key={index}
                to={item.id === '0' ? 'all-news/0' : `${item.path}/${item.id}`}
                className={`block p-2 ${index % 2 !== 0 && 'bg-slate-100'}`}
              >
                {({ isActive }) => (
                  <span className={isActive ? 'font-semibold' : ''}>
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='md:col-span-2'>
          <Outlet />
        </div>
        <div className='rightSide'>
          {user ? (
            <></>
          ) : (
            <>
              <h1 className='text-xl font-semibold'>Login with</h1>
              {/* login with button  */}
              <div className='mt-5 space-y-2'>
                <button
                  onClick={handleGoogleLogin}
                  className='w-full flex gap-3 bg-white p-4 items-center text-xl border rounded-md cursor-pointer transition hover:bg-slate-100'
                >
                  <FcGoogle className='text-3xl' />
                  Login with Google
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className='w-full flex gap-3 bg-white p-4 items-center text-xl border rounded-md cursor-pointer transition hover:bg-slate-100'
                >
                  <BsFacebook className='text-3xl text-[#1976D2]' />
                  Login with Facebook
                </button>
              </div>
            </>
          )}
          {/* find us on  */}
          <div className='flex flex-col mt-5'>
            <h1 className='text-xl font-semibold mb-5'>Find us on</h1>
            <Link
              to={'/'}
              className='border rounded-t-md p-3 flex items-center gap-2 transition hover:bg-slate-100'
            >
              <BsFacebook className='text-2xl' /> Facebook
            </Link>
            <Link
              to={'/'}
              className='border-x p-3 flex items-center gap-2 transition hover:bg-slate-100'
            >
              <BsTwitter className='text-2xl' /> Twitter
            </Link>
            <Link
              to={'/'}
              className='border rounded-b-md p-3 flex items-center gap-2 transition hover:bg-slate-100'
            >
              <BsInstagram className='text-2xl' /> Instragram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
