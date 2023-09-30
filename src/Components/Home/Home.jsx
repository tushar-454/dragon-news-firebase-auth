import { useContext, useState } from 'react';
import { BsFire } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';
import Button from '../UI/Button';
import ButtonIcon from '../UI/ButtonIcon';
const Home = () => {
  const [isSignoutShow, setIsSignoutShow] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const menus = useLoaderData();
  console.log(user, user?.reloadUserInfo?.providerUserInfo[0].screenName);
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        swal('Logout Successfully !', '', 'success');
      })
      .catch((error) => console.log(error.message));
  };

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
      <Outlet />
    </div>
  );
};

export default Home;
