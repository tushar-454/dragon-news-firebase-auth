import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (!user) {
    swal('Log in or register required !', '', 'info');
    return <Navigate to='/register' replace={true} />;
  }
  if (!user?.emailVerified) {
    swal('Email verification required!', '', 'info');
    return <Navigate to='/' replace={true} />;
  }
  if (loading) {
    return (
      <div className='grid justify-center'>
        <button
          type='button'
          className='flex items-center gap-3 px-4 py-2 bg-indigo-500 text-white'
          disabled
        >
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          Processing...
        </button>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
