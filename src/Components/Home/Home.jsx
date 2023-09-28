import { FaUserCircle } from 'react-icons/fa';
import { NavLink, useLoaderData } from 'react-router-dom';
import ButtonIcon from '../UI/ButtonIcon';
const Home = () => {
  const menus = useLoaderData();
  return (
    <div className='container mx-auto px-4'>
      <div className='navHeader flex justify-between items-center'>
        <ButtonIcon
          name='Tranding News'
          bg={'bg-red-500'}
          icon={
            <FaUserCircle className='text-4xl text-white absolute left-2' />
          }
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
                <span
                  className={
                    isActive
                      ? 'bg-[#403f3f9b] text-xl text-white font-semibold px-6 py-2'
                      : ''
                  }
                >
                  {menu.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <div className='account'>
          <ButtonIcon
            name='Login'
            bg={'bg-purple-700'}
            path={'/login'}
            icon={
              <FaUserCircle className='text-4xl text-white absolute left-2' />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
