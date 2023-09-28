import logo from '../assets/logo.png';

const Layout = () => {
  return (
    <header className='my-10'>
      <div className='container mx-auto px-4'>
        <div className='headWrap flex flex-col items-center space-y-3'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='subTitle'>
            <p className='text-lg text-[#706F6F]'>
              Journalism Without Fear or Favour
            </p>
          </div>
          <div className='time'>
            <p className='text-xl font-medium text-[#403F3F]'>
              Sunday, November 27, 2022
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Layout;
